type SoundName =
  | "attack"
  | "defeat"
  | "error"
  | "explosion"
  | "impact"
  | "move"
  | "purchase"
  | "select"
  | "start"
  | "subsystem"
  | "toggle"
  | "victory";

const AUDIO_KEY = "real-time-space-audio-v1";

export class AudioManager {
  private context?: AudioContext;
  private muted = false;
  private lastPlayed = new Map<SoundName, number>();

  constructor() {
    this.muted = window.localStorage.getItem(AUDIO_KEY) === "muted";
  }

  get isMuted(): boolean {
    return this.muted;
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    window.localStorage.setItem(AUDIO_KEY, this.muted ? "muted" : "enabled");
    if (!this.muted) {
      void this.ensureContext();
      this.play("toggle", 0.8);
    }
    return this.muted;
  }

  async prime(): Promise<void> {
    if (this.muted) return;
    await this.ensureContext();
  }

  play(sound: SoundName, volume = 1): void {
    if (this.muted) return;
    const now = performance.now();
    const cooldown = this.cooldownFor(sound);
    if (now - (this.lastPlayed.get(sound) ?? 0) < cooldown) return;
    this.lastPlayed.set(sound, now);

    void this.ensureContext().then((context) => {
      if (!context || this.muted) return;
      this.renderSound(context, sound, volume);
    });
  }

  private async ensureContext(): Promise<AudioContext | undefined> {
    if (!this.context) {
      const AudioContextCtor = window.AudioContext ?? window.webkitAudioContext;
      if (!AudioContextCtor) return undefined;
      this.context = new AudioContextCtor();
    }

    if (this.context.state === "suspended") {
      await this.context.resume();
    }

    return this.context;
  }

  private renderSound(context: AudioContext, sound: SoundName, volume: number): void {
    if (sound === "victory" || sound === "defeat") {
      this.playChord(context, sound === "victory" ? [392, 523, 659] : [196, 165, 131], volume);
      return;
    }

    const now = context.currentTime;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(this.levelFor(sound) * volume, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + this.durationFor(sound));
    gain.connect(context.destination);

    const osc = context.createOscillator();
    osc.type = this.waveFor(sound);
    osc.frequency.setValueAtTime(this.frequencyFor(sound), now);
    if (sound === "explosion") {
      osc.frequency.exponentialRampToValueAtTime(58, now + 0.34);
    } else if (sound === "attack") {
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
    } else if (sound === "subsystem") {
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.12);
    }
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + this.durationFor(sound) + 0.04);
  }

  private playChord(context: AudioContext, frequencies: number[], volume: number): void {
    const now = context.currentTime;
    frequencies.forEach((frequency, index) => {
      const gain = context.createGain();
      const start = now + index * 0.08;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.045 * volume, start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);
      gain.connect(context.destination);

      const osc = context.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(frequency, start);
      osc.connect(gain);
      osc.start(start);
      osc.stop(start + 0.6);
    });
  }

  private cooldownFor(sound: SoundName): number {
    if (sound === "impact") return 80;
    if (sound === "attack") return 60;
    if (sound === "select") return 90;
    return 0;
  }

  private durationFor(sound: SoundName): number {
    const durations: Record<SoundName, number> = {
      attack: 0.12,
      defeat: 0.6,
      error: 0.16,
      explosion: 0.48,
      impact: 0.09,
      move: 0.14,
      purchase: 0.2,
      select: 0.08,
      start: 0.28,
      subsystem: 0.18,
      toggle: 0.1,
      victory: 0.6,
    };
    return durations[sound];
  }

  private frequencyFor(sound: SoundName): number {
    const frequencies: Record<SoundName, number> = {
      attack: 460,
      defeat: 160,
      error: 150,
      explosion: 132,
      impact: 240,
      move: 330,
      purchase: 660,
      select: 740,
      start: 392,
      subsystem: 880,
      toggle: 520,
      victory: 392,
    };
    return frequencies[sound];
  }

  private levelFor(sound: SoundName): number {
    if (sound === "explosion") return 0.075;
    if (sound === "attack" || sound === "impact") return 0.025;
    return 0.045;
  }

  private waveFor(sound: SoundName): OscillatorType {
    if (sound === "explosion" || sound === "impact" || sound === "error") return "sawtooth";
    if (sound === "select" || sound === "purchase" || sound === "subsystem") return "triangle";
    return "square";
  }
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

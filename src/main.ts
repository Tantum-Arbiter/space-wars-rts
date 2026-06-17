import "./styles/game.css";
import { RealTimeSpaceApp } from "./game/RealTimeSpaceApp";

const root = document.querySelector<HTMLDivElement>("#game");

if (!root) {
  throw new Error("Game root element was not found.");
}

const app = new RealTimeSpaceApp(root);
app.start();

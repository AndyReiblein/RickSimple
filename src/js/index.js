import initTilt from "./tilt";
import initSr from "./sr";
import { addResume } from "./utils";
import image from "../assets/moses.jpg";

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(image);
}

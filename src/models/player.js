import { Frame } from "./frame.js";
export class Player {
  constructor() {
    this.frames = [];
    this.generateFrames();
  }
  generateFrames() {
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame(i + 1, []));
    }
  }
  roll(pin) {
    const currentFrame = this.frames.find((frame) => frame.allowToThrow());
    if (currentFrame) {
      currentFrame.scores.push({
        frameId: currentFrame.id,
        id: currentFrame.scores.length + 1,
        score: pin,
      });
    }
  }
  get score() {
    let totalScore = 0;
    this.frames.forEach((frame) => {
      if (frame.scores.length === 0) return;

      console.log(`frame: ${frame.id}, type: ${frame.type}`);
      if (frame.type === "open") {
        totalScore += frame.scores[0].score + frame.scores[1].score;
      }
      if (frame.type === "spare") {
        totalScore += 10 + frame.scores[2].score;
      }
      if (frame.type === "strike") {
        totalScore += 10 + frame.scores[1].score + frame.scores[2].score;
      }
    });
    // reset the game
    this.frames = [];
    return totalScore;
  }
}

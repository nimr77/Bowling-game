import { Score } from "./score";
const scoreType = {
  1: "open",
  2: "spare",
  3: "strike",
};

export class Frame {
  constructor(public id: number, public scores: Score[]) {}

  allowToThrow() {
    if (this.scores.length === 3) {
      return false;
    }
    if (this.scores.length === 0) {
      return true;
    }
    if (this.scores[this.scores.length - 1].score > 5) return true;

    return false;
  }

  get type() {
    return scoreType[this.scores.length];
  }

  get score() {
    return this.scores.reduce((acc, score) => acc + score.score, 0);
  }
}

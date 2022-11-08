const scoreType = {
  0: "open",
  9: "spare",
  10: "strike",
};
export class Frame {
  constructor(id, scores) {
    this.id = id;
    this.scores = scores;
  }
  allowToThrow() {
    if (this.scores.length === 3) {
      return false;
    }
    if (this.scores.length === 0) {
      return true;
    }
    if (this.scores[this.scores.length - 1].score >= 5) return true;
    return false;
  }
  get type() {
    const x = this.totalScore - 10;
    // its a strike if its begger than 10
    if (x >= 10) return scoreType[10];
    // its a spare if its equal to 9
    if (x <= 9 && x >= 5) return scoreType[9];
    // its a open if its equal to 0
    if (x <= 0) return scoreType[0];
    return "unknown";
  }

  get totalScore() {
    return this.scores.reduce((acc, score) => acc + score.score, 0);
  }
}

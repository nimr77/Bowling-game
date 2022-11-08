import { Player } from "./models/player.js";
const player = new Player();
// test case 1
player.roll(10);
player.roll(5);
player.roll(5);
// test case 2
player.roll(5);
player.roll(5);
player.roll(9);
// test case 3
player.roll(9);
player.roll(0);
console.log(player.score);

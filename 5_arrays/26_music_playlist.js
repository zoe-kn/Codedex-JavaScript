const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];
const shiftedElement = musicPlaylist.shift();
const pushedElement = musicPlaylist.push("For Good", "No Good Deed");
const unshiftedElement = musicPlaylist.unshift ("Dancing Trough Life", "As Long as you're mine");

console.log(shiftedElement);
console.log(pushedElement);
console.log(unshiftedElement);
console.log(musicPlaylist);

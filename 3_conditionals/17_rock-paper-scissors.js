// Rock=0
// Paper=1
// Scissors=2

const player = 0;

const computer = Math.floor(Math.random()* 3);

if (player === 0) {
  if (computer === 0){
    console.log("Draw!");
  } else if (computer === 1) {
    console.log("The computer won!👾");
  } else if (computer === 2) {
    console.log("The player won!🏆");
  } else {
    console.log("ERROR");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The computer won!👾");
  } else if (computer === 1) {
    console.log("Draw!");
  } else if (computer === 2) {
    console.log("The player won!🏆");
  } else {
    console.log("ERROR");
  }
} else if (player ===2) {
  if (computer === 0) {
    console.log("The player won!🏆");
  } else if (computer === 1) {
    console.log("The computer won!👾");
  } else if (computer === 2) {
    console.log("Draw!");
  } else {
    console.log("ERROR");
  }
} else {
  console.log("ERROR");
}

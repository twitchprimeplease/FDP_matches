let squares = new Array(3);

function setup() {
  createCanvas(600, 325);

  for (let i = 0; i < 4; i++) {
    squares[i] = new Array(3);
    for (let j = 0; j < 2; j++) {
    squares[i][j] = new Cell((125*i) + 100 ,(125*j) + 100);
    }
  }
  const array = [1, 2, 3, 4];
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);
}

function draw() {
  background(10);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
    squares[i][j].print();
  }
  }  
  
}


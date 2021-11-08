let squares = new Array(3);

function setup() {
  createCanvas(600, 325);

  for (let i = 0; i < 4; i++) {
    squares[i] = new Array(3);
    for (let j = 0; j < 2; j++) {
    squares[i][j] = new Cell((125*i) + 100 ,(125*j) + 100);
    }
  }
}

function draw() {
  background(10);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
    squares[i][j].print();
  }
  }  
}

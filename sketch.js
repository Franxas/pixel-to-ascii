const size = {w: 800 * 2, h: 800};
let video;
function setup() {
  createCanvas(size.w, size.h);
  video = createCapture(VIDEO);
  video.size(120, 60);
  video.hide();
}


function draw() {

  background(220);
  let videoImg = image(video, 0, 0, size.w / 2, size.h);

  let charArr = [];

  let x = 0;
  let y = 0;

  for (let i = 0; i < (120 * 60); i++) {

    charArr.push(selCharFromPixelValue(x, y));
    
    x++
    if (x > (120 - 1)) {
      x = 0;
      y++;
      charArr.push("\n");
    }
  }

  console.log(charArr);
  console.log(x + " " + y);

  charArr = charArr.join("");

  //
  textFont("monospace");
  textSize(10);
  charText = text(charArr, size.w / 2 + 5, 15);
  

}


function selCharFromPixelValue(x, y) {

  let pixel = video.get(x, y);
  pixel.pop();

  let pixelVal = pixel.reduce((acc, elem) => acc + elem, 0) / 765;
  let pixelChar;

  if (pixelVal < 0.1) {
    pixelChar = '#';
  } else if (pixelVal < 0.2) {
    pixelChar = '&';
  } else if (pixelVal < 0.3) {
    pixelChar = '%';
  } else if (pixelVal < 0.4) {
    pixelChar = '?';
  } else if (pixelVal < 0.5) {
    pixelChar = 'b';
  } else if (pixelVal < 0.6) {
    pixelChar = '/';
  } else if (pixelVal < 0.7) {
    pixelChar = ')';
  } else if (pixelVal < 0.8) {
    pixelChar = 'º';
  } else if (pixelVal < 0.9) {
    pixelChar = '.';
  } else {
    pixelChar = ' ';
  }

  return pixelChar;
}

function selEmojiFromPixelValue(x, y) {

  let pixel = video.get(x, y);
  pixel.pop();

  let pixelVal = pixel.reduce((acc, elem) => acc + elem, 0) / 765;
  let pixelChar;

  if (pixelVal < 0.1) {
    pixelChar = '⬛️';
  } else if (pixelVal < 0.2) {
    pixelChar = '🖤';
  } else if (pixelVal < 0.3) {
    pixelChar = '🎱';
  } else if (pixelVal < 0.4) {
    pixelChar = '🐝';
  } else if (pixelVal < 0.5) {
    pixelChar = '🌍';
  } else if (pixelVal < 0.6) {
    pixelChar = '😈';
  } else if (pixelVal < 0.7) {
    pixelChar = '🍓';
  } else if (pixelVal < 0.8) {
    pixelChar = '👽';
  } else if (pixelVal < 0.9) {
    pixelChar = '👻';
  } else {
    pixelChar = ' ';
  }

  return pixelChar;
}

// ' ' , º ) / b ? % & #


//--)/#.
//-..b` 
//--
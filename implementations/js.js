const sentimentButton = document.querySelector('.sentimentButton');
const sentimentInput = document.querySelector('.sentimentInput');
const imageInput = document.querySelector('.imageInput');
const imageButton = document.querySelector('.imageButton');
const image = document.querySelector('img');
const guesses = document.querySelector('.guesses');

// const sentiment = ml5.sentiment('movieReviews', modelReady);

// function modelReady() {
//   console.log('Model Loaded!');
// }

const predict = () => {
  const prediction = sentiment.predict(sentimentInput.value);
  input.value = '';

  console.log(prediction.score);
};

sentimentButton.addEventListener('click', predict);

//=================================================

const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!');
}

function grabImage() {
  let newImage = URL.createObjectURL(imageInput.files[0]);
  image.src = newImage;
  setTimeout(classifyImage, 100);
  setTimeout(detect, 100);
}

function classifyImage() {
  classifier.classify(image, makePrediction);
  function makePrediction(err, results) {
    if (err) {
      console.log(err);
      return;
    }
    while (guesses.firstChild) {
      guesses.removeChild(guesses.firstChild);
    }
    results.forEach(result => {
      const guess = document.createElement('p');
      guess.innerText = `I'm ${(result.confidence * 100).toFixed(
        2
      )}% sure this is a ${result.label}`;
      guesses.appendChild(guess);
    });
  }
}

imageButton.addEventListener('click', grabImage);

const objectDetector = ml5.objectDetector('cocossd', {}, modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

function detect() {
  objectDetector.detect(image, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

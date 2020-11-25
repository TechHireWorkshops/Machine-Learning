const api_key = '8500aa24fc423ace3e314c35e9a1fa21';
const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en`;
let tvIndex = 0;
const image = document.querySelector('img');
const title = document.querySelector('h1');
const select = document.querySelector('select');
const button = document.querySelector('button');
const p = document.querySelector('p');
let tvList = [];
let page = 1;
const genres = [];
const ratings = [];

const getShows = async () => {
  const response = await axios.get(`${url}&page=${page}`);
  tvList = [...tvList, ...response.data.results];
  page++;
  renderShow();
};

getShows();

function renderShow() {
  title.innerText = tvList[tvIndex].name;
  tvIndex++;
  if (tvIndex % 19 === 0) {
    getShows();
  }
  trainNN();
}

const readSelect = () => {
  ratings.push(select.value);
  genres.push(tvList[tvIndex - 1].genre_ids[0]);
  select.value = 'none';
  renderShow();
};

select.addEventListener('change', readSelect);
button.addEventListener('click', renderShow);

let options = {
  task: 'classification',
  debug: true,
};

const trainingOptions = {
  epochs: 32,
};

let nn;

function trainNN() {
  if (ratings.length < 5) {
    return;
  }
  nn = ml5.neuralNetwork(options);
  for (let i = 0; i < ratings.length; i++) {
    nn.addData({ genre: genres[i] }, { ratings: ratings[i] });
  }
  nn.normalizeData();
  nn.train(trainingOptions, predict);
}

function predict() {
  nn.classify({ genre: tvList[tvIndex - 1].genre_ids[0] }, results);
}

function results(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  nn.save();
}

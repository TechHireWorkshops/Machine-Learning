const colors = [
  {
    red: 0,
    green: 0,
    blue: 255,
    classification: 'blue-ish',
  },
  {
    red: 0,
    green: 0,
    blue: 254,
    classification: 'blue-ish',
  },
  {
    red: 0,
    green: 0,
    blue: 253,
    classification: 'blue-ish',
  },
  {
    red: 255,
    green: 0,
    blue: 0,
    classification: 'red-ish',
  },
  {
    red: 254,
    green: 0,
    blue: 0,
    classification: 'red-ish',
  },
  {
    red: 253,
    green: 0,
    blue: 0,
    classification: 'red-ish',
  },
  {
    red: 0,
    green: 253,
    blue: 0,
    classification: 'green-ish',
  },
  {
    red: 0,
    green: 254,
    blue: 0,
    classification: 'green-ish',
  },
  {
    red: 0,
    green: 255,
    blue: 0,
    classification: 'green-ish',
  },
];

let options = {
  inputs: ['red', 'green', 'blue'],
  outputs: ['classification'],
  task: 'classification',
  debug: true,
};

let model = ml5.neuralNetwork(options);

add();

function add() {
  if (!colors) return;
  colors.forEach(({ classification, ...colors }) => {
    let inputs = { ...colors };
    let output = { classification };
    console.log(inputs);
    model.addData(inputs, output);
  });

  train();
}

function train() {
  model.normalizeData();
  model.train({ epochs: 60 }, finished);
}

function finished() {
  let tester = { red: 255, green: 0, blue: 100 };
  model.classify(tester, results);
}

function results(error, data) {
  if (error) return;
  console.log(data);
}

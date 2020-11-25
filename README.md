# Machine Learning

![](https://www.dreadcentral.com/wp-content/uploads/2018/01/terminator2nuclearexplosionskeletonbanner.jpg)

## What is Machine Learning?

Machine learning, AI, neural network, natural language processing, deep learning are all terms we've likely heard before, but what do they mean.  Is machine learning the same thing as AI?  Is deep learning better?  Let's take a look at what some of these mean.

Artificial Intelligence is the discipline in computer science that is concerned with the creation of computer systems that can govern themselves.  Artificial intelligence is a broad term, and studies how we can create computers that can behave intelligently without explicit direction.  We can also use the term AI to refer to a programs that is able to govern itself.

> “Artificial intelligence is the science and engineering of making computers behave in ways that, until recently, we thought required human intelligence.”
>
> -Andrew Moore

Machine Learning is a closely related term. It is the study and implementation of processes and algorithms by which a program can learn to make decisions.  It is a subset of AI, and one of the ways that we try to create AIs.  Machine Learning algorithms take in training data to create a model to be used in future decision making, often through the use of neural networks (more on that later).

> “Machine learning is the study of computer algorithms that allow computer programs to automatically improve through experience.”
> 
> -Tom M. Mitchell

## How does Machine Learning work?

In machine learning, data is fed into an algorithm that creates a model for how future data of the same type is to be evaluated.  We train the algorithms to provide appropriate outputs of inputs.  There are three main types of machine learning.

### Supervised Learning

Supervised learning is the most intuitive type of machine learning.  We feed the algorithm sets of inputs and correct output.  Over time, the algorithm begins to 'understand' the patterns between input and output until it can begin to predict outputs from inputs. A common example of this is media recommendation algorithms, like you might see on Netflix.  When you rate a show, it takes your rating as an appropriate output to the input data of the show to predict your like or dislike of other shows.

### Unsupervised Learning

In unsupervised learning, we provide inputs to the algorithm with no outputs.  In this type of machine learning, the program just looks for any patterns within the data and groups them.  This can be useful in fields like market research and image object recognition.

### Reinforcement Learning

Reinforcement learning is a trial and error type of learning, where the algorithm tried several different approaches to pattern recognition, then is rewarded for developing 'correct' and efficient patterns.  In this way, not only can we achieve machine learning, we can discover more effective methods in achieving machine learning. Reinforcement learning can be of the supervised or unsupervised type.

## Neural Networks

Neural networks are a type of processing algorithm used in machine learning.  They are made up of thousands (or even millions) on 'nodes.'  We can think of each node as a little function, or as a single decision.  These nodes are used to evaluate the incoming data.  

Groups of nodes are organized into layers, which in turn feed data into the next layer of nodes, which further process the data they receive. Each node may be receiving data from several nodes in the preceding layer, and the data from each of these nodes may be assigned a weight, or an importance in how much they will affect the next decision.

Often, these weights are initially assigned a random value, and are adjusted over time to develop the most consistently correct output.  In reinforcement learning, the weights are continually changed and adjusted to not only achieve the learning goal, but to discover new methods of learning.

## Machine Learning? In JavaScript?

### A brief history of machine learning in JavaScript

For a long time you couldn't do machine learning practically in JavaScript and then you could.

### TensorFlow

TensorFlow is a free machine learning library developed by the google brain team in 2011. Tensorflow first ran in python and C.  Machine learning is processor-intensive, and the processing power of a browser could not cut it.  

Then the tensorflow team found a way to use OpenGL to handle part of the processing.  OpenGl is a JavaScript API that makes use of a computer's graphics processor, and is usually used to render images.  This allowed machine learning to be done in JavaScript, as the GPU could take on the processing load.

TensorFlow.js is the JavaScript version of TensorFlow, and provides both pre-trained models, and the tools to train your own.  You can get started with TensorFlow.js [here](https://www.tensorflow.org/js)

## How we can use machine learning

### ML5

ML5 is an open source interface for TensorFlow, aimed at making machine learning friendlier and easier to use.  ML5 also provides pre-trained models and model training functionality.

[ML5](https://ml5js.org/)

[Teachable Machine](https://teachablemachine.withgoogle.com/)

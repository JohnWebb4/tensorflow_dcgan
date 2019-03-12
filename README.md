# Image DCGAN

## Goal

Create deep convolution generative adversarial network (DCGAN)
for generating new images from a given image set.

This can then be exported and run on a website for generating
images.

## Requirements

- Docker (For creating the model) (https://www.docker.com/)
- Node (For generating images in browser) (https://nodejs.org/en/)

## Install (On base machine)

- Install Tensorflow (https://www.tensorflow.org/install)
- Install Node (See above for links)
- Run `npm install` to install dependencies for the website

## Install (Docker)

- Install Docker and Node (See above for links)
- Install nvidia-docker (https://github.com/NVIDIA/nvidia-docker)
- Run `npm install` to install dependencies for the website

## Training the model (Docker)

- Make any changes to training settings in [dcgan.py](/dcgan.py)
- Run `./bin/buildDocker.sh` to create a docker image for training the model
  - This will take approximatly 3.6GB on your hard drive
- Run `./bin/startDocker.sh` to run the training the model

## Generating images in the browser

Work in Progres

## License

[MIT](/LICENSE)

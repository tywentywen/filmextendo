//Tywen Kelly 2020 adapted from...:

// P_4_2_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * simple tabular overview of a video file.
 *
 * KEYS
 * s                  : save png
 */

'use strict';

let movie;
let time = 0;

let posX = 0;
let posY = 150;

function preload() {
  movie = createVideo(['data/Meiborn-v3-web-H264-QUART-RES.mp4']);
  movie.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
	//frameRate(24);
	console.log(frameRate())
  print(movie.width + ' • ' + movie.height);
	print(movie.duration());

}

function draw() {


	shearY(- 0.5);

	image(movie, posX, posY, 200, 150);

	posX += 1;
	posY += 1;

	movie.time(time);
	time += 0.05;

}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

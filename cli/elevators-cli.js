#!/usr/bin/env node

"use strict";

var yargs = require('yargs'),
  extend = require('deep-extend'),
  repl = require('repl');

var defaultConfig = {
  floors: 3,
  elevators: 2
  /*
  elevators: {
    "1": {
      currentFloor: 1,
      occupied: false,
      active: true,
      trips: 0,
      passedFloors: 0
    },
    "2": {
      currentFloor: 1,
      occupied: false,
      active: true,
      trips: 0,
      passedFloors: 0
    }
  }
  */
}

var elevatorSys = require('../'),
  cfg = extend({}, defaultConfig, yargs.argv);

elevatorSys.init(cfg);

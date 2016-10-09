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

// Call - request elevator to floor, to go up or down

// elevator: Open - open elevator (for either loading or unloading) - elevator
// does this on its own at the proper floor, no command needed. However, this
// could be used to simulate an "open door" button on the inside of the elevator.

// elevator: GoTo - request elevator take passenger to floor. Marks the elevator
// as occupied until the floor is reached. This can only be done if you have an
// elevator (glossing over the process of loading the elevator. The system does
// not care whether anyone got on or off the elevator. It only cares that one of
// the elevator's internal buttons got pressed)

elevatorSys.init(cfg);
repl.start({
  ignoreUndefined: true,
  eval: function(cmd, context, filename, cb){

  }
});

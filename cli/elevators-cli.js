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

var replCommands = {

  // Call - request elevator to floor, (optional: support request to go up or down)
  call: function callAnElevator(cmd, context, filename, cb){

  },

  // elevator: Open - open elevator (for either loading or unloading) - elevator
  // does this on its own at the proper floor, no command needed. However, this
  // could be used to simulate an "open door" button on the inside of the elevator.
  open: function openElevator(cmd, context, filename, cb){

  },

  // elevator: GoTo - request elevator take passenger to floor. Marks the elevator
  // as occupied until the floor is reached. This can only be done if you have an
  // elevator (glossing over the process of loading the elevator. The system does
  // not care whether anyone got on or off the elevator. It only cares that one of
  // the elevator's internal buttons got pressed. The physical location of the
  // buttons addresses this encapsulation. We'll fake it in the simulation.)
  // If we decide to support up/down requests, goto floor should honor whether the
  // elevator was requested to go up or down.
  goToFloor: function goToFloorOnElevator(cmd, context, filename, cb){
    // repl does a poor job of mapping to the state of an elevator system, so
    // we specify the floor we are on, the elevator we are making the request of,
    // and the target floor.
    var elevatorId = cmd[1],
      startFloor = cmd[2],
      destFloor = cmd[3];
  }
};

elevatorSys.init(cfg);
repl.start({
  ignoreUndefined: true,
  eval: function (cmd, context, filename, cb) {
    var cmdFn;

    // split input at whitespace and remove whitespace characters
    cmd = cmd.split(/\s/).filter(Boolean);
    if (cmd.length === 0) {
      cb();
    }

    cmdFn = replCommands[ cmd[0] ];
    if('function' !== typeof cmdFn){
      cb();
    }

    cmdFn.call(repl, cmd, context, filename, cb);
  }
});

"use strict";

var test = require('tape'),
  elevators = require('../');

test('Initialize elevators', function (t) {
  // At any given time, we'll need to be able to tell our simulation the
  // starting state of our elevators:
  // + How many floors (min 1 - though 2 makes more sense,
  //   because you don't need elevators unless you need to change floors),
  // + how many elevators (min 1),
  // + which floor each elevator is currently on (0...number of floors)
  t.end();
});

test('Elevator reports as it changes floors', function (t) {
  // Each elevator is an EventEmitter. Initialize the system to have 1 elevator
  // and 5 floors, with the elevator on the ground floor. Request the elevator
  // come to the top floor. Observe that the elevevator reports that it is
  // begining to travel unoccupied from 1st to 5th floor and then reports as it
  // reaches the 2nd through 5th floors.
  t.end();
});

// It is not clear from the requirements if an elevator on its way to answer a
// request for an elevator should be considered as "unoccupied". We will assume
// it will NOT be elligable.

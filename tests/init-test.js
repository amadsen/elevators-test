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

test('Elevator reports as it opens and closes doors', function (t) {
  // Each elevator is an EventEmitter. Initialize the system to have 1 elevator
  // and 5 floors, with the elevator on the ground floor. Request the elevator
  // come to the top floor. Observe that the elevevator reports that it is
  // begining to travel unoccupied from 1st to 5th floor and then reports as it
  // reaches the 2nd through 5th floors.
  t.end();
});

test('Elevator cannot be requested from above the top floor', function (t) {
  // Preferrably, there should not be a method to request a floor above the
  // top floor. However, since we don't know how the simulation wil be
  // initialized, the method simulating a request for pickup and the similar
  // method requesting the target floor will both need a min/max check.
  t.end();
});

test('Elevator cannot take a passenger above the top floor', function (t) {
  // Preferrably, there should not be a method to request a floor above the
  // top floor. However, since we don't know how the simulation wil be
  // initialized, the method simulating a request for pickup and the similar
  // method requesting the target floor will both need a min/max check.
  t.end();
});

test('Elevator cannot be requested from below the ground floor', function (t) {
  // Preferrably, there should not be a method to request a floor above the
  // top floor. However, since we don't know how the simulation wil be
  // initialized, the method simulating a request for pickup and the similar
  // method requesting the target floor will both need a min/max check.
  t.end();
});

test('Elevator cannot take a passenger below the ground floor', function (t) {
  // Preferrably, there should not be a method to request a floor above the
  // top floor. However, since we don't know how the simulation wil be
  // initialized, the method simulating a request for pickup and the similar
  // method requesting the target floor will both need a min/max check.
  t.end();
});

test('Elevator request can be made from any floor', function (t) {
  // TBD whether a useful test
  t.end();
});

test('Elevator can take a passenger to any existing floor', function (t) {
  // TBD whether a useful test
  t.end();
});

test('Elevator request gets unoccupied elevator on the same floor if it exists', function (t) {
  // Init 2 elevators in a 3 story building, with both elevators on 2nd floor.
  // Request an elevator from the 3rd floor, load it, and send it to the first.
  // Immediately, request an elevator from the 2nd floor.
  // Elevators will require IDs. May be better to simply initialize the first
  // elevator on the 3rd floor and load it.
  t.end();
});

test('Elevator request gets occupied elevator that is passing its floor anyway', function (t) {
  // Init...
  t.end();
});

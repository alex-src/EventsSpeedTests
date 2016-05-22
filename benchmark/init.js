var assert = require('assert');
var suite = require('chuhai');

suite('init', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  var subjects = require('../subjects').constructors;

  var dummy = null;

  s.cycle(function () {
    assert(dummy);
    dummy = false;
  });

  function Dummy() {}

  s.burn('Theoretical max', function () {
    dummy = new Dummy();
  });

  s.bench('EventEmitter', function () {
    dummy = new subjects.EventEmitter1();
  });
  s.bench('EventEmitter2', function () {
    dummy = new subjects.EventEmitter2();
  });
  s.bench('EventEmitter3', function () {
    dummy = new subjects.EventEmitter3();
  });
  s.bench('ReactiveProperty', function () {
    dummy = subjects.reactiveProperty();
  });
  s.bench('JS-Signals', function () {
    dummy = new subjects.Signal();
  });
  s.bench('MiniSignals', function () {
    dummy = new subjects.MiniSignal();
  });
  s.bench('EventDispatcher', function () {
    dummy = new subjects.EventDispatcher();
  });
});

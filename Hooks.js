var {After, Before} = require('cucumber');

// Synchronous
Before(function () {
  this.count = 0;
});

// Asynchronous Callback
Before(function (testCase, callback) {
  var world = this;
  tmp.dir({unsafeCleanup: true}, function(error, dir) {
    if (error) {
      callback(error);
    } else {
      world.tmpDir = dir;
      callback();
    }
  });
});

// Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
  return this.driver.quit();
});

var {After, Before} = require('cucumber');

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@foo"}, function () {
  // This hook will be executed before scenarios tagged with @foo
});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});
var {AfterAll, BeforeAll} = require('cucumber');

// Synchronous
BeforeAll(function () {
  // perform some shared setup
});

// Asynchronous Callback
BeforeAll(function (callback) {
  // perform some shared setup

  // execute the callback (optionally passing an error when done)
});

// Asynchronous Promise
AfterAll(function () {
  // perform some shared teardown
  return Promise.resolve()
});
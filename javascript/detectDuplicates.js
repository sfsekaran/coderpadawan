var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha();
// Bit of a hack for coderpad
mocha.suite.emit('pre-require', this, 'solution', mocha);



// implementation
function detectDuplicates(list = []) {
  // TODO
}



// specs
describe('detectDuplicates', function() {
  it('should detect no duplicates in an empty array', function() {
    assert.deepEqual(detectDuplicates([]), []);
  });

   it('should detect no duplicates with a single number', function() {
     assert.deepEqual(detectDuplicates([1]), []);
  });

  it('should detect no duplicates with multiple distinct numbers', function() {
    assert.deepEqual(detectDuplicates([1, 2, 3, 4, 5]), []);
  });

  it('should detect two of the same', function() {
    assert.deepEqual(detectDuplicates([1, 1]), [1]);
  });

  it('should detect three of the same', function() {
    assert.deepEqual(detectDuplicates([1, 1, 1]), [1]);
  });

   it('should detect duplicates of two numbers', function() {
     assert.deepEqual(detectDuplicates([1, 1, 1, 2, 2, 2]), [1, 2]);
   });

  it('should detect duplicates of two numbers, all mixed up', function() {
    assert.deepEqual(detectDuplicates([1, 2, 1, 2, 1, 2]), [1, 2]);
  });

  it('should detect duplicates of two numbers when non-dupes are present', function() {
    assert.deepEqual(detectDuplicates([1, 2, 3, 1, 2, 4, 1, 2, 5]), [1, 2]);
  });

  it('should detect duplicates of three numbers when non-dupes are present', function() {
    assert.deepEqual(detectDuplicates([1, 2, 3, 1, 2, 4, 1, 2, 5, 3]), [1, 2, 3]);
  });
});

mocha.run();

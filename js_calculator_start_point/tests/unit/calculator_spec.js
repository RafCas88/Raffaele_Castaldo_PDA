var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15)
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can concatenate multiple numbers', function(){
    calculator.numberClick(1);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 14)
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 1)
  })

it('it can clear the numberClick without affecting the calculation', function(){
  calculator.numberClick(1);
  calculator.operatorClick('+');
  calculator.numberClick(4);
  calculator.operatorClick('-');
  calculator.numberClick(4);
  calculator.clearClick();
  calculator.numberClick(3);
  calculator.operatorClick('=');
  assert.equal(calculator.runningTotal, 2)
})
});

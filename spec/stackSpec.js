describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('size should initialize to 0', function() {
    expect(stack.size()).to.equal(0);
  });
  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#push()', function() {
    it('should take one argument', function() {
      // Make sure push() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.push.length).to.equal(1);
    });
    it('should add something to the stack', function() {
      expect(stack.size()).to.equal(0);
      stack.push('element');
      expect(stack.size()).to.equal(1);
    });
  });

  describe('#pop()', function() {
    it('should not decrease size below 0', function() {
      stack.pop();
      expect(stack.size()).to.equal(0);
    });
    it('should return "undefined" from an empty stack', function() {
      stack.push('hello');
      stack.pop();
      expect(stack.pop()).to.equal(undefined);
    });
    it('should decrease size by 1', function() {
      stack.push('element');
      stack.push('element2');
      expect(stack.pop()).to.equal('element2');
      expect(stack.size()).to.equal(1);
    });
  });

});
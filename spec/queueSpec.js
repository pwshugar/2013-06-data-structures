describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('size should initialize to 0', function() {
    expect(queue.size()).to.equal(0);
  });

 describe('#enqueue()', function() {
   it('should increase size by 1 when the first element is added to the queue', function() {
     queue.enqueue('element');
     expect(queue.size()).to.equal(1);
   });
   it('should increase size by n when n elements are added to the queue', function() {
     queue.enqueue('element');
     queue.enqueue('element');
     expect(queue.size()).to.equal(2);
   }); });

  // Hey! Add tests here that thoroughly test the functionality of your queue
});

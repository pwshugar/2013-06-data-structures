var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.last = 0;
  queue.next = 0;

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function(){
  if (this.last - this.next === 0) {return;}
  var temp = this.storage[this.next];
  delete this.storage[this.next];
  this.next++;
  return temp;
};

queueMethods.size = function(){
  return this.last - this.next;
};

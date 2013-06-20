var Queue = function() {
  this.storage = {};
  this.last = 0;
  this.next = 0;
};

var queueMethods = Queue.prototype;
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
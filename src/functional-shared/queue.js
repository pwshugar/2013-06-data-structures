var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var last = 0;
  var next = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  queue.dequeue = function(){
    if (last - next === 0) {return;}
    var temp = storage[next];
    delete storage[next];
    next++;
    return temp;
  };

  queue.size = function(){
    return last - next;
  };

  return queue;
};
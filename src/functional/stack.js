var makeStack = function(){
  var storage = {};

  var size = 0;

  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size++;
  };

  stack.pop = function(){
    size && size--;
    var deleted = storage[size];
    delete storage[size];
    return deleted;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
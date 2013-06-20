
var makeStack = function(){
  var stack = {};
  stack.storage = {};
  stack.sizeVar = 0;
  stack.push = push;
  stack.pop = pop;
  stack.size = size;
  return stack;
};

var push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};

var pop = function(){
  this.sizeVar && this.sizeVar--;
  var deleted = this.storage[this.sizeVar];
  delete this.storage[this.sizeVar];
  return deleted;
};

var size = function(){
  return this.sizeVar;
};



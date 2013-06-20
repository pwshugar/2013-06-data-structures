var makeStack = function(){
  var stack = {};
  stack.storage = {};
  stack.sizeVar = 0;
  _.extend(stack, stackMeths);
  return stack;
};

var stackMeths = {};

stackMeths.push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};

stackMeths.pop = function(){
  this.sizeVar && this.sizeVar--;
  var deleted = this.storage[this.sizeVar];
  delete this.storage[this.sizeVar];
  return deleted;
};

stackMeths.size = function(){
  return this.sizeVar;
};
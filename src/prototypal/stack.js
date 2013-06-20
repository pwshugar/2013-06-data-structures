var Stack = function() {
  var stack = Object.create(stackMeths);
  stack.storage = {};
  stack.sizeVar = 0;
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
var Stack = function() {
  this.storage = {};
  this.sizeVar = 0;
};

var stackMeths = Stack.prototype;

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
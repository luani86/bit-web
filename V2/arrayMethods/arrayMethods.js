// myPop method
Array.prototype.myPop = function() {
  var newArray = [];
  for (var i = 0; i < this.length - 1; i++) {
    newArray[i] = this[i];
  }
  return newArray;
};

console.log([1, 2, 3, 4, 5].myPop());

//myPush method
Array.prototype.myPush = function(element) {
  this[this.length] = element;
  return this;
};
console.log([1, 2, 3, 4, 5].myPush("kjdg"));

//myJoin method
Array.prototype.myJoin = function(value) {
  var counter = "";
  if(value === undefined) {
    value = ",";
  }
  for (var i = 0; i < this.length; i++) {
    counter += this[i] + value;
  }

  var newCounter = "";
  for (var i = 0; i < counter.length - 1; i++) {
    newCounter += counter[i];
  }
  return newCounter;
};
console.log([1, 2, 3, 4].myJoin("-"));

//myFilter method
callbackFunction = function(value) {
  return value > 10;
};
Array.prototype.myFilter = function(func) {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    if (func(this[i])) {
      newArray[newArray.length] = this[i];
    }
  }
  return newArray;
};
console.log([1, 4, 16, 6, 40, 7].myFilter(callbackFunction));

//myMap method
callbackFunction = function(value) {
  return value * 2;
};
Array.prototype.myMap = function(callbackFunction) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    this[i] = callbackFunction(this[i]);
    newArray[i] = this[i];
  }
  return newArray;
};
console.log([1, 4, 16, 6, 40, 7].myMap(callbackFunction));

//myCopy method
Array.prototype.myCopy = function(value) {
    var newArray = [];
    if(value === undefined) {
        value = 0;
    }
    for (var i = 0; i < this.length - value; i++) {
        newArray[newArray.length] = this[i + value];
        
    }
    return newArray;
}
console.log([1, 4, 16, 6, 40, 7].myCopy(2));

//myIndexOf method
Array.prototype.myIndexOf = function(value) {
    var indexOfElement;
    if(value >= this.length) {
      return -1;
    }
    for (var i=0; i<this.length; i++) {
        if(i === value) {
          return this[value];
        }
    }
    
}
console.log([1, 2, 3, 4, 5, 6].myIndexOf(11));

//myLastIndexOf method
Array.prototype.myLastIndexOf = function(value) {
    var result = -1;
    for(var i=this.length-1 ; i>=0; i--) {
      if(value === this[i]) {
        result = i;
        return result;
      }
    }
    return result;
}
console.log([4, 2, 3, 4, 5, 6, 4].myLastIndexOf(9));

//myIncludes method
Array.prototype.myIncludes = function(value) {
  var result = false;
  for(var i=0; i<this.length; i++) {
    if(this[i] === value) {
      result = true;
    }
  }
  return result;
}
console.log([1, 2, 3, 4, 5, 6].myIncludes(7));

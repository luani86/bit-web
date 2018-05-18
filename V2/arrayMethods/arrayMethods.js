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

Array.prototype.myJoin = function() {
  var counter = "";
  var zarez = ",";

  for (var i = 0; i < this.length; i++) {
    counter += this[i] + zarez;
  }

  var newCounter = "";
  for (var i = 0; i < counter.length - 1; i++) {
    newCounter += counter[i];
  }
  return newCounter;
};

console.log([1, 2, 3, 4].myJoin());

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
    for (var i=0; i<this.length; i++) {
        if(i === value) {
            indexOfElement = value;
        }
    }
    return indexOfElement
}
console.log([1, 4, 16, 6, 40, 7].myIndexOf(1));
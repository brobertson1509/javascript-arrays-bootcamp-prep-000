var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = "foo"

function addElementToBeginningOfArray(chocolateBars,candy){
  return [candy, 1];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,candy){
chocolateBars.unshift(candy);
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candy){
  return [1, candy];
}

function destructivelyAddElementToEndOfArray(){
chocolateBars.push(candy);
 return chocolateBars;
}

function accessElementInArray(array, index){
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 chocolateBars.shift();
 return chocolateBars;
}

function removeElementFromBeginningOfArray(array){
 chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
 chocolateBars.pop();
 return chocolateBars;
}

function removeElementFromEndOfArray(array){
 chocolateBars.slice(0, chocolateBars.length - 1)
 return chocolateBars
}

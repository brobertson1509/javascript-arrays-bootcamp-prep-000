var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = "foo"

function addElementToBeginningOfArray(array,element){
  return [candy, 1];
}

function destructivelyAddElementToBeginningOfArray(array,element){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(array, element){
  return [1, candy];
}

function destructivelyAddElementToEndOfArray(){
chocolateBars.push("foo");
 return chocolateBars;
}

function accessElementInArray(array, index){
return chocolateBars[3];
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

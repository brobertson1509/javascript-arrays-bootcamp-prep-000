var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars,foo){
  return ["foo", 1];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
chocolateBars.unshift("foo");
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

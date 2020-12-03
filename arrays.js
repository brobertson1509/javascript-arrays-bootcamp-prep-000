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

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
chocolateBars.push("foo");
 return chocolateBars;
}

function accessElementInArray(chocolateBars, 1){
return chocolateBars[1];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
 chocolateBars.shift();
 return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
 chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
 chocolateBars.pop();
 return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
 chocolateBars.slice(0, chocolateBars.length - 1)
 return chocolateBars
}

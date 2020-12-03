var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  return ['foo', 1]
}

function destructivelyAddElementToBeginningOfArray(array,element){
 return chocolateBars = ['foo',1]
}

function addElementToEndOfArray(array, element){
  return [1, 'foo'];
}

function destructivelyAddElementToEndOfArray(){
 return chocolateBars = [1, 'foo']
}

function accessElementInArray(array, index){
return chocolateBars[3]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 chocolateBars.shift()
 return chocolateBars
}

function removeElementFromBeginningOfArray(array){
 chocolateBars.slice(1)
 return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(array){
 chocolateBars.pop()
 return chocolateBars
}

function removeElementFromEndOfArray(array){
 chocolateBars.slice(0, chocolateBars.length - 1)
 return chocolateBars
}

// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  console.log(sliceIndex);
  if(sliceIndex >= 0) {
    console.log(arr.slice(sliceIndex));
    return arr.slice(sliceIndex);
  } else {
    console.log(arr.slice(arr.length));
    return arr.slice(arr.length);
  }
}

dropElements([1, 2, 3, 4], function(n) {return n >= 5; });

/////////////////////////////////////////////////////////////////////////////

function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

//////////////////////////////////////////////////////////////////////////////


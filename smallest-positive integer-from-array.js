// Write a function that, given an array A on N integers,
// returns the smallest positive integer (greater than 0)
// that does not occur in A.

// For example, given A=[1,3,6,4,1,2] the function should return 5.
// Given A=[1,2,3] the function should return 4.
// Given A=[-1,-2,-3] the function should return 1.

// var A = [424,323,1236,3452,1543,22345];
var A = [1,3,6,4,1,2];
var B = [-1,-3];
var C = [40,21,46,1,0,5,-2];
var D = [1,2,3];
var E = [-1,-2,-3];
solution(A);
solution(B);
solution(C);
solution(D);
solution(E);


function solution(A) {
  A.sort(function(a, b){return a-b});
  console.log(A);
  if (A[A.length-1] < 0) {
    return console.log(1);
  }
  for (var i=0; i<A.length; i++){
    if (A[i] > 0) {
      if (A[i] != A[i+1] && A[i]+1 != A[i+1]) {
        return console.log(A[i]+1);
      }
    }
  }
}


function solution(a,b) {
  var convertToBin = function () {
    function convertToBin(from,to) {
        return function (num) {
            console.log("Number to convert to binary : " + num);
            return parseInt(num,from).toString(to);
        };
    }

    //decimal to binary
    convertToBin.dec2bin = convertToBin(10,2);
    return convertToBin;
  }();
  var binary = convertToBin.dec2bin(a*b);
  // console.log("Binary " + binary);
}

solution(3,7);

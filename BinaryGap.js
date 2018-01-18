// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary
// representation of N.

// For example, number 9 has binary representation 1001 and contains a binary
// gap of length 2. The number 529 has binary representation 1000010001 and
// contains two binary gaps: one of length 4 and one of length 3. The number 20
// has binary representation 10100 and contains one binary gap of length 1.
// The number 15 has binary representation 1111 and has no binary gaps.

// Write a function:

// function solution(N);
// that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary
// representation 10000010001 and so its longest binary gap is of length 5.

// Assume that:

// N is an integer within the range [1..2,147,483,647].
// Complexity:

// expected worst-case time complexity is O(log(N));
// expected worst-case space complexity is O(1).


function solution(N) {
    var ones = [];
    var max = 0;
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

    var binary = convertToBin.dec2bin(N);
    console.log("Binary number : " + binary);
    if (binary.indexOf(0) == -1) {
        console.log("No binary gaps");
        return 0;
    } else {
        for (var i=0; i<binary.length; i++) {
            if (binary[i] == 1) ones.push(i);
        }
    }

    //find gap
    for (var i = 0; i < ones.length-1; i++) {
        if (ones[i+1] - ones[i] > max) max = ones[i+1] - ones[i];
    }
    if (max>0) max -= 1;
    return console.log("Longest binary gap : " + (max));
    // write your code in JavaScript (Node.js 8.9.4)
}

solution(16);

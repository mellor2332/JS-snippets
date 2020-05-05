function fibonacciGenerator (n) {
    var output = [];
    if (n === 1) {
      output = [0];
    }
    else if (n === 2) {
      output = [0,1];
    } else {
      output = [0,1];
    for (var i = 0; i <= n; i++) {
      nextNumber = output[i] + output[i+1];
      output.push(nextNumber);
      if (i === n) {
        output.length = n
      }
      }
    }
    return output;
    }

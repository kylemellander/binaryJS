function binary(number) {
  var remainder = number;
  var result = 0;
  for(var i = 1; remainder > 0; ++i) {
    if(remainder % Math.pow(2, i) !== 0) {
      result += (Math.pow(10, i-1));
      remainder -= Math.pow(2, i-1);
    }
  }
  return result;
}

function trinary(number) {
  var remainder = number;
  var result = 0;
  for(var i = 1; remainder > 0; i) {
    if(remainder % Math.pow(3, i) !== 0) {
      result += (Math.pow(10, i-1));
      remainder -= Math.pow(3, i-1);
    } else {
      i += 1;
    }
  }
  return result;
}

function numberConverter(number, arg) {
  return number.toString(arg);
}

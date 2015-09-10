function binary(number) {
  var remainder = number;
  var result = 0;
  for(var i = 1; remainder > 0; ++i) {
    if(remainder % 2 !== 0) {
      result += 1;
      remainder -= 1;
    }
  }
  return result;
}

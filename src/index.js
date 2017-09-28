module.exports = function zeros(expression) {
  function multiply(first, second) {

    var a = first.split("").reverse();
    var b = second.split("").reverse();
    var result = [];

    for(var i = 0; i < a.length; i++){
      for(var j = 0; j < b.length; j++){
        if(!result[i+j]){
          result[i+j] = 0;
        }
        result[i+j] += a[i]*b[j];
      }
    }
    for(i=0; i < result.length; i++){
      if(result[i] >= 10){
        if(!result[i+1]){
          result[i+1] = 0;
        }
        result[i+1] += Math.floor(result[i]/10);
        result[i] %= 10;
      }
    }
    return result.reverse().join('');
  }
  function factorial(n){
    if(n == 1){
      return "1";
    }
    return multiply("" + n,"" + factorial(n - 1));
  }
  function doubleFactorial(n){
    if(n == 1){
      return "1";
    } else if(n == 2){
        return "2";
    } else return multiply("" + n, "" + doubleFactorial(n - 2));
  }
  var arr = expression.split("*");
  var result = "1";
  for(var i = 0; i < arr.length; i++){
    if(arr[i].indexOf("!!") == -1){
      result = multiply(result, factorial(+arr[i].substring(0, arr[i].indexOf("!"))));
    } else {
      result = multiply(result, doubleFactorial(+arr[i].substring(0, arr[i].indexOf("!"))));
    }
  }
  result = "" + result;
  result = result.split("");
  result = result.reverse().join("");
  var count = 0;
  for(i=0; i < result.length; i++){
    if(result.charAt(count) == "0"){
      count++;
    } else return count;
  }
  return count;
}

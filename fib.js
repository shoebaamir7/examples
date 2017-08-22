var fib = [];
var i;
for(i=0;i<10;i++){
  if(i == 0 || i == 1){
    fib.push(i);  
    document.write(fib[i]);
    document.write(',');
    } else {
      var current = fib[i-1];
      var prev = fib[i-2];
      fib[i] = current + prev;
      fib.push(fib[i]);
      document.write(fib[i]);
      if(i != 9){
      	document.write(',')
      }
    }
}
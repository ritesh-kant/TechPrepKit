for(var i =1 ;i <= 5 ; i++){
   function test(x) {
    setTimeout(() => {
        console.log(x)
    }, 1000*x);
   }
   test(i)
}
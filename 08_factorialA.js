function factorialOfNum(Num) {
 if (Num==null||Num==undefined||Num==NaN) {
    console.log(`${Num} --->is invalid factorial`);
    return;
 } else {
    let fact=1;
    for (let index = Num; index >= 1; index--) {
      fact=fact*index;
        
    }
    console.log(`factorial of ${Num}-->${fact}`);
    
 }

    
}
factorialOfNum(null);
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);


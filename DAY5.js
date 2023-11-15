// Q : Function SHOULD RETURN ARRAY OF INTEGERS WHICH BEGINS WITH LOWEST NUMBER TO THE LARGEST NUMBER WITHOUT USING LOOP
// learnings : usage of recursion
let arr = []
function rangeOfPrarmeters(val1,val2){

    if(val1<=val2){
        arr.push(val1)
        val1++
        rangeOfPrarmeters(val1,val2)

    }
       
    return arr

    
   
}
console.log(rangeOfPrarmeters(1, 6));  
// output : [1,2,3,4,5,6]
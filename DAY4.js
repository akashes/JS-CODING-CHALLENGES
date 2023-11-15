// Q : build a function that creates histogram . Everry bar needs to be on a new line and its length corresponde to the numbers in the 
// array passed as argument . The second argument of the function represents the character to be used for the bar . 
// learnings  : repeat() method usage 
function histogram(array,val){
    array.map((ele)=>{
        //     let string = "";

        // for(var i=0; i<ele; i++)
        // {
        //     string+=val
        // }
        // console.log(string);
    
        console.log(val.repeat(ele));
    })

}

histogram([2,3,10],'#')
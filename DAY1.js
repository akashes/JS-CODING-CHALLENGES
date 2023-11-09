// Q : FIND THE SUM OF ALL THE MULTIPLES OF 3 OR 5 BELOW A GIVEN Number
// tricky portion : or in question , so need to avoid duplicates(both multiple of 3 and 5) when calulating sum

function solution(num){
    let multiplesOfThreeandFive=[]
    let sum=0

    for(let i=1;i<num;i++){
        
    
    if(i%3==0 || i%5==0){
        // multiplesOfThree.push(i)
        multiplesOfThreeandFive.push(i)
        sum+=i
      
    }
   
}

//  multiplesOfThreeandFive=[...multiplesOfThree,...multiplesOfFive]
console.log(multiplesOfThreeandFive);
let filteredArray=[...new Set(multiplesOfThreeandFive)];    //research
let res = filteredArray.reduce((num,acc)=>num+acc)
console.log(sum);
return res

}

console.log(solution(1000));



// note :
// made two arrays for multiples of three and multiples of five and they are clubbed using rest? operator . Then 
// filtered the array using Set to remove duplicate values and then reduced the array to get total sum.

// improvements done :
// ---------------
// pushed multiples of five and three to same array , ie avoided joining two arrays .

// learnings : 
// ---------------
// concatination of arrays using split operator 
// reduce to find sum of an array
// Set() to remove duplicate values from an array
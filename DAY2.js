// Q : IF ALL THE NUMBERS FROM 1 TO 10 INCLUSIVE WERE WRITTEN OUT IN WORDS, HOW MANY LETTERS WOULD BE USED
// --------------------------------------------------------------
// ANS 1 :
// let length,finalResult,sum=0
// let numArray=['one','two','three','four','five',"six"]
// const solution=(num)=>{
//     numArray.map((ele,index)=>{

//         length = ele.length
//         sum+=length
//         if(index==(num-1)){
//             finalResult = sum
//         }

//     })
//     console.log(finalResult);

// }

// solution(1)

// ------------------------------
// ANS 2 : 

const solution = (number) => {
	let sum = 0;
	let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
	let selectedArray = numArray.slice(0, number);
	console.log(selectedArray);
	let selectedArrayLength = selectedArray
		.map((ele) => {
			return ele.length;
		})
		.reduce((num, acc) => num + acc);
	return selectedArrayLength;
};
console.log(solution(5));

// NOTE : 
// created an array of numbers and looped the array to get enough numbers based on the user input and find length of each string and find sum of all letters

// In the second approach , used slice to get enough numbers wanted and used map method to get a new array with length of each number and then used  reduce method to get the sum of letters . 

// Advancements which can be done : 
// -----------------------------
//  can use packages to get sting value of each numbers rather than writing array of numbers manually . 
// Q : TAKE DATA FROM THIS OBJECT AND DISPLAY IN A LIST 
// OUTCOME : LEARNED Object properties like keys , values , entries and array and object destructuring 
let users={

	Alan:{
		age:22,
		online:false
	},
	Jeff:{
		age:32,
		online:false
	},
	Sarah:{
		age:18,
		online:true
	},
	Alex:{
		age:25,
		online:true
	},
}


// --------------------------
function arrayCreation(users){
	// let name = Object.keys(users)
	// console.log(name);
	// for(i in users){
	// 	arr.push(i)
	// }
	
	// let keys = Object.values(users)
	// console.log(keys);
	// newVal=keys.map((ele)=>{
	// return	ele.online
	// })
	// console.log(newVal);

		let list = document.querySelector(".list");

	let val = Object.entries(users)
	console.log(val);
	val.map(([name,{age,online}])=>{
					let listElement = document.createElement("li");
					if(online){

											listElement.style.listStyleColor = "green";

					}





			listElement.textContent = `${name} : ${age}`;
		console.log('inside map');
		list.appendChild(listElement)
		
	})
	
	
	
	

}
console.log(arrayCreation(users));



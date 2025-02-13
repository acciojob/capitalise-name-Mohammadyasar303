//your JS code here. If required.
	let input = document.getElementById("fname");
	input.addEventListener("blur",()=>{
		let val = input.value;
		input.value = val.toUpperCase();
	})

// let input = querySelector("input");

// input.addEventListener("blur",()=>{
// 	console.log()
// })
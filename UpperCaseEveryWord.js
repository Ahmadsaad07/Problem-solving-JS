/*
 * Uppercase every word
 * it takes a lowercse string as a parameter
 * it returns a capitalized string "every single word"
*/
function upperCaseEveryWord (saad) {
	//check if the input type is string
	if(typeof saad === "string"){
		// converting the input string to an array
		let newString = saad.split(" ")
		//declaring a new array to store the result
		let newArray = new Array();
		//loop through the array
		for(let i = 0; i < newString.length; i++){
			//capitalize the first character
			let firstLetter = newString[i].slice(0, 1).toUpperCase();
			//lowercase the remained characters in the word
			let remainWord = newString[i].slice(1, newString[i].length).toLowerCase()
			newArray.push(firstLetter + remainWord);
		}
		//reconvert the array to a string
		return newArray.join(" ");
	}else if(!saad){
		return "You need to input some string"
	}else{
		return "Your input is not a srtring"
	}
}
//test cases
console.log(upperCaseEveryWord("helLo ever bODY")) //OUTPUT: Hello Ever Body
console.log(upperCaseEveryWord(2154855)) //OUTPUT: Your input is not a string
console.log(upperCaseEveryWord()) //OUTPUT: Your input is not a string


/*
** find the count of a given character in a given string
** it returns the number of times that the character appears in the string
*/

function findCharCount(char, str) {
	let characterNumbers = 0;
	for(let i = 0; i < str.length; i++){
		str[i] === char ? characterNumbers += 1 : false
	}
	return `'${char}' appears ${characterNumbers} ${characterNumbers > 1 ? 'times': "time"}`;
}

console.log(findCharCount("m", "Ahmmmmmmmad")) //OUTPUT: m appears 7 times 
console.log(findCharCount("a", "Saad")) //OUTPUT: a appears 2 time 
console.log(findCharCount("s", "Abdulsalam")) //OUTPUT: a appears 2 time 
/////////////////////////////////////////////////////////////

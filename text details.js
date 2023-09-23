
function stringDetails(saad) {
	let toArr = saad.split(" "),
	 firstWord = toArr[0],
	 lastWord = toArr[toArr.length - 1],
	 numOfWords = toArr.length,
	 onlyLetters = new String(),
	 whiteSpaces = new Array();

	for(let x = 0; x < saad.length; x++){
		if(saad[x] !== " "){
			onlyLetters += saad[x]
		}else{
			whiteSpaces.push(saad[x])
		}
	}
	const numOfletters = onlyLetters.length,
	 whiteSpacesNumbers = whiteSpaces.length;

	return `
		- Numbers of words: ${numOfWords} words
		- Numbers of characters: ${numOfletters} characters
		- First word: "${firstWord}"
		- Last word : "${lastWord}"
		- Numbers of white spaces: ${whiteSpacesNumbers} white spaces
	`
}
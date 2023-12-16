
function findUniq(arr) {
	let store = {};
	for(let i = 0; i < arr.length; i++){
		var element = arr[i];
		store[element] ? store[element] += 1 : store[element] = 1
	}
	for(key in store){
		if(store[key] == 1){return key.toString()}
	}
}


console.log(findUniq([ 1, 0, 0 ])) // 1
console.log(findUniq([ 1,1,1,2,1,1 ])) // 2
console.log(findUniq([ 3,10,3,3,3 ])) // 10
console.log(findUniq([1])) // 1
console.log(findUniq(["a", "a", "a", "c"])) //c

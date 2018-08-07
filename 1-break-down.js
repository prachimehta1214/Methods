let input = a string;
let expected = see;
let output;

console.log("String(arg).charAt(2) + String("ee"));
console.log("- " + input + " should become " + expected);

{ //  (string, a string) -> (string, see)
	const step_1 = String(input); 
	// str: "1a string"
	const step_2 = step_1.charAt(2, s); 
	// str: "s"
	const step_3 = + string("ee"); 
	// string: "see"
	output = step_3;
};


console.log("- actual: " + output );


// empty trace-block 
//	for studying different input/output pairs

// { //  (___, ___) -> (#, ___)
// 	const step_1 = String(input); 
// 	// str: "a string"
// 	const step_2 = step_1.charAt(2, "s"); 
// 	// str: "s"
// 	const step_3 = + String("ee");
// 	// str: "see"
// 	output = step_3;
// };

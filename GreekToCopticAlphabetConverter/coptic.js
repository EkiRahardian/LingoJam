const replace1 = []; const replace2 = [];
replace1.push("Α"); replace2.push("Ⲁ");
replace1.push("Β"); replace2.push("Ⲃ");
replace1.push("Γ"); replace2.push("Ⲅ");
replace1.push("Δ"); replace2.push("Ⲇ");
replace1.push("Ε"); replace2.push("Ⲉ");
replace1.push("Ζ"); replace2.push("Ⲍ");
replace1.push("Η"); replace2.push("Ⲏ");
replace1.push("Θ"); replace2.push("Ⲑ");
replace1.push("Ι"); replace2.push("Ⲓ");
replace1.push("Κ"); replace2.push("Ⲕ");
replace1.push("Λ"); replace2.push("Ⲗ");
replace1.push("Μ"); replace2.push("Ⲙ");
replace1.push("Ν"); replace2.push("Ⲛ");
replace1.push("Ξ"); replace2.push("Ⲝ");
replace1.push("Ο"); replace2.push("Ⲟ");
replace1.push("Π"); replace2.push("Ⲡ");
replace1.push("Ρ"); replace2.push("Ⲣ");
replace1.push("Σ"); replace2.push("Ⲥ");
replace1.push("Τ"); replace2.push("Ⲧ");
replace1.push("Υ"); replace2.push("Ⲩ");
replace1.push("Φ"); replace2.push("Ⲫ");
replace1.push("Χ"); replace2.push("Ⲭ");
replace1.push("Ψ"); replace2.push("Ⲯ");
replace1.push("Ω"); replace2.push("Ⲱ");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val().normalize('NFD'));
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "Ϲ") {charArray[i] = "Σ";}
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLowerCase();
			inLowerCase = false;
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val());
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLowerCase();
			inLowerCase = false;
		}
	}
	$("#firsttext").val(charArray.join("").normalize('NFC'));
}
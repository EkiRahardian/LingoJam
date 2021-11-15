const replace1 = []; const replace2 = [];
replace1.push("А"); replace2.push("A");
replace1.push("Б"); replace2.push("B");
replace1.push("В"); replace2.push("V");
replace1.push("Г"); replace2.push("G");
replace1.push("Д"); replace2.push("D");
replace1.push("Е"); replace2.push("E");
replace1.push("Ё"); replace2.push("Yo");
replace1.push("Ж"); replace2.push("C");
replace1.push("З"); replace2.push("Z");
replace1.push("И"); replace2.push("İ");
replace1.push("Й"); replace2.push("Y");
replace1.push("К"); replace2.push("K");
replace1.push("Л"); replace2.push("L");
replace1.push("М"); replace2.push("M");
replace1.push("Н"); replace2.push("N");
replace1.push("Ң"); replace2.push("Ñ");
replace1.push("О"); replace2.push("O");
replace1.push("Ө"); replace2.push("Ö");
replace1.push("П"); replace2.push("P");
replace1.push("Р"); replace2.push("R");
replace1.push("С"); replace2.push("S");
replace1.push("Т"); replace2.push("T");
replace1.push("У"); replace2.push("U");
replace1.push("Ү"); replace2.push("Ü");
replace1.push("Ф"); replace2.push("F");
replace1.push("Х"); replace2.push("X");
replace1.push("Ц"); replace2.push("Ţ");
replace1.push("Ч"); replace2.push("Ç");
replace1.push("Ш"); replace2.push("Ş");
replace1.push("Щ"); replace2.push("Şç");
replace1.push("Ъ"); replace2.push("ˮ");
replace1.push("Ы"); replace2.push("I");
replace1.push("Ь"); replace2.push("ʼ");
replace1.push("Э"); replace2.push("E");
replace1.push("Ю"); replace2.push("Yu");
replace1.push("Я"); replace2.push("Ya");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	let inLowerCase = false;
	let latinI = false
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "I") {
			latinI = true;
		}
		if (charArray[i] === "К" && (["о", "у", "ы", "О", "У", "Ы"].includes(charArray[i+1]) || ["q", "Q","o", "u", "ı", "O", "U", "I", "Yo", "YO", "yo", "yO", "Yu", "YU", "yu", "yU"].includes(charArray[i-1]))) {
			charArray[i] = "Q";
		}
		if (charArray[i] === "Г" && (["о", "у", "ы", "О", "У", "Ы"].includes(charArray[i+1]) || ["ğ", "Ğ", "o", "u", "ı", "O", "U", "I", "Yo", "YO", "yo", "yO", "Yu", "YU", "yu", "yU"].includes(charArray[i-1]))) {
			charArray[i] = "Ğ";
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLowerCase();
			inLowerCase = false;
		}
		if (charArray[i] === "i" && latinI === false) {
			charArray[i] = "ı";
		}
		if (charArray[i] === "i̇") {
			charArray[i] = "i";
		}
		latinI = false;
	}
	$("#secondtext").val(charArray.join(""));
}

const replace1 = []; const replace2 = [];
replace1.push("A"); replace2.push("А");
replace1.push("B"); replace2.push("Б");
replace1.push("C"); replace2.push("Ч");
replace1.push("D"); replace2.push("Д");
replace1.push("E"); replace2.push("Э");
replace1.push("F"); replace2.push("Ф");
replace1.push("G"); replace2.push("Г");
replace1.push("Gh"); replace2.push("Ғ");
replace1.push("H"); replace2.push("Ҳ");
replace1.push("I"); replace2.push("И");
replace1.push("J"); replace2.push("Ҷ");
replace1.push("K"); replace2.push("К");
replace1.push("Kh"); replace2.push("Х");
replace1.push("L"); replace2.push("Л");
replace1.push("M"); replace2.push("М");
replace1.push("N"); replace2.push("Н");
replace1.push("Ng"); replace2.push("Ҥ");
replace1.push("Ny"); replace2.push("Њ");
replace1.push("O"); replace2.push("О");
replace1.push("P"); replace2.push("П");
replace1.push("Q"); replace2.push("Қ");
replace1.push("R"); replace2.push("Р");
replace1.push("S"); replace2.push("С");
replace1.push("Sy"); replace2.push("Ш");
replace1.push("T"); replace2.push("Т");
replace1.push("U"); replace2.push("У");
replace1.push("V"); replace2.push("В");
replace1.push("W"); replace2.push("Ў");
replace1.push("X"); replace2.push("Ѯ");
replace1.push("Y"); replace2.push("Й");
replace1.push("Z"); replace2.push("З");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "K" && ["H", "h"].includes(charArray[i+1])) { //KH Kh
			charArray[i] = "Х"; charArray[i+1] = "";
		}
		else if (charArray[i] === "G" && ["H", "h"].includes(charArray[i+1])) { //GH Gh
			charArray[i] = "Ғ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["G", "g"].includes(charArray[i+1])) { //NG Ng
			charArray[i] = "Ҥ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["Y", "y"].includes(charArray[i+1])) { //NY Ny
			charArray[i] = "Њ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "S" && ["Y", "y"].includes(charArray[i+1])) { //SY Sy
			charArray[i] = "Ш"; charArray[i+1] = "";
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
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
	$("#firsttext").val(charArray.join(""));
}

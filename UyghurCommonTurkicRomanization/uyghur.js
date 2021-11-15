const replace1 = []; const replace2 = [];
replace1.push("ا"); replace2.push("A");
replace1.push("ە"); replace2.push("Ä");
replace1.push("ب"); replace2.push("B");
replace1.push("ج"); replace2.push("C");
replace1.push("چ"); replace2.push("Ç");
replace1.push("د"); replace2.push("D");
replace1.push("ې"); replace2.push("E");
replace1.push("ف"); replace2.push("F");
replace1.push("گ"); replace2.push("G");
replace1.push("غ"); replace2.push("Ğ");
replace1.push("ھ"); replace2.push("H");
replace1.push("ى"); replace2.push("İ");
replace1.push("ژ"); replace2.push("J");
replace1.push("ك"); replace2.push("K");
replace1.push("ل"); replace2.push("L");
replace1.push("م"); replace2.push("M");
replace1.push("ن"); replace2.push("N");
replace1.push("ڭ"); replace2.push("Ñ");
replace1.push("و"); replace2.push("O");
replace1.push("ۆ"); replace2.push("Ö");
replace1.push("پ"); replace2.push("P");
replace1.push("ق"); replace2.push("Q");
replace1.push("ر"); replace2.push("R");
replace1.push("س"); replace2.push("S");
replace1.push("ش"); replace2.push("Ş");
replace1.push("ت"); replace2.push("T");
replace1.push("ۇ"); replace2.push("U");
replace1.push("ۈ"); replace2.push("Ü");
replace1.push("ۋ"); replace2.push("W");
replace1.push("خ"); replace2.push("X");
replace1.push("ي"); replace2.push("Y");
replace1.push("ز"); replace2.push("Z");
replace1.push("ئ"); replace2.push("ʼ");
replace1.push("،"); replace2.push(",");
replace1.push("؛"); replace2.push(";");
replace1.push("؟"); replace2.push("?");
replace1.push("ـ"); replace2.push("͏");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ک") {charArray[i] = "K";}
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
	}
	$("#secondtext").val(charArray.join("").toLocaleLowerCase('tr'));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val().toLocaleUpperCase('TR'));
	for (const i of charArray.keys()) {
		if (charArray[i] === "I") {charArray[i] = "ى";}
		if (charArray[i] === "V") {charArray[i] = "ۋ";}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
	}
	$("#firsttext").val(charArray.join(""));
}

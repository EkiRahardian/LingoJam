const note = "";
const script = "Syriac";
const subtitle = "ܒܪܘܟܝܡ ܗܒܐܝܡ";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("ܐ");
letters1.push("ב"); letters2.push("ܒ");
letters1.push("ג"); letters2.push("ܓ");
letters1.push("ד"); letters2.push("ܕ");
letters1.push("ה"); letters2.push("ܗ");
letters1.push("ו"); letters2.push("ܘ");
letters1.push("ז"); letters2.push("ܙ");
letters1.push("ח"); letters2.push("ܚ");
letters1.push("ט"); letters2.push("ܛ");
letters1.push("י"); letters2.push("ܝ");
letters1.push("כ/ך"); letters2.push("ܟ");
letters1.push("ל"); letters2.push("ܠ");
letters1.push("מ/ם"); letters2.push("ܡ");
letters1.push("נ/ן"); letters2.push("ܢ");
letters1.push("ס"); letters2.push("ܣ");
letters1.push("ע"); letters2.push("ܥ");
letters1.push("פ/ף"); letters2.push("ܦ");
letters1.push("צ/ץ"); letters2.push("ܨ");
letters1.push("ק"); letters2.push("ܩ");
letters1.push("ר"); letters2.push("ܪ");
letters1.push("ש"); letters2.push("ܫ");
letters1.push("ת"); letters2.push("ܬ");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ܐ");
	replace1.push("ב"); replace2.push("ܒ");
	replace1.push("ג"); replace2.push("ܓ");
	replace1.push("ד"); replace2.push("ܕ");
	replace1.push("ה"); replace2.push("ܗ");
	replace1.push("ו"); replace2.push("ܘ");
	replace1.push("ז"); replace2.push("ܙ");
	replace1.push("ח"); replace2.push("ܚ");
	replace1.push("ט"); replace2.push("ܛ");
	replace1.push("י"); replace2.push("ܝ");
	replace1.push("כ"); replace2.push("ܟ");
	replace1.push("ך"); replace2.push("ܟ");
	replace1.push("ל"); replace2.push("ܠ");
	replace1.push("מ"); replace2.push("ܡ");
	replace1.push("ם"); replace2.push("ܡ");
	replace1.push("נ"); replace2.push("ܢ");
	replace1.push("ן"); replace2.push("ܢ");
	replace1.push("ס"); replace2.push("ܣ");
	replace1.push("ע"); replace2.push("ܥ");
	replace1.push("פ"); replace2.push("ܦ");
	replace1.push("ף"); replace2.push("ܦ");
	replace1.push("צ"); replace2.push("ܨ");
	replace1.push("ץ"); replace2.push("ܨ");
	replace1.push("ק"); replace2.push("ܩ");
	replace1.push("ר"); replace2.push("ܪ");
	replace1.push("ש"); replace2.push("ܫ");
	replace1.push("ת"); replace2.push("ܬ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if ((replace1.includes(charArray[i+1]) === false && charArray[i] === "ס") || (diacritic.includes(charArray[i+1]) && replace1.includes(charArray[i+2]) === false && charArray[i] === "ס")) {
			charArray[i] = charArray[i].replace("ס", "ܤ");
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ܐ");
	replace1.push("ב"); replace2.push("ܒ");
	replace1.push("ג"); replace2.push("ܓ");
	replace1.push("ד"); replace2.push("ܕ");
	replace1.push("ה"); replace2.push("ܗ");
	replace1.push("ו"); replace2.push("ܘ");
	replace1.push("ז"); replace2.push("ܙ");
	replace1.push("ח"); replace2.push("ܚ");
	replace1.push("ט"); replace2.push("ܛ");
	replace1.push("י"); replace2.push("ܝ");
	replace1.push("כ"); replace2.push("ܟ");
	replace1.push("ל"); replace2.push("ܠ");
	replace1.push("מ"); replace2.push("ܡ");
	replace1.push("נ"); replace2.push("ܢ");
	replace1.push("ס"); replace2.push("ܣ");
	replace1.push("ס"); replace2.push("ܤ");
	replace1.push("ע"); replace2.push("ܥ");
	replace1.push("פ"); replace2.push("ܦ");
	replace1.push("פ"); replace2.push("ܧ");
	replace1.push("צ"); replace2.push("ܨ");
	replace1.push("ק"); replace2.push("ܩ");
	replace1.push("ר"); replace2.push("ܪ");
	replace1.push("ש"); replace2.push("ܫ");
	replace1.push("ת"); replace2.push("ܬ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "ܟ") {charArray[i] = charArray[i].replace("ܟ", "ך");}
			if (charArray[i] === "ܡ") {charArray[i] = charArray[i].replace("ܡ", "ם");}
			if (charArray[i] === "ܢ") {charArray[i] = charArray[i].replace("ܢ", "ן");}
			if (charArray[i] === "ܦ") {charArray[i] = charArray[i].replace("ܦ", "ף");}
			if (charArray[i] === "ܧ") {charArray[i] = charArray[i].replace("ܧ", "ף");}
			if (charArray[i] === "ܨ") {charArray[i] = charArray[i].replace("ܨ", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
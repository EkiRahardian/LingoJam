const note = "";
const script = "Samaritan";
const subtitle = "ࠁࠓࠅࠊࠉࠌ ࠄࠁࠀࠉࠌ";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("ࠀ");
letters1.push("ב"); letters2.push("ࠁ");
letters1.push("ג"); letters2.push("ࠂ");
letters1.push("ד"); letters2.push("ࠃ");
letters1.push("ה"); letters2.push("ࠄ");
letters1.push("ו"); letters2.push("ࠅ");
letters1.push("ז"); letters2.push("ࠆ");
letters1.push("ח"); letters2.push("ࠇ");
letters1.push("ט"); letters2.push("ࠈ");
letters1.push("י"); letters2.push("ࠉ");
letters1.push("כ/ך"); letters2.push("ࠊ");
letters1.push("ל"); letters2.push("ࠋ");
letters1.push("מ/ם"); letters2.push("ࠌ");
letters1.push("נ/ן"); letters2.push("ࠍ");
letters1.push("ס"); letters2.push("ࠎ");
letters1.push("ע"); letters2.push("ࠏ");
letters1.push("פ/ף"); letters2.push("ࠐ");
letters1.push("צ/ץ"); letters2.push("ࠑ");
letters1.push("ק"); letters2.push("ࠒ");
letters1.push("ר"); letters2.push("ࠓ");
letters1.push("ש"); letters2.push("ࠔ");
letters1.push("ת"); letters2.push("ࠕ");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ࠀ");
	replace1.push("ב"); replace2.push("ࠁ");
	replace1.push("ג"); replace2.push("ࠂ");
	replace1.push("ד"); replace2.push("ࠃ");
	replace1.push("ה"); replace2.push("ࠄ");
	replace1.push("ו"); replace2.push("ࠅ");
	replace1.push("ז"); replace2.push("ࠆ");
	replace1.push("ח"); replace2.push("ࠇ");
	replace1.push("ט"); replace2.push("ࠈ");
	replace1.push("י"); replace2.push("ࠉ");
	replace1.push("כ"); replace2.push("ࠊ");
	replace1.push("ל"); replace2.push("ࠋ");
	replace1.push("מ"); replace2.push("ࠌ");
	replace1.push("נ"); replace2.push("ࠍ");
	replace1.push("ס"); replace2.push("ࠎ");
	replace1.push("ע"); replace2.push("ࠏ");
	replace1.push("פ"); replace2.push("ࠐ");
	replace1.push("צ"); replace2.push("ࠑ");
	replace1.push("ק"); replace2.push("ࠒ");
	replace1.push("ר"); replace2.push("ࠓ");
	replace1.push("ש"); replace2.push("ࠔ");
	replace1.push("ת"); replace2.push("ࠕ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "ࠊ");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "ࠌ");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "ࠍ");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "ࠐ");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "ࠑ");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ࠀ");
	replace1.push("ב"); replace2.push("ࠁ");
	replace1.push("ג"); replace2.push("ࠂ");
	replace1.push("ד"); replace2.push("ࠃ");
	replace1.push("ה"); replace2.push("ࠄ");
	replace1.push("ו"); replace2.push("ࠅ");
	replace1.push("ז"); replace2.push("ࠆ");
	replace1.push("ח"); replace2.push("ࠇ");
	replace1.push("ט"); replace2.push("ࠈ");
	replace1.push("י"); replace2.push("ࠉ");
	replace1.push("כ"); replace2.push("ࠊ");
	replace1.push("ל"); replace2.push("ࠋ");
	replace1.push("מ"); replace2.push("ࠌ");
	replace1.push("נ"); replace2.push("ࠍ");
	replace1.push("ס"); replace2.push("ࠎ");
	replace1.push("ע"); replace2.push("ࠏ");
	replace1.push("פ"); replace2.push("ࠐ");
	replace1.push("צ"); replace2.push("ࠑ");
	replace1.push("ק"); replace2.push("ࠒ");
	replace1.push("ר"); replace2.push("ࠓ");
	replace1.push("ש"); replace2.push("ࠔ");
	replace1.push("ת"); replace2.push("ࠕ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "ࠊ") {charArray[i] = charArray[i].replace("ࠊ", "ך");}
			if (charArray[i] === "ࠌ") {charArray[i] = charArray[i].replace("ࠌ", "ם");}
			if (charArray[i] === "ࠍ") {charArray[i] = charArray[i].replace("ࠍ", "ן");}
			if (charArray[i] === "ࠐ") {charArray[i] = charArray[i].replace("ࠐ", "ף");}
			if (charArray[i] === "ࠑ") {charArray[i] = charArray[i].replace("ࠑ", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
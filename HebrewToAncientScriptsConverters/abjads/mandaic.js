const note = "";
const script = "Mandaic";
const subtitle = "ࡁࡓࡅࡊࡉࡌ ࡄࡁࡀࡉࡌ";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("ࡀ");
letters1.push("ב"); letters2.push("ࡁ");
letters1.push("ג"); letters2.push("ࡂ");
letters1.push("ד"); letters2.push("ࡃ");
letters1.push("ה"); letters2.push("ࡄ");
letters1.push("ו"); letters2.push("ࡅ"); 
letters1.push("ז"); letters2.push("ࡆ");
letters1.push("ח"); letters2.push("ࡇ");
letters1.push("ט"); letters2.push("ࡈ");
letters1.push("י"); letters2.push("ࡉ");
letters1.push("כ/ך"); letters2.push("ࡊ");
letters1.push("ל"); letters2.push("ࡋ");
letters1.push("מ/ם"); letters2.push("ࡌ");
letters1.push("נ/ן"); letters2.push("ࡍ");
letters1.push("ס"); letters2.push("ࡎ");
letters1.push("ע"); letters2.push("ࡏ");
letters1.push("פ/ף"); letters2.push("ࡐ");
letters1.push("צ/ץ"); letters2.push("ࡑ");
letters1.push("ק"); letters2.push("ࡒ");
letters1.push("ר"); letters2.push("ࡓ");
letters1.push("ש"); letters2.push("ࡔ");
letters1.push("ת"); letters2.push("ࡕ");
letters1.push("ד׳"); letters2.push("ࡖ");
letters1.push("ע׳"); letters2.push("ࡘ");
letters1.push("כד׳"); letters2.push("ࡗ");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ࡀ");
	replace1.push("ב"); replace2.push("ࡁ");
	replace1.push("ג"); replace2.push("ࡂ");
	replace1.push("ד"); replace2.push("ࡃ");
	replace1.push("ה"); replace2.push("ࡄ");
	replace1.push("ו"); replace2.push("ࡅ");
	replace1.push("ז"); replace2.push("ࡆ");
	replace1.push("ח"); replace2.push("ࡇ");
	replace1.push("ט"); replace2.push("ࡈ");
	replace1.push("י"); replace2.push("ࡉ");
	replace1.push("כ"); replace2.push("ࡊ");
	replace1.push("ל"); replace2.push("ࡋ");
	replace1.push("מ"); replace2.push("ࡌ");
	replace1.push("נ"); replace2.push("ࡍ");
	replace1.push("ס"); replace2.push("ࡎ");
	replace1.push("ע"); replace2.push("ࡏ");
	replace1.push("פ"); replace2.push("ࡐ");
	replace1.push("צ"); replace2.push("ࡑ");
	replace1.push("ק"); replace2.push("ࡒ");
	replace1.push("ר"); replace2.push("ࡓ");
	replace1.push("ש"); replace2.push("ࡔ");
	replace1.push("ת"); replace2.push("ࡕ");
	replace1.push("ד׳"); replace2.push("ࡖ");
	replace1.push("ע׳"); replace2.push("ࡘ");
	replace1.push("כד׳"); replace2.push("ࡗ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i+1] === "׳") {
			if (charArray[i] === "ד") {
				charArray[i] = charArray[i].replace("ד", "ࡖ");
				charArray[i+1] = charArray[i+1].replace("׳", "");
			}
			if (charArray[i] === "ע") {
				charArray[i] = charArray[i].replace("ע", "ࡘ");
				charArray[i+1] = charArray[i+1].replace("׳", "");
			}
			else {
				charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
			}
		}
		if (charArray[i] === "כ" && charArray[i+1] === "ד" && charArray[i+2] === "׳") {
			charArray[i] = charArray[i].replace("כ", "ࡗ");
			charArray[i+1] = charArray[i+1].replace("ד", "");
			charArray[i+2] = charArray[i+2].replace("׳", "");
		}
		if (charArray[i] === "ך" && charArray[i+1] === "ד" && charArray[i+2] === "׳") {
			charArray[i] = charArray[i].replace("ך", "ࡗ");
			charArray[i+1] = charArray[i+1].replace("ד", "");
			charArray[i+2] = charArray[i+2].replace("׳", "");
		}
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "ࡊ");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "ࡌ");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "ࡍ");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "ࡐ");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "ࡑ");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("ࡀ");
	replace1.push("ב"); replace2.push("ࡁ");
	replace1.push("ג"); replace2.push("ࡂ");
	replace1.push("ד"); replace2.push("ࡃ");
	replace1.push("ה"); replace2.push("ࡄ");
	replace1.push("ו"); replace2.push("ࡅ");
	replace1.push("ז"); replace2.push("ࡆ");
	replace1.push("ח"); replace2.push("ࡇ");
	replace1.push("ט"); replace2.push("ࡈ");
	replace1.push("י"); replace2.push("ࡉ");
	replace1.push("כ"); replace2.push("ࡊ");
	replace1.push("ל"); replace2.push("ࡋ");
	replace1.push("מ"); replace2.push("ࡌ");
	replace1.push("נ"); replace2.push("ࡍ");
	replace1.push("ס"); replace2.push("ࡎ");
	replace1.push("ע"); replace2.push("ࡏ");
	replace1.push("פ"); replace2.push("ࡐ");
	replace1.push("צ"); replace2.push("ࡑ");
	replace1.push("ק"); replace2.push("ࡒ");
	replace1.push("ר"); replace2.push("ࡓ");
	replace1.push("ש"); replace2.push("ࡔ");
	replace1.push("ת"); replace2.push("ࡕ");
	replace1.push("ד׳"); replace2.push("ࡖ");
	replace1.push("ע׳"); replace2.push("ࡘ");
	replace1.push("כד׳"); replace2.push("ࡗ");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "ࡊ") {charArray[i] = charArray[i].replace("ࡊ", "ך");}
			if (charArray[i] === "ࡌ") {charArray[i] = charArray[i].replace("ࡌ", "ם");}
			if (charArray[i] === "ࡍ") {charArray[i] = charArray[i].replace("ࡍ", "ן");}
			if (charArray[i] === "ࡐ") {charArray[i] = charArray[i].replace("ࡐ", "ף");}
			if (charArray[i] === "ࡑ") {charArray[i] = charArray[i].replace("ࡑ", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}

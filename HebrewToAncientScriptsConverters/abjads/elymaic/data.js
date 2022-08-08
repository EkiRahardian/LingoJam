const note = "";
const script = "Elymaic";
const subtitle = "𐿡𐿳𐿥𐿪𐿩𐿬 𐿤𐿡𐿠𐿩𐿬";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐿠");
letters1.push("ב"); letters2.push("𐿡");
letters1.push("ג"); letters2.push("𐿢");
letters1.push("ד"); letters2.push("𐿣");
letters1.push("ה"); letters2.push("𐿤");
letters1.push("ו"); letters2.push("𐿥"); 
letters1.push("ז"); letters2.push("𐿦");
letters1.push("ח"); letters2.push("𐿧");
letters1.push("ט"); letters2.push("𐿨");
letters1.push("י"); letters2.push("𐿩");
letters1.push("כ/ך"); letters2.push("𐿪");
letters1.push("ל"); letters2.push("𐿫");
letters1.push("מ/ם"); letters2.push("𐿬");
letters1.push("נ/ן"); letters2.push("𐿭");
letters1.push("ס"); letters2.push("𐿮");
letters1.push("ע"); letters2.push("𐿯");
letters1.push("פ/ף"); letters2.push("𐿰");
letters1.push("צ/ץ"); letters2.push("𐿱");
letters1.push("ק"); letters2.push("𐿲");
letters1.push("ר"); letters2.push("𐿳");
letters1.push("ש"); letters2.push("𐿴");
letters1.push("ת"); letters2.push("𐿵");
letters1.push("זי"); letters2.push("𐿶");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("זי"); replace2.push("𐿶");
	replace1.push("א"); replace2.push("𐿠");
	replace1.push("ב"); replace2.push("𐿡");
	replace1.push("ג"); replace2.push("𐿢");
	replace1.push("ד"); replace2.push("𐿣");
	replace1.push("ה"); replace2.push("𐿤");
	replace1.push("ו"); replace2.push("𐿥");
	replace1.push("ז"); replace2.push("𐿦");
	replace1.push("ח"); replace2.push("𐿧");
	replace1.push("ט"); replace2.push("𐿨");
	replace1.push("י"); replace2.push("𐿩");
	replace1.push("כ"); replace2.push("𐿪");
	replace1.push("ל"); replace2.push("𐿫");
	replace1.push("מ"); replace2.push("𐿬");
	replace1.push("נ"); replace2.push("𐿭");
	replace1.push("ס"); replace2.push("𐿮");
	replace1.push("ע"); replace2.push("𐿯");
	replace1.push("פ"); replace2.push("𐿰");
	replace1.push("צ"); replace2.push("𐿱");
	replace1.push("ק"); replace2.push("𐿲");
	replace1.push("ר"); replace2.push("𐿳");
	replace1.push("ש"); replace2.push("𐿴");
	replace1.push("ת"); replace2.push("𐿵");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ז" && charArray[i+1] === "י" ) {
			charArray[i] = charArray[i].replace("ז", "𐿶");
			charArray[i+1] = charArray[i+1].replace("י", "");
			i++;
		}
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐿪");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐿬");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐿭");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐿰");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐿱");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("זי"); replace2.push("𐿶");
	replace1.push("א"); replace2.push("𐿠");
	replace1.push("ב"); replace2.push("𐿡");
	replace1.push("ג"); replace2.push("𐿢");
	replace1.push("ד"); replace2.push("𐿣");
	replace1.push("ה"); replace2.push("𐿤");
	replace1.push("ו"); replace2.push("𐿥");
	replace1.push("ז"); replace2.push("𐿦");
	replace1.push("ח"); replace2.push("𐿧");
	replace1.push("ט"); replace2.push("𐿨");
	replace1.push("י"); replace2.push("𐿩");
	replace1.push("כ"); replace2.push("𐿪");
	replace1.push("ל"); replace2.push("𐿫");
	replace1.push("מ"); replace2.push("𐿬");
	replace1.push("נ"); replace2.push("𐿭");
	replace1.push("ס"); replace2.push("𐿮");
	replace1.push("ע"); replace2.push("𐿯");
	replace1.push("פ"); replace2.push("𐿰");
	replace1.push("צ"); replace2.push("𐿱");
	replace1.push("ק"); replace2.push("𐿲");
	replace1.push("ר"); replace2.push("𐿳");
	replace1.push("ש"); replace2.push("𐿴");
	replace1.push("ת"); replace2.push("𐿵");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐿪") {charArray[i] = charArray[i].replace("𐿪", "ך");}
			if (charArray[i] === "𐿬") {charArray[i] = charArray[i].replace("𐿬", "ם");}
			if (charArray[i] === "𐿭") {charArray[i] = charArray[i].replace("𐿭", "ן");}
			if (charArray[i] === "𐿰") {charArray[i] = charArray[i].replace("𐿰", "ף");}
			if (charArray[i] === "𐿱") {charArray[i] = charArray[i].replace("𐿱", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
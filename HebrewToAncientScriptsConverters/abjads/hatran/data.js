const note = '<p>Notes: The letter "Daleth" and "Resh" are written in one glyph in Hatran. Dot has been added to distinguish between the two.</p>';
const script = "Hatran";
const subtitle = "𐣡𐣣ׄ𐣥𐣪𐣩𐣬 𐣤𐣡𐣠𐣩𐣬";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐣠");
letters1.push("ב"); letters2.push("𐣡");
letters1.push("ג"); letters2.push("𐣢");
letters1.push("ד"); letters2.push("𐣣ּ");
letters1.push("ה"); letters2.push("𐣤");
letters1.push("ו"); letters2.push("𐣥"); 
letters1.push("ז"); letters2.push("𐣦");
letters1.push("ח"); letters2.push("𐣧");
letters1.push("ט"); letters2.push("𐣨");
letters1.push("י"); letters2.push("𐣩");
letters1.push("כ/ך"); letters2.push("𐣪");
letters1.push("ל"); letters2.push("𐣫");
letters1.push("מ/ם"); letters2.push("𐣬");
letters1.push("נ/ן"); letters2.push("𐣭");
letters1.push("ס"); letters2.push("𐣮");
letters1.push("ע"); letters2.push("𐣯");
letters1.push("פ/ף"); letters2.push("𐣰");
letters1.push("צ/ץ"); letters2.push("𐣱");
letters1.push("ק"); letters2.push("𐣲");
letters1.push("ר"); letters2.push("𐣣ׄ");
letters1.push("ש"); letters2.push("𐣴");
letters1.push("ת"); letters2.push("𐣵");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐣠");
	replace1.push("ב"); replace2.push("𐣡");
	replace1.push("ג"); replace2.push("𐣢");
	replace1.push("ד"); replace2.push("𐣣ּ");
	replace1.push("ה"); replace2.push("𐣤");
	replace1.push("ו"); replace2.push("𐣥");
	replace1.push("ז"); replace2.push("𐣦");
	replace1.push("ח"); replace2.push("𐣧");
	replace1.push("ט"); replace2.push("𐣨");
	replace1.push("י"); replace2.push("𐣩");
	replace1.push("כ"); replace2.push("𐣪");
	replace1.push("ל"); replace2.push("𐣫");
	replace1.push("מ"); replace2.push("𐣬");
	replace1.push("נ"); replace2.push("𐣭");
	replace1.push("ס"); replace2.push("𐣮");
	replace1.push("ע"); replace2.push("𐣯");
	replace1.push("פ"); replace2.push("𐣰");
	replace1.push("צ"); replace2.push("𐣱");
	replace1.push("ק"); replace2.push("𐣲");
	replace1.push("ר"); replace2.push("𐣣ׄ");
	replace1.push("ש"); replace2.push("𐣴");
	replace1.push("ת"); replace2.push("𐣵");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐣪");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐣬");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐣭");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐣰");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐣱");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐣠");
	replace1.push("ב"); replace2.push("𐣡");
	replace1.push("ג"); replace2.push("𐣢");
	replace1.push("ד"); replace2.push("𐣣ּ");
	replace1.push("ה"); replace2.push("𐣤");
	replace1.push("ו"); replace2.push("𐣥");
	replace1.push("ז"); replace2.push("𐣦");
	replace1.push("ח"); replace2.push("𐣧");
	replace1.push("ט"); replace2.push("𐣨");
	replace1.push("י"); replace2.push("𐣩");
	replace1.push("כ"); replace2.push("𐣪");
	replace1.push("ל"); replace2.push("𐣫");
	replace1.push("מ"); replace2.push("𐣬");
	replace1.push("נ"); replace2.push("𐣭");
	replace1.push("ס"); replace2.push("𐣮");
	replace1.push("ע"); replace2.push("𐣯");
	replace1.push("פ"); replace2.push("𐣰");
	replace1.push("צ"); replace2.push("𐣱");
	replace1.push("ק"); replace2.push("𐣲");
	replace1.push("ר"); replace2.push("𐣣ׄ");
	replace1.push("ש"); replace2.push("𐣴");
	replace1.push("ת"); replace2.push("𐣵");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "𐣣") {
			if (charArray[i+1] === "ּ") {charArray[i] = charArray[i].replace("𐣣", "ד"); charArray[i+1] = charArray[i+1].replace("ּ", "");}
			if (charArray[i+1] === "ׄ") {charArray[i] = charArray[i].replace("𐣣", "ר"); charArray[i+1] = charArray[i+1].replace("ׄ", "");}
			else {
				charArray[i] = charArray[i].replace("𐣣", "?");
			}
		}
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐣪") {charArray[i] = charArray[i].replace("𐣪", "ך");}
			if (charArray[i] === "𐣬") {charArray[i] = charArray[i].replace("𐣬", "ם");}
			if (charArray[i] === "𐣭") {charArray[i] = charArray[i].replace("𐣭", "ן");}
			if (charArray[i] === "𐣰") {charArray[i] = charArray[i].replace("𐣰", "ף");}
			if (charArray[i] === "𐣱") {charArray[i] = charArray[i].replace("𐣱", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}

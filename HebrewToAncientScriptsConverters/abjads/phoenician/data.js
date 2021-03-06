const note = "";
const script = "Phoenician";
const subtitle = "𐤁𐤓𐤅𐤊𐤉𐤌 𐤄𐤁𐤀𐤉𐤌";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐤀");
letters1.push("ב"); letters2.push("𐤁");
letters1.push("ג"); letters2.push("𐤂");
letters1.push("ד"); letters2.push("𐤃");
letters1.push("ה"); letters2.push("𐤄");
letters1.push("ו"); letters2.push("𐤅");
letters1.push("ז"); letters2.push("𐤆");
letters1.push("ח"); letters2.push("𐤇");
letters1.push("ט"); letters2.push("𐤈");
letters1.push("י"); letters2.push("𐤉");
letters1.push("כ/ך"); letters2.push("𐤊");
letters1.push("ל"); letters2.push("𐤋");
letters1.push("מ/ם"); letters2.push("𐤌");
letters1.push("נ/ן"); letters2.push("𐤍");
letters1.push("ס"); letters2.push("𐤎");
letters1.push("ע"); letters2.push("𐤏");
letters1.push("פ/ף"); letters2.push("𐤐");
letters1.push("צ/ץ"); letters2.push("𐤑");
letters1.push("ק"); letters2.push("𐤒");
letters1.push("ר"); letters2.push("𐤓");
letters1.push("ש"); letters2.push("𐤔");
letters1.push("ת"); letters2.push("𐤕");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐤀");
	replace1.push("ב"); replace2.push("𐤁");
	replace1.push("ג"); replace2.push("𐤂");
	replace1.push("ד"); replace2.push("𐤃");
	replace1.push("ה"); replace2.push("𐤄");
	replace1.push("ו"); replace2.push("𐤅");
	replace1.push("ז"); replace2.push("𐤆");
	replace1.push("ח"); replace2.push("𐤇");
	replace1.push("ט"); replace2.push("𐤈");
	replace1.push("י"); replace2.push("𐤉");
	replace1.push("כ"); replace2.push("𐤊");
	replace1.push("ל"); replace2.push("𐤋");
	replace1.push("מ"); replace2.push("𐤌");
	replace1.push("נ"); replace2.push("𐤍");
	replace1.push("ס"); replace2.push("𐤎");
	replace1.push("ע"); replace2.push("𐤏");
	replace1.push("פ"); replace2.push("𐤐");
	replace1.push("צ"); replace2.push("𐤑");
	replace1.push("ק"); replace2.push("𐤒");
	replace1.push("ר"); replace2.push("𐤓");
	replace1.push("ש"); replace2.push("𐤔");
	replace1.push("ת"); replace2.push("𐤕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐤊");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐤌");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐤍");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐤐");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐤑");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐤀");
	replace1.push("ב"); replace2.push("𐤁");
	replace1.push("ג"); replace2.push("𐤂");
	replace1.push("ד"); replace2.push("𐤃");
	replace1.push("ה"); replace2.push("𐤄");
	replace1.push("ו"); replace2.push("𐤅");
	replace1.push("ז"); replace2.push("𐤆");
	replace1.push("ח"); replace2.push("𐤇");
	replace1.push("ט"); replace2.push("𐤈");
	replace1.push("י"); replace2.push("𐤉");
	replace1.push("כ"); replace2.push("𐤊");
	replace1.push("ל"); replace2.push("𐤋");
	replace1.push("מ"); replace2.push("𐤌");
	replace1.push("נ"); replace2.push("𐤍");
	replace1.push("ס"); replace2.push("𐤎");
	replace1.push("ע"); replace2.push("𐤏");
	replace1.push("פ"); replace2.push("𐤐");
	replace1.push("צ"); replace2.push("𐤑");
	replace1.push("ק"); replace2.push("𐤒");
	replace1.push("ר"); replace2.push("𐤓");
	replace1.push("ש"); replace2.push("𐤔");
	replace1.push("ת"); replace2.push("𐤕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐤊") {charArray[i] = charArray[i].replace("𐤊", "ך");}
			if (charArray[i] === "𐤌") {charArray[i] = charArray[i].replace("𐤌", "ם");}
			if (charArray[i] === "𐤍") {charArray[i] = charArray[i].replace("𐤍", "ן");}
			if (charArray[i] === "𐤐") {charArray[i] = charArray[i].replace("𐤐", "ף");}
			if (charArray[i] === "𐤑") {charArray[i] = charArray[i].replace("𐤑", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
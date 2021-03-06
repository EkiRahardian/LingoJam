const note = "";
const script = "Imperial Aramaic";
const subtitle = "𐡁𐡓𐡅𐡊𐡉𐡌 𐡄𐡁𐡀𐡉𐡌";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐡀");
letters1.push("ב"); letters2.push("𐡁");
letters1.push("ג"); letters2.push("𐡂");
letters1.push("ד"); letters2.push("𐡃");
letters1.push("ה"); letters2.push("𐡄");
letters1.push("ו"); letters2.push("𐡅"); 
letters1.push("ז"); letters2.push("𐡆");
letters1.push("ח"); letters2.push("𐡇");
letters1.push("ט"); letters2.push("𐡈");
letters1.push("י"); letters2.push("𐡉");
letters1.push("כ/ך"); letters2.push("𐡊");
letters1.push("ל"); letters2.push("𐡋");
letters1.push("מ/ם"); letters2.push("𐡌");
letters1.push("נ/ן"); letters2.push("𐡍");
letters1.push("ס"); letters2.push("𐡎");
letters1.push("ע"); letters2.push("𐡏");
letters1.push("פ/ף"); letters2.push("𐡐");
letters1.push("צ/ץ"); letters2.push("𐡑");
letters1.push("ק"); letters2.push("𐡒");
letters1.push("ר"); letters2.push("𐡓");
letters1.push("ש"); letters2.push("𐡔");
letters1.push("ת"); letters2.push("𐡕");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐡀");
	replace1.push("ב"); replace2.push("𐡁");
	replace1.push("ג"); replace2.push("𐡂");
	replace1.push("ד"); replace2.push("𐡃");
	replace1.push("ה"); replace2.push("𐡄");
	replace1.push("ו"); replace2.push("𐡅");
	replace1.push("ז"); replace2.push("𐡆");
	replace1.push("ח"); replace2.push("𐡇");
	replace1.push("ט"); replace2.push("𐡈");
	replace1.push("י"); replace2.push("𐡉");
	replace1.push("כ"); replace2.push("𐡊");
	replace1.push("ל"); replace2.push("𐡋");
	replace1.push("מ"); replace2.push("𐡌");
	replace1.push("נ"); replace2.push("𐡍");
	replace1.push("ס"); replace2.push("𐡎");
	replace1.push("ע"); replace2.push("𐡏");
	replace1.push("פ"); replace2.push("𐡐");
	replace1.push("צ"); replace2.push("𐡑");
	replace1.push("ק"); replace2.push("𐡒");
	replace1.push("ר"); replace2.push("𐡓");
	replace1.push("ש"); replace2.push("𐡔");
	replace1.push("ת"); replace2.push("𐡕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐡊");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐡌");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐡍");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐡐");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐡑");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐡀");
	replace1.push("ב"); replace2.push("𐡁");
	replace1.push("ג"); replace2.push("𐡂");
	replace1.push("ד"); replace2.push("𐡃");
	replace1.push("ה"); replace2.push("𐡄");
	replace1.push("ו"); replace2.push("𐡅");
	replace1.push("ז"); replace2.push("𐡆");
	replace1.push("ח"); replace2.push("𐡇");
	replace1.push("ט"); replace2.push("𐡈");
	replace1.push("י"); replace2.push("𐡉");
	replace1.push("כ"); replace2.push("𐡊");
	replace1.push("ל"); replace2.push("𐡋");
	replace1.push("מ"); replace2.push("𐡌");
	replace1.push("נ"); replace2.push("𐡍");
	replace1.push("ס"); replace2.push("𐡎");
	replace1.push("ע"); replace2.push("𐡏");
	replace1.push("פ"); replace2.push("𐡐");
	replace1.push("צ"); replace2.push("𐡑");
	replace1.push("ק"); replace2.push("𐡒");
	replace1.push("ר"); replace2.push("𐡓");
	replace1.push("ש"); replace2.push("𐡔");
	replace1.push("ת"); replace2.push("𐡕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐡊") {charArray[i] = charArray[i].replace("𐡊", "ך");}
			if (charArray[i] === "𐡌") {charArray[i] = charArray[i].replace("𐡌", "ם");}
			if (charArray[i] === "𐡍") {charArray[i] = charArray[i].replace("𐡍", "ן");}
			if (charArray[i] === "𐡐") {charArray[i] = charArray[i].replace("𐡐", "ף");}
			if (charArray[i] === "𐡑") {charArray[i] = charArray[i].replace("𐡑", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
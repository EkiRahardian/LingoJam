const note = "";
const script = "Inscriptional Parthian";
const subtitle = "𐭁𐭓𐭅𐭊𐭉𐭌 𐭄𐭁𐭀𐭉𐭌";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐭀");
letters1.push("ב"); letters2.push("𐭁");
letters1.push("ג"); letters2.push("𐭂");
letters1.push("ד"); letters2.push("𐭃");
letters1.push("ה"); letters2.push("𐭄");
letters1.push("ו"); letters2.push("𐭅");
letters1.push("ז"); letters2.push("𐭆");
letters1.push("ח"); letters2.push("𐭇");
letters1.push("ט"); letters2.push("𐭈");
letters1.push("י"); letters2.push("𐭉");
letters1.push("כ/ך"); letters2.push("𐭊");
letters1.push("ל"); letters2.push("𐭋");
letters1.push("מ/ם"); letters2.push("𐭌");
letters1.push("נ/ן"); letters2.push("𐭍");
letters1.push("ס"); letters2.push("𐭎");
letters1.push("ע"); letters2.push("𐭏");
letters1.push("פ/ף"); letters2.push("𐭐");
letters1.push("צ/ץ"); letters2.push("𐭑");
letters1.push("ק"); letters2.push("𐭒");
letters1.push("ר"); letters2.push("𐭓");
letters1.push("ש"); letters2.push("𐭔");
letters1.push("ת"); letters2.push("𐭕");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐭀");
	replace1.push("ב"); replace2.push("𐭁");
	replace1.push("ג"); replace2.push("𐭂");
	replace1.push("ד"); replace2.push("𐭃");
	replace1.push("ה"); replace2.push("𐭄");
	replace1.push("ו"); replace2.push("𐭅");
	replace1.push("ז"); replace2.push("𐭆");
	replace1.push("ח"); replace2.push("𐭇");
	replace1.push("ט"); replace2.push("𐭈");
	replace1.push("י"); replace2.push("𐭉");
	replace1.push("כ"); replace2.push("𐭊");
	replace1.push("ל"); replace2.push("𐭋");
	replace1.push("מ"); replace2.push("𐭌");
	replace1.push("נ"); replace2.push("𐭍");
	replace1.push("ס"); replace2.push("𐭎");
	replace1.push("ע"); replace2.push("𐭏");
	replace1.push("פ"); replace2.push("𐭐");
	replace1.push("צ"); replace2.push("𐭑");
	replace1.push("ק"); replace2.push("𐭒");
	replace1.push("ר"); replace2.push("𐭓");
	replace1.push("ש"); replace2.push("𐭔");
	replace1.push("ת"); replace2.push("𐭕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐭊");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐭌");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐭍");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐭐");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐭑");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐭀");
	replace1.push("ב"); replace2.push("𐭁");
	replace1.push("ג"); replace2.push("𐭂");
	replace1.push("ד"); replace2.push("𐭃");
	replace1.push("ה"); replace2.push("𐭄");
	replace1.push("ו"); replace2.push("𐭅");
	replace1.push("ז"); replace2.push("𐭆");
	replace1.push("ח"); replace2.push("𐭇");
	replace1.push("ט"); replace2.push("𐭈");
	replace1.push("י"); replace2.push("𐭉");
	replace1.push("כ"); replace2.push("𐭊");
	replace1.push("ל"); replace2.push("𐭋");
	replace1.push("מ"); replace2.push("𐭌");
	replace1.push("נ"); replace2.push("𐭍");
	replace1.push("ס"); replace2.push("𐭎");
	replace1.push("ע"); replace2.push("𐭏");
	replace1.push("פ"); replace2.push("𐭐");
	replace1.push("צ"); replace2.push("𐭑");
	replace1.push("ק"); replace2.push("𐭒");
	replace1.push("ר"); replace2.push("𐭓");
	replace1.push("ש"); replace2.push("𐭔");
	replace1.push("ת"); replace2.push("𐭕");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐭊") {charArray[i] = charArray[i].replace("𐭊", "ך");}
			if (charArray[i] === "𐭌") {charArray[i] = charArray[i].replace("𐭌", "ם");}
			if (charArray[i] === "𐭍") {charArray[i] = charArray[i].replace("𐭍", "ן");}
			if (charArray[i] === "𐭐") {charArray[i] = charArray[i].replace("𐭐", "ף");}
			if (charArray[i] === "𐭑") {charArray[i] = charArray[i].replace("𐭑", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
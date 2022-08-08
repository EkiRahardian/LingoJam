const note = "";
const script = "Palmyrene";
const subtitle = "𐡡𐡴𐡥𐡪𐡩𐡬 𐡤𐡡𐡠𐡩𐡬";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐡠");
letters1.push("ב"); letters2.push("𐡡");
letters1.push("ג"); letters2.push("𐡢");
letters1.push("ד"); letters2.push("𐡣");
letters1.push("ה"); letters2.push("𐡤");
letters1.push("ו"); letters2.push("𐡥");
letters1.push("ז"); letters2.push("𐡦");
letters1.push("ח"); letters2.push("𐡧");
letters1.push("ט"); letters2.push("𐡨");
letters1.push("י"); letters2.push("𐡩");
letters1.push("כ/ך"); letters2.push("𐡪");
letters1.push("ל"); letters2.push("𐡫");
letters1.push("מ/ם"); letters2.push("𐡬");
letters1.push("נ/ן"); letters2.push("𐡮/𐡭");
letters1.push("ס"); letters2.push("𐡯");
letters1.push("ע"); letters2.push("𐡰");
letters1.push("פ/ף"); letters2.push("𐡱");
letters1.push("צ/ץ"); letters2.push("𐡲");
letters1.push("ק"); letters2.push("𐡳");
letters1.push("ר"); letters2.push("𐡴");
letters1.push("ש"); letters2.push("𐡵");
letters1.push("ת"); letters2.push("𐡶");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐡠");
	replace1.push("ב"); replace2.push("𐡡");
	replace1.push("ג"); replace2.push("𐡢");
	replace1.push("ד"); replace2.push("𐡣");
	replace1.push("ה"); replace2.push("𐡤");
	replace1.push("ו"); replace2.push("𐡥");
	replace1.push("ז"); replace2.push("𐡦");
	replace1.push("ח"); replace2.push("𐡧");
	replace1.push("ט"); replace2.push("𐡨");
	replace1.push("י"); replace2.push("𐡩");
	replace1.push("כ"); replace2.push("𐡪");
	replace1.push("ך"); replace2.push("𐡪");
	replace1.push("ל"); replace2.push("𐡫");
	replace1.push("מ"); replace2.push("𐡬");
	replace1.push("ם"); replace2.push("𐡬");
	replace1.push("נ"); replace2.push("𐡮");
	replace1.push("ן"); replace2.push("𐡮");
	replace1.push("ס"); replace2.push("𐡯");
	replace1.push("ע"); replace2.push("𐡰");
	replace1.push("פ"); replace2.push("𐡱");
	replace1.push("ף"); replace2.push("𐡱");
	replace1.push("צ"); replace2.push("𐡲");
	replace1.push("ץ"); replace2.push("𐡲");
	replace1.push("ק"); replace2.push("𐡳");
	replace1.push("ר"); replace2.push("𐡴");
	replace1.push("ש"); replace2.push("𐡵");
	replace1.push("ת"); replace2.push("𐡶");
	replace1.push(...diacritic); replace2.push(...diacritic);
	const charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		charArray[i] = replaceLetters(equiv1, equiv2, charArray[i]);
		if (replace1.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace1.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "נ") {charArray[i] = charArray[i].replace("נ", "𐡭");}
			if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐡭");}
			else {charArray[i] = replaceLetters(replace1, replace2, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐡠");
	replace1.push("ב"); replace2.push("𐡡");
	replace1.push("ג"); replace2.push("𐡢");
	replace1.push("ד"); replace2.push("𐡣");
	replace1.push("ה"); replace2.push("𐡤");
	replace1.push("ו"); replace2.push("𐡥");
	replace1.push("ז"); replace2.push("𐡦");
	replace1.push("ח"); replace2.push("𐡧");
	replace1.push("ט"); replace2.push("𐡨");
	replace1.push("י"); replace2.push("𐡩");
	replace1.push("כ"); replace2.push("𐡪");
	replace1.push("ל"); replace2.push("𐡫");
	replace1.push("מ"); replace2.push("𐡬");
	replace1.push("נ"); replace2.push("𐡮");
	replace1.push("נ"); replace2.push("𐡭");
	replace1.push("ס"); replace2.push("𐡯");
	replace1.push("ע"); replace2.push("𐡰");
	replace1.push("פ"); replace2.push("𐡱");
	replace1.push("צ"); replace2.push("𐡲");
	replace1.push("ק"); replace2.push("𐡳");
	replace1.push("ר"); replace2.push("𐡴");
	replace1.push("ש"); replace2.push("𐡵");
	replace1.push("ת"); replace2.push("𐡶");
	replace1.push(...diacritic); replace2.push(...diacritic);
	const charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐡪") {charArray[i] = charArray[i].replace("𐡪", "ך");}
			if (charArray[i] === "𐡬") {charArray[i] = charArray[i].replace("𐡬", "ם");}
			if (charArray[i] === "𐡮") {charArray[i] = charArray[i].replace("𐡮", "ן");}
			if (charArray[i] === "𐡭") {charArray[i] = charArray[i].replace("𐡭", "ן");}
			if (charArray[i] === "𐡱") {charArray[i] = charArray[i].replace("𐡱", "ף");}
			if (charArray[i] === "𐡲") {charArray[i] = charArray[i].replace("𐡲", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}

const note = "";
const script = "Old South Arabian";
const subtitle = "𐩨𐩧𐩥𐩫𐩺𐩣 𐩠𐩨𐩱𐩺𐩣";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐩱");
letters1.push("ב"); letters2.push("𐩨");
letters1.push("ג"); letters2.push("𐩴");
letters1.push("ד"); letters2.push("𐩵");
letters1.push("ה"); letters2.push("𐩠");
letters1.push("ו"); letters2.push("𐩥");
letters1.push("ז"); letters2.push("𐩸");
letters1.push("ח"); letters2.push("𐩢");
letters1.push("ט"); letters2.push("𐩷");
letters1.push("י"); letters2.push("𐩺");
letters1.push("כ/ך"); letters2.push("𐩫");
letters1.push("ל"); letters2.push("𐩡");
letters1.push("מ/ם"); letters2.push("𐩣");
letters1.push("נ/ן"); letters2.push("𐩬");
letters1.push("ס"); letters2.push("𐩯");
letters1.push("ע"); letters2.push("𐩲");
letters1.push("פ/ף"); letters2.push("𐩰");
letters1.push("צ/ץ"); letters2.push("𐩮");
letters1.push("ק"); letters2.push("𐩤");
letters1.push("ר"); letters2.push("𐩧");
letters1.push("ש"); letters2.push("𐩦");
letters1.push("ת"); letters2.push("𐩩");
letters1.push("ת׳"); letters2.push("𐩻");
letters1.push("ח׳"); letters2.push("𐩭");
letters1.push("ד׳"); letters2.push("𐩹");
letters1.push("צ׳"); letters2.push("𐩳");
letters1.push("ט׳"); letters2.push("𐩼");
letters1.push("ע׳"); letters2.push("𐩶");
letters1.push("ס׳"); letters2.push("𐩪");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("ס׳"); replace2.push("𐩪");
	replace1.push("ת׳"); replace2.push("𐩻");
	replace1.push("ח׳"); replace2.push("𐩭");
	replace1.push("ד׳"); replace2.push("𐩹");
	replace1.push("צ׳"); replace2.push("𐩳");
	replace1.push("ט׳"); replace2.push("𐩼");
	replace1.push("ע׳"); replace2.push("𐩶");
	replace1.push("א"); replace2.push("𐩱");
	replace1.push("ב"); replace2.push("𐩨");
	replace1.push("ג"); replace2.push("𐩴");
	replace1.push("ד"); replace2.push("𐩵");
	replace1.push("ה"); replace2.push("𐩠");
	replace1.push("ו"); replace2.push("𐩥");
	replace1.push("ז"); replace2.push("𐩸");
	replace1.push("ח"); replace2.push("𐩢");
	replace1.push("ט"); replace2.push("𐩷");
	replace1.push("י"); replace2.push("𐩺");
	replace1.push("כ"); replace2.push("𐩫");
	replace1.push("ל"); replace2.push("𐩡");
	replace1.push("מ"); replace2.push("𐩣");
	replace1.push("נ"); replace2.push("𐩬");
	replace1.push("ס"); replace2.push("𐩯");
	replace1.push("ע"); replace2.push("𐩲");
	replace1.push("פ"); replace2.push("𐩰");
	replace1.push("צ"); replace2.push("𐩮");
	replace1.push("ק"); replace2.push("𐩤");
	replace1.push("ר"); replace2.push("𐩧");
	replace1.push("ש"); replace2.push("𐩦");
	replace1.push("ת"); replace2.push("𐩩");
	replace1.push(...diacritic); replace2.push(...diacritic);
	const charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		charArray[i] = replaceLetters(equiv1, equiv2, charArray[i]);
		if (charArray[i+1] === "׳") {
			if (charArray[i] === "ס") {charArray[i] = charArray[i].replace("ס", "𐩪"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ת") {charArray[i] = charArray[i].replace("ת", "𐩻"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ח") {charArray[i] = charArray[i].replace("ח", "𐩭"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ד") {charArray[i] = charArray[i].replace("ד", "𐩹"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "צ") {charArray[i] = charArray[i].replace("צ", "𐩳"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐩳"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ט") {charArray[i] = charArray[i].replace("ט", "𐩼"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ע") {charArray[i] = charArray[i].replace("ע", "𐩶"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			else {
				charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
			}
		}
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐩫");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐩣");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐩬");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐩰");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐩮");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("ס׳"); replace2.push("𐩪");
	replace1.push("ת׳"); replace2.push("𐩻");
	replace1.push("ח׳"); replace2.push("𐩭");
	replace1.push("ד׳"); replace2.push("𐩹");
	replace1.push("צ׳"); replace2.push("𐩳");
	replace1.push("ט׳"); replace2.push("𐩼");
	replace1.push("ע׳"); replace2.push("𐩶");
	replace1.push("א"); replace2.push("𐩱");
	replace1.push("ב"); replace2.push("𐩨");
	replace1.push("ג"); replace2.push("𐩴");
	replace1.push("ד"); replace2.push("𐩵");
	replace1.push("ה"); replace2.push("𐩠");
	replace1.push("ו"); replace2.push("𐩥");
	replace1.push("ז"); replace2.push("𐩸");
	replace1.push("ח"); replace2.push("𐩢");
	replace1.push("ט"); replace2.push("𐩷");
	replace1.push("י"); replace2.push("𐩺");
	replace1.push("כ"); replace2.push("𐩫");
	replace1.push("ל"); replace2.push("𐩡");
	replace1.push("מ"); replace2.push("𐩣");
	replace1.push("נ"); replace2.push("𐩬");
	replace1.push("ס"); replace2.push("𐩯");
	replace1.push("ע"); replace2.push("𐩲");
	replace1.push("פ"); replace2.push("𐩰");
	replace1.push("צ"); replace2.push("𐩮");
	replace1.push("ק"); replace2.push("𐩤");
	replace1.push("ר"); replace2.push("𐩧");
	replace1.push("ש"); replace2.push("𐩦");
	replace1.push("ת"); replace2.push("𐩩");
	replace1.push(...diacritic); replace2.push(...diacritic);
	const charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐩫") {charArray[i] = charArray[i].replace("𐩫", "ך");}
			if (charArray[i] === "𐩣") {charArray[i] = charArray[i].replace("𐩣", "ם");}
			if (charArray[i] === "𐩬") {charArray[i] = charArray[i].replace("𐩬", "ן");}
			if (charArray[i] === "𐩰") {charArray[i] = charArray[i].replace("𐩰", "ף");}
			if (charArray[i] === "𐩮") {charArray[i] = charArray[i].replace("𐩮", "ץ");}
			if (charArray[i] === "𐩳") {charArray[i] = charArray[i].replace("𐩳", "ץ׳");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}

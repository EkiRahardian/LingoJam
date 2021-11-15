const note = "";
const script = "Old North Arabian";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐪑");
letters1.push("ב"); letters2.push("𐪈");
letters1.push("ג"); letters2.push("𐪔");
letters1.push("ד"); letters2.push("𐪕");
letters1.push("ה"); letters2.push("𐪀");
letters1.push("ו"); letters2.push("𐪅");
letters1.push("ז"); letters2.push("𐪘");
letters1.push("ח"); letters2.push("𐪂");
letters1.push("ט"); letters2.push("𐪗");
letters1.push("י"); letters2.push("𐪚");
letters1.push("כ/ך"); letters2.push("𐪋");
letters1.push("ל"); letters2.push("𐪁");
letters1.push("מ/ם"); letters2.push("𐪃");
letters1.push("נ/ן"); letters2.push("𐪌");
letters1.push("ס"); letters2.push("𐪏");
letters1.push("ע"); letters2.push("𐪒");
letters1.push("פ/ף"); letters2.push("𐪐");
letters1.push("צ/ץ"); letters2.push("𐪎");
letters1.push("ק"); letters2.push("𐪄");
letters1.push("ר"); letters2.push("𐪇");
letters1.push("ש"); letters2.push("𐪆");
letters1.push("ת"); letters2.push("𐪉");
letters1.push("ת׳"); letters2.push("𐪛");
letters1.push("ח׳"); letters2.push("𐪍");
letters1.push("ד׳"); letters2.push("𐪙");
letters1.push("צ׳"); letters2.push("𐪓");
letters1.push("ט׳"); letters2.push("𐪜");
letters1.push("ע׳"); letters2.push("𐪖");
letters1.push("ס׳"); letters2.push("𐪊");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("ס׳"); replace2.push("𐪊");
	replace1.push("ת׳"); replace2.push("𐪛");
	replace1.push("ח׳"); replace2.push("𐪍");
	replace1.push("ד׳"); replace2.push("𐪙");
	replace1.push("צ׳"); replace2.push("𐪓");
	replace1.push("ט׳"); replace2.push("𐪜");
	replace1.push("ע׳"); replace2.push("𐪖");
	replace1.push("א"); replace2.push("𐪑");
	replace1.push("ב"); replace2.push("𐪈");
	replace1.push("ג"); replace2.push("𐪔");
	replace1.push("ד"); replace2.push("𐪕");
	replace1.push("ה"); replace2.push("𐪀");
	replace1.push("ו"); replace2.push("𐪅");
	replace1.push("ז"); replace2.push("𐪘");
	replace1.push("ח"); replace2.push("𐪂");
	replace1.push("ט"); replace2.push("𐪗");
	replace1.push("י"); replace2.push("𐪚");
	replace1.push("כ"); replace2.push("𐪋");
	replace1.push("ל"); replace2.push("𐪁");
	replace1.push("מ"); replace2.push("𐪃");
	replace1.push("נ"); replace2.push("𐪌");
	replace1.push("ס"); replace2.push("𐪏");
	replace1.push("ע"); replace2.push("𐪒");
	replace1.push("פ"); replace2.push("𐪐");
	replace1.push("צ"); replace2.push("𐪎");
	replace1.push("ק"); replace2.push("𐪄");
	replace1.push("ר"); replace2.push("𐪇");
	replace1.push("ש"); replace2.push("𐪆");
	replace1.push("ת"); replace2.push("𐪉");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i+1] === "׳") {
			if (charArray[i] === "ס") {charArray[i] = charArray[i].replace("ס", "𐪊"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ת") {charArray[i] = charArray[i].replace("ת", "𐪛"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ח") {charArray[i] = charArray[i].replace("ח", "𐪍"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ד") {charArray[i] = charArray[i].replace("ד", "𐪙"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "צ") {charArray[i] = charArray[i].replace("צ", "𐪓"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐪓"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ט") {charArray[i] = charArray[i].replace("ט", "𐪜"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			if (charArray[i] === "ע") {charArray[i] = charArray[i].replace("ע", "𐪖"); charArray[i+1] = charArray[i+1].replace("׳", "");}
			else {
				charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
			}
		}
		if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐪋");}
		if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐪃");}
		if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐪌");}
		if (charArray[i] === "ף") {charArray[i] = charArray[i].replace("ף", "𐪐");}
		if (charArray[i] === "ץ") {charArray[i] = charArray[i].replace("ץ", "𐪎");}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("ס׳"); replace2.push("𐪊");
	replace1.push("ת׳"); replace2.push("𐪛");
	replace1.push("ח׳"); replace2.push("𐪍");
	replace1.push("ד׳"); replace2.push("𐪙");
	replace1.push("צ׳"); replace2.push("𐪓");
	replace1.push("ט׳"); replace2.push("𐪜");
	replace1.push("ע׳"); replace2.push("𐪖");
	replace1.push("א"); replace2.push("𐪑");
	replace1.push("ב"); replace2.push("𐪈");
	replace1.push("ג"); replace2.push("𐪔");
	replace1.push("ד"); replace2.push("𐪕");
	replace1.push("ה"); replace2.push("𐪀");
	replace1.push("ו"); replace2.push("𐪅");
	replace1.push("ז"); replace2.push("𐪘");
	replace1.push("ח"); replace2.push("𐪂");
	replace1.push("ט"); replace2.push("𐪗");
	replace1.push("י"); replace2.push("𐪚");
	replace1.push("כ"); replace2.push("𐪋");
	replace1.push("ל"); replace2.push("𐪁");
	replace1.push("מ"); replace2.push("𐪃");
	replace1.push("נ"); replace2.push("𐪌");
	replace1.push("ס"); replace2.push("𐪏");
	replace1.push("ע"); replace2.push("𐪒");
	replace1.push("פ"); replace2.push("𐪐");
	replace1.push("צ"); replace2.push("𐪎");
	replace1.push("ק"); replace2.push("𐪄");
	replace1.push("ר"); replace2.push("𐪇");
	replace1.push("ש"); replace2.push("𐪆");
	replace1.push("ת"); replace2.push("𐪉");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐪋") {charArray[i] = charArray[i].replace("𐪋", "ך");}
			if (charArray[i] === "𐪃") {charArray[i] = charArray[i].replace("𐪃", "ם");}
			if (charArray[i] === "𐪌") {charArray[i] = charArray[i].replace("𐪌", "ן");}
			if (charArray[i] === "𐪐") {charArray[i] = charArray[i].replace("𐪐", "ף");}
			if (charArray[i] === "𐪎") {charArray[i] = charArray[i].replace("𐪎", "ץ");}
			if (charArray[i] === "𐪓") {charArray[i] = charArray[i].replace("𐪓", "ץ׳");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
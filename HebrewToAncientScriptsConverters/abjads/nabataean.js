const note = "";
const script = "Nabataean";
const subtitle = "𐢃𐢛𐢈𐢏𐢍𐢒 𐢇𐢃𐢁𐢍𐢒";
const letters1 = []; const letters2 = [];
letters1.push("א"); letters2.push("𐢁/𐢀");
letters1.push("ב"); letters2.push("𐢃/𐢂");
letters1.push("ג"); letters2.push("𐢄");
letters1.push("ד"); letters2.push("𐢅");
letters1.push("ה"); letters2.push("𐢇/𐢆");
letters1.push("ו"); letters2.push("𐢈");
letters1.push("ז"); letters2.push("𐢉");
letters1.push("ח"); letters2.push("𐢊");
letters1.push("ט"); letters2.push("𐢋");
letters1.push("י"); letters2.push("𐢍/𐢌");
letters1.push("כ/ך"); letters2.push("𐢏/𐢎");
letters1.push("ל"); letters2.push("𐢑/𐢐");
letters1.push("מ/ם"); letters2.push("𐢓/𐢒");
letters1.push("נ/ן"); letters2.push("𐢕/𐢔");
letters1.push("ס"); letters2.push("𐢖");
letters1.push("ע"); letters2.push("𐢗");
letters1.push("פ/ף"); letters2.push("𐢘");
letters1.push("צ/ץ"); letters2.push("𐢙");
letters1.push("ק"); letters2.push("𐢚");
letters1.push("ר"); letters2.push("𐢛");
letters1.push("ש"); letters2.push("𐢝/𐢜");
letters1.push("ת"); letters2.push("𐢞");
function firstTextEvent() {
	const replace1 = []; const replace2 = [];
	replace1.push("א"); replace2.push("𐢁");
	replace1.push("ב"); replace2.push("𐢃");
	replace1.push("ג"); replace2.push("𐢄");
	replace1.push("ד"); replace2.push("𐢅");
	replace1.push("ה"); replace2.push("𐢇");
	replace1.push("ו"); replace2.push("𐢈");
	replace1.push("ז"); replace2.push("𐢉");
	replace1.push("ח"); replace2.push("𐢊");
	replace1.push("ט"); replace2.push("𐢋");
	replace1.push("י"); replace2.push("𐢍");
	replace1.push("כ"); replace2.push("𐢏");
	replace1.push("ך"); replace2.push("𐢏");
	replace1.push("ל"); replace2.push("𐢑");
	replace1.push("מ"); replace2.push("𐢓");
	replace1.push("ם"); replace2.push("𐢓");
	replace1.push("נ"); replace2.push("𐢕");
	replace1.push("ן"); replace2.push("𐢕");
	replace1.push("ס"); replace2.push("𐢖");
	replace1.push("ע"); replace2.push("𐢗");
	replace1.push("פ"); replace2.push("𐢘");
	replace1.push("ף"); replace2.push("𐢘");
	replace1.push("צ"); replace2.push("𐢙");
	replace1.push("ץ"); replace2.push("𐢙");
	replace1.push("ק"); replace2.push("𐢚");
	replace1.push("ר"); replace2.push("𐢛");
	replace1.push("ש"); replace2.push("𐢝");
	replace1.push("ת"); replace2.push("𐢞");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (replace1.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace1.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "א") {charArray[i] = charArray[i].replace("א", "𐢀");}
			if (charArray[i] === "ב") {charArray[i] = charArray[i].replace("ב", "𐢂");}
			if (charArray[i] === "ה") {charArray[i] = charArray[i].replace("ה", "𐢆");}
			if (charArray[i] === "י") {charArray[i] = charArray[i].replace("י", "𐢌");}
			if (charArray[i] === "כ") {charArray[i] = charArray[i].replace("כ", "𐢎");}
			if (charArray[i] === "ך") {charArray[i] = charArray[i].replace("ך", "𐢎");}
			if (charArray[i] === "ל") {charArray[i] = charArray[i].replace("ל", "𐢐");}
			if (charArray[i] === "מ") {charArray[i] = charArray[i].replace("מ", "𐢒");}
			if (charArray[i] === "ם") {charArray[i] = charArray[i].replace("ם", "𐢒");}
			if (charArray[i] === "נ") {charArray[i] = charArray[i].replace("נ", "𐢔");}
			if (charArray[i] === "ן") {charArray[i] = charArray[i].replace("ן", "𐢔");}
			if (charArray[i] === "ש") {charArray[i] = charArray[i].replace("ש", "𐢜");}
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
	replace1.push("א"); replace2.push("𐢁");
	replace1.push("א"); replace2.push("𐢀");
	replace1.push("ב"); replace2.push("𐢃");
	replace1.push("ב"); replace2.push("𐢂");
	replace1.push("ג"); replace2.push("𐢄");
	replace1.push("ד"); replace2.push("𐢅");
	replace1.push("ה"); replace2.push("𐢇");
	replace1.push("ה"); replace2.push("𐢆");
	replace1.push("ו"); replace2.push("𐢈");
	replace1.push("ז"); replace2.push("𐢉");
	replace1.push("ח"); replace2.push("𐢊");
	replace1.push("ט"); replace2.push("𐢋");
	replace1.push("י"); replace2.push("𐢍");
	replace1.push("י"); replace2.push("𐢌");
	replace1.push("כ"); replace2.push("𐢏");
	replace1.push("כ"); replace2.push("𐢎");
	replace1.push("ל"); replace2.push("𐢑");
	replace1.push("ל"); replace2.push("𐢐");
	replace1.push("מ"); replace2.push("𐢓");
	replace1.push("מ"); replace2.push("𐢒");
	replace1.push("נ"); replace2.push("𐢕");
	replace1.push("נ"); replace2.push("𐢔");
	replace1.push("ס"); replace2.push("𐢖");
	replace1.push("ע"); replace2.push("𐢗");
	replace1.push("פ"); replace2.push("𐢘");
	replace1.push("צ"); replace2.push("𐢙");
	replace1.push("ק"); replace2.push("𐢚");
	replace1.push("ר"); replace2.push("𐢛");
	replace1.push("ש"); replace2.push("𐢝");
	replace1.push("ש"); replace2.push("𐢜");
	replace1.push("ת"); replace2.push("𐢞");
	replace1.push(...diacritic); replace2.push(...diacritic);
	let charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (replace2.includes(charArray[i+1]) === false || (diacritic.includes(charArray[i+1]) && replace2.includes(charArray[i+2]) === false)) {
			if (charArray[i] === "𐢏") {charArray[i] = charArray[i].replace("𐢏", "ך");}
			if (charArray[i] === "𐢎") {charArray[i] = charArray[i].replace("𐢎", "ך");}
			if (charArray[i] === "𐢓") {charArray[i] = charArray[i].replace("𐢓", "ם");}
			if (charArray[i] === "𐢒") {charArray[i] = charArray[i].replace("𐢒", "ם");}
			if (charArray[i] === "𐢕") {charArray[i] = charArray[i].replace("𐢕", "ן");}
			if (charArray[i] === "𐢔") {charArray[i] = charArray[i].replace("𐢔", "ן");}
			if (charArray[i] === "𐢘") {charArray[i] = charArray[i].replace("𐢘", "ף");}
			if (charArray[i] === "𐢙") {charArray[i] = charArray[i].replace("𐢙", "ץ");}
			else {charArray[i] = replaceLetters(replace2, replace1, charArray[i]);}
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}
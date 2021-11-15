const harakat1 = []; const harakat2 = [];
harakat1.push("َ"); harakat2.push("ͣ");// a
harakat1.push("ُ"); harakat2.push("ͧ");// u
harakat1.push("ِ"); harakat2.push("ͥ");// i
harakat1.push("ّ"); harakat2.push("̫");
harakat1.push("ْ"); harakat2.push("͓");// sukun
harakat1.push("۟"); harakat2.push("̊");
harakat1.push("ٓ"); harakat2.push("̃");
harakat1.push("ٰ"); harakat2.push("ͣ̄");// ā
harakat1.push("ٗ"); harakat2.push("ͧ̄");// ū
harakat1.push("ٖ"); harakat2.push("ͥ̄");// ī
harakat1.push("ٔ"); harakat2.push("͗");
harakat1.push("ٕ"); harakat2.push("̹");
harakat1.push("ً"); harakat2.push("ͣ̚");// a̚
harakat1.push("ٌ"); harakat2.push("ͧ̚");// u̚
harakat1.push("ٍ"); harakat2.push("ͥ̚");// i̚
harakat1.push("٘"); harakat2.push("̐");
harakat1.push("٪"); harakat2.push("%");
harakat1.push("؉"); harakat2.push("‰");
harakat1.push("؊"); harakat2.push("‱");
harakat1.push("،"); harakat2.push(",");
harakat1.push("؛"); harakat2.push(";");
harakat1.push("؟"); harakat2.push("?");
harakat1.push("٭"); harakat2.push("*");
harakat1.push("۔"); harakat2.push(".");
harakat1.push("ـ"); harakat2.push("͏");

const replace1 = []; const replace2 = [];
replace1.push("ء"); replace2.push("Ǎ");
replace1.push("ا"); replace2.push("A");
replace1.push("ب"); replace2.push("B");
replace1.push("ت"); replace2.push("T");
replace1.push("ث"); replace2.push("Þ");
replace1.push("ج"); replace2.push("J");
replace1.push("ح"); replace2.push("Ħ");
replace1.push("خ"); replace2.push("X");
replace1.push("د"); replace2.push("D");
replace1.push("ذ"); replace2.push("Ð");
replace1.push("ر"); replace2.push("R");
replace1.push("ز"); replace2.push("Z");
replace1.push("س"); replace2.push("S");
replace1.push("ش"); replace2.push("Ʃ");
replace1.push("ص"); replace2.push("Ṣ");
replace1.push("ض"); replace2.push("Ḍ");
replace1.push("ط"); replace2.push("Ṭ");
replace1.push("ظ"); replace2.push("Ẓ");
replace1.push("ع"); replace2.push("ʕ");
replace1.push("غ"); replace2.push("Ɣ");
replace1.push("ف"); replace2.push("F");
replace1.push("ق"); replace2.push("Q");
replace1.push("ک"); replace2.push("K");
replace1.push("ل"); replace2.push("L");
replace1.push("م"); replace2.push("M");
replace1.push("ن"); replace2.push("N");
replace1.push("ه"); replace2.push("H");
replace1.push("و"); replace2.push("W");
replace1.push("ي"); replace2.push("Y");
replace1.push("ى"); replace2.push("A̤");
replace1.push("ة"); replace2.push("Ḧ");
replace1.push("ٱ"); replace2.push("A͐");
replace1.push("ی"); replace2.push("I");
replace1.push("پ"); replace2.push("P");
replace1.push("چ"); replace2.push("C");
replace1.push("ژ"); replace2.push("Ʒ");
replace1.push("گ"); replace2.push("G");
replace1.push("ڥ"); replace2.push("V");
replace1.push("ھ"); replace2.push("ʰ");
replace1.push("ٹ"); replace2.push("Ʈ");
replace1.push("ڈ"); replace2.push("Ɗ");
replace1.push("ڑ"); replace2.push("Ɽ");
replace1.push("ے"); replace2.push("E");
replace1.push("ں"); replace2.push("N̐");
replace1.push("ہ"); replace2.push("Ḩ");
replace1.push("ۃ"); replace2.push("Ḩ̈");
replace1.push("٠"); replace2.push("0");
replace1.push("١"); replace2.push("1");
replace1.push("٢"); replace2.push("2");
replace1.push("٣"); replace2.push("3");
replace1.push("٤"); replace2.push("4");
replace1.push("٥"); replace2.push("5");
replace1.push("٦"); replace2.push("6");
replace1.push("٧"); replace2.push("7");
replace1.push("٨"); replace2.push("8");
replace1.push("٩"); replace2.push("9");
replace1.push(...harakat1); replace2.push(...harakat2);

function firstTextEvent() {
	let charArray = Array.from($("#firsttext").val());
	lettersEquivalents(charArray, equiv1, equiv2);
	$("#firsttext").val(charArray.join(""));
	charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	let charArray = Array.from($("#secondtext").val().toUpperCase());
	for (const i of charArray.keys()) {
		if (charArray[i+1] === "̄") {// ā ū ī
			if (charArray[i] === "ͣ") {charArray[i] = charArray[i].replace("ͣ", "ٰ"); charArray[i+1] = "";}// ā
			if (charArray[i] === "ͧ") {charArray[i] = charArray[i].replace("ͧ", "ٗ"); charArray[i+1] = "";}// ū
			if (charArray[i] === "ͥ") {charArray[i] = charArray[i].replace("ͥ", "ٖ"); charArray[i+1] = "";}// ī
		}
		if (charArray[i+1] === "̚") {// a̚ u̚ i̚
			if (charArray[i] === "ͣ") {charArray[i] = charArray[i].replace("ͣ", "ً"); charArray[i+1] = "";}// a̚
			if (charArray[i] === "ͧ") {charArray[i] = charArray[i].replace("ͧ", "ٌ"); charArray[i+1] = "";}// u̚
			if (charArray[i] === "ͥ") {charArray[i] = charArray[i].replace("ͥ", "ٍ"); charArray[i+1] = "";}// i̚
		}
		if (charArray[i] === "A" && charArray[i+1] === "͐") {// A͐
			charArray[i] = charArray[i].replace("A", "ٱ"); charArray[i+1] = "";// A͐
		}
		if (charArray[i] === "N" && charArray[i+1] === "̐") {// N̐
			if (replace2.includes(charArray[i+2]) === false || (harakat2.includes(charArray[i+2]) && replace2.includes(charArray[i+3]) === false)) {
				charArray[i] = charArray[i].replace("N", "ں"); charArray[i+1] = "";// N̐
			}
			else {
				charArray[i] = charArray[i].replace("N", "ن"); charArray[i+1] = charArray[i+1].replace("̐", "٘");// N̐
			}
		}
		if (charArray[i] === "̐" && charArray[i+1] === "͏") {// 
			charArray[i] = charArray[i].replace("̐", "٘"); charArray[i+1] = "";// 
		}
		if (charArray[i] === "A" && charArray[i+1] === "̤") {// A̤
			charArray[i] = charArray[i].replace("A", "ى"); charArray[i+1] = "";// A̤
		}
		if (charArray[i] === "Ḩ" && charArray[i+1] === "̈") {// Ḩ̈
			charArray[i] = charArray[i].replace("Ḩ", "ۃ"); charArray[i+1] = "";// Ḩ̈
		}
		else {
			charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		}
	}
	$("#firsttext").val(charArray.join(""));
}

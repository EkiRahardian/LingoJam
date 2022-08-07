"use strict";
const replace1 = []; const replace2 = [];
replace1.push("А"); replace2.push("A");
replace1.push("Б"); replace2.push("B");
replace1.push("В"); replace2.push("V");
replace1.push("Г"); replace2.push("G");
replace1.push("Д"); replace2.push("D");
replace1.push("Е"); replace2.push("E");
replace1.push("Ё"); replace2.push("Yo");
replace1.push("Ж"); replace2.push("C");
replace1.push("З"); replace2.push("Z");
replace1.push("И"); replace2.push("İ");
replace1.push("Й"); replace2.push("Y");
replace1.push("К"); replace2.push("K");
replace1.push("Л"); replace2.push("L");
replace1.push("М"); replace2.push("M");
replace1.push("Н"); replace2.push("N");
replace1.push("Ң"); replace2.push("Ñ");
replace1.push("О"); replace2.push("O");
replace1.push("Ө"); replace2.push("Ö");
replace1.push("П"); replace2.push("P");
replace1.push("Р"); replace2.push("R");
replace1.push("С"); replace2.push("S");
replace1.push("Т"); replace2.push("T");
replace1.push("У"); replace2.push("U");
replace1.push("Ү"); replace2.push("Ü");
replace1.push("Ф"); replace2.push("F");
replace1.push("Х"); replace2.push("X");
replace1.push("Ц"); replace2.push("Ţ");
replace1.push("Ч"); replace2.push("Ç");
replace1.push("Ш"); replace2.push("Ş");
replace1.push("Щ"); replace2.push("Şç");
replace1.push("Ъ"); replace2.push("ˮ");
replace1.push("Ы"); replace2.push("I");
replace1.push("Ь"); replace2.push("ʼ");
replace1.push("Э"); replace2.push("E");
replace1.push("Ю"); replace2.push("Yu");
replace1.push("Я"); replace2.push("Ya");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "К" && (["а", "о", "у", "ы", "А", "О", "У", "Ы"].includes(charArray[i+1]) || ["q", "Q", "a", "o", "u", "ı", "A", "O", "U", "I"].includes(charArray[i-1]))) {
			charArray[i] = "Q";
		}
		if (charArray[i] === "Г" && (["а", "о", "у", "ы", "А", "О", "У", "Ы"].includes(charArray[i+1]) || ["ğ", "Ğ", "a", "o", "u", "ı", "A", "O", "U", "I"].includes(charArray[i-1]))) {
			charArray[i] = "Ğ";
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLocaleLowerCase('tr');
			inLowerCase = false;
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function elements(replace1, replace2) {
	$(".intro.white-section-area-thing").eq(0).attr("id", "letterlist");
	let letterlist = "";
	for (const i of replace1.keys()) {
		letterlist += "<h2>" + replace1[i] + " = " + replace2[i] + "</h2>";
	}
	$('#letterlist').attr("class", "white-section-area-thing").html(letterlist);
	$("a[style='color:#444444']").attr("target", "_blank").attr("rel", "noopener noreferrer");
}
function css() {
	function insertCSS(code) {
		const style = $("<style type = 'text/css'></style>");
		$("head").append(style);
		$(style).html(code);
	}
	insertCSS(`
		.white-section-area-thing a {
			color: #00a3e1;
		}
		@media(min-width:0px) and (max-width:768px) {
			.white-section-area-thing {
				box-sizing: border-box;
				margin-top: 20px;
				width: 95%;
			}
		}
	`);
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box").attr('readonly', true);
	$("#letterlist").css("text-align", "center").css("height", "auto");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/KyrgyzCommonTurkicRomanization'>GitHub</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>Kyrgyz Romanization based on Common Turkic Alphabet.</p>
			<p>Designed by ${ekiRahardian}, this translator uses custom scripts from ${scriptLink}.<br>If something is wrong, try to reset the cache.</p>
		</div>
	`);
}
function replaceLetters(replace1, replace2, string) {
	const index = replace1.indexOf(string);
	if (index !== -1) {
		string = string.replace(replace1[index], replace2[index]);
	}
	return string;
}
function main() {
	elements(replace1, replace2);
	css();
	description();
	$('#firsttext').on('input', firstTextEvent);
	$("#firsttext").val("Бардык адамдар өз беделинде жана укуктарында эркин жана тең укуктуу болуп жаралат. Алардын аң‐сезими менен абийири бар жана бири‐бирине бир туугандык мамиле кылууга тийиш.");
	firstTextEvent();
}

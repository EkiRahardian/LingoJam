"use strict";
const replace1 = []; const replace2 = [];
replace1.push("ا"); replace2.push("A");
replace1.push("ە"); replace2.push("Ä");
replace1.push("ب"); replace2.push("B");
replace1.push("ج"); replace2.push("C");
replace1.push("چ"); replace2.push("Ç");
replace1.push("د"); replace2.push("D");
replace1.push("ې"); replace2.push("E");
replace1.push("ف"); replace2.push("F");
replace1.push("گ"); replace2.push("G");
replace1.push("غ"); replace2.push("Ğ");
replace1.push("ھ"); replace2.push("H");
replace1.push("ى"); replace2.push("İ");
replace1.push("ژ"); replace2.push("J");
replace1.push("ك"); replace2.push("K");
replace1.push("ل"); replace2.push("L");
replace1.push("م"); replace2.push("M");
replace1.push("ن"); replace2.push("N");
replace1.push("ڭ"); replace2.push("Ñ");
replace1.push("و"); replace2.push("O");
replace1.push("ۆ"); replace2.push("Ö");
replace1.push("پ"); replace2.push("P");
replace1.push("ق"); replace2.push("Q");
replace1.push("ر"); replace2.push("R");
replace1.push("س"); replace2.push("S");
replace1.push("ش"); replace2.push("Ş");
replace1.push("ت"); replace2.push("T");
replace1.push("ۇ"); replace2.push("U");
replace1.push("ۈ"); replace2.push("Ü");
replace1.push("ۋ"); replace2.push("W");
replace1.push("خ"); replace2.push("X");
replace1.push("ي"); replace2.push("Y");
replace1.push("ز"); replace2.push("Z");
replace1.push("ئ"); replace2.push("ʼ");
replace1.push("،"); replace2.push(",");
replace1.push("؛"); replace2.push(";");
replace1.push("؟"); replace2.push("?");
replace1.push("ـ"); replace2.push("͏");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "ک") {charArray[i] = "K";}
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
	}
	$("#secondtext").val(charArray.join("").toLocaleLowerCase('tr'));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val().toLocaleUpperCase('TR'));
	for (const i of charArray.keys()) {
		if (charArray[i] === "I") {charArray[i] = "ى";}
		if (charArray[i] === "V") {charArray[i] = "ۋ";}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
	}
	$("#firsttext").val(charArray.join(""));
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
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box").css("direction", "rtl");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box");
	$("#letterlist").css("text-align", "center").css("height", "auto");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/UyghurCommonTurkicRomanization'>GitHub</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>Uyghur Romanization based on Common Turkic Alphabet.</p>
			<p>Designed by ${ekiRahardian}, this translator uses custom scripts from ${scriptLink}.<br>If something is wrong, try to reset the cache.</p>
		</div>
	`);
}
function replaceLetters(replace1, replace2, string) {
	for (const i of replace1.keys()) {
		string = string.replace(replace1[i], replace2[i]);
	}
	return string;
}
function main() {
	elements(replace1, replace2);
	css();
	description();
	$('#firsttext').on('input', firstTextEvent);
	$('#secondtext').on('input', secondTextEvent);
	$("#firsttext").val("ھەممە ئادەم زانىدىنلا ئەركىن، ئىززەت-ھۆرمەت ۋە ھوقۇقتا باپباراۋەر بولۇپ تۇغۇلغان. ئۇلار ئەقىلغە ۋە ۋىجدانغا ئىگە ھەمدە بىر-بىرىگە قېرىنداشلىق مۇناسىۋىتىگە خاس روھ بىلەن موئامىلە قىلىشى كېرەك.");
	firstTextEvent();

}

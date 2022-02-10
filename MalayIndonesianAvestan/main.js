"use strict";
const replace1 = []; const replace2 = [];
replace1.push("A"); replace2.push("𐬀");
replace1.push("B"); replace2.push("𐬠");
replace1.push("C"); replace2.push("𐬗");
replace1.push("D"); replace2.push("𐬛");
replace1.push("E"); replace2.push("𐬈");
replace1.push("Ə"); replace2.push("𐬆");
replace1.push("F"); replace2.push("𐬟");
replace1.push("G"); replace2.push("𐬔");
replace1.push("Gh"); replace2.push("𐬖");
replace1.push("H"); replace2.push("𐬵");
replace1.push("I"); replace2.push("𐬌");
replace1.push("J"); replace2.push("𐬘");
replace1.push("K"); replace2.push("𐬐");
replace1.push("Kh"); replace2.push("𐬑");
replace1.push("L"); replace2.push("𐬮");
replace1.push("M"); replace2.push("𐬨");
replace1.push("N"); replace2.push("𐬥");
replace1.push("Ng"); replace2.push("𐬢");
replace1.push("Ny"); replace2.push("𐬦");
replace1.push("O"); replace2.push("𐬊");
replace1.push("P"); replace2.push("𐬞");
replace1.push("R"); replace2.push("𐬭");
replace1.push("S"); replace2.push("𐬯");
replace1.push("Sy"); replace2.push("𐬱");
replace1.push("T"); replace2.push("𐬙");
replace1.push("U"); replace2.push("𐬎");
replace1.push("V"); replace2.push("𐬬");
replace1.push("W"); replace2.push("𐬡");
replace1.push("Y"); replace2.push("𐬫");
replace1.push("Z"); replace2.push("𐬰");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
		}
		if (charArray[i] === "K" && ["H", "h"].includes(charArray[i+1])) { //KH Kh
			charArray[i] = "𐬑"; charArray[i+1] = "";
		}
		else if (charArray[i] === "G" && ["H", "h"].includes(charArray[i+1])) { //GH Gh
			charArray[i] = "𐬖"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["G", "g"].includes(charArray[i+1])) { //NG Ng
			charArray[i] = "𐬢"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["Y", "y"].includes(charArray[i+1])) { //NY Ny
			charArray[i] = "𐬦"; charArray[i+1] = "";
		}
		else if (charArray[i] === "S" && ["Y", "y"].includes(charArray[i+1])) { //SY Sy
			charArray[i] = "𐬱"; charArray[i+1] = "";
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
		}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		charArray[i] = charArray[i].toLowerCase();
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
	$(".subtitle").eq(0).attr("id", "subtitle");
	$("#submit-suggestion").html("Kirim");
	$("#suggestion-box").attr("placeholder", "𐬯𐬀𐬭𐬀𐬥 𐬎𐬥𐬙𐬎𐬐 𐬨𐬆𐬢𐬆𐬨𐬠𐬀𐬢𐬐𐬀𐬥 𐬞𐬆𐬥𐬆𐬭𐬘𐬆𐬨𐬀𐬵?");
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
	function setFont(elementName) {
		$(elementName).css("font-family", "Noto Sans, Noto Sans Avestan");
	}
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box").css('direction', 'rtl');;
	$("#letterlist").css("text-align", "center").css("height", "auto");
	$("#suggestion-box").css('direction', 'rtl');
	setFont('#firsttext');
	setFont('#secondtext');
	setFont("#subtitle");
	setFont("#letterlist");
	setFont("#suggestion-box");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/MalayIndonesianAvestan'>GitHub</a>";
	const omniglotLink = "<a rel='noopener noreferrer' target='_blank' href='https://www.omniglot.com/conscripts/mic.htm'>Omniglot</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>What would Indonesian/Malay look like if it were written in Avestan script? It would look like this.</p>
			<p>Write "e pepet" (schwa) as "ə" (Example: menggunakan → mənggunakan), replace "q" with "k" (Example: quran → kuran), and "x" to "ks" or "s" depending on position (Example: axolotl → aksolotl, xenofobia → senofobia).</p>
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
	$("#firsttext").val("Səmua orang dilahirkan mərdeka dan məmpunyai martabat dan hak-hak yang sama. Məreka dikaruniai akal dan hati nurani dan həndaknya bərgaul satu sama lain dalam pərsaudaraan.");
	firstTextEvent();
}

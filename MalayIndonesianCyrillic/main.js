"use strict";
const replace1 = []; const replace2 = [];
replace1.push("A"); replace2.push("А");
replace1.push("B"); replace2.push("Б");
replace1.push("C"); replace2.push("Ч");
replace1.push("D"); replace2.push("Д");
replace1.push("E"); replace2.push("Э");
replace1.push("F"); replace2.push("Ф");
replace1.push("G"); replace2.push("Г");
replace1.push("Gh"); replace2.push("Ғ");
replace1.push("H"); replace2.push("Ҳ");
replace1.push("I"); replace2.push("И");
replace1.push("J"); replace2.push("Ҷ");
replace1.push("K"); replace2.push("К");
replace1.push("Kh"); replace2.push("Х");
replace1.push("L"); replace2.push("Л");
replace1.push("M"); replace2.push("М");
replace1.push("N"); replace2.push("Н");
replace1.push("Ng"); replace2.push("Ҥ");
replace1.push("Ny"); replace2.push("Њ");
replace1.push("O"); replace2.push("О");
replace1.push("P"); replace2.push("П");
replace1.push("Q"); replace2.push("Қ");
replace1.push("R"); replace2.push("Р");
replace1.push("S"); replace2.push("С");
replace1.push("Sy"); replace2.push("Ш");
replace1.push("T"); replace2.push("Т");
replace1.push("U"); replace2.push("У");
replace1.push("V"); replace2.push("В");
replace1.push("W"); replace2.push("Ў");
replace1.push("X"); replace2.push("Ѯ");
replace1.push("Y"); replace2.push("Й");
replace1.push("Z"); replace2.push("З");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val());
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "K" && ["H", "h"].includes(charArray[i+1])) { //KH Kh
			charArray[i] = "Х"; charArray[i+1] = "";
		}
		else if (charArray[i] === "G" && ["H", "h"].includes(charArray[i+1])) { //GH Gh
			charArray[i] = "Ғ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["G", "g"].includes(charArray[i+1])) { //NG Ng
			charArray[i] = "Ҥ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "N" && ["Y", "y"].includes(charArray[i+1])) { //NY Ny
			charArray[i] = "Њ"; charArray[i+1] = "";
		}
		else if (charArray[i] === "S" && ["Y", "y"].includes(charArray[i+1])) { //SY Sy
			charArray[i] = "Ш"; charArray[i+1] = "";
		}
		else {
			charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
		}
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLowerCase();
			inLowerCase = false;
		}
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val());
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
		if (inLowerCase === true) {
			charArray[i] = charArray[i].toLowerCase();
			inLowerCase = false;
		}
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
	$("#submit-suggestion").html("Кирим");
	$("#suggestion-box").attr("placeholder", "Saran untuk mengembangkan penerjemah?");
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
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box");
	$("#letterlist").css("text-align", "center").css("height", "auto");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/MalayIndonesianCyrillic'>GitHub</a>";
	const omniglotLink = "<a rel='noopener noreferrer' target='_blank' href='https://www.omniglot.com/conscripts/mic.htm'>Omniglot</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>What would Indonesian/Malay look like if it were written in the Cyrillic script? It would look like this.<br>Some letters were borrowed from Tajik, Yakut, Belarusian, Serbian, and Old Church Slavonic.</p>
			<p>Designed by ${ekiRahardian}, this translator uses custom scripts from ${scriptLink}.<br>If something is wrong, try to reset the cache.</p>
			<p>Further reading about Malay-Indonesian Cyrillic at ${omniglotLink}.</p>
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
	$("#firsttext").val("Semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama. Mereka dikaruniai akal dan hati nurani dan hendaknya bergaul satu sama lain dalam persaudaraan.");
	firstTextEvent();
}
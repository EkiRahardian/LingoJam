"use strict";
const replace1 = []; const replace2 = [];
replace1.push("Α"); replace2.push("А");
replace1.push("Β"); replace2.push("В");
replace1.push("Γ"); replace2.push("Г");
replace1.push("Δ"); replace2.push("Д");
replace1.push("Ε"); replace2.push("Е");
replace1.push("Ζ"); replace2.push("З");
replace1.push("Η"); replace2.push("И");
replace1.push("Θ"); replace2.push("Ѳ");
replace1.push("Ι"); replace2.push("Ꙇ");
replace1.push("Κ"); replace2.push("К");
replace1.push("Λ"); replace2.push("Л");
replace1.push("Μ"); replace2.push("М");
replace1.push("Ν"); replace2.push("Н");
replace1.push("Ξ"); replace2.push("Ѯ");
replace1.push("Ο"); replace2.push("О");
replace1.push("Π"); replace2.push("П");
replace1.push("Ρ"); replace2.push("Р");
replace1.push("Σ"); replace2.push("С");
replace1.push("Τ"); replace2.push("Т");
replace1.push("Υ"); replace2.push("У");
replace1.push("Φ"); replace2.push("Ф");
replace1.push("Χ"); replace2.push("Х");
replace1.push("Ψ"); replace2.push("Ѱ");
replace1.push("Ω"); replace2.push("Ѡ");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val().normalize('NFD'));
	let inLowerCase = false;
	for (const i of charArray.keys()) {
		if (charArray[i] === charArray[i].toLowerCase()) {
			charArray[i] = charArray[i].toUpperCase();
			inLowerCase = true;
		}
		if (charArray[i] === "Ϲ") {charArray[i] = "Σ";}
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
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
		if (charArray[i] === "σ" && replace2.includes(charArray[i+1].toUpperCase()) === false) {
			charArray[i] = "ς";
		}
	}
	$("#firsttext").val(charArray.join("").normalize('NFC'));
}
function elements(replace1, replace2) {
	$("#submit-suggestion").html("Στέλνω");
	$(".subtitle").eq(0).attr("id", "subtitle");
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
	function setFont(elementName) {
		$(elementName).css("font-family", "Arial");
	}
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box");
	$("#letterlist").css("text-align", "center").css("height", "auto");
	setFont('#firsttext');
	setFont('#secondtext');
	setFont("#subtitle");
	setFont("#letterlist");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/GreekToCyrillicAlphabetConverter'>GitHub</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>Convert Modern Greek letters to their corresponding letters in Cyrillic.</p>
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
	$("#firsttext").val("Όλοι οι άνθρωποι γεννιούνται ελεύθεροι και ίσοι στην αξιοπρέπεια και τα δικαιώματα. Είναι προικισμένοι με λογική και συνείδηση, και οφείλουν να συμπεριφέρονται μεταξύ τους με πνεύμα αδελφοσύνης.");
	firstTextEvent();
}

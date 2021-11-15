"use strict";
const equiv1 = []; const equiv2 = [];
equiv1.push("أ"); equiv2.push("أ");
equiv1.push("آ"); equiv2.push("آ");
equiv1.push("ؤ"); equiv2.push("ؤ");
equiv1.push("إ"); equiv2.push("إ");
equiv1.push("ئ"); equiv2.push("ئ");
equiv1.push("ۀ"); equiv2.push("هٔ");
equiv1.push("ۂ"); equiv2.push("ۂ");
equiv1.push("ك"); equiv2.push("ک");
equiv1.push("ٯ"); equiv2.push("ق");
equiv1.push("ڧ"); equiv2.push("ق");
equiv1.push("ڨ"); equiv2.push("ق");
equiv1.push("ڢ"); equiv2.push("ف");
equiv1.push("ڛ"); equiv2.push("س");
equiv1.push("ڤ"); equiv2.push("ڥ");
equiv1.push("ڭ"); equiv2.push("گ");
equiv1.push("ۓ"); equiv2.push("ۓ");
equiv1.push("ۡ"); equiv2.push("ْ");
equiv1.push("ؘ"); equiv2.push("َ");
equiv1.push("ؙ"); equiv2.push("ُ");
equiv1.push("ؚ"); equiv2.push("ِ");
equiv1.push("۠"); equiv2.push("۟");
equiv1.push("ࣰ"); equiv2.push("ً");
equiv1.push("ࣱ"); equiv2.push("ٌ");
equiv1.push("ࣲ"); equiv2.push("ٍ");
equiv1.push("ٝ"); equiv2.push("ُ");
equiv1.push("۰"); equiv2.push("٠");
equiv1.push("۱"); equiv2.push("١");
equiv1.push("۲"); equiv2.push("٢");
equiv1.push("۳"); equiv2.push("٣");
equiv1.push("۴"); equiv2.push("٤");
equiv1.push("۵"); equiv2.push("٥");
equiv1.push("۶"); equiv2.push("٦");
equiv1.push("۷"); equiv2.push("٧");
equiv1.push("۸"); equiv2.push("٨");
equiv1.push("۹"); equiv2.push("٩");
equiv1.push("ۤ"); equiv2.push("ٓ");
function elements(replace1, replace2) {
	$(".intro.white-section-area-thing").eq(0).attr("id", "letterlist");
	let letterlist = "";
	for (const i of replace1.keys()) {
		letterlist += "<h2>" + replace2[i] + " = " + replace1[i] + "</h2>";
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
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box").css("direction", "rtl").css("font-family", "'Noto Sans Arabic', 'Noto Sans'");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box").css("line-height", "210%").css("font-family", "'Noto Sans Arabic', 'Noto Sans'");
	$("#letterlist").css("text-align", "center").css("height", "auto").css("direction", "rtl").css("font-family", "'Noto Sans Arabic', 'Noto Sans'");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/CursedArabicRomanization'>GitHub</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>To write vowel or to not write vowel? Why not both?<br>Also compatible with Persian and Urdu.</p>
			<p>Designed by ${ekiRahardian}, this translator uses custom scripts from ${scriptLink}.<br>if something is wrong, try to reset the cache.</p>
		</div>
	`);
}
function replaceLetters(replace1, replace2, string) {
	for (const i of replace1.keys()) {
		string = string.replace(replace1[i], replace2[i]);
	}
	return string;
}
function lettersEquivalents(charArray, equiv1, equiv2) {
	for (const i of charArray.keys()) {
		charArray[i] = replaceLetters(equiv1, equiv2, charArray[i]);
	}
}
function main() {
	loadScript(homePage +'arabic.js?v=' + cache, function() {
		elements(replace1, replace2);
		css();
		description();
		$('#firsttext').on('input', firstTextEvent);
		$('#secondtext').on('input', secondTextEvent);
		$("#firsttext").val("نَوْفَلْ رِزْقِي رَاهَرْدِيَانْ");
		firstTextEvent();
	});
}

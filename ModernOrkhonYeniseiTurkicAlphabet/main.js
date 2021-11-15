"use strict";
function elements(replace1, replace2, origin) {
	$(".subtitle").eq(0).attr("id", "subtitle");
	$(".intro.white-section-area-thing").eq(0).attr("id", "letterlist");
	let letterlist = "<pre>";
	for (const i of replace1.keys()) {
		letterlist += "<h4>" + replace2[i] + " = " + replace1[i] + "\n" + origin[i] +"</h4><br>";
	}
	letterlist += "</pre>";
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
		$(elementName).css("font-family", "Noto Sans, Noto Sans Old Turkic");
	}
	$('#firsttext').css("padding", "13px").css("box-sizing", "border-box");
	$('#secondtext').css("padding", "13px").css("box-sizing", "border-box");
	$("#letterlist").css("text-align", "center").css("height", "auto").css("direction", "rtl");
	setFont('#firsttext');
	setFont('#secondtext');
	setFont("#subtitle");
	setFont("#letterlist");
}
function description() {
	const redditPost = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/r/neography/comments/qeswtk'>Reddit</a>";
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/ModernOrkhonYeniseiTurkicAlphabet'>GitHub</a>";
	$("#suggestion-area").after(`
		<div id='descriptionText' class='white-section-area-thing'>
			<p>My heavily simplified adaptation of the Old Turkic Alphabet for Modern Turkic languages, many letters need to be repurposed since many sounds are not found in Old Turkic. Convert from Extended Common Turkic Alphabet.</p>
			<p>Designed by ${ekiRahardian}, this translator uses custom scripts from ${scriptLink}.<br>If something is wrong, try to reset the cache.</p>
			<p>Further reading at ${redditPost}.</p>
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
	loadScript(homePage +'turkic.js?v=' + cache, function() {
		elements(replace1, replace2, origin);
		css();
		description();
		$('#firsttext').on('input', firstTextEvent);
		$('#secondtext').on('input', secondTextEvent);
		$("#firsttext").val("Bütün insanlar hür, haysiyet ve haklar bakımından eşit doğarlar. Akıl ve vicdana sahiptirler ve birbirlerine karşı kardeşlik zihniyeti ile hareket etmelidirler.");
		firstTextEvent();
	});
}
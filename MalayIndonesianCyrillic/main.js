"use strict";
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
	loadScript(homePage +'cyrillic.js?v=' + cache, function() {
		elements(replace1, replace2);
		css();
		description();
		$('#firsttext').on('input', firstTextEvent);
		$('#secondtext').on('input', secondTextEvent);
		$("#firsttext").val("Semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama. Mereka dikaruniai akal dan hati nurani dan hendaknya bergaul satu sama lain dalam persaudaraan.");
		firstTextEvent();
	});
}

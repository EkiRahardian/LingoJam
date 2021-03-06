"use strict";
function firstTextEvent() {
	if ($("#firsttext").val().length !== 0) {
		$("#firsttext").val($("#firsttext").val().replace(/[^0-9]/g, ''));
		const numbers = parseInt($("#firsttext").val());
		const tallyMarkFive = Math.floor(numbers / 5);
		const tallyMarkOne = numbers % 5;
		const tallyMarks = new Array(tallyMarkFive + tallyMarkOne).fill("𝍸", 0, tallyMarkFive).fill("𝍷", tallyMarkFive, tallyMarkFive + tallyMarkOne).join('');
		$("#secondtext").val(tallyMarks);
	}
	else {
		$("#secondtext").val("");
	}
}
function secondTextEvent() {
	$("#secondtext").val($("#secondtext").val().replace(/[^𝍸|^𝍷]/g, ''));
	const tallyMarks = Array.from($("#secondtext").val());
	const numberFive = tallyMarks.filter(x => x==="𝍸").length;
	const numberOne = tallyMarks.filter(x => x==="𝍷").length;
	const numbers = (numberFive * 5) + numberOne;
	$("#firsttext").val(numbers);
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
	$("a[style='color:#444444']").attr("target", "_blank").attr("rel", "noopener noreferrer");
}
function description() {
	const ekiRahardian = "<a rel='noopener noreferrer' target='_blank' href='https://www.reddit.com/user/ekirahardian'>Naufal Rizky Rahardian</a>";
	const scriptLink = "<a rel='noopener noreferrer' target='_blank' href='https://github.com/EkiRahardian/LingoJam/tree/main/NumbersToTallyMarksConverter'>GitHub</a>";
	$(".intro.white-section-area-thing").eq(0).attr("id", "descriptionText");
	$('#descriptionText').attr("class", "white-section-area-thing").html(`
		<p>Convert numbers to tally marks.</p>
		<p>Due to memory issues, you're only allowed to write up to 5 digit number.</p>
		<p>Designed by ${ekiRahardian}, this converter uses custom scripts from ${scriptLink}.<br>If something is wrong, try to reset the cache.</p>
	`);
	$("a[style='color:#444444']").attr("target", "_blank").attr("rel", "noopener noreferrer");
}
function main() {
	css();
	description();
	$('#firsttext').on('input', firstTextEvent);
	$('#secondtext').on('input', secondTextEvent);
	$("#firsttext").val(17);
	firstTextEvent();
}

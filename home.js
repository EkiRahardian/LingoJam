function home(pageTitle) {
	const jQuery = document.createElement("script");
	jQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
	jQuery.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
	jQuery.setAttribute('crossorigin', 'anonymous');
	jQuery.onload = () => {
		$('head').append(`
				<title>${pageTitle}</title>
				<link rel="icon" href="https://lingojam.com/favicon.png">
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
				<style>
					html {
						background: #dddddd;
					}
					.responsive-iframe {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						margin: 0;
						padding: 0;
						border: none;
						overflow: hidden;
						z-index: 999999;
						height: 100%;
						width: 100%;
					}
					#center {
						margin: 0;
						position: absolute;
						top: 50%;
						left: 50%;
						-ms-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
					}
				</style>
		`);
	};
	document.head.appendChild(jQuery);
}

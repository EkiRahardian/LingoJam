const cryptoJS = document.createElement("script");
cryptoJS.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js";
cryptoJS.integrity = "sha256-/H4YS+7aYb9kJ5OKhFYPUjSJdrtV6AeyJOtTkw6X72o=";
cryptoJS.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(cryptoJS);
function checkpassword(encrypt) {
	try {
		const password = $("#password").val();
		const decrypt = JSON.parse(CryptoJS.AES.decrypt(encrypt, password).toString(CryptoJS.enc.Utf8)).encrypt;
		const link ="https://lingojam.com/" + decrypt;
		$("#center").hide();
		$('#mainFrame').attr('src',link).show();
	}
	catch(err) {
		alert("Wrong Password!");
		$("#password").val("");
	}
}
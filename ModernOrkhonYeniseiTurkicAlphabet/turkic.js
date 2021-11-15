const replace1 = []; const replace2 = []; const origin = [];
replace1.push("A"); replace2.push("𐰀"); origin.push ("from Orkhon A");
replace1.push("Â"); replace2.push("𐰀⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("Ä"); replace2.push("𐰂"); origin.push ("from Yenisei Ä");
replace1.push("Ä̂"); replace2.push("𐰂⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("B"); replace2.push("𐰉"); origin.push ("from Orkhon B back vowel");
replace1.push("C"); replace2.push("𐰕"); origin.push ("repurposed from Yenisei Z");
replace1.push("Ç"); replace2.push("𐰲"); origin.push ("from Orkhon Ç");
replace1.push("D"); replace2.push("𐰑"); origin.push ("from Orkhon D back vowel");
replace1.push("Ḑ"); replace2.push("𐰒"); origin.push ("repurposed from Yenisei D back vowel, reserved for Karaim Ḑ or Cyrillic Ѕ");
replace1.push("E"); replace2.push("𐰅"); origin.push ("from Orkhon E");
replace1.push("Ê"); replace2.push("𐰅⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("F"); replace2.push("𐰊"); origin.push ("repurposed from Yenisei B back vowel");
replace1.push("G"); replace2.push("𐰏"); origin.push ("from Orkhon G front vowel");
replace1.push("Ğ"); replace2.push("𐰍"); origin.push ("from Orkhon Ğ back vowel");
replace1.push("H"); replace2.push("𐰎"); origin.push ("repurposed from Yenisei Ğ back vowel");
replace1.push("I"); replace2.push("𐰃"); origin.push ("from Orkhon I");
replace1.push("Î"); replace2.push("𐰃⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("İ"); replace2.push("𐰄"); origin.push ("from Yenisei I");
replace1.push("İ̂"); replace2.push("𐰄⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("J"); replace2.push("𐰳"); origin.push ("repurposed from Yenisei Ç");
replace1.push("K"); replace2.push("𐰚"); origin.push ("from Orkhon K front vowel");
replace1.push("L"); replace2.push("𐰞"); origin.push ("from Orkhon L back vowel");
replace1.push("Ļ"); replace2.push("𐰟"); origin.push ("repurposed from Yenisei L back vowel, reserved for Karaim Ļ or Cyrillic Љ");
replace1.push("M"); replace2.push("𐰢"); origin.push ("from Orkhon M");
replace1.push("N"); replace2.push("𐰣"); origin.push ("from Orkhon N back vowel");
replace1.push("Ñ"); replace2.push("𐰭"); origin.push ("from Orkhon Ñ");
replace1.push("Ņ"); replace2.push("𐰪"); origin.push ("from Orkhon Ņ, reserved for Karaim Ņ or Cyrillic Њ");
replace1.push("O"); replace2.push("𐰗"); origin.push ("repurposed from Yenisei Y back vowel");
replace1.push("Ô"); replace2.push("𐰗⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("Ö"); replace2.push("𐰘"); origin.push ("repurposed from Orkhon Y front vowel");
replace1.push("Ö̂"); replace2.push("𐰘⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("P"); replace2.push("𐰯"); origin.push ("from Orkhon P");
replace1.push("Q"); replace2.push("𐰴"); origin.push ("from Orkhon Q back vowel");
replace1.push("R"); replace2.push("𐰺"); origin.push ("from Orkhon R back vowel");
replace1.push("S"); replace2.push("𐰽"); origin.push ("from Orkhon S back vowel");
replace1.push("Ś"); replace2.push("𐰾"); origin.push ("repurposed from Orkhon S front vowel, reserved for Bashkir Cyrillic Ҫ");
replace1.push("Ş"); replace2.push("𐱁"); origin.push ("from Orkhon Ş");
replace1.push("T"); replace2.push("𐱃"); origin.push ("from Orkhon T back vowel");
replace1.push("Ţ"); replace2.push("𐱄"); origin.push ("repurposed from Yenisei T back vowel, reserved for Gagauz Ţ or Cyrillic Ц");
replace1.push("U"); replace2.push("𐰆"); origin.push ("from Orkhon U");
replace1.push("Û"); replace2.push("𐰆⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("Ü"); replace2.push("𐰈"); origin.push ("from Yenisei Ü");
replace1.push("Ü̂"); replace2.push("𐰈⁚"); origin.push ("repurposed from Old Turkic word-separator to indicate long vowel");
replace1.push("V"); replace2.push("𐰋"); origin.push ("repurposed from Orkhon B front vowel");
replace1.push("W"); replace2.push("𐰙"); origin.push ("repurposed from Yenisei Y front vowel");
replace1.push("X"); replace2.push("𐰐"); origin.push ("repurposed from Yenisei K front vowel");
replace1.push("Y"); replace2.push("𐰖"); origin.push ("from Orkhon Y back vowel");
replace1.push("Z"); replace2.push("𐰔"); origin.push ("from Orkhon Z");
replace1.push("Ź"); replace2.push("𐰓"); origin.push ("repurposed from Orkhon D front vowel, reserved for Bashkir Cyrillic Ҙ");
replace1.push("?"); replace2.push("⸮"); origin.push ("reversed question mark");
replace1.push(","); replace2.push("⹁"); origin.push ("reversed comma");
function firstTextEvent() {
	const charArray = Array.from($("#firsttext").val().toLocaleUpperCase('TR'));
	for (const i of charArray.keys()) {
		if (charArray[i] === "/") {
			charArray[i] = "\\";
		}
		else if (charArray[i] === "\\") {
			charArray[i] = "/";
		}
		if (charArray[i] === "̂") {
			charArray[i] = "⁚";
		}
		charArray[i] = replaceLetters(replace1, replace2, charArray[i]);
	}
	$("#secondtext").val(charArray.join(""));
}
function secondTextEvent() {
	const charArray = Array.from($("#secondtext").val());
	for (const i of charArray.keys()) {
		if (charArray[i] === "/") {
			charArray[i] = "\\";
		}
		else if (charArray[i] === "\\") {
			charArray[i] = "/";
		}
		if (charArray[i] === "⁚") {
			charArray[i] = "̂";
		}
		if (["𐰀", "𐰅", "𐰃", "𐰗", "𐰆", "𐰄", "𐰈", "𐰘", "𐰂"].includes(charArray[i]) && charArray[i+1] === "⁚") {
			charArray[i+1] = "";
			if (charArray[i] === "𐰀") {
				charArray[i] = "Â";
			}
			if (charArray[i] === "𐰅") {
				charArray[i] = "Ê";
			}
			if (charArray[i] === "𐰃") {
				charArray[i] = "Î";
			}
			if (charArray[i] === "𐰗") {
				charArray[i] = "Ô";
			}
			if (charArray[i] === "𐰆") {
				charArray[i] = "Û";
			}
			if (charArray[i] === "𐰄") {
				charArray[i] = "İ̂";
			}
			if (charArray[i] === "𐰈") {
				charArray[i] = "Ü̂";
			}
			if (charArray[i] === "𐰘") {
				charArray[i] = "Ö̂";
			}
			if (charArray[i] === "𐰂") {
				charArray[i] = "Ä̂";
			}
		}
		charArray[i] = replaceLetters(replace2, replace1, charArray[i]);
	}
	$("#firsttext").val(charArray.join("").toLocaleLowerCase('tr'));
}

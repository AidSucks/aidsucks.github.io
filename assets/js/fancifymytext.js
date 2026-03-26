
function increaseFontSize() {
	document.getElementById("fancifyTextInput").style.fontSize = "24px";
}

function setBold(isBold) {

	const textAreaElement = document.getElementById("fancifyTextInput");

	if(isBold) {
		textAreaElement.style.fontWeight = "bold";
		textAreaElement.style.color = "blue";
		textAreaElement.style.textDecoration = "underline";
		return;
	}

	textAreaElement.style.fontWeight = "normal";
	textAreaElement.style.color = "var(--bs-body-color)";
	textAreaElement.style.textDecoration = "none";

}

function moo() {

	const textAreaElement = document.getElementById("fancifyTextInput");

	textAreaElement.value = textAreaElement.value.toUpperCase();

	const valueString = textAreaElement.value;

	var parts = valueString.split(".");

	textAreaElement.value = parts.join("-Moo.");
}
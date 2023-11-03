document.addEventListener("DOMContentLoaded", function () {
	checkMenu();
});

function checkMenu() {
	document.getElementById("start-menu").addEventListener("click", function () {
		console.log("Button clicked");
	});
}

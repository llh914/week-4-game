$(document).ready(function() {

	var randomNumber = 0;
	var score = 0;
	var wins = 0;
	var losses = 0;

	function getCrystalValue() {
		return Math.floor(Math.random() * (12 - 1) + 1);
	};

	function start() {
		randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
		score = 0;
		$("#score").text(score);
		$("#randomNumber").text(randomNumber);
		$("#emerald").data("value", getCrystalValue());
		$("#ruby").data("value", getCrystalValue());
		$("#sapphire").data("value", getCrystalValue());
		$("#topaz").data("value", getCrystalValue());
	};

	start();

	$(".crystal").on("click", function () {
		score += $(this).data("value");
		$("#score").text(score);

		console.log(this)

		if (score === randomNumber) {
			wins++;
			$("#wins").text(wins);
			$("#outcome").text("You Won!!")
			start();
		} else if (score > randomNumber) {
			losses++;
			$("#losses").text(losses);
			$("#outcome").text("You Lost")
			start();
		}
	}); 

});
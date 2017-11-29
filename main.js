var options = [1, 2, 3, 4, 5, 6];
var cash = 5000;

$(document).ready(function() {
	refreshCash();

	$('#roll').click(function() {
		var betAmount = parseInt($('#betAmount').val());
		var betNumber = $('#betNumber').val();
		if (cash >= betAmount) {
			var betRoll = new Roll;
			var totalRoll = betRoll.dieOne + betRoll.dieTwo;
			$('#resultsOne').html(betRoll.dieOne);
			$('#resultsTwo').html(betRoll.dieTwo);
			if(totalRoll == betNumber) {
				$('#prompt').html('Jackpot!');
				cash = cash + betAmount;
				refreshCash();
			}
			else {
				$('#prompt').html('Womp womp...');
				cash = cash - betAmount;
				refreshCash();
			};
		}
		else {
			alert('You don\'t have enough cash!');
		}

		
	});
});

function refreshCash() {
	$('#cash').html('Your cash: $' + cash);
	if(cash == 0) {
		alert('You lose! Refresh to try again!');
	}
}

function Roll() {
	this.dieOne = options[Math.floor(Math.random() * 6)];
	this.dieTwo = options[Math.floor(Math.random() * 6)];
};
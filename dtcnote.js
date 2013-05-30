var NoteColors = {
	LOW: "cc7273",
	NEUTRAL: "000",
	HIGH: "5b5cc8"
};

$('.item .item-infos').each(function() {
	var plusVotesCount = parseInt($(this).find('.voteplus').text().match(/\(\+\) ([0-9]+)/)[1]);
	var minusVotesCount = parseInt($(this).find('.voteminus').text().match(/\(\-\) ([0-9]+)/)[1]);

	var totalVotes = plusVotesCount + minusVotesCount;
	var note = Math.round(plusVotesCount / totalVotes * 20) - 10;

	var color;

	if (note > 8) color = NoteColors.HIGH;
	else if (note < 0) color = NoteColors.LOW;
	else color = NoteColors.NEUTRAL;

	$('<span class="note" style="color:#' + color + '"> / ' + note + ' / </span>').insertAfter($(this).find('.voteplus'));

});
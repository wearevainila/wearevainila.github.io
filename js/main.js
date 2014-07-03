$(function() {
	var $keywords = $('.keywords strong'), counter = 1;
	setInterval(function(){
		$keywords.removeClass('active');
		$keywords.eq(counter++ % $keywords.length).addClass('active');	
	}, 6000);
});
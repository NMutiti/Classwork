$( document ).ready(function() {
		$( ".one" ).click(function() {
			console.log('click');
  			$(this).addClass("zoomone");
  			$(".two").addClass("zoomtwo");
  			$(".three").addClass("zoomthree");
  			$( ".one" ).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    			function(e) {
    				$(this).removeClass("zoomone");
  					$(".two").removeClass("zoomtwo");
  					$(".three").removeClass("zoomthree");
  				});
			});
	});

	var nextSentence = (function() {
  	var sentenceArray = ['Do I compare?', 'I’ve never felt desirable.', 'A few times I’ve felt fetishized.', 'But never as desirable as my friends.', 'It’s forced me to constantly scrounge for validation. ', 'Do I compare?', 'When I was young I used to play with the other kids in my neighborhood.', 'But I felt different.', 'I was never as popular, didn’t have as many friends. So, I stayed inside.', 'I thought it was because I was weird.', 'I thought I was annoying.', 'I thought I wasn’t cool.', 'But I think it was because I had yellow skin, small eyes, black hair, monolids….', 'Am I looking into this? Am I crazy?', 'Do I compare?', 'Do people notice me when I walk outside?', 'Do you remember that vine of that white girl?', 'She said, “Not to be racist or anything, but Asian people…” and starts laughing.', 'It was funny.', 'Do I compare?', 'The only time I feel noticed is during a virus.', 'I used to wish I had white skin, bigger eyes, curly hair, and got rid of these monolids.', 'Sometimes, I still do….', 'Do I compare?'];
  	var count = -1;
  	return function() {
    	return sentenceArray[++count % sentenceArray.length];
  	}
  	}());

  	$( ".one" ).click(function() {
  		document.getElementById('story').innerHTML = nextSentence();
  	});

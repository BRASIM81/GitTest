$('.image').each(function(i){
	setTimeout(function(){
		$('.image').eq(i).addClass('show');
	},150 * i);
});

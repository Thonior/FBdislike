$('span[class*="UIActionLinks_bottom"]').each(function() {
	$(this).append('<span class="dislike" onclick="dislike();">Dislike</span>&nbsp;&middot;&nbsp;');
});

$('.dislike').click(function(){
	alert('ola ke ase');
});
$(function(){
	$('ul#navigation li').each(function(){
		if(window.location.toString().toLowerCase().indexOf($(this).find('a').attr('href'))>0)
		{
			$('ul.nav li.active').removeClass('active');
			$(this).addClass('active');
			$(this).find('i').addClass('icon-white');
			return false;
		}
	});
});

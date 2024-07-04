$(document).ready(function() {

	window.onresize = function() {
		bannerSize()
	}
	$('#share-2').share({
		sites: ['qzone', 'qq', 'weibo', 'wechat']
	});

});

$(function() {

	$('#gototop').hide(); //隐藏go to top按钮

	$(window).scroll(function() {
		// console.log($(this).scrollTop());

		//当window的scrolltop距离大于520时，go to
		if ($(this).scrollTop() > 520) {
			$('#gototop').fadeIn();
		} else {
			$('#gototop').fadeOut();
		}
	});

	$('#gototop a').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 300);
		return false;
	});

});

/*改变原始宽度（0）*/
function openNav() {
	document.getElementById("mySidenav").style.width = "14.5%";
	{
		document.getElementById("gototop").style.opacity = "0";
	}
}
/*恢复原始宽度0*/
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	{
		document.getElementById("gototop").style.opacity = "1";
	}
}

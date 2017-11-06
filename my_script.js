// JavaScript Document
$(function(){
	$('.share_box').css('width','770px');
	$('.fa-minus-square').on('click',function(){
	$(this).toggleClass('fa-plus-square').removeClass('fa-minus-square');
		if($(this).hasClass('fa-plus-square')){
			$('.share_box').animate({'width':'205px'},'fast','linear');
		}else{
			$('.share_box').animate({'width':'770px'},'fast','linear');
			$(this).addClass('fa-minus-square');
		}
	});
});

$(function(){
	$('body').append('<div id="glayLayer"></div>');
	$('#glayLayer').hide();
	$('.header_nav > ul').hover(function(){
		$('#glayLayer:not(:animated)').fadeIn('slow');
	},
	function(){
		$('#glayLayer').fadeOut('slow');
	});
});

$(function(){
	$('.mega_hover').prepend('<div id="navLayer">');
	$('.mega_hover').hide();
	$('.header_nav > ul > li').hover(function(){
		$(this).addClass('selected');
		$('.mega_hover:not(:animated)',this).fadeIn('slow');
	},
	function(){
	  $(this).removeClass('selected');
		$('.mega_hover',this).fadeOut('slow');
	});
});

$(function(){
	$('.fa-window-close').on('click',function(){
		$('.mega_hover').fadeOut('slow');
		$('#glayLayer').fadeOut('slow');
	});
});

$(function(){
	$('.mega1_main span').before('<i class="fa fa-chevron-right fa-fw" aria-hidden="true"></i>');
	$('.mega5_main3 span').before('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
});
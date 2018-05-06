//-----------------------Slider-------------
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex=n);
}

function showSlides(n){
	var i;
	var slides=document.getElementsByClassName("mySlides");
	var dots=document.getElementsByClassName("dot");
	
	if(n>slides.length){
		slideIndex=1;
		}
	if(n<1){
		slideIndex=slides.length;
		}
	for (i=0; i<slides.length; i++){
		slides[i].style.display="none";
		}
	for (i=0; i<dots.length; i++){
		dots[i].className=dots[i].className.replace("active","");
		}
		slides[slideIndex-1].style.display="block";
		dots[slideIndex-1].className+=" active";
}

function slideTime(n){
 n=1
 showSlides(slideIndex += n);
 }
setInterval(slideTime, 4000);﻿

//---------------------------------E-mail---------------

$(document).ready(function(){
	$("#email").change(function(){
	var mail=$('#email').val();
		if(mail=(/^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,}$/i).test(mail)){
		$("#email").css('border', '1px solid green');
		}
		else{
		$("#infoEm").fadeIn(0);
		$("#email").css('border', '1px solid red');
		}
	});
})
$(document).ready(function(){
	$("#email").click(function(){
		$("#infoEm").hide(0);
	});
})

//---------------------------------Заказать звонок----------------------

$(document).ready(function(){
	$(".backCall").click(function(){
		$("#blackFon").fadeIn(0);
		$("#callMe").fadeIn(0);
		
	})
	$(".close,.orderCallMe").click(function(){
		$("#callMe").hide(0);
		$("#blackFon").hide(0);
	})
})

//---------------------Проверка ввода-звонок -------------

$(document).ready(function(){
	$(".nameCall").change(function(){
	var name=$('.nameCall').val();
		if(name=(/^[a-zA-Zа-яА-я]{2,}$/).test(name)){
		$(".nameCall").css('border', '1px solid green');
		}
		else{
		$(".secretNameCall").fadeIn(0);
		$(".nameCall").css('border', '1px solid red');
		}
	});
	$(".numbCall").change(function(){
	var num=$('.numbCall').val();
		if(num=(/^[0-9]{10}$/).test(num)){
		$(".numbCall").css('border', '1px solid green');
		}
		else{
		$(".secretNumbCall").fadeIn(0);
		$(".numbCall").css('border', '1px solid red');
		}
	});
})
$(document).ready(function(){
	$(".nameCall").click(function(){
		$(".secretNameCall").hide(0);
	});
	$(".numbCall").click(function(){
		$(".secretNumbCall").hide(0);
	});
})

//---------------------------------Вход----------------------

$(document).ready(function(){
	$(".registr").click(function(){
		$("#blackFon").fadeIn(0);
		$("#entryMe").fadeIn(0);
		
	})
	$(".close,.myEntry").click(function(){
		$("#entryMe").hide(0);
		$("#blackFon").hide(0);
	})
})

//---------------------Проверка ввода-Вход -------------

$(document).ready(function(){
	$(".emailEntry").change(function(){
	var mail=$('.emailEntry').val();
	var pattern=/^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,}$/i;
		if(mail=pattern.test(mail)){
		$(".emailEntry").css('border', '1px solid green');
		}
		else{
		$(".secretEmailEntry").fadeIn(0);
		$(".emailEntry").css('border', '1px solid red');
		}
	});
	$(".passEntry").change(function(){
	var myPass=$('.passEntry').val();
	var pattern=/^[a-zA-Z0-9]{8,}$/;
		if(myPass=pattern.test(myPass)){
		$(".passEntry").css('border', '1px solid green');
		}
		else{
		$(".secretPassEntry").fadeIn(0);
		$(".passEntry").css('border', '1px solid red');
		}
	});
})
$(document).ready(function(){
	$(".emailEntry").click(function(){
		$(".secretEmailEntry").hide(0);
	});
	$(".passEntry").click(function(){
		$(".secretPassEntry").hide(0);
	});
})

//---------------------------------Регистрация----------------------

$(document).ready(function(){
	$(".choiceTwo").click(function(){
		$("#entryMe").hide(0);
		
		$("#registerMe").fadeIn(0);	
	})
	$(".close,.myRegister").click(function(){
		$("#registerMe").hide(0);
		$("#blackFon").hide(0);
	})
})
//---------------Переход/с входа на регистрацию-------------------------------

$(document).ready(function(){
	$(".choiceOneR").click(function(){
		$("#registerMe").hide(0);
		
		$("#entryMe").fadeIn(0);	
	})
	
})

//---------------------Проверка ввода-Регистрации -------------

$(document).ready(function(){
	$(".nameReg").change(function(){
	var name=$('.nameReg').val();
		if(name=(/^[a-zA-Zа-яА-я]{2,}$/).test(name)){
		$(".nameReg").css('border', '1px solid green');
		}
		else{
		$(".secretNameReg").fadeIn(0);
		$(".nameReg").css('border', '1px solid red');
		}
	});
	$(".emailReg").change(function(){
	var mail=$('.emailReg').val();
	var pattern=/^[a-zA-Z0-9_]+@[a-z]+\.[a-z]{2,}$/i;
		if(mail=pattern.test(mail)){
		$(".emailReg").css('border', '1px solid green');
		}
		else{
		$(".secretEmailReg").fadeIn(0);
		$(".emailReg").css('border', '1px solid red');
		}
	});
	$(".passReg").change(function(){
	var myPass=$('.passReg').val();
	var pattern=/^[a-zA-Z0-9]{8,}$/;
		if(myPass=pattern.test(myPass)){
		$(".passReg").css('border', '1px solid green');
		}
		else{
		$(".secretPassReg").fadeIn(0);
		$(".passReg").css('border', '1px solid red');
		}
	});
	$(".passRegTwo").change(function(){	
	var myPasOne=$(".passReg").val();
	var myPasTwo=$(".passRegTwo").val();
		if(myPasOne!=myPasTwo){
		$(".secretPassRegTwo").fadeIn(0);
		$(".passReg").css('border', '1px solid red');
		$(".passRegTwo").css('border', '1px solid red');
		}
		else{
		$(".passReg").css('border', '1px solid green');
		$(".passRegTwo").css('border', '1px solid green');
		}
	});
})
$(document).ready(function(){
	$(".nameReg").click(function(){
		$(".secretNameReg").hide(0);
	});
	$(".emailReg").click(function(){
		$(".secretEmailReg").hide(0);
	});
	$(".passReg").click(function(){
		$(".secretPassReg").hide(0);
	});
	$(".passRegTwo").click(function(){
		$(".secretPassRegTwo").hide(0);
	});
})
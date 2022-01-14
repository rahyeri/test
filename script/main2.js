
$(document).ready(function(){
//1.1번이미지앞에 3번이 오게한다
  // $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
  //2. 1번이 가운데로 오게 슬라이드전체를 위치조정한다
  $('.slide > ul').css('margin-top','-600px');

  function moveSlide(){
    $('.slide > ul').animate({'margin-top':'-600px'},500,function(){
      $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
      $('.slide > ul').css('margin-top','-300px');
    });
  }
  let Timer = setInterval(moveSlide,3000);
  

});
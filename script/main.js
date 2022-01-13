$(document).ready(function(){

  //1.1번슬라이드의 앞쪽에 3번 슬라이드를 배치한다 

  $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');

//좌우슬라이드
 //1번슬라이드가 중앙으로 오게하기 위해 슬라이드전체를 왼쪽으로 1200픽셀만큼 이동하게 한다
 $('.slide > ul').css('margin-left','-1200px');
//  let n = 0;
function moveSlide(){
  $('.slide > ul').animate({'margin-left':'-2400px'},500,function(){
    $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
    $('.slide > ul').css('margin-left','-1200px');
  });
}

function moveRight(){
  $('.slide > ul').animate({'margin-left':'0px'},500,function(){
    $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
    $('.slide > ul').css('margin-left','-1200px');
  });
}
 let Timer = setInterval(moveRight,3000);
});
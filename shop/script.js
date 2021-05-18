// function showAction(){
//     document.getElementById('action').style.display="flex";
// }

// function hideAction(){
//     document.getElementById('action').style.display="none";
// }

// function showBey(){
//     document.getElementById('bey').style.display="flex";
// }

// function hideBey(){
//     document.getElementById('bey').style.display="none";
// }

// $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
// $(".radio-btn").on('click', function () {
//     var _this = $(this),
//         block = _this.parent().parent();
//     block.find('input:radio').attr('checked', false);
//     block.find(".radio-btn").removeClass('checkedRadio');
//     _this.addClass('checkedRadio');
//     _this.find('input:radio').attr('checked', true);
// });
// $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
// $.fn.toggleCheckbox = function () {
//     this.attr('checked', !this.attr('checked'));
// }
// $('.check-box').on('click', function () {
//     $(this).find(':checkbox').toggleCheckbox();
//     $(this).toggleClass('checkedBox');
// });

function getCounter2(multiplier = 1) {
    return function () {
       var counter2 = document.getElementById('counter2').innerHTML;
       var parsed = parseInt(counter2);
       var result2 = parsed + (multiplier * 1);
       document.getElementById('counter2').innerHTML = result2;
       if (result2 > 0){
        document.getElementById('bey').style.display="flex";
       }
       if (result2 <= 0){
        document.getElementById('counter2').innerHTML = 0;
        document.getElementById('bey').style.display="none";
    }
    }
}

document.getElementById('minus2').onclick = getCounter2(-1);

document.getElementById('plus2').onclick = getCounter2(); 



function getCounter1(multiplier = 1) {
    return function () {
       var counter1 = document.getElementById('counter1').innerHTML;
       var parsed = parseInt(counter1);
       var result1 = parsed + (multiplier * 1);
       document.getElementById('counter1').innerHTML = result1;
       if (result1 > 0){
        document.getElementById('free').style.display="flex";
       }
       if (result1 <= 0){
        document.getElementById('free').style.display="none";
        document.getElementById('counter1').innerHTML = 0;
    }
    }
}

document.getElementById('minus1').onclick = getCounter1(-1);

document.getElementById('plus1').onclick = getCounter1(); 



function getCounter3(multiplier = 1) {
    return function () {
       var counter3 = document.getElementById('counter3').innerHTML;
       var parsed = parseInt(counter3);
       var result3 = parsed + (multiplier * 1);
       document.getElementById('counter3').innerHTML = result3;
       if (result3 > 0){
        document.getElementById('action').style.display="flex";
       }
       if (result3 <= 0){
        document.getElementById('action').style.display="none";
        document.getElementById('counter3').innerHTML = 0;
    }
    }
}

document.getElementById('minus3').onclick = getCounter3(-1);

document.getElementById('plus3').onclick = getCounter3(); 


function getCounter4(multiplier = 1) {
    return function () {
       var counter4 = document.getElementById('counter4').innerHTML;
       var parsed = parseInt(counter4);
       var result4 = parsed + (multiplier * 1);
       document.getElementById('counter4').innerHTML = result4;
       if (result4 > 0){
        document.getElementById('dry-erase').style.display="flex";
       }
       if (result4 <= 0){
        document.getElementById('dry-erase').style.display="none";
        document.getElementById('counter4').innerHTML = 0;
    }
    }
}

document.getElementById('minus4').onclick = getCounter4(-1);

document.getElementById('plus4').onclick = getCounter4(); 


function getCounter5(multiplier = 1) {
    return function () {
       var counter5 = document.getElementById('counter5').innerHTML;
       var parsed = parseInt(counter5);
       var result5 = parsed + (multiplier * 1);
       document.getElementById('counter5').innerHTML = result5;
       if (result5 > 0){
        document.getElementById('lego').style.display="flex";
       }
       if (result5 <= 0){
        document.getElementById('lego').style.display="none";
        document.getElementById('counter5').innerHTML = 0;
    }
    }
}

document.getElementById('minus5').onclick = getCounter5(-1);

document.getElementById('plus5').onclick = getCounter5(); 


function getCounter6(multiplier = 1) {
    return function () {
       var counter6 = document.getElementById('counter6').innerHTML;
       var parsed = parseInt(counter6);
       var result6 = parsed + (multiplier * 1);
       document.getElementById('counter6').innerHTML = result6;
       if (result6 > 0){
        document.getElementById('choice').style.display="flex";
       }
       if (result6 <= 0){
        document.getElementById('choice').style.display="none";
        document.getElementById('counter6').innerHTML = 0;
    }
    }
}

document.getElementById('minus6').onclick = getCounter6(-1);

document.getElementById('plus6').onclick = getCounter6(); 

function getCounter7(multiplier = 1) {
    return function () {
       var counter7 = document.getElementById('counter7').innerHTML;
       var parsed = parseInt(counter7);
       var result7 = parsed + (multiplier * 1);
       document.getElementById('counter7').innerHTML = result7;
       if (result7 > 0){
        document.getElementById('fish').style.display="flex";
       }
       if (result7 <= 0){
        document.getElementById('fish').style.display="none";
        document.getElementById('counter7').innerHTML = 0;
    }
    }
}

document.getElementById('minus7').onclick = getCounter7(-1);

document.getElementById('plus7').onclick = getCounter7(); 



function getCounter8(multiplier = 1) {
    return function () {
       var counter8 = document.getElementById('counter8').innerHTML;
       var parsed = parseInt(counter8);
       var result8 = parsed + (multiplier * 1);
       document.getElementById('counter8').innerHTML = result8;
       if (result8 > 0){
        document.getElementById('robots').style.display="flex";
       }
       if (result8 <= 0){
        document.getElementById('robots').style.display="none";
        document.getElementById('counter8').innerHTML = 0;
    }
    }
}

document.getElementById('minus8').onclick = getCounter8(-1);

document.getElementById('plus8').onclick = getCounter8(); 


function getCounter9(multiplier = 1) {
    return function () {
       var counter9 = document.getElementById('counter9').innerHTML;
       var parsed = parseInt(counter9);
       var result9 = parsed + (multiplier * 1);
       document.getElementById('counter9').innerHTML = result9;
       if (result9 > 0){
        document.getElementById('tablet').style.display="flex";
       }
       if (result9 <= 0){
        document.getElementById('tablet').style.display="none";
        document.getElementById('counter9').innerHTML = 0;
    }
    }
}

document.getElementById('minus9').onclick = getCounter9(-1);

document.getElementById('plus9').onclick = getCounter9(); 

function refreshPage(){
    window.location.reload();
}
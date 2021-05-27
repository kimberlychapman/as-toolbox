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

function showPoints(){
    document.getElementById('point-box').style.display="block";
}

function hidePoints(){
    document.getElementById('point-box').style.display="none";
}

var total=[]
function pointTotal()
{
    var firstcheck = document.getElementById('_checkbox');
    var secondcheck =document.getElementById('_checkbox2');
    var thirdcheck =document.getElementById('_checkbox3');
    var fourthcheck = document.getElementById("_checkbox4");
    var fifthcheck = document.getElementById("_checkbox5");
    var sixthcheck = document.getElementById("_checkbox6");
    var seventhcheck = document.getElementById("_checkbox7");
    var eighthcheck = document.getElementById("_checkbox8");
    var ninthcheck = document.getElementById("_checkbox9");
    var tenthcheck = document.getElementById("_checkbox10");
    var eleventhcheck = document.getElementById("_checkbox11");
    var twelthcheck = document.getElementById("_checkbox12");
    var thirteenthcheck = document.getElementById("_checkbox13");
    var fourteenthcheck = document.getElementById("_checkbox14");
    var fifteenthcheck = document.getElementById("_checkbox15");
    var sixteenthcheck = document.getElementById("_checkbox16");
    var seventeenthcheck = document.getElementById("_checkbox17");
    var eighteenthcheck = document.getElementById("_checkbox18");
    var nineteenthcheck = document.getElementById("_checkbox19");
    var twentiethcheck = document.getElementById("_checkbox20");
    var twentyfirstcheck = document.getElementById("_checkbox21");
    var twentysecondcheck = document.getElementById("_checkbox22");
    var twentythirdcheck = document.getElementById("_checkbox23");
    var twentyfourthcheck = document.getElementById("_checkbox24");
    var twentyfifthcheck = document.getElementById("_checkbox25");
    var twentysixthcheck = document.getElementById("_checkbox26");
    var twentyseventhcheck = document.getElementById("_checkbox27");
    var twentyeighthcheck = document.getElementById("_checkbox28");
    var twentyninthcheck = document.getElementById("_checkbox29");
    var thirtiethcheck = document.getElementById("_checkbox30");
    var thirtyfirstcheck = document.getElementById("_checkbox31");
    var thirtysecondcheck = document.getElementById("_checkbox32");
    var thirtythirdcheck = document.getElementById("_checkbox33");
    var thirtyfourthcheck = document.getElementById("_checkbox34");
    var thirtyfifthcheck = document.getElementById("_checkbox35");
    var thirtysixthcheck = document.getElementById("_checkbox36");
    var thirtyseventhcheck = document.getElementById("_checkbox37");
    var thirtyeighthcheck = document.getElementById("_checkbox38");
    var thirtyninthcheck = document.getElementById("_checkbox39");
    var fortiethcheck = document.getElementById("_checkbox40");
    var fortyfirstcheck = document.getElementById("_checkbox41");
    var fortysecondcheck = document.getElementById("_checkbox42");
    var fortythirdcheck = document.getElementById("_checkbox43");
    var fortyfourthcheck = document.getElementById("_checkbox44");
    var fortyfifthcheck = document.getElementById("_checkbox45");
    var fortysixthcheck = document.getElementById("_checkbox46");
    var fortyseventhcheck = document.getElementById("_checkbox47");
    var fortyeighthcheck = document.getElementById("_checkbox48");
    var fortyninthcheck = document.getElementById("_checkbox49");
    var fiftiethcheck = document.getElementById("_checkbox50");
    var fiftyfirstcheck = document.getElementById("_checkbox51");
    var fiftysecondcheck = document.getElementById("_checkbox52");
    var fiftythirdcheck = document.getElementById("_checkbox53");
    var fiftyfourthcheck = document.getElementById("_checkbox54");


    if (firstcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (secondcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (thirdcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (fourthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fifthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (sixthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (seventhcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (eighthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (ninthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (tenthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (eleventhcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (twelthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (thirteenthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fourteenthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fifteenthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (sixteenthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (seventeenthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (eighteenthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (nineteenthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (twentiethcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (twentyfirstcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (twentysecondcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (twentythirdcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (twentyfourthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (twentyfifthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (twentysixthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (twentyseventhcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (twentyeighthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (twentyninthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (thirtiethcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (thirtyfirstcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (thirtysecondcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (thirtythirdcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (thirtyfourthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (thirtyfifthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (thirtysixthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (thirtyseventhcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (thirtyeighthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (thirtyninthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (fortiethcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fortyfirstcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fortysecondcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (fortythirdcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fortyfourthcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fortyfifthcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (fortysixthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fortyseventhcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fortyeighthcheck.checked){
        total.push(parseInt(3, 10))
    };


    if (fortyninthcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fiftiethcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fiftyfirstcheck.checked){
        total.push(parseInt(3, 10))
    };

    if (fiftysecondcheck.checked){
        total.push(parseInt(1, 10))
    };
    if (fiftythirdcheck.checked){
        total.push(parseInt(2, 10))
    };
    if (fiftyfourthcheck.checked){
        total.push(parseInt(3, 10))
    };

    console.log(total);
    let earn = total.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
    }, 0);
    console.log(earn)
    document.getElementById("add_points").innerHTML=earn;
    };


    // var toNumbers = total => total.map(Number);
    // return toNumbers;



// function totalPoints(){
    // var firstcheck = document.getElementById('_checkbox');
    // var secondcheck =document.getElementById('_checkbox2');
    // var thirdcheck =document.getElementById('_checkbox3');
    // if (firstcheck.checked){
    //     total.push(firstcheck.value)};
    // if (secondcheck.checked){
    //     total.push(secondcheck.value)
    
    // };
    // if (thirdcheck.checked){
    //     total.push(thirdcheck.value)
    // };
//     return total;
// }

// submit.addEventListener("click", function(){
//     var total =totalPoints();
//     console.log(total);
//     document.getElementById('add_points').innerHTML=total;
// });

// function totalPoints(){
//     total = 0;
//     add = 0;
//     var firstcheck = document.getElementById("_checkbox");
//     var secondcheck = document.getElementById("_checkbox2");
//     var thirdcheck = document.getElementById("_checkbox3");
    // var fourthcheck = document.getElementById("_checkbox4");
    // var fifthcheck = document.getElementById("_checkbox5");
    // var sixthcheck = document.getElementById("_checkbox6");

    // var seventhcheck = document.getElementById("_checkbox7");
    // var eighthcheck = document.getElementById("_checkbox8");
    // var ninthcheck = document.getElementById("_checkbox9");

    // var tenthcheck = document.getElementById("_checkbox10");
    // var eleventhcheck = document.getElementById("_checkbox11");
    // var twelthcheck = document.getElementById("_checkbox12");

    // var thirteenthcheck = document.getElementById("_checkbox13");
    // var fourteenthcheck = document.getElementById("_checkbox14");
    // var fifteenththcheck = document.getElementById("_checkbox15");

    // var sixteenthcheck = document.getElementById("_checkbox16");
    // var seventeenthcheck = document.getElementById("_checkbox17");
    // var eighteenthcheck = document.getElementById("_checkbox18");

    // if (firstcheck.checked){
    //     total += 1
    // };
    // if (secondcheck.checked){
    //     total += 2
    // };
    // if (thirdcheck.checked){
    //     total += 3
    // }
    // if (fourthcheck.checked){
    //     total += 1
    // };
    // if (document.getElementById("_checked5").checked){
    //     add += 2
    // }
    // if (document.getElementById("_checked6").checked){
    //     add += 3
    // }
    // if (document.getElementById("_checked7").checked){
    //     add += 1
    // }
    // if (document.getElementById("_checked8").checked){
    //     add += 2
    // }
    // if (document.getElementById("_checked9").checked){
    //     add += 3
    // }
    // if (document.getElementById("_checked10").checked){
    //     add += 1
    // }
    // if (document.getElementById("_checked11").checked){
    //     add += 2
    // }
    // if (document.getElementById("_checked12").checked){
    //     add += 3
    // }
    // if (document.getElementById("_checked13").checked){
    //     add += 1
    // }
    // if (document.getElementById("_checked14").checked){
    //     add += 2
    // }
    // if (document.getElementById("_checked15").checked){
    //     add += 3
    // }
    // if (document.getElementById("_checked16").checked){
    //     add += 1
    // }
    // if (document.getElementById("_checked17").checked){
    //     add += 2
    // }
    // if (document.getElementById("_checked18").checked){
    //     add += 3
    // }
    
//     document.getElementById('add_points').innerHTML=total;
// }
// totalPoints();


// function totalPoints(){
//     var inputs = document.getElementsByClassName('my_points'),
//         total  = document.getElementById('add_points');
    
//      for (var i=0; i < inputs.length; i++) {
//         inputs[i].onchange = function() {
//             var add = this.value * (this.checked ? 1 : -1);
//             total.innerHTML = parseFloat(total.innerHTML) + add
//         }
//       }
//     }







function getCounter(multiplier = 1) {
    return function () {
       var counter = document.getElementById('counter').innerHTML;
       var parsed = parseInt(counter);
       var result = parsed + (multiplier * 1);
       document.getElementById('counter').innerHTML = result;
       if (result < 0){
        document.getElementById('counter').innerHTML = 0;
    }
    }
}

document.getElementById('minus').onclick = getCounter(-1);

document.getElementById('plus').onclick = getCounter(); 


function getCounter2(multiplier = 1) {
    return function () {
       var counter2 = document.getElementById('counter2').innerHTML;
       var parsed = parseInt(counter2);
       var result2 = parsed + (multiplier * 1);
       document.getElementById('counter2').innerHTML = result2;
       if (result2 < 0){
           document.getElementById('counter2').innerHTML = 0;
       };
    }
}


document.getElementById('minus2').onclick = getCounter2(-1);

document.getElementById('plus2').onclick = getCounter2(); 

function getCounter3(multiplier = 1) {
    return function () {
       var counter3 = document.getElementById('counter3').innerHTML;
       var parsed = parseInt(counter3);
       var result3 = parsed + (multiplier * 1);
       document.getElementById('counter3').innerHTML = result3;
       if (result3 < 0){
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
       if (result4 < 0){
        document.getElementById('counter4').innerHTML = 0;
    }
    }
}

document.getElementById('minus4').onclick = getCounter4(-1);

document.getElementById('plus4').onclick = getCounter4(); 
// 
function getCounter5(multiplier = 1) {
    return function () {
       var counter5 = document.getElementById('counter5').innerHTML;
       var parsed = parseInt(counter5);
       var result5 = parsed + (multiplier * 1);
       document.getElementById('counter5').innerHTML = result5;
       if (result5 < 0){
        document.getElementById('counter5').innerHTML = 0;
    }
    }
}

document.getElementById('minus5').onclick = getCounter5(-1);

document.getElementById('plus5').onclick = getCounter5();
// 

function getCounter6(multiplier = 1) {
    return function () {
       var counter6 = document.getElementById('counter6').innerHTML;
       var parsed = parseInt(counter6);
       var result6 = parsed + (multiplier * 1);
       document.getElementById('counter6').innerHTML = result6;
       if (result6 < 0){
        document.getElementById('counter6').innerHTML = 0;
    }
    }
}

document.getElementById('minus6').onclick = getCounter6(-1);

document.getElementById('plus6').onclick = getCounter6();

// 

function getCounter7(multiplier = 1) {
    return function () {
       var counter7 = document.getElementById('counter7').innerHTML;
       var parsed = parseInt(counter7);
       var result7 = parsed + (multiplier * 1);
       document.getElementById('counter7').innerHTML = result7;
       if (result7 < 0){
        document.getElementById('counter7').innerHTML = 0;
    }
    }
}

document.getElementById('minus7').onclick = getCounter7(-1);

document.getElementById('plus7').onclick = getCounter7();

// 

function getCounter8(multiplier = 1) {
    return function () {
       var counter8 = document.getElementById('counter8').innerHTML;
       var parsed = parseInt(counter8);
       var result8 = parsed + (multiplier * 1);
       document.getElementById('counter8').innerHTML = result8;
       if (result8 < 0){
        document.getElementById('counter8').innerHTML = 0;
    }
    }
}

document.getElementById('minus8').onclick = getCounter8(-1);

document.getElementById('plus8').onclick = getCounter8();

// document.getElementById('minus').onclick = function() {
//     var counter = document.getElementById('counter').innerHTML;
//     var parsed = parseInt(counter);
//     var result = parsed -1;
//     document.getElementById('counter').innerHTML = result;
//     document.getElementById('list').innerHTML= result;
// }

// document.getElementById('plus').onclick = function() {
//     var counter = document.getElementById('counter').innerHTML;
//     var parsed = parseInt(counter);
//     var result = parsed +1;
//     document.getElementById('counter').innerHTML = result;
//     document.getElementById('list').innerHTML= result;
// }

var list = document.getElementById('demo');

function changeText2() {
    var firstname = "";
    var result = document.getElementById('counter').innerHTML;
    if (result >= 1) {
        var entry = document.createElement('li');
        var firstname = "Free Choice"
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    }
    // document.getElementById('boldStuff2').innerHTML = firstname;
    // var entry = document.createElement('li');
    // entry.appendChild(document.createTextNode(firstname));
    // list.appendChild(entry);
};
changeText2();


var list = document.getElementById('demo');

function checkOut(){
    var result = document.getElementById('counter').innerHTML;
    var result2 = document.getElementById('counter2').innerHTML;
    var result3 = document.getElementById('counter3').innerHTML;
    var result4 = document.getElementById('counter4').innerHTML;
    if (result >= 1){
        var entry = document.createElement('li');
        var firstname = "Free Choice"
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    };
    if (result2 >= 1){     
        var entry = document.createElement('li');
        var firstname = "Action Figures"
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    };
    if (result3 >= 1){     
        var entry = document.createElement('li');
        var firstname = "Swedish Fish"
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    };
    if (result4 >= 1){     
        var entry = document.createElement('li');
        var firstname = "Dry Erase Supplies"
        entry.appendChild(document.createTextNode(firstname));
        list.appendChild(entry);
    };
}
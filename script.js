//Age in Days

function ageInDays() {
var birthYear = prompt("Which Year Did You Born Dear....??");
var ageInDayss = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You Are ' + ageInDayss + ' Days Old.')
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);    
}

function reset(){
    document.getElementById('ageInDays').remove();
}

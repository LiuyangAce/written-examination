var div = document.getElementById('div');
var p = document.getElementById('p');

function onClickFn (event) {
    var tagName = event.currentTarget.tagName;
    var phase = event.eventPhase;
    console.log(tagName, phase);
}

div.addEventListener('click', onClickFn, false);
p.addEventListener('click', onClickFn, false);
// p div

// var button = document.getElementById('clickMe');

// button.onclick = function() {
//   console.log('1.Button');
// };
// document.body.onclick = function() {
//   console.log('2.body');
// };
// document.onclick = function() {
//   console.log('3.document');
// };
// window.onclick = function() {
//   console.log('4.window');
// };

// //  window document body button
// // 1234

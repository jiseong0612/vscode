var _this = this;
var $body = document.body;
var $div = document.createElement('div');
var $input = document.createElement('input');
var $btn = document.createElement('button');
var $selec = document.querySelector('#selec');
$input.placeholder = 'what\'s your name';
$btn.textContent = 'click';
$div.append($input, $btn);
$body.append($div);
$btn.addEventListener('click', function () {
    var userName = $input.value;
    alert("my name is ".concat(userName));
});
$selec.addEventListener('change', function (event) {
    console.log(_this); // 화살표 함수에서 this는 window를 가르킴
    console.log(event.target);
});

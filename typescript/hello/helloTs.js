var $body = document.body;
var $div = document.createElement('div');
var $input = document.createElement('input');
var $btn = document.createElement('button');
$input.placeholder = 'what\'s your name';
$btn.textContent = 'click';
$div.append($input, $btn);
$body.append($div);
$btn.addEventListener('click', function () {
    var userName = $input.value;
    alert("my name is ".concat(userName));
});

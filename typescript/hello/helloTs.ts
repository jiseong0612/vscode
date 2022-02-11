const $body = document.body;
const $div = document.createElement('div');
const $input = document.createElement('input');
const $btn = document.createElement('button');

$input.placeholder = 'what\'s your name';
$btn.textContent = 'click';
$div.append($input, $btn);
$body.append($div);

$btn.addEventListener('click', ()=>{
    let userName:string = $input.value; 
    alert(`my name is ${userName}`);
});


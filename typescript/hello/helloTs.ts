const $body = document.body;
const $div = document.createElement('div');
const $input = document.createElement('input');
const $btn = document.createElement('button');

const $selec = document.querySelector('#selec') as HTMLDivElement;

$input.placeholder = 'what\'s your name';
$btn.textContent = 'click';
$div.append($input, $btn);
$body.append($div);

$btn.addEventListener('click', ()=>{
    let userName:string = $input.value; 
    alert(`my name is ${userName}`);
});

$selec.addEventListener('change', (event)=>{
    console.log(this); // 화살표 함수에서 this는 window를 가르킴
    console.log(event.target);    
})



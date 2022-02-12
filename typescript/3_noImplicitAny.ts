function add( a, b){    
    return a +b;    // Parameter 'b' implicitly has an 'any' type, but a better type may be inferred from usage
}


function add2(a: number, b: number){
    return a + b;
}

console.log(add(1, 2));

//noImplicitAny 는 변수들이 미리 정의된 타입을 가져야 되는지의 여부를 제어합니다.

// 타입스크립트 환경설정을 건들이지 않았다면 add()의 파라미터 a, b에서
// 타입을 지정해주지 않았기에 에러가 나지만,
// tsconfig.json에서 
// "strict": true 를 주석처리하고 (defualt : "strict": true , "noImplicitAny" : true)
// "noImplicitAny" 를 false 로 설정하면 함수의 파라미터 타입셋팅을 안 해도 
// 에러가 사라지면서 문구가 제일 위와 같이 바뀌는데 그냥 알아만 둬라.
// 타입스크립트 서버 재실행 하는법 >>> ctrl + shift + p >>> TypeScript : Restart  TS Server 선택 후 엔터!


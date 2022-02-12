const names = ['Alice', 'Bob'];

console.log(names[1].toUpperCase());

// 위와 같이 초기화된 배열의 2번째 인덱스엔 값이 없음애도 불구하고 에러를 잡아내지 못 한다.
// 타입을 잡아내는것이 타입스크립트의 목표. 문법의 에러를 잡아내 는것은 아니다.

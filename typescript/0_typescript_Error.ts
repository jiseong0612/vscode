const a = null + 7; //JS에선 7 이 되지만...

const b = [] + 12; //JS에선 문자열 '12'가 되지만...

alert('hello', 'hihi'); //JS에선 아규먼트가 1개인 함수인경우 앞의것이 실행되지만...

// 타입스크립트에선 의도치 않은 코드가 이상한 오류로 이어질 수 있다.
// 위와 같이 null 과 7을 더하거나 배열과 12를 더하거나 
// 불 필요한 메게변수를 추가해서 함수를 호출하는 것을 당연하게 여긴다면
// 차라리 쓰지 않는 것이 낫다. (이상하게 쓸꺼면 쓰지말아라;....) 
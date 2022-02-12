interface State {
    name : string
    capital : string
}

const states:State[] = [
    {name : 'Alababa', capital : 'Montgomery'},
    {name : 'Alaska', capital : 'Juneau'},
    {name :'Arizona', capital : 'Phoenix'},
]

for(const state of states){
    console.log(state.capital);
    //console.log(state.capitol);     //roperty 'capitol' does not exist on type 'State'. Did you mean 'capital'?
}

//인터페이스를 만들어 사용함으로써, 사용자가 'capitol'로 오타를 낸다 하더라도 컴파일 과정에서 잡아준다.
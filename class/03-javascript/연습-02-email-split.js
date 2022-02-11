let friend = {
    name: "철수",
    age: 13,
    school: "codecamp"
}
//undefined
friend
//{name: '철수', age: 13, school: 'codecamp'}
friend.school
//'codecamp'
friend.age
//13
friend.hello
//undefined
const classmates = [
    { name: "철수", age: 13, school: "다람쥐초등학교" },
    { name: "영희", age: 8, school: "공룡초등학교" },
    { name: "훈이", age: 11, school: "거북이초등학교" }
]
//undefined
classmates.length
//3
classmates[1].school
//'공룡초등학교'
const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]
//undefined
console.log (fruits[0].number+" " + fruits[0].title)
//1 레드향
console.log (fruits[1].number+" " + fruits[1].title)
//2 샤인머스켓
console.log (fruits[2].number+" " + fruits[2].title)
//3 산청딸기
console.log (fruits[3].number+" " + fruits[3].title)
//4 한라봉
console.log (fruits[4].number+" " + fruits[4].title)
//5 사과
console.log (fruits[5].number+" " + fruits[5].title)
//6 애플망고
console.log (fruits[6].number+" " + fruits[6].title)
//7 딸기
console.log (fruits[7].number+" " + fruits[7].title)
//8 천혜향
console.log (fruits[8].number+" " + fruits[8].title)
//9 과일선물세트
console.log (fruits[9].number+" " + fruits[9].title)
//10 귤
if(1+1===2){console.log("정답입니다!")}else{console.log("틀렸습니다")}
//VM1060:1 정답입니다!
//undefined
if(1+1===3){console.log("정답입니다!")}else{console.log("틀렸습니다")}
//VM1069:1 틀렸습니다
//undefined
const pw1= "123"
//undefined
const pw2= "345"
//undefined
if(pw1===pw2){alert("비밀번호가 일치합니다")}else{alert(ㅇ?)}
//VM1375:1 Uncaught SyntaxError: Unexpected token ')'
if(pw1===pw2){alert("비밀번호가 일치합니다")}else{alert("ㅇ?")}
//undefined
const profile={name:"철수",age:12,school:"다람쥐초등학교"}
//undefined
if (profile.age>=20){console.log("성인입니다")}else if(profile.age>=8&&profile.age<=19){console.log("학생입니다")}else{console.log("어린이입니다")}
//VM2244:1 학생입니다
//undefined
let students=["a","b","c","d","f"]
//undefined
for(let i=0; i<students.length;i++){console.log(students[i]+"! hi!")}
//VM3150:1 a! hi!
//VM3150:1 b! hi!
//VM3150:1 c! hi!
//VM3150:1 d! hi!
//VM3150:1 f! hi!
let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
  //undefined
  for(let i =0;i<persons.length;i++){if(persons[i].age>18){console.log(persons[i].name+'님은 성인입니다')}else{console.log(persons[i].name+'님은 미성년자입니다')}}
//VM3934:1 철수님은 미성년자입니다
//VM3934:1 영희님은 성인입니다
//VM3934:1 도우너님은 미성년자입니다
//VM3934:1 말포이님은 미성년자입니다
//VM3934:1 도비님은 미성년자입니다
const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]
    //undefined
    for(let a =0;a<fruits.length;a++){console.log(fruits[a].number+" "+fruits[a].title)}
//VM4364:1 1 레드향
//VM4364:1 2 샤인머스켓
//VM4364:1 3 산청딸기
//VM4364:1 4 한라봉
//VM4364:1 5 사과
//VM4364:1 6 애플망고
//VM4364:1 7 딸기
//VM4364:1 8 천혜향
//VM4364:1 9 과일선물세트
//VM4364:1 10 귤
const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//undefined
token
//'209673'
setTimeout(function(){
    console.log("펑")},3000)
//52
//VM1114:2 펑
setInterval(function(){console.log("1초가 지났습니다")},3000)
//53
//10VM1351:1 1초가 지났습니다
let time=10
//undefined
setInterval(function(){
    if(time>=0){console.log(time) }time = time-1},1000)
//2
//VM712:2 10
//VM712:2 9
//VM712:2 8
//VM712:2 7
//VM712:2 6
//VM712:2 5
//VM712:2 4
//VM712:2 3
//VM712:2 2
//VM712:2 1
//VM712:2 0
let time=180
//undefined
setInterval( function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time % 60).padStart(2,"0")
        console.log(min+":"+sec)
        time= time-1
    }
},1000)
//2
//VM2037:5 03:00
//VM2037:5 02:59
//VM2037:5 02:58
//VM2037:5 02:57
//VM2037:5 02:56
//VM2037:5 02:55
//VM2037:5 02:54
//VM2037:5 02:53
//VM2037:5 02:52
//VM2037:5 02:51
//VM2037:5 02:50
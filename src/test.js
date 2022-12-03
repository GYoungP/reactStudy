// let sum =0
// for (let i =0; i < 10; i++) {
//     sum += i;
// }
// console.log(sum);

// if(i%2==0)//짝수


//1.hello라는 함수를 만들어서 hi를 반환해주는 함수를 만들어보세요
const hello = () => {
    return "hi"
}
console.log(hello()) //함수호츨할때 괄호


//sumCal이라는 함수를 만들어서 0부터 10까지 더하는데 짝수만 더해서 결과를 반환하는 함수를 만들어보세요

//a,b라는 인자를 받아서 a부터 b까지 짝수만 더하는 함수를 만들어보세요
// let a = 0;
// let b = 100;

const sumCal = (a, b) => {

    let sum = 0
    for(let i = a; i < b; i++) {
        if (i%2 ===0) {
            sum += i
        }
    }
    return sum
}

console.log(sumCal(0, 100))

//a,b라는 인자를 받아서 a부터 b까지 짝수만 더하는 함수를 만들어보세요
// a=1
// b=100

// "\n" <- 줄바꿈

let friends = [
  { name: "라이언", age: 2 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 5 },
  { name: "무지", age: 3 },
  { name: "무지1" },
];



let max = -9999999999999;

console.log(friends[0].age);
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].age)
    if (max < friends[i].age) {
        max = friends[i].age
    }
}
console.log(max) //최대값 찾기

Math.max() //최대값
Math.mix() //최소값
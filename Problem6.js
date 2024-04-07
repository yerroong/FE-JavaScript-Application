// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];

//staff 제거
let filtered = arr.filter((value) => value.part != "staff");

//나이 내림차순
filtered.sort(function (a, b) { return b.age - a.age; });

//part를 key로 가지는 value들만 대문자로 바꾸기
const modifiedArr = filtered.map(value=> ({
  ...value,
  part: value.part.toUpperCase()
}));


console.log(modifiedArr);
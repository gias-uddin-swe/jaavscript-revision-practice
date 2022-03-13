var name = "hero alom";
var lname = "Uganda";
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
console.log("Hello " + name + " Welcome to " + lname);

//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  বাববার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
console.log(`Hello, ${name}!Welcome to ${lname}`);

// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = {
  name: "dog",
  color: "brown",
  age: 7,
};
let { age, ...rest } = animal;

// let { age, ...rest } = animal || {};
console.log(rest);

// spread operator as rest operator
function sum({ name, ...rest }) {
  console.log(rest);
}

sum(animal);

// spread operator for merging arrays or objects
const numList1 = [1, 2, 3];
const numList2 = {
  name: "hero",
  Age: 18,
};
let numLists = [...numList1, numList2];
console.log(numLists);

let animalWithBreed = {
  ...animal,
  breed: "",
};

console.log(animalWithBreed);

//নেস্টেড  অবজেক্ট  অফ  এরে

const dreamGirl = [
  {
    dream1: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [
              { name: "rofik" },
              { name: "jobbar" },
              { name: "salam" },
              { name: "borkot" },
              undefined,
            ],
          },
        },
        { instagram: "https://www.instagram.com/" },
        { twitter: "https://twitter.com/" },
        { github: "https://github.com/" },
        { phone: ["01254823212", "02152457"] },
      ],
    },
  },
];

console.log(dreamGirl[0].dream1);

// loop for in loop

const object = { a: 1, b: 2, c: 3 };
console.log(object["a"]);

for (const property in object) {
  console.log(property);
  console.log(object);
  //   console.log(`${property}: ${object[property]}`);
}

// for loop

const friends = ["hero", "broo", "china", "angel"];
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log(element);
}

// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

const numbers = [1, 2, 4, 6, 5, 10];

function sum(x) {
  return x * x;
}

const result = numbers.map(
  (x = function (x) {
    return x * x;
  })
);
// console.log(result);

// using loop insted of map
const numbers1 = [1, 2, 4, 6, 5, 10];
const newArray = [];
for (let i = 0; i < numbers1.length; i++) {
  const element = numbers1[i];
  const result = sum(element);
  newArray.push(result);
}

console.log(newArray);

// এক লাইনেই  ম্যাপ করে   ফেলা
const output3 = numbers.map((x) => x * x);
console.log(output3);

// ম্যাপ এ যেভাবে  ভিতরে ভিতরে  লুপ চলে

//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |

const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const output1 = products.filter((pd) => pd.name == "lenovo");
console.log(output1);

// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const output = products.filter((pd) => pd.color !== "pink");
console.log(output);

// filter with three arguments

const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.filter(function (element, index, arr) {
  console.log(index);
  console.log(arr);
  return element > 2;
});
console.log(result2);

// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

const output5 = products.find((pd) => pd.color == "black");
console.log(output5);

//একটা মজার ব্যাপার হলো ভিতরে  ভিতরে সবাই লুপ ই  চালাচ্ছে

// optional chaining

const number = null;

console.log(number?.age, number?.name);
console.log(number);

// indexof

const friends2 = ["squash", "onions", "shallots"];

console.log(friends2.indexOf("gias") == -1);

// এইবার  একটু  API  নিয়ে  আলোচনা  করা  যাক

// all api link: https://apipheny.io/free-api/

// open libary api : https://openlibrary.org/works/OL45883W.json

// university list : http://universities.hipolabs.com/search?country=United+States

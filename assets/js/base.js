function $(selector) {
  return document.querySelector(selector);
}

// variables
// Bai 1
const searchForm = $(".search-form");
const itemResult = $(".text-result");
const persons = [];
const arrImprove = [];

// Bai 2
const dayForm = $(".day-form");

// Bai 1

for (let i = 1; i <= 2000; i++) {
  persons.push({
    id: i,
    name: `Name ${i}`,
    address: "Da Nang",
    gender: 1,
    phoneNumber: "123456789",
    description: "test",
    source: `Source ${i}`,
  });
}

// Cách 1: Sử dụng vòng lặp for, for...of or for...each
// function searchItemBynameOrSource(text, arr) {
//     for(let element of arr) {
//         if(element => element.name.toLowerCase() === text || element.source.toLowerCase() === text) {
//             return element
//         }
//     }
// }

// Cách 2: Sử dụng find
function searchItemBynameOrSource(text, arr) {
  const item = arr.find(
    (element) =>
      element.name.toLowerCase() === text ||
      element.source.toLowerCase() === text
  );
  return item;
}

// Cách 3: Sử dụng filter
// function searchItemBynameOrSource(text, arr) {
//     const items = arr.filter(element => element.name.toLowerCase().includes(text) || element.source.toLowerCase() === text)
//     return items[0]
// }

// Cách 4: Sử dụng findIndex
// function searchItemBynameOrSource(text, arr) {
//     const index = arr.findIndex(element => element.name.toLowerCase() === text || element.source.toLowerCase() === text)
//     return arr[index]
// }

/*
    Nếu người dùng tìm kiếm nhiều lần tại 1 thời điểm
    Cách cải thiện để tối ưu hiệu suất:
        - Tạo 1 đối tượng trống mới
        - Ánh xạ mảng thành các khóa và giá trị: khóa là name và source và theo các giá trị là chính đối tượng đó
        - Tìm kiếm bằng cách truy cập vào đối tượng
*/

persons.forEach((person) => {
  const name = person.name.toLowerCase();
  const source = person.source.toLowerCase();
  arrImprove[name] = person;
  arrImprove[source] = person;
});

function improveSearchItemBynameOrSource(text, arr) {
  return arr[text];
}

function handleSubmitSearch() {
  const text = $(".name");
  const value = text.value.toLowerCase();
  const item = searchItemBynameOrSource(value, persons);
  itemResult.innerHTML = JSON.stringify(item) || "Not found item!";
}

searchForm &&
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitSearch();
  });

// Bài 2
const days = ["thứ 2", "thứ 3", "thứ 4", "thứ 5", "thứ 6"];
const number = $(".number");
const dayResult = $(".day-result");

function determineDay(numberDay) {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay() - 1;

  const index = (dayOfWeek + numberDay) % days.length;
  return days[index];
}

function handleSubmitDetermineDay() {
  const value = parseInt(number.value.toLowerCase());
  dayResult.innerHTML = determineDay(value);
}

dayForm &&
  dayForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmitDetermineDay();
  });

// Bai 3
const btns = document.querySelectorAll(".btn");
const resultCalculator = $(".result-calculator");

function handleButon(a, b, action) {
  let result = 0;
  switch (action) {
    case "+":
      result = BigInt(a) + BigInt(b);
      break;
    case "-":
      result = BigInt(a) - BigInt(b);
      break;
    case "*":
      result = BigInt(a) * BigInt(b);
      break;
    case "/":
      result = BigInt(a) / BigInt(b);
      break;
    default:
      break;
  }
  return result.toLocaleString("en-US");
}

btns &&
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const valueX = $(".input-x").value;
      const valueY = $(".input-y").value;
      resultCalculator.innerHTML = handleButon(
        valueX,
        valueY,
        btn.value
      ).toString();
    });
  });

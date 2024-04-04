// 1. Number
// Ví dụ
const x = 12
const y = 12.5

// Chuyển number sang string
// Sử dụng toString(), toString(base)
x.toString()
x.toString(16) //chuyển sang hệ cơ số 16
x.toString(2) //chuyển sang hệ cơ số 2

// Làm tròn số
// toFixed(n): trả về string với n chữ số sau dấu phẩy
//Ví dụ:
let a = 1.2345;
let b = a.toFixed(2);
console.log(b);

// Chuyển đổi kiểu dữ liệu String về Number
// Sử dụng hàm Number(), toán tử một ngôi +
console.log(Number("200")); //--> 200
console.log(+"200"); // 200
// -> Nếu chứa kí tự không phải dạng số thì kết quả là NaN:
console.log(Number("200px")); //--> NaN
console.log(+"200px"); // NaN

// Hàm parseInt tách lấy số nguyên
// Hàm parseFloat tách lấy số thực
console.log(parseInt("100px")); // 100
console.log(parseFloat("1.1em")); // 1.1
// -> Nếu không thể tách được số nào thì parseInt và parseFloat trả về NaN
console.log(parseInt("$100")); // NaN
console.log(parseFloat("$100")); // NaN

// Kiểm tra số với isNaN và isFinite
// Hàm isNaN(value): chuyển đổi value thành dạng số rồi kiểm tra xem có bằng NaN hay không
console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false

// Hàm isFinite(value): chuyển đổi giá trị value thành dạng số và trả về true nếu số đó khác Infinity, 
// -Infinity và NaN, ngược lại thì trả về false
console.log(isFinite("1")); // true - "1" chuyển thành 1
console.log(isFinite("abc")); // false - "abc" chuyển sang số thành NaN

// Một số hàm toán học
// Math.floor(): làm tròn xuống
console.log(Math.floor(3.6)) //3

// Math.ceil(): làm tròn lên
console.log(Math.ceil(3.6)) //4

// Math.round(): làm tròn số nguyên gần nhất(có thể làm tròn lên hoặc làm tròn xuống)
console.log(Math.round(3.6)) //4

// Math.random(): trả về 1 giá trị ngẫu nhiên từ 0 đến 1 (không bao gồm 1)
console.log(Math.random());

// Math.max(a,b,c,...): trả về giá trị lớn nhất từ 1 dãy số
console.log(Math.max(1, 3.2, -1, 10, 4)); // 10

// Math.min(a,b,c,...): trả về giá trị nhỏ nhất từ 1 dãy số
console.log(Math.min(1, 3.2, -1, 10, 4)); // -1

// Math.pow(n, base): Trả về số n mũ base.
console.log(Math.pow(2, 3));




// 2. String
const text = "Do Thi Nho"

// Lấy độ dài của chuỗi
console.log(text.length) // 10

// Tìm kiếm chuỗi con trong một chuỗi: indexOf, lastIndexOf()

// indexOf: Nếu tìm thấy nó sẽ trả về vị trí đầu tiên của ký tự, nếu không sẽ trả về -1
// lastIndexOf: Nếu tìm thấy nó sẽ trả về vị trí cuối cùng của ký tự, nếu không sẽ trả về -1
// search: Nếu tìm thấy nó sẽ trả về vị trí đầu tiên của ký tự, nếu không sẽ trả về -1
// includes: trả về giá trị true nếu tìm thấy, false nếu k tìm thấy

console.log(text.indexOf("o"));//1
console.log(text.lastIndexOf("o"));//9
console.log(text.search("o"));//1
console.log(text.includes("o"));//1

// Tách chuỗi
// slice(), subString(), substr()

// slice(start, end): tách chuỗi từ vị trí start đến end-1
// -> Nếu không có tham số end thì nó sẽ tính từ start đến hết chuỗi
// -> // Nếu tham số là số âm thì nó sẽ đếm từ phía cuối chuỗi đến đầu chuỗi
let mess = "JS is a programming language pro";

console.log(mess.slice(8, 19)); //--> "programming"
console.log(mess.slice(8)); //--> "programming language pro"
console.log(mess.slice(-25, -13)); //--> "programming"

// subString(), giống với slice(), nhưng không có giá trị âm.
console.log(mess.substring(8, 19)); //--> "programming"

// substr() tương tự như slice() nhưng không có tham số end, tham số thứ hai là độ dài của chuỗi bạn muốn cắt.
//Nó cũng nhận tham số bắt đầu là số âm, nếu không xác định độ dài chuỗi muốn cắt thì nó sẽ tính từ vị trí bắt đầu ta truyền vào cho đến hết chuỗi.
console.log(mess.substr(8, 11)); //--> "programming"
console.log(mess.substr(8)); //--> "programming language pro"
console.log(mess.substr(-3)); //--> "pro"

// Thay thế chuỗi: replace()
const str = 'Please visit Microsoft and Microsoft!';
const n1 = str.replace('Microsoft', 'W3Schools');
console.log(n1); //--> "Please visit W3Schools and Microsoft!"

// Chuyển chuỗi sang chữ hoa hoặc thường
// toUpperCase(), toLowerCase()
const text1 = 'Hello World';

const textUp = text1.toUpperCase(); //--> "HELLO WORLD"
const textLow = text1.toLowerCase(); //--> "hello world"

// Nối chuỗi: concat()
const text2 = "in JS"
console.log(text1.concat(' ', text2)) // Hello World in JS

// Xóa khoảng trắng 2 bên chuỗi
let str1 = '         200Lab       ';
let newStr = str1.trim(); //--> "200Lab"

// Truy xuất các ký tự trong chuỗi
// dùng [], charAt()
let str2 = "200Lab";
str2.charAt(0); //--> "2"
str2[3]; //--> "L"

// Lấy UTF-16 code tại vị trí bất kì trong chuỗi.
// charCodeAt()
let str3 = "JS basic!";
str3.charCodeAt(0); //--> 74

// Chuyển chuỗi thành mảng các kí tự
// split(): tham số đầu vào là một chuỗi để ngăn cách
let str4 = "a,b,c,d,e,f,g,h";
let arrStr = str4.split(',');
//--> ["a", "b", "c", "d", "e", "f", "g", "h"]
// -> Nếu tham số là rỗng thì sẽ return về mảng từng ký tự



// 3. Array
// Ví dụ:
let arr = [1, 2, 3, 4, 5];
const cars = ['Honda', 'Hyundai', 'Ford', 'Toyota'];


// Lấy độ dài của mảng: length
arr.length; //--> 5

// Kiểm tra biến có chứa dữ liệu dạng mảng hay không 
Array.isArray(arr) //--> true
arr instanceof Array //--> true

// Chuyển mảng sang chuỗi
//toString(), join()
console.log(cars.toString()) //--> "Honda,Hyundai,Ford,Toyota"
console.log(cars.join('-')) //--> "Honda-Hyundai-Ford-Toyota"

// Thêm phần tử vào mảng
// push(), unshift()
arr.push(6) // [1,2,3,4,5,6]
arr.unshift(0) // [0, 1,2,3,4,5,6]


// Xóa phần tử trong mảng
// pop(), shift()
arr.pop() // [1,2,3,4,5]
arr.shift() // [1,2,3,4,5]


// Thêm hoặc xóa nhiều phần tử trong mảng
// splice(start, deleteCount, item1, item2,..., itemN)

//Thêm vào vị trí thứ 2
const addElementCars = cars.splice(2, 0, 'Suzuki', 'Isuzu');
console.log(x); //--> []: Vì ta không xóa nên mảng sẽ là rỗng
console.log(cars); 

// Xóa 1 phần tử tại vị trí số 0
const deleteElementCars = cars.splice(0, 1)
console.log(x) //--> [ "Honda" ]
console.log(cars) //--> ["Hyundai", "Ford", "Toyota"]


// Gộp mảng
// concat()
const myGirls = ['Alice Rondo', 'Luminous Valentine'];
const myBoys = ['Diablo', 'Guy Crimson', 'Leon Cromwell'];
const myChildren = myGirls.concat(myBoys);
//--> ["Alice Rondo", "Luminous Valentine", "Diablo", "Guy Crimson", "Leon Cromwell"]


// Tách mảng
// slice(start, end)
const arr1 = cars.slice(1)
console.log(arr1); //--> ["Hyundai", "Ford", "Toyota"]

//tách ra 1 mảng mới bắt đầu tại vị trí 1 đến 2 (3-1)
const arr2 = cars.slice(1, 3);
console.log(arr2); //--> ["Hyundai", "Ford"]

// Lặp mảng
let newNumbers = [];

// forEach(), map(), filter(), find(), findIndex(), every(), some()
// forEach(): Lặp qua từng phần tử có trong mảng
numbers.forEach((value, index, array) => {
    newNumbers.push(value)
});
console.log(newNumbers); //--> [1, 2, 3, 4, 5]

// map(): tạo một mảng mới bằng cách thực hiện tính toán trên mỗi phần tử, map() không làm thay đổi mảng cũ.
newNumbers = numbers.map((value, index, array) => {
    return value * 2;
});
console.log(newNumbers); //--> [2, 4, 6, 8, 10]

// filter(): tạo một mảng mới với những phần tử nào thỏa điều kiện ta đặt ra
newNumbers = numbers.filter((value, index, array) => {
    return value >=3;
});
console.log(newNumbers); //--> [3, 4, 5]

// find(): trả về phần tử thỏa điều kiện đầu tiên, nếu không có sẽ return undefined
const result1 = numbers.find((value, index, array) => {
    return value > 1;
});
console.log(result1); //--> 2

// findIndex(): trả về index của phần tử thỏa điều kiện đầu tiên, nếu không có sẽ return -1.
const result2 = cars.findIndex((value, index, array) => {
    return value === 'Toyota';
});
console.log(result2); //--> 1

// every(): Nếu mọi phần tử thỏa điều kiện sẽ return true, còn không sẽ return false
const checkNumber = numbers.every((value, index, array) => {
    return value > 2;
});
console.log(checkNumber); //--> false

// some(): Nếu có một phần tử bất kỳ nào thỏa điều kiện thì sẽ return true, còn không thì sẽ return false.
const check = numbers.some((value, index, array) => {
    return value > 2;
});
console.log(check); //--> true


// Đổi array sang object
// Object.fromEntries
let userArray = [
    ['name', 'kiyoshi'], 
    ['age', 30],
    ['address', 'Tokyo']
  ];
  let userObj = Object.fromEntries(userArray);
  console.log(userObj);
  //{ name: 'kiyoshi', age: 30, address: 'Tokyo' }
  



// 4.Object
// Ví dụ
let myComputer = {
    type: "laptop",
    brand: "Sony",
    os: "Windows 7",
    graphicCard: "NVIDIA",
};

let obj1 = {}
let obj2 = new Object();


// Lấy value của key
// object.key, object[key]
console.log(myComputer.type)
console.log(myComputer[type])

// Thay đổi giá trị value dựa theo key và thêm key mới vào object
myComputer.type = "PC"
myChildren.ram = "256gb"

// Xóa key
delete myChildren.ram;

// Object destructuring
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566
};
const {firstName, lastName, id} = person;
console.log(firstName);
console.log(lastName);
console.log(id);

// Copy object
// spread method, Object assign(), JSON.parse()
// Spread Method
let clone1 = { ...person }

// Object.assign() Method
let clone2 = Object.assign({}, person)

// JSON.parse() Method
let clone3 = JSON.parse(JSON.stringify(person))


// Chuyển từ Object sang array
// Object.keys: chuyển key sang array
// Object.values: chuyển value sang array
// Object.entries: chuyển value và key thành mảng 2 chiều
console.log(myComputer.keys()) // ["type", "brand", "os", "graphicCard"]
console.log(myComputer.values()) // ["laptop", "Sony", "Windows 7", "NVIDIA"]
console.log(myComputer.entries()) // [["type", "laptop"], ["brand", "Sony"], ["os", "Windows 7"], ["graphicCard", "NVIDIA"]]


// Gộp object
// Object.assign()
// Spread Method
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

const characterAsign = Object.assign(name, details);
const characterSpread = {...name, ...details}
// -> {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// Ngăn chặn hành vi xóa hoặc thêm 1 thuộc tính mới của object
//  Object.freeze(), Object.seal()
const newName = Object.freeze(name)
const newDetails = Object.seal(details);;



// 5. Date Time
// Ví dụ
let today = new Date(); 

let birthday_1 = new Date('June 07, 1998 03:24:00');
let birthday_2 = new Date('1998-06-07T03:24:00');


// Định dạng date
// short date, long date, full date
let shortDate_1 = new Date("08-08-2021");
let longDate_1 = new Date("Aug 08 2021");
let fullDate_1 = new Date("Sunday August 08 2021");

// getDate
// getDate(): hàm trả về ngày trong tháng (từ ngày 1 - 31).
// getDay(): hàm trả về ngày trong tuần (0-6), với chủ nhật là 0, thứ 2 là 1, thứ 3 là 2 ,...
// getMonth(): hàm trả về tháng trong năm (từ 0 - 11), do đó ta cần cộng thêm 1 nha.
// getFullYear(): hàm trả về năm dạng đầy đủ dạng YYYY.
// getHours(): hàm trả về số giờ dạng 24h ( từ 0 - 23)
// getMinutes() trả về phút trong giờ (0 - 59).
// getSeconds() trả về số giây trong phút (0 - 59).
// getMilliSeconds() trả về tích tắc trong giây (0 - 999).
// getTime() Trả về thời gian dạng mili giây.

var presentDate = new Date();
 
presentDate.getDate(); 			//--> 5
presentDate.getDay(); 			//--> 5: Thứ năm
presentDate.getFullYear(); 		//--> 2024
presentDate.getYear(); 			//--> 124
presentDate.getHours(); 		//--> 0
presentDate.getMilliseconds(); 	//--> 114
presentDate.getMinutes();		//--> 53
presentDate.getMonth() + 1; 	//--> 4
presentDate.getSeconds();		//--> 34
presentDate.getTime(); 			//--> 1712253214114

// setDate
// setDate(): hàm giúp ta thiết lập ngày (từ 1 - 31).
// setFullYear(): hàm giúp ta thiết lập năm đầy đủ theo dạng YYYY.
// setYear(): hàm giúp ta thiết lậpnăm 2 số cuối YY.
// setHours(): hàm giúp ta thiết lập số giờ (0 - 23)
// setMiliSeconds(): hàm giúp ta thiết lập số mili giây (0 - 999)
// setMinutes(): hàm giúp ta thiết lập số phút (0 - 59)
// setMonth(): hàm giúp ta thiết lập tháng (0 - 11)
// setSeconds(): hàm giúp ta thiết lập số giây (0 - 59)
// setTime(): hàm giúp ta thiết lập thời gian đã được convert sang dạng miliseconds.
presentDate.setDate(20); 	   //--> 1713549448732
presentDate.setFullYear(2022); //--> 1650391048732
presentDate.setHours(2);       //--> 1650398248732
presentDate.setMilliseconds(2);//--> 1650398248002
presentDate.setMinutes(3);     //--> 1650395008002
presentDate.setMonth(4); 	   //--> 1652987008002
presentDate.setSeconds(5); 	   //--> 1652986985002




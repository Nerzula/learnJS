//Todo: Tasks 05

/*
let a = 10,
	b = 10;

const c = ++a; // 11 ?
const d = b++; // 10?


let a = 5;

const x = 1 + (a *= 3); // 16

*/

//Todo: Tasks 06
// Num to String
const num = 5;
const string1 = num + '';
const string2 = `${num}`;
const string3 = num.toString();
const string4 = String(num);

// String to num
const str = '20px';
const number1 = Number(str);
const number2 = +str;
const number3 = parseInt(str);
const number4 = parseFloat(str);

let val;
val = 5 + '5'; // 55 String
val = 2 * '2'; // ?? 4 Number
val = 20 / '10'; // ?? 2 Number
val = true + true; // ?? 2 Number
val = false + true; // ?? 1 Number

let res;
res = true === true; // true
res = 1 == true; // false
res = undefined == null; // true
res = null === undefined; // false
res = 'true' === 'false'; // false
res = '' == false; // true
res = '' == 0; // true

console.log('' == false);

// Todo: TAsks 07

if ('0') {
	// true
	console.log('какой то текст');
}

// Какой то текст

//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.

const someVal = -5;

if (someVal > 0) {
	console.log(`Значениче ${someVal} больше нуля`);
} else if (someVal < 0) {
	console.log(`Значениче ${someVal} меньше нуля`);
} else if (someVal === 0) {
	console.log(`Значениче ${someVal} равно нулю`);
}

// Перепишите задачу 2 с использование тернарного оператора (?)

const check = res > 0 ? 1 : res < 0 ? -1 : 0;

console.log(check);

//Todo: Tasks 08

console.log(null || 0 || 1 || undefined); // 1 - true

console.log(5 && null && 10); // null - false

console.log(null || (2 && 3) || 4); // 3

if (-1 || 0) console.log('один'); // один
if (-1 && 0) console.log('два'); // ничего
if (null || (-1 && 1)) console.log('три'); // три

let value2 = NaN;

value2 &&= 10; // NaN
console.log(value2);
value2 ||= 20; // 20
console.log(value2);
value2 &&= 30; // 30
console.log(value2);
value2 ||= 40; // 40

let city = null;

city ??= 'Берлин'; // Берлин
console.log(city);
city ??= null; // Берлин
console.log(city);
city ??= 'Кёльн'; // Берлин
console.log(city);
city ??= 'Гамбург'; // Берлин
console.log(city);

console.log(undefined ?? NaN ?? null ?? '' ?? ' '); // NaN

// Todo: TAsks 13

let str2 = 'javascript';

console.log(str2.toLocaleUpperCase()); // "Javascript"

let str3 = 'javascript';
/* Resolve 1
	str3 =
		str3.at(str3.indexOf('j')).toLocaleUpperCase() +
		str3.slice(str3.indexOf('j') + 1, str3.indexOf('s')) +
		str3.at(str3.indexOf('s')).toLocaleUpperCase() +
		str3.slice(str3.indexOf('s') + 1, -1);
	console.log(str3); // "JavaScript"
*/
str3 = str3.replace('j', 'J').replace('s', 'S');
console.log(str3);

let str4 = 'javascript';
str4 = str4.at(str4.indexOf('j')).toLocaleUpperCase() + str4.slice(1, -1);
console.log(str4); // "Javascript"

const comment1 = 'Hello man! Fuck you!';
const comment2 = 'Hello man! thank you!';
const comment3 = 'Hello man! thank you, fuck!';

let isBlockedComment1 =
	comment1.toLocaleLowerCase().indexOf('fuck') !== -1 ? true : false;
let isBlockedComment2 =
	comment2.toLocaleLowerCase().indexOf('Fuck') !== -1 ? true : false;
let isBlockedComment3 =
	comment3.toLocaleLowerCase().indexOf('fuck') !== -1 ? true : false;
/* Refactor
let isBlockedComment1 =
	comment1.toLocaleLowerCase().indexOf('fuck') !== -1;
let isBlockedComment2 =
	comment2.toLocaleLowerCase().indexOf('Fuck') !== -1;
let isBlockedComment3 =
	comment3.toLocaleLowerCase().indexOf('fuck') !== -1;
*/

console.log(isBlockedComment1); // true or false
console.log(isBlockedComment2); // true or false
console.log(isBlockedComment3); // true or false

let strHello = ' $#$  Hello @$&#World! ';
strHello = strHello.replace('$#$', '').replace('@$&#', '').trim();
/* Refactor
	strHello = strHello.replace(/[$#@&]/g, '').trim();
*/
console.log(strHello); // "Hello World"

//Todo: Tasks 14

const d = new Date(2028, 0, 13, 13, 23, 0);

const options = {
	weekday: 'short', // Краткое название дня недели (Thu)
	year: 'numeric', // Год (2028)
	month: 'short', // Краткое название месяца (Jan)
	day: '2-digit', // День с ведущим нулём (13)
	hour: '2-digit', // Часы с ведущим нулём (13)
	minute: '2-digit', // Минуты с ведущим нулём (23)
	second: '2-digit', // Секунды с ведущим нулём (00)
	hour12: false, // 24-часовой формат
};

// Собираем строку вручную
const formattedDate = `${d.toLocaleDateString(
	'en-US',
	options
)} ${d.toLocaleTimeString('en-US', {
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false,
})}`;

console.log(formattedDate); // Thu Jan 13 2028 13:23:00

const years = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365);

console.log(years); // 55

const d2 = new Date();
const todayEN = Intl.DateTimeFormat('en-US', {weekday: 'long', month: 'long',  day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}).format(d2);
const todayRU = Intl.DateTimeFormat('ru-RU', {weekday: 'long', month: 'long',  day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}).format(d2);

console.log(todayEN); // Wednesday, August 14, 2024 at 8:34 PM
console.log(todayRU); // среда, 14 августа 2024 г. в 20:34

const now = new Date();
const tomorrow = new Date(now);
		tomorrow.setDate(now.getDate() + 1);
		tomorrow.setHours(0, 0, 0, 0);
const minutesBeforeTomorrow = Math.floor((tomorrow - now) / (1000 * 60));

console.log(minutesBeforeTomorrow); // 1358

const lastNumberOfMonth = new Date(2024, 2, 0).getDate();

console.log(lastNumberOfMonth); // 29

/*
	const number = Number(prompt('Введите число между 0 и 3', ''));

	if (number === 0) {
	console.log('Вы ввели число 0');
	}

	if (number === 1) {
	console.log('Вы ввели число 1');
	}

	if (number === 2 || number === 3) {
	console.log('Вы ввели число 2, а может и 3');
	}
*/

const numSwitch = 5;

switch (numSwitch) {
	case 0:
		console.log('Вы ввели число 0');
		break;
	case 1:
		console.log('Вы ввели число 1');
	case 2:
	case 3:
		console.log('Вы ввели число 2, а может и 3');
		break;
	default:
		console.log('Некорректное число');
		break;
}

const day = new Date().getDay();

switch (day) {
	case 0:
		console.log('Сегодня Воскресенье');
		break;
	case 1:
		console.log('Сегодня Понедельник');
		break;
	case 2:
		console.log('Сегодня Вторник');
		break;
	case 3:
		console.log('Сегодня Среда');
		break;
	case 4:
		console.log('Сегодня Четверг');
		break;
	case 5:
		console.log('Сегодня Пятница');
		break;
	case 6:
		console.log('Сегодня Суббота');
		break;
	default:
		console.log("Некорректный ввод");
		break;
}



const age = 30;


switch (true) {
	case age >= 0 && age < 12:
		console.log('Ребёнок');
		break;
	case age >= 13 && age < 17:
		console.log('Подросток');
		break;
	case age >= 18 && age < 64:
		console.log('Взрослый');
		break;
	default:
		console.log('Пожилой человек');
		break;
}

// Todo: Tasks 16

function getRandomValue() {
	return Math.floor(Math.random() * 100 + 1 ); 
}

console.log(getRandomValue())

function getMaxValue(num1, num2, num3, num4, num5) {
	return Math.max(...arguments);
}

console.log(getMaxValue(2, 5, 99, 23, 101))

function getCurrentDayOfWeek(currentDate) {
	const day = currentDate.getDay();

	switch (day) {
		case 0:
			return "Воскресенье"; // если используется return, то break не нужен
		case 1:
			return "Понедельник";
		case 2:
			return "Вторник";
		case 3:
			return "Среда";
		case 4:
			return "Четверг";
		case 5:
			return "Пятница";
		case 6:
			return "Суббота";
		default:
			return "Некорректный ввод";
		}
}

console.log(getCurrentDayOfWeek(new Date()))

// Todo: Tasks 17

function greet(name, str = 'Hello!') {
	return `${str}, ${name}!`;
}

console.log(greet("Alice")); // Вывод: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"

function multiplyExpression(num1, num2) {
	return num1 * num2;
}

const multiplyDeclaration = (num1, num2) => num1 * num2;
console.log(multiplyExpression(2, 3)); // Вывод: 6
console.log(multiplyDeclaration(4, 5)); // Вывод: 20

function outerFunction() {
	const innerVar = "I am inside!";
	function innerFunction() {
		console.log(innerVar);
	}
	innerFunction();
}
outerFunction(); // Вывод: "I am inside!"

// console.log(innerVar); // Что будет выведено? Error локальная переменная, не видна в глобальной

// Todo: 18 Tasks

function sayHello(name) {
	return `Hello, ${name}!`
}

function greet2(name, callback) {
	return callback(name);
}

console.log(greet2("Ekaterina", sayHello)); // "Hello, Ekaterina!"


function displayResult(num) {
	return num * 2;
}
function double(num, callback) {
	return `Result is ${callback(num)}`;
}
console.log(double(5, displayResult)); // "Result is 10"

function makeUpperCase(str) {
	return str.toLocaleUpperCase();
}

function processString(str, callback) {
	return callback(str);
}
console.log(processString("hello", makeUpperCase)); // "HELLO"
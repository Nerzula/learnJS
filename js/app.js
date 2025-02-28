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

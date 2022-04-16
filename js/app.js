
// function calculateYear(year) {
// 	return 2022 - year;
// }

// function logInfoAbout(name, year) {
// 	const age = calculateYear(year);
// 	if (age > 0) {
// 		console.log(`Человек по имени ${name} сейчас имеет возраст ${age}`);
// 	} else console.error(`Uncorrect age! (${age})`);
// }

// logInfoAbout('Dmitry', 2023);


const person = {
	firstName: 'Dmitry',
	lastName: 'Isaev',
	year: '2003',
	languages: ['Ru', 'En', 'De'],
	hasWife: false,
	greet: function () { console.log('Hello there!') }
};
person.isProgrammer = true;	//!добавление ключа
person.hasWife = true;	//!изменение ключа
delete person.lastName;		//!удаление ключа

console.log(person);		//!выводит все ключи и параметры
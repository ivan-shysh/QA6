// Работа с объектами
//Проверка, что объект пустой

// function isEmptyObject(obj) {
//   for (let key in obj){
//     if (obj.hasOwnProperty(key)){
//       return false;
//     }
//   }
//   return true;
// }	
// let obj = {
//   name: "Bob",
//   age: undefined,
// };

// console.log(Object.keys(obj));
// if (Object.keys(obj).length === 0){
//   console.log('Empty');
// } else {
//   console.log('Not empty');
// }

// console.log(Object.values(obj));
// console.log(Object.values(obj).length === 0);

// console.log(Object.entries(obj));

// let user = {};
// console.log(user === {});

// console.log(Object.keys(obj).length);
//-----------------------------------------------------------------------------------------------------------------------
// Посчитать, сколько раз встречается каждая буква в строке
// function countLetters(str) {
//  // str = str.toLowerCase();
//  //str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let i = 0; i <str.length; i++){
//     if (obj[str[i]]){
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//  return obj;
// }

// console.log(countLetters('I like Javascript and Python'));
//объяснение:
// let user = {
  
// }
// if (user['i']) user['i']++;
// else user['i']=1;

// console.log(user);

// if (user['i']) user['i']++;
// else user['i']=1;
// console.log(user);

//проверка циклов:
// let str = 'hello';
// for (let i in str){
//   console.log(i);
// }
// for (let char of str){
//   console.log(char);
// }

// let str = 'hello';
// function countLetters(str) {
//   str = str.toLowerCase();
//   str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let char of str){
//     if (obj[char]){
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//  return obj;
// }

// let obj = countLetters('I like Javascript and Python');
// for (let key in obj){
//   console.log(obj[key]);
// }

// for (let key in obj){
//   console.log(key);
// }


//-------------------------------------------------
//Найти количество различных слов в строке
// function countWords(text){
//  text = text.toLowerCase().split(' ')
//  console.log(text);
//  let words = {};
//  for (let el of text) {
//    if (words[el]){
//      words[el]++;
//    } else {
//      words[el] = 1;
//    }
//  }
//  // return words;  //объект, содержащий слова и количество каждого слова
//   return Object.keys(words).length; //количество различных слов
// }
// console.log(countWords("Roses are red violets are blue roses and violets are nice"))

//--------------------------------------------------
// Count words in the text (2 способ) 
// function countWords(text){
    
// }
//console.log(countWords("Roses are red violets are blue roses and violets are nice"))
// -----------------------------------------------------




// Дана строка s = "five nine eight two four" 
// Найти среднее арифметическое чисел в вывести в виде строки(округлить до целого)

// function averageStr(str){
//     let digits = {
//       zero: 0,
//       one: 1,
//       two: 2,
//       three: 3,
//       four: 4,
//       five: 5,
//       six: 6,
//       seven: 7,
//       eight: 8,
//       nine: 9
//     }
//     let arr = str.split(' ');
//     console.log(arr);
//      let sum = 0;
//     for (let el of arr){
//       sum = sum + digits[el]
//     } 
//      console.log(sum);
//      let average = Math.round(sum /arr.length);
//      console.log(average);
     
//      for (let i in digits){
//        if (digits[i] === average){
//          return i
//        }
//      }
//    }
//    let s = "five nine eight two four"; 
//    console.log(averageStr(s));
   
   
   
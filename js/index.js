// 1-masala
// function countA(str){
//     let res = 0
//     for(let itaration of str){
//         if(itaration === 'a'){
//             res++
//         }
//     }
//     return res
// }
// console.log(countA('salom dunyo'));

// 2-masaala
// function evenNumberArray(n){
//     let res = []
//     for(let i = 2; i < n; i += 2){
//         res.push(i)
//     }
//     return res
// }
// console.log(evenNumberArray(5));

// 3-masala
// function deletSpace(str){
//     return str.split(' ').join('')
// }
// console.log(deletSpace('salom dunyo'));

// 4-masaala
// function deletFirst(str){
//     return str.slice(1)
// }
// console.log(deletFirst('salom'));

// 5-masala
// function minIndex(arr){
//     let minIndex = 0
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[minIndex]){
//             minIndex = i
//         }
//     }
//     return minIndex
// }
// console.log(minIndex([5, 8 , 4, 1, 6, 78,]));

// 6-masala
// function toLowerCase(str){
//     return str.toLowerCase()
// }
// console.log(toLowerCase('DuNYO BOLLARI'));

// 7-masala
// function sumArray(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArray([2,5,8,4,1]));

// 8-masala
// function countB(str){
//     let res = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == 'b'){
//             res ++
//         }
//     }
//     return res
// }
// console.log(countB('salom boboblar'));

// 9-masala
// function kvNumberArray(n){
//     let res = []
//     for(let i = 1; i < n; i++){
//         res.push(i*i)
//     }
//     return res
// }
// console.log(kvNumberArray(5));

// 10-masala
// function deletLast(str){
//     return str.slice(0, -1)
// }
// console.log(deletLast('salom'));

// 11-masala
// function deletManfiy(arr){
//     let res = arr.filter(function(value){
//         return value >= 0
//     })
//     return res
// }
// console.log(deletManfiy([-5, 4, 8, -3, 5]));

// 12-masala

// 13-masala
// function reverse(str){
//     return str.split(' ').map(function(word){
//         return word.split('').reverse().join('')
//     }).join(' ')
// }
// console.log(reverse('salom dunyo'));

// 14-masala
// function twoArray(arr){
//     return arr.map(function(num){
//         return num * 2
//     })
// }
// console.log(twoArray([4, 3, 2, 1]));

// 15-masala
// function alshtirivchi(str){
//     if(str.length < 2){
//         return str
//     } 
//     let first = str[0]
//     let last = str[str.length - 1]
//     return last + str.slice(1, -1) + first
// }
// console.log(alshtirivchi('salom'));

// 16-masala
// function juftSonlarYigindisi(arr){
//     return arr.reduce(function(yigindi, son){
//         if(son % 2 == 0){
//             yigindi += son
//         }
//         return yigindi
//     }, 0)
// }
// console.log(juftSonlarYigindisi([2, 3, 4, 1]));

// 17-masala
// function toUpperCase(str){
//     return str.toUpperCase()
// }
// console.log(toUpperCase('salom dunyo'));

// 18-masala
// function tartiblash(arr){
//     return arr.sort()
// }
// console.log(tartiblash(['olma', 'anor', 'Banan']));

// 19-masala
// function toCapitalize(str){
//     return str.split(' ').map(function(value){
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     }).join(' ')
// }
// console.log(toCapitalize('salom dunyo'));

// 20-masala
// function deletToqNumbers(arr){
//     return arr.filter(function(value){
//         return value % 2 == 0
//     })
// }
// console.log(deletToqNumbers([1, 2, 3, 5, 8, 6, 42]));
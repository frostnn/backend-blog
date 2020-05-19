const num = [7,2,4,5,6,7,8,2,3,6]
const phoneNum = (num) => {
if(num.length === 10) { 
return console.log(`+7 (${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}-${num[8]}${num[8]}`)
} else {
  return console.log("wrong number dialed")
}
 }
phoneNum(num)

//const num = [6575889459, 56549694590, 775435345345, 94564564566];
//const realNum = 6575889459;

//const findNum = (num, realNum) => {
//  for(let i = 0; i < num.length; i++) {
 //   if(num[i] === +realNum || num[i].length === 10) {
 //     return console.log(true)
 //   }else {
  //    return console.log(false)
 //   } 
 // }
//}

//findNum(num, realNum)


const card = ["345642344556465555","75664234455646","34564234455646","124234342534555646","124234455646"];
const realCard = "3456";
const findCard = (card, realCard) => {
  
 const findRealCard = card.filter(cards => cards.indexOf(realCard) === 0);
console.log(findRealCard)
}

findCard(card, realCard)

 // if(findRealCard === realCard) {
   // const firstNum = findRealCard.join('').slice(0, -14)
   // const lastNum = findRealCard.join('').slice(13, -1)
  //  return console.log(firstNum, lastNum)
 // }else {
//    return console.log('card not faund')
// }
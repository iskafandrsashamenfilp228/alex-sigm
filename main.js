let dimooooon= (90 + 90 +90) / 3
console.log(dimooooon,'Димка');

let maksimka= (90 + 90 +90) / 3
console.log(maksimka,'Максим');

let svetik= (90 + 90 +90) / 3
console.log(svetik,'Девочка Света');

switch(true){
  case svetik > dimooooon && svetik > maksimka:
    console.log('Светлана выйграла!')
    break;
  case dimooooon > maksimka && dimooooon > svetik:
    console.log('Димка выйграл!')
    break;
  case maksimka > dimooooon && maksimka > svetik:
    console.log('Максим выйграл!')
    break;
  default:
    console.log('Ничья надо тренероваться.');
    break;  
}

const dimooooon1 = prompt('Результат Димы в первом раунде?')
const dimooooon2 = prompt('Результат Димы в втором раунде?')
const dimooooon3 = prompt('Результат Димы в третьем раунде?')
const svetik1 = prompt('Результат Светы в первом раунде?')
const svetik2 = prompt('Результат Светы в втором раунде?')
const svetik3 = prompt('Результат Светы в третьем раунде?')
const maksimka1 = prompt('Результат Максима в первом раунде?')
const maksimka2 = prompt('Результат Максима в втором раунде?')
const maksimka3 = prompt('Результат Максима в третьем раунде?')
let dimooooonx = (dimooooon1+ dimooooon2 +dimooooon3)
console.log(dimooooonx,'Димка');

let maksimkax= (maksimka1 + maksimka2 + maksimka3)
console.log(maksimkax,'Максим');

let svetikx= (svetik1 + svetik2 + svetik3)
console.log(svetikx,'Девочка Света');

switch(true){
  case svetikx > dimooooonx && svetikx > maksimkax:
    alert('Светлана выйграла!')
    break;
  case dimooooonx > maksimkax && dimooooonx > svetikx:
    alert('Димка выйграл!')
    break;
  case maksimkax > svetikx && maksimkax > dimooooonx:
    alert('Максим выйграл!')
    break;
  case dimooooonx == maksimkax && dimooooonx > svetikx && maksimkax > svetikx:
    alert('Свете надо тренероваться!')
    break;
  case svetikx > maksimkax && dimooooonx == svetikx && dimooooonx > maksimkax:
    alert('Максиму надо тренероваться!')
    break;
  case dimooooonx < maksimkax && dimooooonx < svetikx && maksimkax == svetikx:
    alert('Диме надо тренероваться!')
    break;
  default:
    alert('Ничья надо тренероваться.');
    break;  
}

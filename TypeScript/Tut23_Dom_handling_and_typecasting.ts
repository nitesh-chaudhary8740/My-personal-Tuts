console.log('hellow')
var headiing = document.querySelector('h1')!;
console.log(headiing.textContent)//null check operator//or use ! (this tells there's definetily h1 named tag in dom and it is not null)
//need of typecasting, when element get accessed by id or class we need type assertion
// var anchorTag = document.getElementById('anchor')
// console.log(anchorTag.href)//href is not accessiable withput type assertion
var anchorTag = document.getElementById('anchor')! as HTMLAnchorElement
console.log(anchorTag.href)
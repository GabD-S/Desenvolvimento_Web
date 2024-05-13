let num = [5,2,3,5]
num.push(7)
console.log(num)
num.sort()
console.log(num)
console.log(num.length)
c=0
for(let i = 0; i<= num.length; i++) {
    console.log(num[i]);
}

for(let pos in num){
    console.log(num[pos])
}

let amigo = {nome:'jsose',sexo:'max',peso:85.7,engordar(p=0)
{   console.log('engordou')
    this.peso+=p}}

amigo.engordar(2)
console.log(amigo.nome, '    ',amigo.peso)

console.log(num.indexOf(3))
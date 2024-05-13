function parimppar(n) {
    if (n%2==0){
        return 'Par!'
    } else{
        return 'Impar!'
    }
}

// isso é foda slga

let v = function(x) {
    return x**2
}

function fatorial(n) {
    let fat=1
    for (let c=n;c>1;c--){
        fat*=c
    }
    return fat
}
function fatrec(n){
    if (n==1){
        return 1
    } else {
        return n*fatrec(n-1)
    }
    
}

console.log(fatrec(5))

console.log(fatorial(5))

console.log(v(5))

let i = parimppar(11)
console.log(i)


console.log('3 secund kuting...')

// setTimeout(() => {
//     console.log('Siz manzilga yetib keldingiz')
//     let seconds = new Date().getSeconds()
//     console.log(seconds)
// }, 2000)

// setTimeout(() => {
//     console.log('Hamma ish bitti')
//     let seconds = new Date().getSeconds()
//     console.log(seconds)
// }, 3000)

let abc = setInterval(() => {
    console.log('Uxlivarasanmi, tur axr')
}, 100)

setTimeout(() => {
    clearInterval(abc)
}, 3000)
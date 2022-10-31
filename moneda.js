const moneda=Math.random();
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
 readline.question("ingrese el lado de la moneda a jugar",(Option)=>{
    readline.question("ingrese el valor de su apuesta",(apuesta)=>{
        apuesta = parseFloat(apuesta);
    switch(option){
        case "cara":
            if(moneda < 0.5){
              total = apuesta + apuesta;

console.log('gano')
console.log(`su apuesta actual es ${total}`)

} else if (moneda > 0.5){
    total2 = apuesta - apuesta;
    console.log(`su apuesta actual es ${total2}`)
    console.log('perdio')
}
break;
case "cruz":
    if(moneda > 0.5){
        total = apuesta + apuesta;
console.log('gano')
console.log(`su apuesta actual es ${total}`)
        } else if (moneda < 0.5){
            
            total2 = apuesta - apuesta;
            console.log(`su apuesta actual es ${total2}`)
            console.log('perdio')
        }
        break;
    }
 })})


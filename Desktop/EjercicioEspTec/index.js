

console.log(7);

var fighterUno = {
    name: 'fighterUno',
    maxHealth: 100,
    health: 100,
    damage: getRandomNum(0,100)
};

var fighterDos = {
    name: 'fighterDos',
    maxHealth: 100,
    health: 100,
    damage: getRandomNum(0,100)
};
const lector = require('readline').createInterface({
    input:process.stdin,
    output:process.stout
});
lector.question('quien inicia el combate?',iniciante =>{
    console.log(`El primero es: ${iniciante}!`);
    Combate(iniciante);
    lector.close();

})

function Combate(iniciante){

    console.log('Empieza el combate!!!!');
    if(iniciante===1){
    do{
        fighterDos.health=fighterDos.health-fighterUno.damage;
        console.log('el luchador numero dos inflinge '+fighterDos.damage+' de daño al luchador uno')
        console.log('ˁ•ܫ•ˀつ');
        fighterDos.health=fighterDos.health-fighterUno.damage;
        console.log('el luchador numero uno inflinge '+fighterUno.damage+' de daño al luchador dos')
        console.log('〈◽ಎ◽〉');
    }while((fighterUno.health>0) && (fighterDos.health>0))
}else{
    do{
        fighterDos.health=fighterDos.health-fighterUno.damage;
        console.log('el luchador numero uno inflinge '+fighterUno.damage+' de daño al luchador dos')
        console.log('〈◽ಎ◽〉');
        fighterDos.health=fighterDos.health-fighterUno.damage;
        console.log('el luchador numero dos inflinge '+fighterDos.damage+' de daño al luchador uno')
        console.log('ˁ•ܫ•ˀつ');
    }while((fighterUno.health>0) && (fighterDos.health>0))
}
    
    if(fighterUno.health<0){
        console.log('murio el peleador uno');
    }else{
        console.log('murio el peleador dos');
    }

}


function getRandomNum(max,min){
let result=Math.floor(Math.random() * (max - min + 1)) + min

return result;
}
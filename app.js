
require('colors');
//const {mostrarMenu, pausa} = require('./Librerias propias/mensajes')
const {inquirerMenu, pausa} = require('./Librerias propias/inquirer')
console.clear();

const main = async()=>{
    let opt = '';
    do{
        //opt =await mostrarMenu();
        //console.log(opt)
        //if(opt !== '0') await pausa();

        opt = await inquirerMenu();
        console.log(opt);
        if(opt !== 0) await pausa();
    }while(opt!== '0');
    
    
}


main();
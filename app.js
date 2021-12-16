
require('colors');
//const {mostrarMenu, pausa} = require('./Librerias propias/mensajes')
const {inquirerMenu, pausa} = require('./Librerias propias/inquirer')
const { Tarea } = require('./models/tarea')
const { Tareas } = require('./models/tareas')


console.clear();

const main = async()=>{
    let opt = '';
    do{
        //opt =await mostrarMenu();
        //console.log(opt)
        //if(opt !== '0') await pausa();

        /**
        opt = await inquirerMenu();
        console.log(opt);
        if(opt !== 0) await pausa();
         */
        const tarea = new Tarea('Comparar comida');
        console.log(tarea);
        const tareas = new Tareas('Comparar comida');
        console.log(tareas);

        tareas._listado[tarea.id] = tarea;
        console.log(tareas)
        
        await pausa();

    }while(opt !== '0');
    
    
}


main();
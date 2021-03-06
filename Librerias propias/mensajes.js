const { resolve } = require('path');
const { Duplex } = require('stream');

require('colors')


const mostrarMenu=() => {

    return new Promise( resolve => {
        console.clear();
        console.log('============================'.green);
        console.log('Seleccione un opción'.green);
        console.log('============================\n'.green);
    
        console.log(`${'1'.green} Crear tarea`);
        console.log(`${'2'.green} Listar tarea`);
        console.log(`${'3'.green} Listar tarea completadas`);
        console.log(`${'4'.green} Listar tarea pendientes`);
        console.log(`${'5'.green} Completar tarea`);
        console.log(`${'6'.green} Borrar tarea`);
        console.log(`${'0'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });

        readline.question(`Seleccione una opción: `, (opt) =>{
            readline.close()
            resolve(opt);
        })
    })
}


const pausa = () =>{
    return new Promise(resolve =>{
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });

        readline.question(`\nPresione ${'Enter'.green} para continuar\n`, (opt) =>{
            readline.close(); // Sino cierras no termina de espear 
            resolve()
        })
    })
    
}


module.exports={
    mostrarMenu,
    pausa
}
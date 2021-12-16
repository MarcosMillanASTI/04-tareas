const inquirer = require('inquirer');
require('colors')


const preguntas =[
    {
        type: 'list',
        name: 'resultado',
        message: '¿Que quieres hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },   
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tarea completadas'
            },
            {
                value: '4',
                name: '4. Listar tarea pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
              
              
              
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('Seleccione un opción'.green);
    console.log('============================\n'.green);

    const {resultado} = await inquirer.prompt(preguntas);
    return resultado;
}

const pausa = async() =>{
    
    const question = [
        {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'enter'.green} para continuar\n`
        }
    ];

    await inquirer.prompt(question);
    
}

module.exports={
    inquirerMenu, 
    pausa
}
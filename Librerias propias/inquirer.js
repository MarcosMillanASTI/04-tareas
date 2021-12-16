const inquirer = require('inquirer');
require('colors')


const preguntas =[
    {
        type: 'list',
        name: 'opciones',
        message: '¿Que quieres hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];


const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('Seleccione un opción'.green);
    console.log('============================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}

module.exports={
    inquirerMenu
}
import chalk from 'chalk';
import axios from 'axios';
console.log(chalk.blue('Hello world!'));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// naming of the function when importing 
import scripts from './scripts.js';
scripts();
// when using an already named function yo umust use curly braces 
import {configs} from './scripts.js';
configs();

axios.get("https://dog.ceo/api/breeds/image/random")
.then ((obj) => {
    console.log(obj.data);
})

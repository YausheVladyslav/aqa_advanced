import chalk from 'chalk';

let colorfullText = "It will shown in some different colors"

let colorArray = [chalk.red, chalk.blue, chalk.yellow]

for (let i = 0; i < colorArray.length; i++) {
    console.log(colorArray[i](colorfullText))
}
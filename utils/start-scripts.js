
// Imports
const path = require('path');
const child_process_1 = require("child_process");

function getArgs() {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            const longArg = arg.split('=');
            let longArgFlag = '';
            if (arg.slice(0, 2) === '--') {
                longArgFlag = longArg[0].slice(2, longArg[0].length);
            } else {
                longArgFlag = longArg[0];
            }
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;

        });
    return args;
}

function startCmd(name, cmd) {
    // console.log('Starting: ', name, cmd);
    const process = child_process_1.exec(cmd);
    process.stdout.on('data', (chunk) => {
        console.log(name, chunk);
    });
    process.stderr.on('data', (chunk) => {
        console.log(name, chunk, true);
    });
}

function startApps(apps) {
    for (const app of apps) {
        const cmd = `cd .\\raaghu-mfe\\rds_pages\\${app} && npm run dev`;
        console.log('DEVSVR: ', app);
        startCmd(app, cmd);
    }
}

async function start() {

    const args = getArgs();

    if (args != undefined && args != null && Object.keys(args).length > 0) {
        console.log('Starting...', args);
        let argsKeys = Object.keys(args);
        let projectToBuildArray = args[argsKeys[0]].split(',');

        startApps(projectToBuildArray);

    } else {
        console.log('Starting all apps...');
        const cmd = `cd .\\raaghu-mfe && npm run start`;
        startCmd('All', cmd);
    }

}

start();


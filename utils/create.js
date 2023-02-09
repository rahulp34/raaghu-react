// Imports
let path = require('path');
let { execSync } = require('child_process');
let fs = require('fs');

// Check whether the arguments passed contain the mfe name and the page name
if (process.argv.length !== 4) {
    console.log('\x1b[31m%s\x1b[0m', 'Invalid command..!');
    process.exit(0);
}

// Parse the name of the mfe and the page name
let eTc = process.argv[2];
let name = process.argv[3];

// Get hold of the app folder path inside the mfe
let appFolderPath = '';
if (eTc == 'e') {
    appFolderPath = path.join(__dirname, '..', 'raaghu-elements');
} else {
    appFolderPath = path.join(__dirname, '..', 'raaghu-components');
}

// Generate the page component using angular-cli
if (fs.existsSync(appFolderPath)) {
    let filePath = path.join(appFolderPath, '/src', name, name + '.tsx');
    if (fs.existsSync(filePath)) {
        console.log('\x1b[31m%s\x1b[0m', name + '.tsx already exists in this path.');
    } else {
        execSync(`npx generate-react-cli component ${name}`, { cwd: appFolderPath, stdio: 'inherit' });
        console.log('\x1b[32m%s\x1b[0m', 'Done..!');
    }
} else {
    if (eTc == 'e') {
        console.log('\x1b[31m%s\x1b[0m', 'The elements folder is missing..!');
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'The components folder is missing..!');
    }
}

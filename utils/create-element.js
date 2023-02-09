// Imports
let path = require('path');
let { execSync } = require('child_process');
let fs = require('fs');

// Check whether the arguments passed contain the mfe name and the page name
if (process.argv.length !== 3) {
    console.log('\x1b[31m%s\x1b[0m', 'Invalid command..!');
    process.exit(0);
}

// Parse the name of the mfe and the page name
const elementName = process.argv[2];

// Get hold of the app folder path inside the mfe
let appFolderPath = path.join(__dirname, '..', 'raaghu-elements');

// Generate the page component using angular-cli
if (fs.existsSync(appFolderPath)) {
    let filePath = path.join(appFolderPath, '/src', elementName, elementName + '.tsx');
    if (fs.existsSync(filePath)) {
        console.log('\x1b[31m%s\x1b[0m', elementName + '.tsx already exists in this path.');
    } else {
        execSync(`npx generate-react-cli component ${elementName}`, { cwd: appFolderPath, stdio: 'inherit' });
        console.log('\x1b[32m%s\x1b[0m', 'Done..!');
    }
} else {
    console.log('\x1b[31m%s\x1b[0m', 'The raaghu-elements folder is missing..!');
}

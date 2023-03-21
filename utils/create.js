// Imports
let path = require("path");
let { execSync } = require("child_process");
let fs = require("fs");

// Check whether the arguments passed contain the mfe name and the page name
if (process.argv.length !== 4) {
  console.log("\x1b[31m%s\x1b[0m", "Invalid command..!");
  process.exit(0);
}

// Parse the name of the mfe and the page name
let eTc = process.argv[2];
let name = process.argv[3];

let shortName = name.replace(/^rds-page-/, "");

// Convert name to "formattedName"
let formattedName = shortName
  .split("-")
  .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(" ");

// Convert name to "camelCaseName"
let camelCaseName = shortName
  .split("-")
  .map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join("");

// Convert name to "kebabCaseName"
let kebabCaseName = shortName.split(" ").join("-").toLowerCase();
let pageName = formattedName.replace(" ", "");

console.log(formattedName); // Output: "Api Scope"
console.log(camelCaseName); // Output: "apiScope"
console.log(kebabCaseName); // Output: "api-scope"
console.log(pageName); // Output: "ApiScope"

const newItem = {
  key: `${name}`,
  label: `${formattedName}`,
  icon: "icons",
  path: `/${kebabCaseName}`,
  subTitle: "subtitle here",
};

console.log(newItem);
const importStatement = `\r\nexport {default as ${camelCaseName}} from './${kebabCaseName}';`;

const exportFile = "raaghu-mfe/rds_pages/host/src/PageComponent.ts";

// Get hold of the app folder path inside the mfe
let appFolderPath = "";
if (eTc == "e") {
  appFolderPath = path.join(__dirname, "..", "raaghu-elements");
} else if (eTc == "c") {
  appFolderPath = path.join(__dirname, "..", "raaghu-components");
} else if (eTc == "p") {
  appFolderPath = path.join(__dirname, "..", "raaghu-mfe", "rds_pages");
}

function writeFileErrorHandler(err) {
  if (err) console.log("\x1b[31m%s\x1b[0m", err);
}

// Generate the page component using angular-cli
if (fs.existsSync(appFolderPath)) {
  if (eTc != "p") {
    let filePath = path.join(appFolderPath, "/src", name, name + ".tsx");
    if (fs.existsSync(filePath)) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        name + ".tsx already exists in this path."
      );
    } else {
      execSync(`npx generate-react-cli component ${name}`, {
        cwd: appFolderPath,
        stdio: "inherit",
      });
      // index.tsx
      fs.writeFile(
        `${appFolderPath}/src/${name}/index.ts`,
        `import { default } from './${name}'`,
        writeFileErrorHandler
      );
      console.log(
        "\x1b[32m%s\x1b[0m",
        `index.ts was successfully created at src/${name}/index.ts`
      );

      console.log("\x1b[32m%s\x1b[0m", "Done..!");
    }
  } else if (eTc == "p") {
    let filePath = path.join(appFolderPath, name);

    // Path to create a new directory in the src directory in the template
    let dirName = path.join(
      __dirname,
      `../page-template/template/src/${kebabCaseName}`
    );
    // Creating directory inside the src
    try {
      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
      }
    } catch (err) {
      console.error(err);
    }
    // Creatign a file in the src/{name}
    try {
      fs.writeFileSync(
        `${dirName}/${kebabCaseName}.tsx`,
        "Edit this file to proceed"
      );
      // file written successfully
    } catch (err) {
      console.error(err);
    }

    // Create the directory if it doesn't exist
    //  Running the script to create page

    if (fs.existsSync(filePath)) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        name + " page is already exists in this path."
      );
    } else {
      execSync(
        `npx create-react-app rds-page-${camelCaseName.toLowerCase()} --template file:../../page-template`,
        { cwd: appFolderPath, stdio: "inherit" }
      );

      console.log("\x1b[32m%s\x1b[0m", `${name} page was successfully created`);
      console.log("\x1b[32m%s\x1b[0m", "Done..!");
    }

    // Deleting the directory from the src in the template.
    fs.rm(dirName, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
    // Generate the new export statement with the updated list of variables

    const filePathForPageComponent =
      "raaghu-mfe/rds_pages/host/src/PageComponent.ts";
    const newImportStatementForPageComponent = `const ${pageName}Compo = React.lazy(() => import("${pageName}/${pageName}"));`;
    // Define the export statement to find and update
    const exportStatementForPageComponent = "export {";

    // Read the file contents as a string
    const fileContentsOfPageComponent = fs.readFileSync(
      filePathForPageComponent,
      "utf8"
    );

    // Find the index of the export statement in the file
    const exportIndex = fileContentsOfPageComponent.indexOf(
      exportStatementForPageComponent
    );

    // Define the start and end indices of the export block
    const exportStartIndexPageComponent =
      exportIndex + exportStatementForPageComponent.length;
    const exportEndIndexPageComponent =
      fileContentsOfPageComponent.indexOf("};", exportStartIndexPageComponent) +
      1;

    // Extract the current export block from the file
    const exportBlock = fileContentsOfPageComponent.slice(
      exportStartIndexPageComponent,
      exportEndIndexPageComponent - 1
    );
    const block = fileContentsOfPageComponent.slice(0, exportIndex);
    const updatedBlock = `${block}${newImportStatementForPageComponent}`;

    // Add the new import statement to the start of the export block
    const updatedExportBlock = `${exportBlock}${pageName}Compo,`;
    const updatedPage = `${updatedBlock}\n export {${updatedExportBlock}};`;

    console.log("This is export block: ", updatedPage);

    // Use the fs.writeFile method to write the new content to the file, overwriting the old content
    fs.writeFile(filePathForPageComponent, updatedPage, (err) => {
      if (err) throw err;
      console.log("The content has been overwritten!");
    });

    // Output a message to confirm that the script has run successfully
    console.log(`Added AbhiCompo to ${filePathForPageComponent}`);
    // Creating a file for side Nav items
    let sideNavItemPath = path.join(__dirname, `../raaghu-mfe/libs/main-menu`);
    try {
      fs.writeFileSync(
        `${sideNavItemPath}/${kebabCaseName}.ts`,
        `const ${camelCaseName} =[${JSON.stringify(
          newItem,
          null,
          2
        )}]; export default ${camelCaseName};`
      );
      // file written successfully
    } catch (err) {
      console.error(err);
    }

    fs.appendFile(
      `${sideNavItemPath}/index.ts`,
      importStatement,
      "utf8",
      // callback function
      function (err) {
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.");
      }
    );

    // updating port-config and mfe-config

    const mfeConfigFilePath = path.resolve(
      __dirname,
      "../raaghu-mfe/rds_pages/mfe-config.ts"
    );
    const mfeConfigContent = fs.readFileSync(mfeConfigFilePath, "utf-8");
    const mfeConfigString = mfeConfigContent.replace(
      /^export\s+const\s+MfeConfig\s+=\s+/,
      ""
    );
    const config = JSON.parse(mfeConfigString);
    config[camelCaseName] = {
      url: `${camelCaseName}@http://localhost:8034/remoteEntry.js`,
    };
    const updatedmfeConfigString = `export const MfeConfig = ${JSON.stringify(
      config,
      null,
      2
    )}\n`;
    fs.writeFileSync(mfeConfigFilePath, updatedmfeConfigString);

    // For port-config
    const portConfigFilePath = path.resolve(
      __dirname,
      "../raaghu-mfe/rds_pages/port-config.ts"
    );
    const portConfigContent = fs.readFileSync(portConfigFilePath, "utf-8");
    const portConfigString = portConfigContent.replace(
      /^export\s+const\s+PortConfig\s+=\s+/,
      ""
    );
    const portConfig = JSON.parse(portConfigString);
    portConfig[camelCaseName] = {
      port: "8034",
    };
    const updatedportConfigString = `export const PortConfig = ${JSON.stringify(
      portConfig,
      null,
      2
    )}\n`;
    fs.writeFileSync(portConfigFilePath, updatedportConfigString);

    // Updating in remote.d.ts file

    fs.readFile('raaghu-mfe/rds_pages/host/src/remote.d.ts', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    
      // Add the new module declaration
      const newDeclaration = `\ndeclare module "${pageName}/${pageName}" {\n\tconst ${pageName}Component: React.ComponentType;\n\texport default ${pageName}Component;\n}\n`;
      const updatedContent = data + newDeclaration;
    
      // Write the updated content back to the file
      fs.writeFile('raaghu-mfe/rds_pages/host/src/remote.d.ts', updatedContent, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
    
        console.log('remote.d.ts file updated successfully!');
      });
    });
    
  }
} else {
  if (eTc == "e") {
    console.log("\x1b[31m%s\x1b[0m", "The elements folder is missing..!");
  } else if (eTc == "c") {
    console.log("\x1b[31m%s\x1b[0m", "The components folder is missing..!");
  } else if (eTc == "p") {
    console.log("\x1b[31m%s\x1b[0m", "The pages folder is missing..!");
  }
}

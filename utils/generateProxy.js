'use strict';
let path = require("path");
let fs = require("fs");
let { execSync } = require("child_process");
const OpenAPI = require('raaghu-core/dist/build-proxy');
// const fetch = require('node-fetch');

const eTc = process.argv[2];
const url = process.argv[3];
const completeURL = url + '/swagger/v1/swagger.json';

const generate = async (input, output) => {
    await OpenAPI.generate({
        input,
        output,
        httpClient: OpenAPI.HttpClient.AXIOS,
        useOptions: true,
        useUnionTypes: false,
        exportCore: true,
        exportSchemas: false,
        exportModels: true,
        exportServices: true,
        // clientName: 'Demo',
        // indent: OpenAPI.Indent.SPACE_2,
        // postfix: 'Service',
        // request: './test/custom/request.ts',
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateRealWorldSpecs = async () => {
    console.log("\x1b[32m%s\x1b[0m", `Downloading swagger json...`);
    execSync(
        `curl -o swaggerJSON.json ${completeURL}`,
        { cwd: '.', stdio: "inherit" }
    )

    // const response = await fetch('https://raaghu-react.azurewebsites.net/swagger/v1/swagger.json');
    // const response = require('../swaggerJSON.json');
    // const response = await fetch(url);

    // const list = await response.json();
    const list = require('../swaggerJSON.json');

    console.log("\x1b[32m%s\x1b[0m", `Generating proxy...`);
    // await generate(list, `./raaghu-mfe/libs/${eTc}`);

    // Replacing the BASE URL in the OpenAPI.ts file
    const OpenAPIConfig = path.resolve(
        __dirname, '../', 'raaghu-mfe', 'libs', 'proxy', 'core', 'OpenAPI.ts'
    );
    let OpenAPIConfigContent = fs.readFileSync(OpenAPIConfig, "utf-8");
    OpenAPIConfigContent = OpenAPIConfigContent.replace(`BASE: process.env.REACT_APP_API_URL || '',`, `BASE: process.env.REACT_APP_API_URL || '${url}',`);
    fs.writeFileSync(OpenAPIConfig, OpenAPIConfigContent, "utf-8");

    // Replacing the BASE URL in the Login.tsx file
    const LoginTSX = path.resolve(
        __dirname, '../', 'raaghu-mfe', 'rds_pages', 'rds-page-login', 'src', 'Login', 'Login.tsx'
    );
    let LoginTSXContent = fs.readFileSync(LoginTSX, "utf-8");
    LoginTSXContent = LoginTSXContent.replace(`process.env.REACT_APP_API_URL || ''`, `process.env.REACT_APP_API_URL || '${url}'`);
    fs.writeFileSync(LoginTSX, LoginTSXContent, "utf-8");

    // Replacing the BASE URL in the interceptor.ts file
    const interceptor = path.resolve(
        __dirname, '../', 'raaghu-mfe', 'libs', 'shared', 'interceptor.ts'
    );
    let interceptorContent = fs.readFileSync(interceptor, "utf-8");
    interceptorContent = interceptorContent.replace(`baseURL: process.env.REACT_APP_API_URL || ''`, `baseURL: process.env.REACT_APP_API_URL || '${url}'`);
    fs.writeFileSync(interceptor, interceptorContent, "utf-8");

    console.log("\x1b[32m%s\x1b[0m", `proxy successfully created!!`);
};

const main = async () => {
    // await generate('./test/spec/v2.json', './test/generated/v2/');
    // await generate('./test/spec/v3.json', './test/generated/v3/');
    await generateRealWorldSpecs();
};

main();

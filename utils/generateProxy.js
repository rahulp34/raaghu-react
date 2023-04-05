'use strict';

// let { execSync } = require("child_process");
const OpenAPI = require('../raaghu-core/dist/build-proxy');
const fetch = require('node-fetch');

let eTc = process.argv[2];
let url = process.argv[3];

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
    // execSync(
    //     `curl -o swaggerJSON.json ${url}`,
    //     { cwd: '.', stdio: "inherit" }
    // )

    // const response = await fetch('https://raaghu-react.azurewebsites.net/swagger/v1/swagger.json');
    // const response = require('../swaggerJSON.json');
    const response = await fetch(url);

    const list = await response.json();
    // const list = require('../swaggerJSON.json');
    // delete list['api.video'];
    // delete list['apideck.com:vault'];
    // delete list['amazonaws.com:mediaconvert'];
    // delete list['bungie.net'];
    // delete list['docusign.net'];
    // delete list['googleapis.com:adsense'];
    // delete list['googleapis.com:servicebroker'];
    // delete list['kubernetes.io'];
    // delete list['microsoft.com:graph'];
    // delete list['presalytics.io:ooxml'];
    // delete list['stripe.com'];

    // const specs = Object.entries(list).map(([name, api]) => {
    //     // const latestVersion = api.versions[api.preferred];
    //     return {
    //         name: name
    //             .replace(/^[^a-zA-Z]+/g, '')
    //             .replace(/[^\w\-]+/g, '-')
    //             .trim()
    //             .toLowerCase(),
    //         // url: latestVersion.swaggerYamlUrl || latestVersion.swaggerUrl,
    //     };
    // });

    // for (let i = 0; i < specs.length; i++) {
    //     const spec = specs[i];
    await generate(list, `./raaghu-mfe/libs/${eTc}`);
    // }
};

const main = async () => {
    // await generate('./test/spec/v2.json', './test/generated/v2/');
    // await generate('./test/spec/v3.json', './test/generated/v3/');
    await generateRealWorldSpecs();
};

main();

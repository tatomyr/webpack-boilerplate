import fs from 'fs';

const deploymentPackageTpl = {
  "name": "deployment",
  "version": "1.0.0",
  "description": "",
  "main": "server.bundle.js",
  "scripts": {
    "start": "node server.bundle.js"
  }
};

const devPackage = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const deploymentPackage = {
  ...deploymentPackageTpl,
  engines: devPackage.engines,
  dependencies: devPackage.dependencies,
};

console.log('Deployment package.json file:');
console.log(deploymentPackage);

fs.writeFileSync('./dist/package.json', JSON.stringify(deploymentPackage));

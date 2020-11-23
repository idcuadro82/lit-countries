import './views/app';

const rootNode = document.getElementById('app-root');
const appNode = document.createElement('lit-app');
rootNode ? rootNode.append(appNode) : false;

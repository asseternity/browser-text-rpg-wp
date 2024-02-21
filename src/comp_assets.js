// importing
import './index.css';
import treeImg from './tree.png'
// initialize images
let iconTree = document.createElement('img'); iconTree.setAttribute('style','height:15px;width:15px;fill:white;'); iconTree.src = `${treeImg}`;
let iconTree2 = document.createElement('img'); iconTree2.setAttribute('style','height:15px;width:15px;fill:white;'); iconTree2.src = `${treeImg}`;
let iconTree3 = document.createElement('img'); iconTree3.setAttribute('style','height:15px;width:15px;fill:white;'); iconTree3.src = `${treeImg}`;
// array of images
let icons = { iconTree, iconTree2, iconTree3 }
// export images
export {icons}
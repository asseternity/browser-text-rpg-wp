// importing
import './index.css';
import treeImg from './tree.png'
// initialize images
let iconTree = document.createElement('img'); iconTree.setAttribute('style','height:15px;width:15px;fill:white;'); iconTree.src = `${treeImg}`;
let iconTree2 = document.createElement('img'); iconTree2.setAttribute('style','height:15px;width:15px;fill:white;'); iconTree2.src = `${treeImg}`;

// export images
export {
    iconTree,
    iconTree2
}
// importing
import song from './blacklake.mp3';
import './index.css';
import treeImg from './tree.png'
import personImg from './person.png';
// initialize images
let iconTree = document.createElement('img'); iconTree.setAttribute('style','height:15px;width:15px;'); iconTree.src = `${treeImg}`;
let iconTree2 = document.createElement('img'); iconTree2.setAttribute('style','height:15px;width:15px;'); iconTree2.src = `${treeImg}`;
let iconTree3 = document.createElement('img'); iconTree3.setAttribute('style','height:15px;width:15px;'); iconTree3.src = `${treeImg}`;
let iconPerson = document.createElement('img'); iconPerson.setAttribute('style', 'height:15px;width:15px;'); iconPerson.src = `${personImg}`;
// array of images
let icons = { iconTree, iconTree2, iconTree3, iconPerson }
// export images
export {icons, song}

import { sum } from './utils/sum'
import axios from 'axios'
import imgUrl from './assets/img/qiab.jpg'
import './servers/modules/home'

type IdType = number | string 

const id1: IdType = 'sheldon'


const hs = document.createElement('h2')
hs.textContent = 'AFK'
document.body.appendChild(hs)

// 访问index.html中定义的变量

// console.log(sdSaying, sdName);

// const youngSheldon = new Sheldon('moonpie', 10)


// 图片文件的使用
const elImg = document.createElement('img')
elImg.src = imgUrl
document.body.appendChild(elImg)
export {}
import './style.css'
import './styles/main.scss'
import './styles/theme.less'
import { greet } from './script.ts'
greet('Webpack User')

import myImage from './images/my-logo.png'

const imgElement = document.createElement('img')

imgElement.src = myImage
imgElement.alt = 'My Logo'
imgElement.className = 'aligned'

document.body.appendChild(imgElement)

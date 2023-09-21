const div = document.createElement('div')

const text = document.createElement('p')
text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
text.style.border = '1px solid red'
text.style.borderRadius = '15px'


div.appendChild(text)
const div2 = document.createElement('div')

document.body.append(div, div2)

const a1 = document.createElement('a')
a1.href = 'https://github.com/intocode/intro-dom/blob/main/assets/5.png'
a1.textContent = 'intocode'

const a2 = document.createElement('a')
a2.href = 'https://github.com/intocode/intro-dom/blob/main/assets/5.png'
a2.textContent = 'google'


const a3 = document.createElement('a')
a3.href = 'https://github.com/intocode/intro-dom/blob/main/assets/5.png'
a3.textContent = 'instagramm'

div2.style.display = 'flex'
div2.style.justifyContent = 'space-around'
div2.style.paddingLeft = '32%'
div2.style.paddingRight = '32%'
div2.style.color = 'blue'
div2.style.fontSize = '18px'


div2.append(a1,a2,a3)

div.style.display = 'flex'
div.style.alignItems = 'center'
div.style.margin = 'auto'
div.style.width = '460px'
div.style.fontSize = '18px'


//div.style.paddingLeft = '25%'
//div.style.paddingRight = '25%'

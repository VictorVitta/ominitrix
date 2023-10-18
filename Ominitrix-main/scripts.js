const html = document.querySelector("html")
const checkbox = document.querySelector("inout[name=theme]")

const getStyle = (element, style) => 
window
.getComputedStyle(element)
.getPropertyValue(style)

const initialColors = {
  fundo: getStyle(html, "--fundo" ),
  visor: getStyle(html, "--visor"),
  padrao: getStyle(html, "--padrao"),
  espera: getStyle(html, "--espera")
}
const albedoColors = {
    fundo: getStyle(html, "--fundoAlbedo" ),
visor: getStyle(html, "--visorAlbedo"),
padrao: getStyle(html, "--padraoAlbedo"),
espera: getStyle(html, "--esperaAlbedo")
}

const transfoKey = key =>
"--" + key.replace(/([A-Z])/, "$1")

const changeCokors = (colors) =>{
    Object.keys(colors).map(key =>{
        html.style.setProperty(transformKey(key), colors)

    })
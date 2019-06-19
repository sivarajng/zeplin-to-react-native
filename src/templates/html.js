const _ = require('lodash')
const rgbaConvert = require('rgba-convert')

function getStyle({ layer }) {

    let borderRadius = layer.borderRadius
    let height = _.get(layer, 'rect.height', 0)
    let width = _.get(layer, 'rect.width', 0)

    height = parseInt(height)
    width = parseInt(width)

    let color
    if (layer.type == 'shape') {
        if (_.get(layer, 'fills[0].fillType', '') == 'color') {
            color = (_.get(layer, 'fills[0].color', {}))
            delete color.a
            color = rgbaConvert.hex(color)
        }
    }

    return { borderRadius, height, width, color }
}

module.exports = function ({ type = 'text', layer = {} }) {

    let fontSize = _.get(layer, 'textStyles[0].style.fontSize', 0)
    let lineHeight = _.get(layer, 'textStyles[0].style.lineHeight', 0)

    fontSize = parseInt(fontSize)
    lineHeight = parseInt(lineHeight)

    let color = (_.get(layer, 'textStyles[0].style.color', {}))
    delete color.a
    color = rgbaConvert.hex(color)
    let fontFamily = (_.get(layer, 'textStyles[0].style.fontFace', ''))
    let text = ''
    if (type == 'text') {

        text = layer.content.replace(/\r\n|\n/g, '\\n ')
        return `<div style=" font-size : ${fontSize}px ; color: '${color}' ; font-family : '${fontFamily}'; " > ${text} </div>\r\n`
    }
    else if (type == 'view') {
        let { borderRadius, height, width, color } = getStyle({ layer })
        return `<div style=" width: ${width};  height: ${height} ${color ? "; background-color: " + color + "" : ''} ${!!borderRadius ? "; border-radius: '" + borderRadius + "'" : ''}; ">    </div> \r\n`
    }
    else return `<div style=" font-size : ${fontSize}px ; line-height : ${lineHeight} ; color: '${color}' ; font-family : '${fontFamily}'; " > ${text} </div>\r\n`




} 
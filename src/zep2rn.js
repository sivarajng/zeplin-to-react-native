const fs = require('fs')
const axios = require('axios')
const _ = require('lodash')
const rgbaConvert = require('rgba-convert')

const rnTemplate = require('./templates/react-native')
const htmlTemplate = require('./templates/html')

Array.prototype.rotateRight = function (n) {
    this.unshift.apply(this, this.splice(n, this.length))
    return this;
}

class Zeplin2react {

    constructor() {
        this.props = {
            url: '',
            dir: 'default',
            template: 'react-native',
            useLocaluiMeta: false,
            generateText: true,
            generateView: true,
            generateImage: true,
            traceTextTag: true,
            traceViewTag: false,
            traceImageTag: false,
        }
        this.uiMeta = null;

        this.flatLayers = [];
        this.traceTextLayers = []
        this.traceViewLayers = []
        this.traceImageLayers = []
        this.textTags = ''
        this.viewTags = ''
        this.imageTags = ''

    }

    config({ url = '', dir = 'default', template = 'react-native', useLocaluiMeta = false, generateText = true, generateView = true, generateImage = true, traceTextTag = true, traceViewTag = false, traceImageTag = false, }) {

        this.props = { url, dir, template, useLocaluiMeta, generateText, generateView, generateImage, traceTextTag, traceViewTag, traceImageTag, }
    }

    convert() {

        return new Promise(async (resolve, reject) => {
            try {

                if (!this.props.url) reject('url is invalid')

                if (!this.props.useLocaluiMeta) {
                    this.uiMeta = await axios.get(this.props.url)
                    this.uiMeta = this.uiMeta.data
                }

                // flat the layers from nested layers
                this.getLayers(this.uiMeta.layers)

                console.log('Total Layers Count: ', this.flatLayers.length)

                let types = new Set()
                for (let i = 0; i < this.flatLayers.length; i++) {
                    types.add(this.flatLayers[i].layer.type)
                }

                console.log('Total Types      : ', Array.from(types))
                console.log('Total Types Count: ', types.size)

                // loop layers for generate
                for (let i = 0; i < this.flatLayers.length; i++) {
                    let obj = this.flatLayers[i]

                    // GENERATE
                    // generate <Text> code
                    if (this.props.generateText && obj.layer.type == 'text') {
                        this.prepareTextTag(obj)
                    }
                    // generate <View> code
                    if (this.props.generateView && obj.layer.type == 'shape' || obj.layer.type == 'group') {
                        this.prepareViewTag(obj)
                    }
                    // generate <Image> code
                    if (this.props.generateImage && (obj.layer.type == 'shape' || obj.layer.type == 'group')) {
                        this.prepareImageTag(obj)
                    }

                }

                // loop layers for trace
                for (let i = 0; i < this.flatLayers.length; i++) {
                    let obj = this.flatLayers[i]

                    // TRACE
                    // trace <Text> Layer
                    if (this.props.traceTextTag && obj.layer.type == 'text') {
                        this.traceLayer('text', obj.layer)
                    }
                    // trace <View> Layer
                    if (this.props.traceViewTag && obj.layer.type == 'shape') {
                        this.traceLayer('view', obj.layer)
                    }
                    // trace <Image> Layer
                    if (this.props.traceImageTag && obj.layer.type == 'image') {
                        this.traceLayer('image', obj.layer)
                    }

                }
                this.props.generateText && this.writeFile('text')
                this.props.generateView && this.writeFile('view')
                this.props.generateImage && this.writeFile('image')

                this.props.traceTextTag && console.log('----------------------- TEXT PATH ---------------------------')
                this.props.traceTextTag && console.log(JSON.stringify(this.traceTextLayers, null, 0))

                this.props.traceViewTag && console.log('----------------------- VIEW PATH ---------------------------')
                this.props.traceViewTag && console.log(JSON.stringify(this.traceViewLayers, null, 0))

                this.props.traceImageTag && console.log('----------------------- IMAGE PATH ---------------------------')
                this.props.traceImageTag && console.log(JSON.stringify(this.traceImageLayers, null, 0))

            } catch (err) { reject(err) }

            this.textTags = ''
            this.viewTags = ''
            this.imageTags = ''

            resolve('Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>')
        })
    }


    getLayers(layers) {
        for (let i = 0; i < layers.length; i++) {
            this.flatLayers.push({ layer: layers[i] })
            if (layers[i].hasOwnProperty('layers')) this.getLayers(layers[i].layers)
        }
    }

    prepareTextTag({ layer }) {

        if (this.props.template == 'react-native') this.textTags = this.textTags + rnTemplate({ type: 'text', layer })

        if (this.props.template === 'html') this.textTags = this.textTags + htmlTemplate({ type: 'text', layer })

    }

    prepareViewTag({ layer }) {

        if (this.props.template == 'react-native') this.viewTags = this.viewTags + rnTemplate({ type: 'view', layer })

        if (this.props.template === 'html') this.viewTags = this.viewTags + htmlTemplate({ type: 'view', layer })

    }

    getStyle({ layer }) {

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

    prepareImageTag({ layer }) {

        let { borderRadius, height, width } = this.getStyle({ layer })

        let isAsset = this.uiMeta.assets.filter(i => i.layerId == layer.sourceId || i.layerName == layer.name)
        if (!!isAsset.length) {


            let imageUrl = ''
            try {
                imageUrl = this.uiMeta.assets.filter(i => i.layerId == layer.sourceId || i.layerName == layer.name)[0].contents.filter(i => i.density == 'mdpi')[0].url
            } catch (err) { }

            this.imageTags = this.imageTags + `<Image source={require('./assets/${layer.name}.png')} style={{ width: ${width}, height: ${height} ${!!borderRadius ? ", borderRadius: '" + borderRadius + "'" : ''}, }} /> \r\n`
            this.imageTags = this.imageTags + `<Image source={{ uri : '${imageUrl}'}} style={{ width: ${width}, height: ${height} ${!!borderRadius ? ", borderRadius: '" + borderRadius + "'" : ''}, }} /> \r\n`

            this.flatLayers = this.flatLayers.map(i => {

                let isMatch = this.uiMeta.assets.filter(j => j.layerId == i.layer.sourceId || j.layerName == i.layer.name)
                isMatch = false

                if (i.layer.sourceId == layer.sourceId || !!isMatch.length) i.layer.type = 'image'
                return i
            })
        }

    }

    traceLayer(type, destLayer) {
        this.checkLayers(type, this.uiMeta.layers, destLayer, (i, _destLayer, path) => path.push(i))
    }

    checkLayers(type, layers, destLayer, cb) {
        for (let i = 0; i < layers.length; i++) {
            let k = i
            let cbi = (m, destLayer, path) => {
                cb(m, destLayer, path);
                // process.stdout.write(`${k} - `);
                path.push(k)
                return path
            }

            let isMatch = false;
            if (type == 'text') isMatch = layers[i].content == destLayer.content
            if (type == 'view') isMatch = layers[i].sourceId == destLayer.sourceId
            if (type == 'image') isMatch = layers[i].sourceId == destLayer.sourceId

            if (isMatch) {

                let path = cb(i, destLayer, []).rotateRight(1)
                if (type == 'text') this.traceTextLayers.push({ name: destLayer.content, path })
                if (type == 'view') this.traceViewLayers.push({ name: destLayer.name, path })
                if (type == 'image') this.traceImageLayers.push({ name: destLayer.name, path })

                // process.stdout.write(JSON.stringify(path));
                // console.log(' - ', destLayer.content)
            }

            if (layers[i].hasOwnProperty('layers')) {
                this.checkLayers(type, layers[i].layers, destLayer, cbi)
            }
        }
    }


    writeFile(type) {
        let content = '';
        let rootDir = './zep2RN';
        let dir = this.props.dir;
        let filePath = `${rootDir}/${dir}/output.txt`;

        let fileExt = '.jsx';
        if (this.props.template == 'react-native') fileExt = '.jsx'
        if (this.props.template == 'html') fileExt = '.html'

        if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir);
        if (!fs.existsSync(rootDir + '/' + dir)) fs.mkdirSync(rootDir + '/' + dir);

        if (type == 'text') { filePath = `${rootDir}/${dir}/Text${fileExt}`; content = this.textTags }
        if (type == 'view') { filePath = `${rootDir}/${dir}/View${fileExt}`; content = this.viewTags }
        if (type == 'image') { filePath = `${rootDir}/${dir}/Image${fileExt}`; content = this.imageTags }

        content = content.split('\r\n')
        content = _.uniq(content)
        content = content.join('\r\n')

        fs.writeFile(filePath, content, (err) => {
            if (err) console.log(`${rootDir}/${dir}/${type}${fileExt} File Write Failed :`, err)
            else console.log(`${rootDir}/${dir}/${type}${fileExt} File Write success `)
        })
    }

}

module.exports = new Zeplin2react()

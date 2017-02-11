import { domTree } from '../lib/domtree'

const parser = new DOMParser

fetch('test/data/data.xml')
    .then(res => res.text())
    .then(xml => parser.parseFromString(xml, 'text/xml'))
    .then(doc => domTree({
        targetNode : doc.documentElement,
        parentNode : document.body
    }))

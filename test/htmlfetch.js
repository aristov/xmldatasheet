import { domTree } from '../lib/domtree'

const parser = new DOMParser

fetch('data/replapp.html')
    .then(res => res.text())
    .then(xml => parser.parseFromString(xml, 'text/html'))
    .then(doc => domTree({
        targetNode : doc.documentElement,
        parentNode : document.body
    }))

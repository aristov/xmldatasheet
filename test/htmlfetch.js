import { domTree } from '../lib/domtree'

const parser = new DOMParser

fetch('test/data/replapp.html')
    .then(res => res.text())
    .then(html => parser.parseFromString(html, 'text/html'))
    .then(doc => domTree({
        targetNode : doc.documentElement,
        parentNode : document.body
    }))

import { domTree } from '../lib/domtree'

const parser = new DOMParser

const URI1 = 'test/data/22-rdf-syntax-ns.rdf'
const URI2 = 'test/data/rdf-schema.rdf'
const URI3 = 'test/data/owl.rdf'
const URI4 = 'test/data/studio.rdf.xml'

fetch(URI4)
    .then(res => res.text())
    .then(xml => parser.parseFromString(xml, 'text/xml'))
    .then(doc => domTree({
        targetNode : doc.documentElement,
        parentNode : document.body
    }))

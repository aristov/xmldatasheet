import { xmlfetch } from './test/xmlfetch'
import { domTree } from './lib/domtree'

const URI1 = 'test/data/22-rdf-syntax-ns.rdf'
const URI2 = 'test/data/rdf-schema.rdf'
const URI3 = 'test/data/owl.rdf'
const URI4 = 'test/data/studio.rdf.xml'

xmlfetch(URI4).then(doc => domTree({
    targetNode : doc.documentElement,
    parentNode : document.body
}))

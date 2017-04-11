const { forEach, reduce } = Array.prototype
const labels = document.querySelectorAll('label')
const subClassOfs = document.querySelectorAll('subClassOf')
const RE = /^.*#/
const xmlns = reduce.call(
    document.documentElement.attributes,
    (res, attr) => {
        res[attr.value] = attr.localName
        return res
    }, {})
forEach.call(labels, node => {
    if(node.hasAttribute('xml:lang')) {
        node.setAttribute('aria-hidden', 'true')
    }
    else {
        const about = node.parentNode.getAttribute('rdf:about')
        const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
        const parent = node.parentNode
        const pair = about.split('#')
        link.href = about
        link.textContent = xmlns[pair[0] + '#'] + ':' + pair[1]
        parent.insertBefore(link, node.nextSibling)
        parent.insertBefore(new Text(' '), node.nextSibling)
    }
})
forEach.call(subClassOfs, node => {
    const uri = node.getAttribute('rdf:resource')
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    const pair = uri.split('#')
    link.setAttribute('href', uri)
    link.textContent = xmlns[pair[0] + '#'] + ':' + pair[1]
    node.appendChild(new Text(node.nodeName + ': '))
    node.appendChild(link)
})

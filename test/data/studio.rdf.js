const { forEach } = Array.prototype
const { attributes } = document.documentElement
const labels = document.querySelectorAll('label')
const subClassOfs = document.querySelectorAll('subClassOf')
forEach.call(labels, node => {
    if(node.hasAttribute('xml:lang')) {
        node.setAttribute('aria-hidden', 'true')
    }
    else {
        const uri = node.parentNode.getAttribute('rdf:about')
        const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
        const pair = uri.split('#')
        link.href = uri
        link.textContent = node.lookupPrefix(pair[0] + '#') + ':' + pair[1]
        const { parentNode, nextSibling } = node
        parentNode.insertBefore(new Text(' '), nextSibling)
        parentNode.insertBefore(link, nextSibling)
    }
})
forEach.call(subClassOfs, node => {
    const uri = node.getAttribute('rdf:resource')
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    const pair = uri.split('#')
    link.href = uri
    link.textContent = node.lookupPrefix(pair[0] + '#') + ':' + pair[1]
    node.appendChild(new Text(node.nodeName + ': '))
    node.appendChild(link)
})

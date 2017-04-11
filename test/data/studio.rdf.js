const forEach = Array.prototype.forEach
const labels = document.querySelectorAll('label')
const subClassOfs = document.querySelectorAll('subClassOf')
const RE = /^.*#/
forEach.call(labels, node => {
    if(node.hasAttribute('xml:lang')) {
        node.setAttribute('aria-hidden', 'true')
    }
    else {
        const about = node.parentNode.getAttribute('rdf:about')
        const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
        link.href = about
        link.textContent = about.replace(RE, 'studio:')
        node.parentNode.insertBefore(link, node.nextSibling)
        node.parentNode.insertBefore(new Text(' '), node.nextSibling)
    }
})
forEach.call(subClassOfs, node => {
    const uri = node.getAttribute('rdf:resource')
    const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    link.setAttribute('href', uri)
    link.textContent = 'studio:' + uri.split('#')[1]
    node.appendChild(new Text(node.nodeName + ': '))
    node.appendChild(link)
})

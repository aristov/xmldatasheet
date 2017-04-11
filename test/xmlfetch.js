const parser = new DOMParser

export function xmlfetch(uri) {
    return window.fetch(uri)
        .then(res => res.text())
        .then(xml => parser.parseFromString(xml, 'text/xml'))
}

import { Grid, gridCell, columnHeader, row, rowGroup, rowHeader } from 'ariamodule'

const { map } = Array.prototype
const { Node } = window
const { TEXT_NODE } = Node

export class NodeGrid extends Grid {
    set targetNode(targetNode) {
        const {
            childNodes,
            firstChild,
            tagName,
            attributes,
            textContent
        } = targetNode
        const isSimple = childNodes.length === 1 && firstChild.nodeType === TEXT_NODE
        this.children = rowGroup([
            row([
                rowHeader({ rowSpan : 2, children : tagName }),
                map.call(attributes, ({ name }) => columnHeader(name)),
                isSimple? columnHeader('value') : null
            ]),
            row([
                map.call(attributes, ({ value }) => gridCell({ value })),
                isSimple? gridCell({
                    value : textContent,
                    style : { fontWeight: 'bold' }
                }) : null
            ])
        ])
    }
}

export function nodeGrid(init) {
    return new NodeGrid('table', init)
}

import { Tree, group, treeItem } from 'ariamodule'
import { nodeGrid } from './nodegrid'

const map = Array.prototype.map

export function domTreeItem(node) {
    const children = node.children
    return treeItem({
        expanded : children.length? 'true' : undefined,
        tabIndex : 0,
        children : [
            nodeGrid({ targetNode : node }),
            children.length?
                group(map.call(children, domTreeItem)) :
                null
        ]
    })
}

export class DOMTree extends Tree {
    set targetNode(targetNode) {
        this.children = domTreeItem(targetNode.documentElement || targetNode)
    }
}

export function domTree(init) {
    return new DOMTree('div', init)
}

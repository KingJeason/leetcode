let tree = [
    {
        label: 'a',
        value: 1,
        children: [
            {
                label: 'b',
                value: 2
            },
            {
                label: 'c',
                value: 3
            }
        ]
    },
    {
        label: 'd',
        value: 5,
        children: [

        ]
    }
]
let id = 6
function findTreeObjectByTree (id, tree) {
    for (let i = 0; i < tree.length; i++) {
        let obj = tree.find((item) => { return item.value === id })

        if (!obj) {
            if (tree[i].children && tree[i].children.length > 0) {
                return findTreeObjectByTree(id, tree[i].children)
            }
            continue;
        }
        return obj
    }
    return null
}
let o = console.log(findTreeObjectByTree(id, tree))

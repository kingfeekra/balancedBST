function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

function inorder(root)
{
    if (root != null) {
            inorder(root.left);
            document.write(root.data + " ");
            inorder(root.right);
        }
}

function postOrder(node) {
    if (node == null)
    {
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    document.write(node.data + " ");
}

export {inorder, preOrder, postOrder}
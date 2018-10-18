'use strict'; 

module.exports = function whoIsTheFather(tree, parent, child) {
  if (!tree) {
    return false;
  }
  let parentNode = null;
  (function findParent(root) {
    if (root === null) {
      return undefined;
    }
    if (root.value === parent) {
      parentNode = root;
    }
    findParent(root.left);
    findParent(root.right);
    return undefined;
  }(tree.root));
  let father = false;
  (function findChild(root) {
    if (root === null) {
      return undefined;
    }
    if (root.value === child) {
      father = true;
    }
    findChild(root.left);
    findChild(root.right);
    return undefined;
  }(parentNode));
  return father;
};

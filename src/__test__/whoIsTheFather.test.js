'use strict';

const whoIsTheFather = require('../lib/whoIsTheFather');
const Node = require('../lib/Node');
const Tree = require('../lib/Tree');

const tree = new Tree(5);
tree.root.left = new Node(3);
tree.root.right = new Node(15);

const messedUpTree = new Tree(1);
messedUpTree.root.left = new Node(2);
messedUpTree.root.right = new Node(4);

const real = new Tree(1);
real.root.right = new Node(3);
real.root.left = new Node(5);
real.root.right.right = new Node(15);
real.root.right.left = new Node(4);
real.root.left.left = new Node(2);

const reallyReal = new Tree(1);
reallyReal.root.right = new Node(3);
reallyReal.root.left = new Node(5);
reallyReal.root.right.right = new Node(15);
reallyReal.root.right.left = new Node(4);
reallyReal.root.left.left = new Node(2);
reallyReal.root.left.left.left = new Node(2);


describe('whoIsTheFather.js', () => {
  test('happy path: basic tree', () => {
    const result = whoIsTheFather(messedUpTree, 1, 4);
    expect(result).toEqual(true);
  });
  test('happy path: more complex tree', () =>  {
    const result = whoIsTheFather(reallyReal, 5, 2);
    expect(result).toEqual(true);
  });
  test('unhappy path: complex tree with incorrect answer', () => {
    const result = whoIsTheFather(real, 1, 8);
    expect(result).toEqual(false);
  });
  test('unhappy path: basic tree with incorrect answer',() => {
    const result = whoIsTheFather(tree, 15, 5);
    expect(result).toEqual(false);
  });
  test('unhappy path: no tree given', () => {
    const result = whoIsTheFather(null, 15, 5);
    expect(result).toEqual(false);
  });
  test('unhappy path: parent doesnt exist', () => {
    const result = whoIsTheFather(tree, 1, 3);
    expect(result).toEqual(false);
  });
});

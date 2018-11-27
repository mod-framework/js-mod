# dom

# class mod_dom
- [rot(NodeList, ...args)](#rotnodelist-args) toggle, rotate class name
- [clone(NodeList)](#clonenodelist)
- [insert(parentNode, NodeList, offset)](#insertparentnode-nodelist-offset)
- [insertPrev(parentNode, NodeList[, offset])](#insertprevparentnode-nodelist-offset)
- [insertNext(parentNode, NodeList[, offset])](#insertnextparentnode-nodelist-offset)

## rot(NodeList, ...args)
* example
```html
<button name="rot html,body on">TEST</button>
<button name="rot body on;rot html off">TEST</button>
```
```html
<html class="on"><body class="on"></body></html>
```
```html
<html class="on"><body class="off"></body></html>
```
[back to top](#)
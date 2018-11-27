# dom

# class mod_dom
- [clone(NodeList)](#clonenodelist)
- [insert(parentNode, NodeList, offset)](#insertparentnode-nodelist-offset)
- [insertPrev(parentNode, NodeList[, offset])](#insertprevparentnode-nodelist-offset)
- [insertNext(parentNode, NodeList[, offset])](#insertnextparentnode-nodelist-offset)

## clone(NodeList)
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
```js
mod.dom.clone(div.children);
```
[back to top](#)

## insert(parentNode, NodeList, offset)
* example
```html
<div>
	/*offset 0*/<button>A</button><button>B</button><button>C</button>/*offset -1*/
</div>
```
```js
mod.dom.insert(div, [new_example0(),new_example0()], 0);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
* offset 0
```html
<div>
	<button>TEST</button><button>TEST</button><button>A</button><button>B</button><button>C</button>
</div>
```
* offset -1
```js
mod.dom.insert(div, [new_example0(),new_example0()], -1);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
```html
<div>
	<button>A</button><button>B</button><button>C</button><button>TEST</button><button>TEST</button>
</div>
```
[back to top](#)


## insertPrev(parentNode, NodeList, offset)
* example
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
* Button A, offset 0
```js
mod.dom.insertPrev(div.children[0], [new_example0(),new_example0()], 0);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
```html
<div>
	<button>TEST</button><button>TEST</button><button>A</button><button>B</button><button>C</button>
</div>
```
* Button C, offset 2
```js
mod.dom.insertPrev(div.children[2], [new_example0(),new_example0()], 2);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
```html
<div>
	<button>TEST</button><button>TEST</button><button>A</button><button>B</button><button>C</button>
</div>
```
[back to top](#)


## insertNext(parentNode, NodeList, offset)
* example
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
* Button C, offset 0
```js
mod.dom.insertNext(div.children[0], [new_example0(),new_example0()], 0);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
```html
<div>
	<button>A</button><button>B</button><button>C</button><button>TEST</button><button>TEST</button>
</div>
```
* Button A, offset 2
```js
mod.dom.insertNext(div.children[2], [new_example0(),new_example0()], 2);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
```html
<div>
	<button>A</button><button>B</button><button>C</button><button>TEST</button><button>TEST</button>
</div>
```
[back to top](#)
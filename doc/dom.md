# dom

# class mod_dom
- [clone(NodeList)](#clonenodelist)
- [insert(parentNode, NodeList, offset)](#insertparentnode-nodelist-offset)
- [insertPrev(parentNode, NodeList[, offset])]
- [insertNext(parentNode, NodeList[, offset])]

## clone(NodeList)
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
```js
mod.dom.clone(div.children);
```

## insert(parentNode, NodeList, offset)
* offset 0
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

## insertPrev(parentNode, NodeList, offset)
offset 0
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
```js
mod.dom.insertPrev(div.children[2], [new_example0(),new_example0()], 0);
mod.dom.insertPrev(div.children[1], [new_example0(),new_example0()], 1);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```

## insertNext(parentNode, NodeList, offset)
```html
<div>
	/*offset 0*/<button>A</button><button>B</button><button>C</button>/*offset -1*/
</div>
```
```js
mod.dom.insert(div, [new_example0(),new_example0()],  0);
mod.dom.insert(div, [new_example0(),new_example0()], -1);

function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
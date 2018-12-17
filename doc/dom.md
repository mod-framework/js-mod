# dom

# class mod_dom
- [var(arr[, element[, prefix]])](#vararr-element-prefix) query cssRule(#prefix,name), HTMLElement(class="prefix name") name
- [find(NodeList[, element])](#findnodelist-element) query arraied css selector
- [prop(NodeList, object)](#propnodelist-object) set property
- [evt(NodeList, type, listener[, useCapture])](#evtnodelist-type-listener-usecapture) add event
- [rot(NodeList, ...args)](#rotnodelist-args) toggle, rotate class name
- [rmv(NodeList, ...args)](#rmvnodelist-args) remove class class name
- [clone(NodeList)](#clonenodelist)
- [insert(parentNode, NodeList, offset)](#insertparentnode-nodelist-offset)
- [insertPrev(parentNode, NodeList[, offset])](#insertprevparentnode-nodelist-offset)
- [insertNext(parentNode, NodeList[, offset])](#insertnextparentnode-nodelist-offset)

## var(arr[, element[, prefix]])
query cssRule(#prefix,name), HTMLElement(class="prefix name") name
```js
mod.dom.var([]);
mod.dom.var([],0,"aa");
```
[back to top](#)

## find(NodeList[, element])
> NodeList(Array)
query arraied css selector
```js
mod.dom.find([div,div,"body"]);
mod.dom.find("html,body");
```
[back to top](#)

## prop(NodeList, object)
set property
```js
mod.dom.prop([div,div,{onclick:function(){  }}]);
mod.dom.prop("html,body",{onclick:function(){  }});
```
[back to top](#)

## evt(NodeList, type, listener, useCapture)
add event
```js
mod.dom.evt(div,"click",function(e){  });
mod.dom.evt(div,"click",function(e){  });
mod.dom.evt([div,div],"click",function(e){  });
mod.dom.evt("html,body","click",function(e){  });
```
[back to top](#)

## rot(NodeList, ...args)
rotate class
```js
mod.dom.rot(div,"on");
mod.dom.rot(div,"on","off","");
mod.dom.rot(div,"on swap");
mod.dom.rot([div,div],"on","off","");
mod.dom.rot("html,body","on","off","");
```
[back to top](#)

## rmv(NodeList, ...args)
remove class
```js
mod.dom.rmv(div,"on");
mod.dom.rmv(div,"on","off");
mod.dom.rmv([div,div],"on","off");
mod.dom.rmv("html,body","on","off");
```
[back to top](#)

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
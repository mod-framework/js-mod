# dom

# class mod_dom
- [clone(NodeList)](#clonenodelist)
- [insert(parentNode,NodeList,offset)](#insertparentnodenodelistoffset)
- [insertPrev]
- [insertNext]

## clone(NodeList)
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
```js
mod.dom.clone(div.children);
```

## insert(parentNode,NodeList,offset)
```html
<div>
	<button>A</button><button>B</button><button>C</button>
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
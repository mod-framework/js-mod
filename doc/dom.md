# dom

# class mod_dom
- [clone(NodeList)](#clonenodelist)
- [insert]
- [insertPrev]
- [insertNext]

## clone(NodeList)
```html
<div>
	<button>A</button><button>B</button><button>C</button>
</div>
```
```js
clone(div.children);
```

```js
function new_example0(){
	var a=document.createElement("button");
	a.textContent="TEST";
	return a;
}
```
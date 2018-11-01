mod.spreadsheet=(function spreadsheet(r){
	var on_x=[],x=new XMLHttpRequest();
	
	x.onreadystatechange=function(){
		if(this.readyState==4){
			var a=document.createElement("div");
			a.innerHTML=this.responseText;
			r.node=a.lastChild;
			while(a=on_x.pop())a();
		}
	};

	r.EndDOM=function(a){
		on_x.push(a);
	};
	x.open("GET","mod-spreadsheet.html",true);
	x.send();

	return r;
})({
	new:function(o){
		var node=this.node.cloneNode(true),tb=node.querySelectorAll("table,thead,tbody"),
		r=Object.assign({
			data:{
				0:{
					
				}
			},
			inputs:[],
			SizeMax:[99,999],
			ViewMaxSize:function(x,y){this.SizeMax=[x,y];},
			thead:function(a){
				if(Number.isInteger(a))a=new Array(a);
				if(Array.isArray(a)){
					tb[1].textContent="";
					var i,arr=[];
					for(i=a.length-1;i>=0;i--){
						arr[i]=new0(a[i]);
					}
					if(this.RowNumber)arr.unshift(new0(""));
					mod.dom.insert(tb[1],arr);

					function new0(txt){
						var a0=document.createElement("th");
						a0.innerHTML=txt;
						return a0;
					}
				}
			},
			theadFixed:function(type0){
				var ch=tb[1].children,c0="fixed-thead";
				tb[0].classList[type0||"toggle"](c0);
				if(tb[0].classList.contains(c0)){
					for(var a0,b0,i=0,l=ch.length;i<l;i++){
						a0=document.createElement("div");
						b0=mod.dom.clone(ch[i].childNodes);
						mod.dom.insert(a0,ch[i].childNodes);
						b0.unshift(a0);
						mod.dom.insert(ch[i],b0);
					}
				}else{
					for(var a0,i=0,l=ch.length;i<l;i++){
						a0=ch[i].firstChild.childNodes;
						ch[i].textContent="";
						mod.dom.insert(ch[i],a0);
					}
				}
			}
		},o),v_h0=0,v_h1=0;

		if(o.colsText)r.thead(o.colsText);
		if(o.fixedHead)r.theadFixed(o.fixedHead);
		if(o.parent)o.parent.appendChild(node);

		switch(o.type||"full"){
		case "full":
			resizeFull();
			gClusterPos();
			node.addEventListener("resize",resizeFull);
			function resizeFull(){
				v_h0=(tb[0].scrollHeight-tb[0].clientHeight)|0;
				for(var tr,i=gClusterMax();i>=0;i--){
					tr=document.createElement("tr");
					tb[2].appendChild(tr);
				}
				//this.inputs
			}
		break;
		case "table":
		break;
		}


		return r;

		function gClusterPos(){
			var a=tb[0].scrollTop/v_h0|0;
			if(a){
				
			}
			//v_h1
			console.log(a);
		}
		function gClusterMax(){
			var r,tr9=document.createElement("tr"),td9;
			tr9.innerHTML="<td>&nbsp;</td>";
			td9=tr9.firstChild;
			tb[2].appendChild(tr9);
			v_h1=r=tb[2].clientHeight/td9.clientHeight+1|0;
			tr9.remove();
			return r;
		}
	}
})
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
			tr:[],td:[],
			SizeMax:[999,99],
			ViewMaxSize:function(x,y){this.SizeMax=[x,y];},
			thead:function(a){
				if(Number.isInteger(a))a=new Array(a);
				if(Array.isArray(a)){
					tb[1].textContent="";
					var i,arr=[],tr=document.createElement("tr");
					for(i=a.length-1;i>=0;i--){
						arr[i]=new0(a[i]);
					}
					if(this.RowNumber)arr.unshift(new0(""));
					mod.dom.insert(tb[1],[tr]);
					mod.dom.insert(tr,arr);

					function new0(txt){
						var a0=document.createElement("th");
						a0.innerHTML=txt;
						return a0;
					}
				}
			},
			theadFixed:function(type0){
				var ch=tb[1].lastChild.children,c0="fixed-thead";
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
		},o),scrollW=0,scrollH=0,x_cnt=0,y_cnt=0,x_pos=0,y_pos=0;

		if(o.colsText)r.thead(o.colsText);
		if(o.fixedHead)r.theadFixed(o.fixedHead);
		if(o.parent)o.parent.appendChild(node);

		switch(o.type||"full"){
		case "full":
			resizeFull();
			node.addEventListener("resize",resizeFull);
			function resizeFull(){
				scrollH=(tb[0].scrollHeight-tb[0].clientHeight)|0;
				gClusterResize();
				var tr,row,i,l;
				if(this.RowNumber){
					tr=document.createElement("tr");
					tb[2].appendChild(tr);
				}
				for(i=gClusterMax();i>=0;i--){
					tr=document.createElement("tr");
					tb[2].appendChild(tr);
				}
				//for(row=0,i=0,l)
				var pos=gClusterPos();
				console.log(pos);
			}
		break;
		case "table":
		break;
		}


		return r;

		function gNewTR(){
			var tr=document.createElement("tr");
			if(r.RowNumber)tr.appendChild(gNewTD());
			return tr;
		}
		function gNewTD(){
			var td=document.createElement("td");
			td.appendChild(document.createElement("input"));
			return td;
		}
		function gClusterResize(){
			var x0=tb[0].scrollLeft/scrollW,y0=tb[0].scrollTop/scrollH;
			x_pos=y_cnt*x0;
			y_pos=y_cnt*y0;

			var x=0,y=0,x1=0,y1=0;

			blk0(0);
			for(var y0=1,l=r.SizeMax[1];y0<l;y0++)blk0(y0);
			console.log(x1);

			function blk0(i){
				if(!r.tr[i])tb[2].appendChild(r.tr[i]=gNewTR());
				if(!r.td[i])r.td[i]=[];
				for(var x0=0,l=r.SizeMax[0];x0<l;x0++){
					if(!r.td[i][x0])r.tr[i].appendChild(r.td[i][x0]=gNewTD());
					x1++;
					if(r.td[i][x0].offsetLeft+r.td[i][x0].offsetWidth>=tb[2].clientWidth)break;
				}
				while(r.td[i].length>x1)r.td[i].pop().remove();
			}
		}
		function gClusterPos(){
		}
		function gClusterMax(){
			var tr9=document.createElement("tr"),td9;
			tr9.innerHTML="<td>&nbsp;</td>";
			td9=tr9.firstChild;
			tb[2].appendChild(tr9);
			x_cnt=tb[2].clientWidth/td9.clientWidth+1|0;
			y_cnt=tb[2].clientHeight/td9.clientHeight+1|0;
			tr9.remove();
		}
	}
})
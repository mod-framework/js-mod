mod.event=(function mod_event(r){
	var m=mod.dom,fx={
		rot:m.rot
	};
	r.fx=fx;
	addEventListener("click",function(e){
		for(var p=e.target,i=16;p&&i>0;p=p.parentNode,i--){
			switch(p.constructor){
			case HTMLButtonElement:fx0(p);break;
			}
		}
	});
	function fx0(p){
		var n=p.name.split(";"),v=p.value.split(";"),i=0,l=n.length;
		for(;i<l;i++)if(fx[n[i]])fx[n[i]].apply(m,v[i].split(" "));
	}
	return r;
})({
	
})
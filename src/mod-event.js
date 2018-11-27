mod.event=(function mod_event(r){
	var fx={

	};
	r.fx=fx;
	addEventListener("click",function(e){
		for(var p=e.target,i=16;p&&i>0;p=p.parentNode,i--){
			switch(p.constructor){
			case HTMLButtonElement:if(on_btn[p.name])on_btn[p.name](p);break;
			default:

			}
		}
	});
	return r;
})({
	
})
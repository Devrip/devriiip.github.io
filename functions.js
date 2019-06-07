Di.WS.Connect("ws0.dinom.net/8251120b4c0192d35a89105cd2e66b950c2c9f5503ef9ff00290b97793f5b8c6");

extendInit=Di.Setup;
Di.Setup=function(e){
	extendInit(e);
	$(document).trigger('loaded');
};

$(window).on('loaded',function(){
	Di.$.Pub.Get({
		'table':'animal_pics'
	},'RenderPics');

});


function RenderPics(r){
	if(r&&r.status&&r.status==200&&r.data){
		for(id in r.data){
			var item=r.data[id];
			$('body').append('<img src="'+item.url+'" title="'+ item.name +'" />');
		}
	}
	else{
		alert('We cannot fetch the images right now.');
		Di.err(r);
	}
}

var window = Ti.UI.createWindow({
	title:"its working",
	backgroundColor:"white",
	layout:"vertical"
});
//create view 
var view01 = Ti.UI.createView({
  	 backgroundColor:'white',
     width:"100%",
     height:"50%",
     layout:"horizontal",
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
	
});
var view02 = Ti.UI.createView({

       width:"99.5%",
       height:"100%",
       layout:"horizontal",
       left:20,
       right:0,
       textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
       
       
	
});
 var label = Ti.UI.createLabel({
 	text:"0",
 	color:'black',
 	top:"30%",
 	left:"10",
 	textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
 	 width: Ti.UI.SIZE, height: Ti.UI.SIZE,
 	 font: {fontFamily:'Snell Roundhand', fontSize:"56dp"},
        shadow:{color:'gray', offset:{width:1,height:1}}
 });
 var Button = [];
 for(i=0;i<15;i++)
 {
 	if(i<10)
 	{
 		Button =Ti.UI.createButton({
	 	    title: i,
	        width: 50,
	     	height: 50,
	     	backgroundColor:'#ea2d6d',
	     	left:10,
	     	bottom:10,
	     	value : i
     	 });
 	}
 	else if(i==10){
 		Button =Ti.UI.createButton({
	 	    title: "C",
	        width: 50,
	     	height: 50,
	     	backgroundColor:'blue',
	     	left:10,
	     	bottom:10,
	     	value : "c"
     	 });
 	}
 	else if(i==11){
 		Button =Ti.UI.createButton({
	 	    title: "+",
	        width: 50,
	     	height: 50,
	     	backgroundColor:'#ea2d6d',
	     	left:10,
	     	bottom:10,
	     	value : "+"
     	 });
 	}
 	else if(i==12){
 		Button =Ti.UI.createButton({
	 	    title: "-",
	        width: 50,
	     	height: 50,
	     	backgroundColor:'#ea2d6d',
	     	left:10,
	     	bottom:10,
	     	value : "-"
     	 });
 	}
 	 	else if(i==13){
 		Button =Ti.UI.createButton({
	 	    title: "/",
	        width: 50,
	     	height: 50,
	     	backgroundColor:'#ea2d6d',
	     	left:10,
	     	bottom:10,
	     	value : "/"
     	 });
 	}
 	
 	 	else if(i==14){
 		Button =Ti.UI.createButton({
	 	    title: "*",
	        width: 50,
	     	height: 50,
	     	backgroundColor:'#ea2d6d',
	     	left:10,
	     	bottom:10,
	     	value : "x"
     	 });
 	}
 	
 	
 	
 	 

  Button.addEventListener("click", function(e) {
  	if(this.value=='c')
  	{
  		label.text="0";
  	}
  	else
  	{
  		label.text+=this.value;
  	}
});
 view02.add(Button);
 }

 
window.open();
view01.add(label);
view02.add(Button);
window.add(view01);
window.add(view02);


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
     layout:"horizontal"
	
});
var view02 = Ti.UI.createView({

       width:"100%",
       height:"50%",
       layout:"horizontal",
       left:15,
       right:15
	
});
 var label = Ti.UI.createLabel({
 	text:"0",
 	color:'black',
 	top:"30%",
 	left:"10",
 	 font: {fontFamily:'Snell Roundhand', fontSize:36},
        shadow:{color:'gray', offset:{width:1,height:1}}
 });
 for(i=0;i<10;i++)
 {
 	var Button =Ti.UI.createButton({
 	 title: i,
     width: 100,
     height: 50,
     backgroundColor:'#ea2d6d',
     left:10,
     bottom:10
 });
 view02.add(Button);
 }
 
window.open();
view01.add(label);
view02.add(Button);
Button.addEventListener('click', function(e) {
	// code here is run when the event is fired
	// properties of the event object 'e' describe the event and object that received it
	alert();
});
window.add(view01);
window.add(view02);


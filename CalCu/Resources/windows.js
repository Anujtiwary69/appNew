var window = Ti.UI.createWindow({
	title:"Calculator",
	backgroundColor:"white",
	layout:"vertical",
	theme: "Theme.AppCompat.Fullscreen",
	navBarHidden: false
	
});
//create view 
var view01 = Ti.UI.createView({
  	 backgroundColor:'#0288d1',
     width:"100%",
     height:"35%",
     layout:"horizontal",
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
	
});
var view02 = Ti.UI.createView({

       width:"112%",
       height:"100%",
       layout:"horizontal",
       left:-15,
       right:5,
       backgroundColor:"#f4f4f4",
       textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
       
       
	
});
 var mainText = Ti.UI.createLabel({
 	text:"0",
 	color:'black',
 	top:"5%",
 	left:"10",
 	textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
 	 width: Ti.UI.SIZE, height: Ti.UI.SIZE,
 	 font: {fontFamily:'Snell Roundhand', fontSize:"56dp"},
        shadow:{color:'gray', offset:{width:1,height:1}}
 });
 var Totaltext = Ti.UI.createLabel({
 	text:".",
 	color:'black',
 	top:"60%",
 	left:-5,
 	textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
 	 width: Ti.UI.SIZE, height: Ti.UI.SIZE,
 	 font: {fontFamily:'Snell Roundhand', fontSize:"25dp"},
        shadow:{color:'gray', offset:{width:1,height:1}}
 });
 

 



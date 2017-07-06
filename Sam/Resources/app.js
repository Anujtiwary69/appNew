var window = Ti.UI.createWindow({
	 title: "AnujApp",
	 backgroundColor:"#19abc7",
	 // theme: "Theme.AppCompat.Fullscreen"
	  titleControl: Ti.UI.createLabel({
        text: 'Enable feature?',
        color: '#19abc7',
        shadowOffset: {x: 2, y: 2}
    })
});
//label 
window.open();
//swipe action 
var view = Ti.UI.createView();
view.addEventListener('swipe', function(e){
	if(e.direction=="up")
	{
		alert('welcome');
		Ti.UI.createWindow({
  			url:'home.js'
		}).open();
	}
	else
	{
		alert('undefined');
	}
});
window.add(view);

	
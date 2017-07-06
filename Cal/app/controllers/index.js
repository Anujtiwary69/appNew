function doClick(e) {
	alert($.label.text);
}
function doClickNew()
{
	  $.alertDialog.show();
}


$.index.open();
$.addListener($.Button, 'click', doClickNew);
$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});

function infoProducto() {
	var win = Alloy.createController('infoProducto').getView();
	$.inicioScreen.add(win);
}



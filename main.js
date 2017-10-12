mainPanel = document.getElementById("mainPanel");
var x = -6;
var y = -438;
function artifacts(){
	for(var i = 0; i < 15; i++){
		item = document.createElement('div');
		item.className = 'item';
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		mainPanel.appendChild(item);
		x -= 49;
	}
};
artifacts();

//	background-position: -6px -438px;
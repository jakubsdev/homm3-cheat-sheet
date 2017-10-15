artifactsList = document.querySelector("#mainPanel > ul");
var x = -6;
var y = -438;
function artifacts(){
	for(var i = 0; i < 32; i++){
		item = document.createElement('li');
		item.id = 'artifact' + i;
		item.className = "item";
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		artifactsList.appendChild(item);
		x -= 49;
		
		a = document.getElementById('artifact'+i);
        (function (a) {
            a.addEventListener('click', function(){
                console.log(a);
            });
        })(a);
	}
}
artifacts();
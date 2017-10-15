artifactsGrid = document.querySelector("#mainPanel > ul");
itemName = document.getElementById("itemName");
itemAtk = document.getElementById("itemAtk");
itemDef = document.getElementById("itemDef");
itemPwr = document.getElementById("itemPwr");
itemKnwl = document.getElementById("itemKnwl");
itemDescription = document.getElementById("itemDescription");
var x = -104;
var y = -438;
function artifacts(){
	for(var i = 0; i < 120; i++){
		item = document.createElement('li');
		item.id = 'artifact' + i;
		item.className = "item";
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		artifactsGrid.appendChild(item);
		x -= 49;
		if(i == 29){
			x = -6;
			y = -498;
		}
		else if(i == 61){
			x = -6;
			y = -558;
		}
		else if(i == 92){
			x = -6;
			y = -614;
		}
		
		a = document.getElementById('artifact'+i);
        (function (a) {
            a.addEventListener('mouseover', function(){
				var name = "";
				var atk = "";
				var def = "";
				var pwr = "";
				var knwl = "";
				var desc = "";				
                switch(a.id){
					case "artifact0":
						name = "Centaur's Axe";
						atk = "2"
						def = "0"
						pwr = "0"
						knwl = "0"
						desc = "This right handed weapon increases your Attack skill by +2."
				}
				itemName.innerHTML = name;
				itemAtk.innerHTML = "A: " + atk;
				itemDef.innerHTML = "D: " + def;
				itemPwr.innerHTML = "P: " + pwr;
				itemKnwl.innerHTML = "K: " + knwl;
				itemDescription.innerHTML = desc;
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemDescription.innerHTML = "";
			});
        })(a);
	}
	
		
}
artifacts();
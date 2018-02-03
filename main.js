itemsGrid = document.getElementById("itemsGrid");

searchBar = document.getElementById("searchBar");

itemPanel = document.getElementById("item");

listToggle = document.getElementById("listToggle");
listToggle.checked = false;

var artifacts = document.getElementsByClassName("artifact");
var spells = document.getElementsByClassName("spell");

function clear(e){
	while(e[0]){
		e[0].parentNode.removeChild(e[0]);
	}
}

if(listToggle.checked === true){
	spellsGrid();
} else {
	artifactsGrid();
}

listToggle.addEventListener("click",function(){
	if(listToggle.checked === true){
		clear(artifacts);
		spellsGrid();
	}
	else if(listToggle.checked === false){
		clear(spells);
		artifactsGrid();
	}
});
	

iName = document.getElementById("itemName");
iRarity = document.getElementById("itemRarity");
iAtk = document.getElementById("itemAtk");
iDef = document.getElementById("itemDef");
iPwr = document.getElementById("itemPwr");
iKnwl = document.getElementById("itemKnwl");
iEffect = document.getElementById("itemEffect");

itemTypeStat = document.getElementById("itemTypeStat");
itemRarityStat = document.getElementById("itemRarityStat");

var items = [];
var spellsInfo = [];


function makeRequest(file, array){
	var requestFile = file;
	var request = new XMLHttpRequest();
	request.open('GET', requestFile);
	request.responseType = 'json';
	request.send();
	
	request.onload = function() {
		var e = request.response;
		for(var i = 0;i < e.length;i++){
			array.push(e[i]);
		}
	}
}
makeRequest("artifacts_list.json", items);
makeRequest("spells_list.json", spellsInfo);




function search(){
	var li = document.getElementsByTagName('li');
	var input = searchBar.value.toUpperCase();
	for(var j = 0; j < 120; j++){
		if(items[j].Name.toUpperCase().indexOf(input) > -1 || items[j].Effect.toUpperCase().indexOf(input) > -1){
			document.getElementById(j).style.display = "block";
		} 
		else {
			document.getElementById(j).style.display = "none";
		}
		
		if(selRarity.value != "Default" && selRarity.value != items[j].Rarity){
			document.getElementById(j).style.display = "none";
		}
		
		if(selType.value != "Default" && selType.value != items[j].Type){
			document.getElementById(j).style.display = "none";
		}
		
		if(selSpellLevel.value != "Default" && selSpellLevel.value != spellsInfo[j].Level){
			document.getElementById(j).style.display = "none";
		}
		
		if(selSpellClass.value != "Default" && selSpellClass.value != spellsInfo[j].Class){
			document.getElementById(j).style.display = "none";
		}
	}
}
			
searchBar.addEventListener("keyup", search);


function artifactsGrid(){
	
	var x = -104;
	var y = -438;
	for(var i = 0; i < 120; i++){
		artifact = document.createElement('li');
		artifact.className = "artifact";
		artifact.id = i;
		artifact.style.backgroundPosition = x + "px" + " " + y + "px";
		itemsGrid.appendChild(artifact);
		
		x -= 49;
		switch(i) {
			case 29:
				x = -6;
				y = -496;
				break;
			case 61:
				x = -6;
				y = -558;
				break;
			case 92:
				x = -6;
				y = -614;
				break;
		}
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				
				var displayName = document.createElement("h2");
				displayName.innerHTML = items[a.id].Name;
				itemPanel.appendChild(displayName);
				displayName.classList.add("displayName");
				
				if(items[a.id].Attack != "0" || items[a.id].Defense != "0" || items[a.id].Power != "0" || items[a.id].Knowledge != "0"){
					var displayAttack = document.createElement("p");
					displayAttack.innerHTML = items[a.id].Attack;
					itemPanel.appendChild(displayAttack);
					displayAttack.classList.add("displayAttack");
					
					var displayDefense = document.createElement("p");
					displayDefense.innerHTML = items[a.id].Defense;
					itemPanel.appendChild(displayDefense);
					displayDefense.classList.add("displayDefense");
					
					var displayPower = document.createElement("p");
					displayPower.innerHTML = items[a.id].Power;
					itemPanel.appendChild(displayPower);
					displayPower.classList.add("displayPower");
					
					var displayKnowledge = document.createElement("p");
					displayKnowledge.innerHTML = items[a.id].Knowledge;
					itemPanel.appendChild(displayKnowledge);
					displayKnowledge.classList.add("displayKnowledge");
				}
				
				if(items[a.id].Effect != ""){
					var displayEffect = document.createElement("p");
					displayEffect.innerHTML = items[a.id].Effect;
					itemPanel.appendChild(displayEffect);
					displayEffect.classList.add("displayEffect");
				} 
				
				var displayRarity = document.createElement("p");
				displayRarity.innerHTML = items[a.id].Rarity;
				itemPanel.appendChild(displayRarity);
				displayRarity.classList.add("displayRarity");
				
				var displayType = document.createElement("p");
				displayType.innerHTML = items[a.id].Type;
				itemPanel.appendChild(displayType);
				displayType.classList.add("displayType");
            });
			a.addEventListener('mouseout', function(){
				
				while (itemPanel.firstChild) {
					itemPanel.removeChild(itemPanel.firstChild);
				}
			});
        })(a); 		
	}	
}

function spellsGrid(){
	
	var x = -20;
	var y = 505;
	for(var i = 0; i < 70; i++){
		spell = document.createElement('li');
		spell.className = "spell";
		spell.id = i;
		spell.style.backgroundPosition = x + "px" + " " + y + "px";
		itemsGrid.appendChild(spell);
		
		x -= 83;
		switch(i) { 
			case 10:
				x = -20;
				y = 440;
				break;
			case 21:
				x = -20;
				y = 375;
				break;
			case 32:
				x = -20;
				y = 310;
				break;
			case 43:
				x = -20;
				y = 245;
				break;
			case 54:
				x = -20;
				y = 180;
				break;
			case 65:
				x = -20;
				y = 115;
				break;
		}
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				
				var displayName = document.createElement("h2");
				displayName.innerHTML = spellsInfo[a.id].Name;
				itemPanel.appendChild(displayName);
				displayName.classList.add("displayName");
				
				var displayLevel = document.createElement("p");
				displayLevel.innerHTML = spellsInfo[a.id].Level;
				itemPanel.appendChild(displayLevel);
				displayLevel.classList.add("displayLevel");
				
				var displayClass = document.createElement("p");
				displayClass.innerHTML = spellsInfo[a.id].Class;
				itemPanel.appendChild(displayClass);
				displayClass.classList.add("displayClass");
				
				var displayEffect = document.createElement("p");
				displayEffect.innerHTML = spellsInfo[a.id].Effect;
				itemPanel.appendChild(displayEffect);
				displayEffect.classList.add("displayEffect");
			});
			a.addEventListener('mouseout', function(){
				
				while (itemPanel.firstChild) {
					itemPanel.removeChild(itemPanel.firstChild);
				}
			});
        })(a); 		
	}	
}
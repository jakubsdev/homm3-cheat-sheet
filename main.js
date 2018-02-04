var itemsGrid = document.getElementById("itemsGrid");
var searchBar = document.getElementById("searchBar");
var itemPanel = document.getElementById("item");
var listToggle = document.getElementById("listToggle");
var artifacts = document.getElementsByClassName("artifact");
var spells = document.getElementsByClassName("spell");
var switchState = document.getElementById("switchState");
var toggle;
var searchIndex = 0;

var artifactsList = [];
var spellsList = [];

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
makeRequest("artifacts_list.json", artifactsList);
makeRequest("spells_list.json", spellsList);

(toggle = function() {
	if(listToggle.checked === true){
		switchState.innerHTML = "Spells"
		searchIndex = 70;
		clear(artifacts);
		spellsGrid();
	}
	else if(listToggle.checked === false){
		switchState.innerHTML = "Artifacts"
		searchIndex = 120;
		clear(spells);
		artifactsGrid();
	}
})();

listToggle.addEventListener("click", toggle);

function clear(e){
	while(e[0]){
		e[0].parentNode.removeChild(e[0]);
	}
}

function search(){
	var li = document.getElementsByTagName('li');
	var input = searchBar.value.toUpperCase();
	var x;
	if(listToggle.checked === true) {
		x = spellsList;	
	}
	else {
		x = artifactsList;
	}
	for(var i = 0; i < searchIndex; i++){
		if(x[i].Name.toUpperCase().indexOf(input) > -1 || x[i].Effect.toUpperCase().indexOf(input) > -1){
			document.getElementById(i).style.display = "block";
		} 
		else {
			document.getElementById(i).style.display = "none";
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
				displayName.innerHTML = artifactsList[a.id].Name;
				itemPanel.appendChild(displayName);
				displayName.classList.add("displayName");
				
				if(artifactsList[a.id].Attack != "0" || artifactsList[a.id].Defense != "0" || artifactsList[a.id].Power != "0" || artifactsList[a.id].Knowledge != "0"){
					var displayAttack = document.createElement("p");
					displayAttack.innerHTML = artifactsList[a.id].Attack;
					itemPanel.appendChild(displayAttack);
					displayAttack.classList.add("displayAttack");
					
					var displayDefense = document.createElement("p");
					displayDefense.innerHTML = artifactsList[a.id].Defense;
					itemPanel.appendChild(displayDefense);
					displayDefense.classList.add("displayDefense");
					
					var displayPower = document.createElement("p");
					displayPower.innerHTML = artifactsList[a.id].Power;
					itemPanel.appendChild(displayPower);
					displayPower.classList.add("displayPower");
					
					var displayKnowledge = document.createElement("p");
					displayKnowledge.innerHTML = artifactsList[a.id].Knowledge;
					itemPanel.appendChild(displayKnowledge);
					displayKnowledge.classList.add("displayKnowledge");
				}
				
				if(artifactsList[a.id].Effect != ""){
					var displayEffect = document.createElement("p");
					displayEffect.innerHTML = artifactsList[a.id].Effect;
					itemPanel.appendChild(displayEffect);
					displayEffect.classList.add("displayEffect");
				} 
				
				var displayRarity = document.createElement("p");
				displayRarity.innerHTML = artifactsList[a.id].Rarity;
				itemPanel.appendChild(displayRarity);
				displayRarity.classList.add("displayRarity");
				
				var displayType = document.createElement("p");
				displayType.innerHTML = artifactsList[a.id].Type;
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
				displayName.innerHTML = spellsList[a.id].Name;
				itemPanel.appendChild(displayName);
				displayName.classList.add("displayName");
				
				var displayLevel = document.createElement("p");
				displayLevel.innerHTML = spellsList[a.id].Level;
				itemPanel.appendChild(displayLevel);
				displayLevel.classList.add("displayLevel");
				
				var displayClass = document.createElement("p");
				displayClass.innerHTML = spellsList[a.id].Class;
				itemPanel.appendChild(displayClass);
				displayClass.classList.add("displayClass");
				
				var displayEffect = document.createElement("p");
				displayEffect.innerHTML = spellsList[a.id].Effect;
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

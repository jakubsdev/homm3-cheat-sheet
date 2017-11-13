artifactsGrid = document.getElementById("artifactsGrid");

searchBar = document.getElementById("searchBar");

selRarity = document.getElementById("selRarity");
selRarity.addEventListener("change", search);


iName = document.getElementById("itemName");
iRarity = document.getElementById("itemRarity");
iAtk = document.getElementById("itemAtk");
iDef = document.getElementById("itemDef");
iPwr = document.getElementById("itemPwr");
iKnwl = document.getElementById("itemKnwl");
iDescription = document.getElementById("itemDescription");

var items = [];

function add(jsonObj){
  for(var i = 0;i < jsonObj.length;i++){
	  items.push(jsonObj[i]);
  }
}


var requestFile = "artifacts_list.txt";
var request = new XMLHttpRequest();
request.open('GET', requestFile);
request.responseType = 'json';
request.send();

request.onload = function() {
  var artifacts = request.response;
  add(artifacts);
}

function search(){
	var li = document.getElementsByTagName('li');
	var input = searchBar.value.toUpperCase();
	for(var j = 0; j < 5; j++){
		if(items[j].Name.toUpperCase().indexOf(input) > -1 || items[j].Description.toUpperCase().indexOf(input) > -1){
			document.getElementById(j).style.display = "block";
		} 
		else {
			document.getElementById(j).style.display = "none";
		}
		
		switch(selRarity.value){
			case "minor":
				if(items[j].Rarity != "Minor"){
					document.getElementById(j).style.display = "none";
				}
			default:
				break;
		}
	}
}
			
searchBar.addEventListener("keyup", search);


var x = -104;
var y = -438;

function artifacts(){
	for(var i = 0; i < 5; i++){
		item = document.createElement('li');
		item.className = "item";
		item.id = i;
		item.style.backgroundPosition = x + "px" + " " + y + "px";
		artifactsGrid.appendChild(item);
		x -= 49;
		
		
		a = document.getElementById(i);
        (function(a) {
            a.addEventListener('mouseover', function(){
				itemName.innerHTML = items[a.id].Name;
				itemDescription.innerHTML = items[a.id].Description;
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemDescription.innerHTML = "";
			});
			
        })(a); 
		
		/*
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
		*/
		
/*		a = document.getElementById('artifact'+i);
        (function (a) {
            a.addEventListener('mouseover', function(){
				var name = "";
				var rarity = "";
				var atk = "";
				var def = "";
				var pwr = "";
				var knwl = "";
				var desc = "";				
                switch(a.id){
case "artifact0":
	name = "Centaur's Axe";
	rarity = "Treasure";
	atk = "2";
	def = "0";
	pwr = "0";
	knwl = "0";
	desc = "This right handed weapon increases your Attack skill by +2.";
	break;
case "artifact1":
	name = "Blackshard of the Dead Knight";
	rarity = "Minor";
	atk = "3";
	def = "0";
	pwr = "0";
	knwl = "0";
	desc = "This right handed weapon increases your Attack skill by +3.";
	break;
case "artifact2":
    name = "Greater Gnoll's Flail";
    rarity = "Minor";
    atk = "4";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This right handed weapon increases your Attack skill by +4.";
    break;
case "artifact3":
    name = "Ogre's Club of Havoc";
    rarity = "Major";
    atk = "5";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This right handed weapon increases your Attack skill by +5.";
    break;
case "artifact4":
    name = "Sword of Hellfire";
    rarity = "Major";
    atk = "6";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This right handed weapon increases your Attack skill by +6.";
    break;
case "artifact5":
    name = "Titan's Gladius";
    rarity = "Relic";
    atk = "12";
    def = "-3";
    pwr = "0";
    knwl = "0";
    desc = "Held with the right hand, this massive relic increases your Attack skill by +12, but reduces your Defense skill by -3.";
    break;
case "artifact6":
    name = "Shield of the Dwarven Lords";
    rarity = "Treasure";
    atk = "0";
    def = "2";
    pwr = "0";
    knwl = "0";
    desc = "This left handed item increases your Defense skill by +2.";
    break;
case "artifact7":
    name = "Shield of the Yawning Dead";
    rarity = "Minor";
    atk = "0";
    def = "3";
    pwr = "0";
    knwl = "0";
    desc = "This left handed item increases your Defense skill by +3.";
    break;
case "artifact8":
    name = "Buckler of the Gnoll King";
    rarity = "Minor";
    atk = "0";
    def = "4";
    pwr = "0";
    knwl = "0";
    desc = "This left handed item increases your Defense skill by +4.";
    break;
case "artifact9":
    name = "Targ of the Rampaging Ogre";
    rarity = "Major";
    atk = "0";
    def = "5";
    pwr = "0";
    knwl = "0";
    desc = "This left handed item increases your Defense skill by +5.";
    break;
case "artifact10":
    name = "Shield of the Damned";
    rarity = "Major";
    atk = "0";
    def = "6";
    pwr = "0";
    knwl = "0";
    desc = "This left handed item increases your Defense skill by +6.";
    break;
case "artifact11":
    name = "Sentinel's Shield";
    rarity = "Relic";
    atk = "-3";
    def = "12";
    pwr = "0";
    knwl = "0";
    desc = "Held with the left hand, this relic increases your Defense skill by +12, but reduces your Attack skill by -3.";
    break;
case "artifact12":
    name = "Helm of the Alabaster Unicorn";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "1";
    desc = "Worn on the head, this item increases your Knowledge skill by +1.";
    break;
case "artifact13":
    name = "Skull Helmet";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "2";
    desc = "Worn on the head, this item increases your Knowledge skill by +2.";
    break;
case "artifact14":
    name = "Helm of Chaos";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "3";
    desc = "Worn on the head, this item increases your Knowledge skill by +3.";
    break;
case "artifact15":
    name = "Crown of the Supreme Magi";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "4";
    desc = "Worn on the head, this item increases your Knowledge skill by +4.";
    break;
case "artifact16":
    name = "Hellstorm Helmet";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "5";
    desc = "Worn on the head, this item increases your Knowledge skill by +5.";
    break;
case "artifact17":
    name = "Thunder Helmet";
    rarity = "Relic";
    atk = "0";
    def = "0";
    pwr = "-2";
    knwl = "10";
    desc = "When worn, this relic increases your Knowledge skill by +10, but reduces your Power skill by -2.";
    break;
case "artifact18":
    name = "Breastplate of Petrified Wood";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "1";
    knwl = "0";
    desc = "Worn on the torso, this item increases your Power skill by +1.";
    break;
case "artifact19":
    name = "Rib Cage";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "2";
    knwl = "0";
    desc = "Worn on the torso, this item increases your Power skill by +2.";
    break;
case "artifact20":
    name = "Scales of the Greater Basilisk";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "3";
    knwl = "0";
    desc = "Worn on the torso, this item increases your Power skill by +3.";
    break;
case "artifact21":
    name = "Tunic of the Cyclops King";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "4";
    knwl = "0";
    desc = "Worn on the torso, this item increases your Power skill by +4.";
    break;
case "artifact22":
    name = "Breastplate of Brimstone";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "5";
    knwl = "0";
    desc = "Worn on the torso, this item increases your Power skill by +5.";
    break;
case "artifact23":
    name = "Titan's Cuirass";
    rarity = "Relic";
    atk = "0";
    def = "0";
    pwr = "10";
    knwl = "-2";
    desc = "When worn, this massive relic increases your Power skill by +10, but reduces your Knowledge skill by -2.";
    break;
case "artifact24":
    name = "Armor of Wonder";
    rarity = "Minor";
    atk = "1";
    def = "1";
    pwr = "1";
    knwl = "1";
    desc = "Worn on the torso, the Armor of Wonder increases all four primary skills by +1.";
    break;
case "artifact25":
    name = "Sandals of the Saint";
    rarity = "Relic";
    atk = "2";
    def = "2";
    pwr = "2";
    knwl = "2";
    desc = "Worn on the feet, the Sandals of the Saint increase all four primary skills by +2.";
    break;
case "artifact26":
    name = "Celestial Necklace of Bliss";
    rarity = "Relic";
    atk = "3";
    def = "3";
    pwr = "3";
    knwl = "3";
    desc = "Worn about the neck, the Celestial Necklace of Bliss increases all four primary skills by +3.";
    break;
case "artifact27":
    name = "Lion's Shield of Courage";
    rarity = "Relic";
    atk = "4";
    def = "4";
    pwr = "4";
    knwl = "4";
    desc = "Held with the left hand, the Lion's Shield of Courage increases all four primary skills by +4.";
    break;
case "artifact28":
    name = "Sword of Judgement";
    rarity = "Relic";
    atk = "5";
    def = "5";
    pwr = "5";
    knwl = "5";
    desc = "Held with the right hand, the Sword of Judgement increases all four primary skills by +5.";
    break;
case "artifact29":
    name = "Helm of Heavenly Enlightenment";
    rarity = "Relic";
    atk = "6";
    def = "6";
    pwr = "6";
    knwl = "6";
    desc = "Worn on the head, the Helm of Heavenly Enlightenment increases all four primary skills by +6.";
    break;
case "artifact30":
    name = "Quiet Eye of the Dragon";
    rarity = "Treasure";
    atk = "1";
    def = "1";
    pwr = "0";
    knwl = "0";
    desc = "Worn on a finger, this item increases your Attack and Defense skills by +1.";
    break;
case "artifact31":
    name = "Red Dragon Flame Tongue";
    rarity = "Minor";
    atk = "2";
    def = "2";
    pwr = "0";
    knwl = "0";
    desc = "Held with the right hand, this item increases your Attack and Defense skills by +2.";
    break;
case "artifact32":
    name = "Dragon Scale Shield";
    rarity = "Major";
    atk = "3";
    def = "3";
    pwr = "0";
    knwl = "0";
    desc = "Held with the left hand, this item increases your Attack and Defense skills by +3.";
    break;
case "artifact33":
    name = "Dragon Scale Armor";
    rarity = "Relic";
    atk = "4";
    def = "4";
    pwr = "0";
    knwl = "0";
    desc = "Worn on a torso, this item increases your Attack and Defense skills by +4.";
    break;
case "artifact34":
    name = "Dragonbone Greaves";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "1";
    knwl = "1";
    desc = "Worn on the feet, this item increases your Knowledge and Power skills by +1.";
    break;
case "artifact35":
    name = "Dragon Wing Tabard";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "2";
    knwl = "2";
    desc = "Worn on the shoulders, this item increases your Knowledge and Power skills by +2.";
    break;
case "artifact36":
    name = "Necklace of Dragonteeth";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "3";
    knwl = "3";
    desc = "Worn about the neck, this item increases your Knowledge and Power skills by +3.";
    break;
case "artifact37":
    name = "Crown of Dragontooth";
    rarity = "Relic";
    atk = "0";
    def = "0";
    pwr = "4";
    knwl = "4";
    desc = "Worn on the head, this item increases your Knowledge and Power skills by +4.";
    break;
case "artifact38":
    name = "Still Eye of the Dragon";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn on the finger, this item increases your Luck and Morale by +1.";
    break;
case "artifact39":
    name = "Clover of Fortune";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Clover of Fortune increases your Luck by +1.";
    break;
case "artifact40":
    name = "Cards of Prophecy";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Cards of Prophecy increase your Luck by +1.";
    break;
case "artifact41":
    name = "Ladybird of Luck";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Ladybird of Luck increases your Luck by +1.";
    break;
case "artifact42":
    name = "Badge of Courage";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Badge of Courage increases your Morale by +1 and confers Mind spell immunity.";
    break;
case "artifact43":
    name = "Crest of Valor";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Crest of Valor increases your Morale by +1.";
    break;
case "artifact44":
    name = "Glyph of Gallantry";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Glyph of Gallantry increases your Morale by +1.";
    break;
case "artifact45":
    name = "Speculum";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Speculum increases your Scouting radius by +1.";
    break;
case "artifact46":
    name = "Spyglass";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "The Spyglass increases your Scouting radius by +1.";
    break;
case "artifact47":
    name = "Amulet of the Undertaker";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the neck, this amulet increases your Necromancy skill by 5%.";
    break;
case "artifact48":
    name = "Vampire's Cowl";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the shoulders, this cowl increases your Necromancy skill by 10%.";
    break;
case "artifact49":
    name = "Dead Man's Boots";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn on the feet, these boots increase your Necromancy skill by 15%.";
    break;
case "artifact50":
    name = "Garniture of Interference";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the neck, this item increases your Magic Resistance by 5%.";
    break;
case "artifact51":
    name = "Surcoat of Counterpoise";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the shoulders, this item increases your Magic Resistance by 10%.";
    break;
case "artifact52":
    name = "Boots of Polarity";
    rarity = "Relic";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn on the feet, these boots increase your Magic Resistance by 15%.";
    break;
case "artifact53":
    name = "Bow of Elven Cherrywood";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This bow increases your Archery skill by 5%.";
    break;
case "artifact54":
    name = "Bowstring of the Unicorn's Mane";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This bowstring increases your Archery skill by 10%.";
    break;
case "artifact55":
    name = "Angel Feather Arrows";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "These arrows increase your Archery skill by 15%.";
    break;
case "artifact56":
    name = "Bird of Perception";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "his figurine increases your eagle eye skill by 5%.";
    break;
case "artifact57":
    name = "Stoic Watchman";
    rarity = "Treasure";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This figurine increases your eagle eye skill by 10%.";
    break;
case "artifact58":
    name = "Emblem of Cognizance";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "This item increases your eagle eye skill by 15%.";
    break;
case "artifact59":
    name = "Statesman's Medal";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the neck, the Statesman's Medal reduces the cost of surrendering.";
    break;
case "artifact60":
    name = "Diplomat's Ring";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn on the finger, the Diplomat's Ring reduces the cost of surrendering.";
    break;
case "artifact61":
    name = "Ambassador's Sash";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn about the shoulders, the Ambassador's Sash reduces the cost of surrendering.";
    break;
case "artifact62":
    name = "Ring of the Wayfarer";
    rarity = "Major";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "When placed on the finger, this ring increases the combat speed of all your units by +1.";
    break;
case "artifact63":
    name = "Equestrian's Gloves";
    rarity = "Minor";
    atk = "0";
    def = "0";
    pwr = "0";
    knwl = "0";
    desc = "Worn on the hands, these gloves increase your hero's movement rate over land.";
    break;
				}
				itemName.innerHTML = name;
				itemRarity.innerHTML = "Rarity: " + rarity;
				itemAtk.innerHTML = "A: " + atk;
				itemDef.innerHTML = "D: " + def;
				itemPwr.innerHTML = "P: " + pwr;
				itemKnwl.innerHTML = "K: " + knwl;
				itemDescription.innerHTML = desc;
            });
			a.addEventListener('mouseout', function(){
				itemName.innerHTML = "";
				itemRarity.innerHTML = "";
				itemAtk.innerHTML = "";
				itemDef.innerHTML = "";
				itemPwr.innerHTML = "";
				itemKnwl.innerHTML = "";
				itemDescription.innerHTML = "";
			});
        })(a); */
	}	
}
artifacts();
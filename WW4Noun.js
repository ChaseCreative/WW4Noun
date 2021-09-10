

var points = 0;
var attempts = 0;
var timeLeft = 20;

var countdown = setInterval(countDownTimer,1000);

function countDownTimer(){
   console.log(nounArray[0][0]);
   var latin = nounArray[0][0];

   document.getElementById("flex1c").style.color = "red";
   document.getElementById("flex1c").innerHTML = timeleft;
   timeleft -= 1;
   if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("flex1c").innerHTML = "Finis!";
					document.getElementById("flex1c").style.color = "black";

          document.getElementById("flexA").disabled = true;
          document.getElementById("flexB").disabled = true;
          document.getElementById("flexC").disabled = true;
          document.getElementById("flexD").disabled = true;
          document.getElementById("flex1b").onclick = function(){startGame()};
          document.getElementById("flex1b").innerHTML = "Ludamus Iterum!";
          document.getElementById("flex1b").disabled = false;
          attempts++;
          document.getElementById("flex1a").innerHTML = points  + "/" + attempts;


    if (timeleft <= 0 && document.getElementById("flexA").innerHTML == nounArray[0][1]){
            document.getElementById("flexA").style.backgroundColor = "red";
            document.getElementById("flexA").innerHTML = latin.italics() + " means: " + nounArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexB").innerHTML == nounArray[0][1]){
            document.getElementById("flexB").style.backgroundColor = "red";
            document.getElementById("flexB").innerHTML = latin.italics() + " means: " + nounArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexC").innerHTML == nounArray[0][1]){
      document.getElementById("flexC").style.backgroundColor = "red";
      document.getElementById("flexC").innerHTML = latin.italics() + " means: " + nounArray[0][1];
      }

    if(timeleft <= 0 && document.getElementById("flexD").innerHTML == nounArray[0][1]){
            document.getElementById("flexD").style.backgroundColor = "red";
            document.getElementById("flexD").innerHTML = latin.italics() + " means: " + nounArray[0][1];
      }
  }
}


//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("flex1c").innerHTML = "Timer";
  timeleft = 20;

}

stopTimer();


//var startBtn = document.getElementById("flex1b");
//set up click event
//startBtn.addEventListener("click",startGame);

function myFunc(){
  document.getElementById("flexA").innerHTML = "Wrong!";
}

//INSERT NOUN FORMS HERE.
  //Make sure the macron is dropped from 2nd declension genitive singular!

const nounList = [["bāsium", "bāsii", "n", "kiss", "kisses"],["bellum", "belli", "n", "war", "wars"],["cōnsilium", "cōnsilii", "n", "plan", "plans"],["cura", "curae", "f", "care", "anxieties"],["dōnum", "dōni", "n", "gift", "gifts"],["exitium", "exitii", "n", "destruction", "ruins"],["magistra", "magistrae", "f", "female teacher","female teachers"],["magister", "magistri", "m", "teacher", "teachers"],["officium", "officii", "n", "duty", "duties"],["perīculum", "perīculi", "n", "danger", "dangers"],["remedium", "remedii", "n", "cure", "cures"],["mora", "morae", "f", "delay", "delays"],["oculus", "oculi", "m", "eye", "eyes"]];

  // rest of ch. 4 vocab: ["nihil","nothing"],["bellus, bella, bellum","pretty, handsome, charming"],["bonus, bona, bonum","good, kind"],["humānus, humāna, humānum","human, pertaining to man; humane, kind, refined, cultivated"],["malus, mala, malum","bad, wicked, evil"],["parvus, parva, parvum","small, little"],["stultus, stulta, stultum","foolish"],["stultum, stultī, n.","a fool"],["vērus, vēra, vērum","true, real, proper"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist; please"],["sum, esse, fuī, futurum","to be, exist"]


  //let adjectiveList = [["antīquus", "antīqua", "antīquum","antīqu","ancient","1"],["magnus", "magna", "magnum","magn","large","1"],["meus", "mea", "meum","me","my","1"],["multus", "multa", "multum","mult","much","1"],["tuus", "tua", "tuum","tu","your","1"],["avārus", "avāra", "avārum","avār","greedy","1"],["Rōmānus", "Rōmāna", "Rōmānum","Rōmān","Roman","1"],["paucī"", "paucae", "pauca","pauc","few","1"],["multi", "multae", "multa","mult","many","1"]];

//let prepAblList = [["sine","without"],["de","about"],["in","on"],["de","down from"],["in","in"]];
//let conjunctionList = [["et","and"],["et ... et","both ... and"],["sed","but"]];
//let adverbList = [["saepe","often"],["hodiē","today"],["semper","always"]];
//let verbList = [["habeō", "habēre", "habui", "habitus","have","having","had","held"],["satiō", "satiare", "satiāvi", "satiātus","satisfy","satisfying","satisfied","satisfied"]];

/*
  //,["avārus", "avāra", "avārum","greedy"],["Rōmānus", "Rōmāna", "Rōmānum","Roman"],["paucī"", "paucae", "pauca","few"],["de","about"],["de","down from"],["in","in"],["in","on"],["hodiē","today"],["semper","always"],["habeō", "habēre", "habuī"", "habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]

  //[["ager, agrī, m.","field, farm"],["amīcus, amīcī, m.","friend"],["fīlius, fīliī, m.","son"],["numerus, numerī, m.","number"],["populus, populī, m.","the people, a people, a nation"],["amīca, amīcae, f.","friend"],["agricola, agricolae, m.","farmer"],["fēmina, fēminae, f.","woman"],["fīlia, fīliae, f.","daughter"],["sapientia, sapientiae, f.","wisdom"],["puer, puerī, m.","boy"],["vir, virī, m.","man, hero"],["avārus, avāra, avārum","greedy, avaricious"],["Rōmānus, Rōmāna, Rōmānum","Roman"],["paucī, paucae, pauca","few, a few"],["de (+ ABL.)","down from. from; concerning, about"],["in (+ ABL.)","in, on"],["hodiē","today"],["semper","always"],["habeō, habēre, habuī, habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]];


  //[["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["dominus","domini", "m", "master", "masters"],["puer","pueri", "m", "boy", "boys"],["magister","magistri", "m", "teacher", "teachers"],["amicus","amici", "m", "friend", "friends"],["coquus","coqui", "m", "cook", "cooks"],["filius","filii", "m","son","sons"],["servus","servi","m","slave","slaves"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["corpus","corporis", "n","body","bodies"],["vulnus","vulneris", "n","wound","wounds"],["manus","manus", "f","hand","hands"],["senatus","senatus", "m","senate","senates"],["dies","diei", "m","day","days"],["res","rei", "f","thing","things"]];


    //[["fama", "famae", "f", "rumor", "rumors"],["forma", "formae", "f", "beauty", "forms"],["fortuna", "fortunae", "f", "luck", "fortunes"]];

    //,["īra", "īrae", "f", "anger", "angers"],["nauta", "nautae", "m", "sailor", "sailors"],["patria", "patriae", "f", "fatherland", "native lands"],["pecūnia", "pecūniae", "f", "money", "monies"],["philosophia", "philosophiae", "f", "philosophy", "philosophies"],["poēta", "poētae", "m", "poet", "poets"],["porta", "portae", "f", "gate", "gates"],["puella", "puellae", "f", "girl", "girls"],["rosa", "rosae", "f", "rose", "roses"],["sententia", "sententiae", "f", "opinion", "opinions"],["vita", "vitae", "f", "life", "lives"]];

//var adjectives = ["antīquus, antīqua, antīquum","ancient, old-time"],["magnus, magna, magnum","large, great; important"],["meus, mea, meum","my"],["multus, multa, multum","much, many"],["tuus, tua, tuum","your"]]



//[["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["dominus","domini", "m", "master", "masters"],["puer","pueri", "m", "boy", "boys"],["magister","magistri", "m", "teacher", "teachers"],["amicus","amici", "m", "friend", "friends"],["coquus","coqui", "m", "cook", "cooks"],["filius","filii", "m","son","sons"],["servus","servi","m","slave","slaves"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["corpus","corporis", "n","body","bodies"],["vulnus","vulneris", "n","wound","wounds"],["manus","manus", "f","hand","hands"],["senatus","senatus", "m","senate","senates"],["dies","diei", "m","day","days"],["res","rei", "f","thing","things"]];
//,["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["corpus","corporis", "n","body","bodies"],["vulnus","vulneris", "n","wound","wound"]

[["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["dominus","domini", "m", "master", "masters"],["amicus","amici", "m", "friend", "friends"],["coquus","coqui", "m", "cook", "cooks"],["filius","filii", "m","son","sons"],["servus","servi","m","slave","slaves"],["frigidarium","frigidarii", "n", "cold room", "cold rooms"],["caldarium","caldarii", "n", "hot room", "hot rooms"],["tepidarium","tepidarii", "n", "warm room", "warm rooms"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["vulnus","vulneris", "n","wound","wound"],["senatus","senatus", "m","senate","senates"],["res","rei", "f","thing","things"]];

*/

class Noun {
  constructor(nominative, genitive, gender, singMeaning, plMeaning){
    this.nominative = nominative;
    this.genitive = genitive;
    this.gender = gender;
    this.singMeaning = singMeaning;
    this.plMeaning = plMeaning;
  }

  //NOMINATIVE

  get nominativeSing(){
    return this.singNominative();
  }

  singNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs" + " (Nominative)";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative + " (Nominative)";
        } else {
          return this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get nominativeSingTrans(){
    return this.singNominativeTrans();
  }

  singNominativeTrans(){
    return "the " + this.singMeaning + " (Subject)";
  }

    //GENITIVE

  get genitiveSing(){
      return this.singGenitive();
  }

  singGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive + " (Genitive)";
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ēī" + " (Genitive)";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ī"  + " (Genitive)";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ūs" + " (Genitive)";
    }
  }

  get genitiveSingTrans(){
      return this.singGenitiveTrans();
  }

  singGenitiveTrans(){
      return " of the " + this.singMeaning;
  }

    //DATIVE

  get dativeSing(){
      return this.singDative();
  }

  singDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive + " (Dative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēī" + " (Dative)";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō" + " (Dative)";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ī";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūi";
    }
  }

  get dativeSingTrans(){
    return this.singDativeTrans();
  }

  singDativeTrans(){
    return " to/for the " + this.singMeaning;
  }

  //ACCUSATIVE

  get accusativeSing(){
    return this.singAccusative();
  }

  singAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "em";
    } else if (this.gender == "n" && this.genitive.slice(-1,) == "i"){
      return this.nominative + " (Accusative)";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "um";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative + " (Accusative)";
        } else {
          return this.genitive.slice(0,-2) + "em";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "um";
    }
  }

  get accusativeSingTrans(){
    return this.singAccusativeTrans();
  }

  singAccusativeTrans(){
      return " the " + this.singMeaning + " (Direct Object)";
  }

  //ablative

  get ablativeSing(){
    return this.singAblative();
  }

  singAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ē";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō" + " (Ablative)";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "e";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ū";
    }
  }

  get ablativeSingTrans(){
    return this.singAblativeTrans();
  }

  singAblativeTrans(){
    return " by/with/in/from the " + this.singMeaning;
  }

  //Vocative
  get vocativeSing(){
    return this.singVocative();
  }

  singVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative + " (Vocative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs" + " (Vocative)";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.nominative + " (Vocative)";
      } else if (this.gender == "m"){
          if (this.nominative.slice(-3,) == "ius"){
            return this.genitive.slice(0,-2);
          } else if (this.nominative.slice(-2,) == "us"){
            return this.genitive.slice(0,-1) + "e";
          } else {
            return this.nominative + " (Vocative)";
          }
      }
    } else if (this.genitive.slice(-2,) == "is"){
        return this.nominative + " (Vocative)";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative + " (Vocative)";
    }
  }

  get vocativeSingTrans(){
    return this.singVocativeTrans();
  }

  singVocativeTrans(){
      let vocative = this.singMeaning;
      return vocative[0] + vocative.substring(1) + "!";
    }


  //NOMINATIVE PLURAL

  get nominativePl(){
    return this.plNominative();
  }

  plNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae" + " (Nominative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs" + " (Nominative Plural)";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a" + " (Nominative)";
      } else {
        return this.genitive.slice(0,-1) + "ī" + " (Nominative)";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a" + " (Nominative)";
        } else {
          return this.genitive.slice(0,-2) + "ēs" + " (Nominative)";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs" + " (Nominative)";
    }
  }

  get nominativePlTrans(){
    return this.plNominativeTrans();
  }

  plNominativeTrans(){
    return "the " + this.plMeaning + " (Subject)";
  }

    //GENITIVE

  get genitivePl(){
      return this.plGenitive();
  }

  plGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ērum";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ōrum";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive.slice(0,-2) + "um"
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ōrum";
    }
  }

  get genitivePlTrans(){
      return this.plGenitiveTrans();
  }

  plGenitiveTrans(){
      return " of the " + this.plMeaning;
  }

    //DATIVE

  get dativePl(){
      return this.plDative();
  }

  plDative(){
    if (this.genitive == "fīliae"){
      return "fīliābus";
    } else if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs" + " (Dative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus" + " (Dative)";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs" + " (Dative)";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus" + " (Dative)";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus" + " (Dative)";
    }
  }

  get dativePlTrans(){
    return this.plDativeTrans();
  }

  plDativeTrans(){
    return " to/for the " + this.plMeaning;
  }

  //ACCUSATIVE

  get accusativePl(){
    return this.plAccusative();
  }

  plAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs" + " (Accusative Plural)";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a" + " (Accusative)";
      } else {
        return this.genitive.slice(0,-1) + "ōs";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a" + " (Accusative)";
        } else {
          return this.genitive.slice(0,-2) + "ēs" + " (Accusative)";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs" + " (Accusative)";
    }
  }

  get accusativePlTrans(){
    return this.plAccusativeTrans();
  }

  plAccusativeTrans(){
      return " the " + this.plMeaning + " (Direct Object)";
  }

  //ablative

  get ablativePl(){
    return this.plAblative();
  }

  plAblative(){
    if (this.genitive == "fīliae"){
      return "fīliābus";
    } else if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs" + " (Ablative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus" + " (Ablative)";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs" + " (Ablative)";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus" + " (Ablative)";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus" + " (Ablative)";
    }
  }

  get ablativePlTrans(){
    return this.plAblativeTrans();
  }

  plAblativeTrans(){
    return " by/with/in/from the " + this.plMeaning;
  }

  //Vocative Plural

  get vocativePl(){
    return this.plVocative();
  }

  plVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae" + " (Vocative)";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs" + " (Vocative Plural)";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a" + " (Vocative)";
      } else {
        return this.genitive.slice(0,-1) + "ī" + " (Vocative)";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a" + " (Vocative)";
        } else {
          return this.genitive.slice(0,-2) + "ēs" + " (Vocative)";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs" + " (Vocative)";
    }
  }

  get vocativePlTrans(){
    return this.plVocativeTrans();
  }

  plVocativeTrans(){
    let vocative = this.plMeaning;
    return vocative[0] + vocative.substring(1) + "!";
  }

}








// Generic function to return a shuffled array:
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }

//this randomizes the nounList data
var rni = Math.floor(Math.random() * nounList.length);
var myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

//this creates an array of the Latin noun cases and their translations
var nounArray = [[myNoun.nominativeSing,myNoun.nominativeSingTrans],[myNoun.genitiveSing,myNoun.genitiveSingTrans],[myNoun.dativeSing,myNoun.dativeSingTrans],[myNoun.accusativeSing,myNoun.accusativeSingTrans],[myNoun.ablativeSing,myNoun.ablativeSingTrans],[myNoun.vocativeSing,myNoun.vocativeSingTrans],[myNoun.nominativePl,myNoun.nominativePlTrans],[myNoun.genitivePl,myNoun.genitivePlTrans],[myNoun.dativePl,myNoun.dativePlTrans],[myNoun.accusativePl,myNoun.accusativePlTrans],[myNoun.ablativePl,myNoun.ablativePlTrans],[myNoun.vocativePl,myNoun.vocativePlTrans]];
//var ni = Math.floor(Math.random() * nounArray.length);


//this shuffles the order of the nouns
shuffle(nounArray);



//This randomizes the order of the buttons
var flex = ["flexA","flexB","flexC","flexD"];
var flexIndx = Math.floor(Math.random() * flex.length);

shuffle(flex);

function reset(){

  rni = Math.floor(Math.random() * nounList.length);
  myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

  nounArray = [[myNoun.nominativeSing,myNoun.nominativeSingTrans],[myNoun.genitiveSing,myNoun.genitiveSingTrans],[myNoun.dativeSing,myNoun.dativeSingTrans],[myNoun.accusativeSing,myNoun.accusativeSingTrans],[myNoun.ablativeSing,myNoun.ablativeSingTrans],[myNoun.vocativeSing,myNoun.vocativeSingTrans],[myNoun.nominativePl,myNoun.nominativePlTrans],[myNoun.genitivePl,myNoun.genitivePlTrans],[myNoun.dativePl,myNoun.dativePlTrans],[myNoun.accusativePl,myNoun.accusativePlTrans],[myNoun.ablativePl,myNoun.ablativePlTrans],[myNoun.vocativePl,myNoun.vocativePlTrans]];
  //ni = Math.floor(Math.random() * nounArray.length);




  shuffle(nounArray);

  flex = ["flexA","flexB","flexC","flexD"];
  flexIndx = Math.floor(Math.random() * flex.length);

  shuffle(flex);
  stopTimer();
  timer = 20;
  document.getElementById("flex1c").innerHTML =  "Timer"
}

function startGame(){



  reset();

  countDownTimer();
  countdown = setInterval(countDownTimer,1000);

  document.getElementById("flex1b").disabled = true;

  document.getElementById("flexA").style.display = "block";
  document.getElementById("flexB").style.display = "block";
  document.getElementById("flexC").style.display = "block";
  document.getElementById("flexD").style.display = "block";

  document.getElementById("flexA").disabled = false;
  document.getElementById("flexB").disabled = false;
  document.getElementById("flexC").disabled = false;
  document.getElementById("flexD").disabled = false;

  document.getElementById("flexA").style.backgroundColor = "#008CBA";
  document.getElementById("flexB").style.backgroundColor = "#008CBA";
  document.getElementById("flexC").style.backgroundColor = "#008CBA";
  document.getElementById("flexD").style.backgroundColor = "#008CBA";

  console.log(myNoun.nominativeSing);
  console.log(myNoun.genitiveSing);
  console.log(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4])
  document.getElementById("flex1b").innerHTML = nounArray[0][0];
  document.getElementById(flex[0]).innerHTML = nounArray[0][1];
  document.getElementById(flex[1]).innerHTML = nounArray[1][1];
  document.getElementById(flex[2]).innerHTML = nounArray[2][1];
  document.getElementById(flex[3]).innerHTML = nounArray[3][1];
}

function answerFlexA(){

  if (document.getElementById("flexA").innerHTML == nounArray[0][1]){

    var latin = nounArray[0][0];
    document.getElementById("flexA").innerHTML = "Bene!!! " + latin.italics() + " means: " + nounArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "green";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexA").style.backgroundColor = "red"
  document.getElementById("flexA").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;

  }
}

function answerFlexB(){

  if (document.getElementById("flexB").innerHTML == nounArray[0][1]){


    var latin = nounArray[0][0];
    document.getElementById("flexB").innerHTML = "Optime!!! " + latin.italics() + " means: " + nounArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "green";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexB").style.backgroundColor = "red"
  document.getElementById("flexB").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexC(){

  if (document.getElementById("flexC").innerHTML == nounArray[0][1]){

    var latin = nounArray[0][0];
    document.getElementById("flexC").innerHTML = "Bene!!! " + latin.italics() + " means: " + nounArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "green";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexC").style.backgroundColor = "red"
  document.getElementById("flexC").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexD(){

  if (document.getElementById("flexD").innerHTML == nounArray[0][1]){

    var latin = nounArray[0][0];
    document.getElementById("flexD").innerHTML = "Optime!!! " + latin.italics() + " means: " + nounArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "green";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();
  } else {

  document.getElementById("flexD").style.backgroundColor = "red"
  document.getElementById("flexD").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

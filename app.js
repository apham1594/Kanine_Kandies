var day;
switch (new Date().getDay()) {
    case 0:
      day = "Brunch and Free Samples";
      break;
    case 1:
      day = "1/2 off All Oils";
      break;
    case 2:
       day = "2 for 1 Treats";
      break;
    case 3:
      day = "Buy One Get One Free";
      break;
    case 4:
      day = "Add a Gummy";
      break;
    case 5:
      day = "Bring a Friend, Get a Treat";
      break;
    case 6:
      day = "Buy Two Edibles Get One Free";
  }
document.getElementById("message1").innerHTML=(`Today is ${day}`);
console.log('Today is ' + (new Date().getDay()));

  function kandies(){
    const kandies=["Alleries",
    "Anxiety", 
    "Digestive Issues", 
    "Glaucoma", 
    "Seizures", 
    "Skin Problems", 
    "Joint and Mobility Problems", 
    "Better Appetite"];
    document.getElementById("btn").innerHTML = kandies;
}
/
  
  // puppy calculator
  function calculateDogAge(){
    var age = document.getElementById("dog").value;
    var ageCalc= age * 7;
    document.getElementById("celDog").innerHTML=(ageCalc);
  
  }
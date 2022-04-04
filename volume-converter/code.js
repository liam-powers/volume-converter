var conversionFactors = [1, 3, 6, 48, 96, 192, 768, 0.202884, 20.2884, 202.884];
var conversionUnits = ["teaspoon", "tablespoon", "fluid ounce", "american cup", "pint", "quart", "gallon", "milliliter", "deciliter", "liter"];

onEvent("go", "click", function( ) {
  setText("output", convert(getNumber("valueFrom"), getText("unitsFrom"), getText("unitsTo")));
});

console.log(convert("5", "tablespoon", "teaspoon"));
console.log(convert("1", "fluid ounce", "american cup"));

function convert(valFrom, unitsFrom, unitsTo) {
  var indexFrom;
  var indexTo;
  
  for(var i = 0; i < conversionUnits.length; i++) {
    if(conversionUnits[i] == unitsFrom) {
      indexFrom = i;
    }
  }
  
  for(var z = 0; z < conversionUnits.length; z++) {
    if(conversionUnits[z] == unitsTo) {
      indexTo = z;
    }
  }
  
  var valTo = valFrom * (conversionFactors[indexFrom]/conversionFactors[indexTo]);
  
  var fromPlurality = "s";
  var toPlurality = "s";
  
  if (valFrom == "1") {
    fromPlurality = "";
  }
  
  if (valTo == "1") {
    toPlurality = "";
  }
  
  return(valFrom + " " + unitsFrom + fromPlurality + " is equivalent to " + valTo + " " + unitsTo + toPlurality);
}
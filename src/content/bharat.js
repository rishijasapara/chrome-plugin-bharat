console.log("Bharat 🇮🇳 Plugin Loaded");

for(var i = 0; i < document.getElementsByTagName("option").length; i++) {
    var optionSelector = document.getElementsByTagName("option")[i];
    if(optionSelector.text == "India") {
        optionSelector.text = "Bharat";
    }
}
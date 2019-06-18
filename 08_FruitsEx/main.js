var myApp = (function() {

    "use strict";
    let inventory = new Array();

    function oFruit(theName, theQuantity) {
        this.name = theName;
        this.quantity = theQuantity;
    };

    function populateByJSON(objJSON, targetArray) {

        for (let i in objJSON) {
            for (let j in objJSON[i]) {
                let aFruit = new oFruit(objJSON[i][j].item, 0);
                targetArray.push(aFruit);
            }
        }
    };

    function populateByInventory(sourceArray, theElementID) {

        let domElement = document.getElementById(theElementID);

        sourceArray.forEach(function(appendtoElement, index) {
            let optn = document.createElement("OPTION");
            optn.text = sourceArray[index].name;
            domElement.add(optn, 0);
        });
    };


    function showElement(elID) {
        document.getElementById(elID).style.display = 'block';
    };

    return {
        loadAsset: function(aURL, tofillElementID, toshowElementID) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    var obj = JSON.parse(this.responseText);

                    populateByJSON(obj, inventory);
                    populateByInventory(inventory, tofillElementID);
                    showElement(toshowElementID);
                } else {
                    console.log("AJAX status:" + this.status)
                };
            };
            xhttp.open("GET", aURL, true);
            xhttp.send();
        },
    };

})();

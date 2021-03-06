var prixTotal;
var idCircuit;
var total = 0;
var client=null;
var listeThemes=[];
var listeEtapes=[];
var listeJours=[];

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
var setListeThemes = function (reponse) {
    listeThemes = reponse;
};
var setEtapes = function (reponse) {
    listeEtapes = reponse;
};
var setJours = function (reponse) {
    listeJours = reponse;
};


$(document).ready(function () {    
    listerTT();
    client=1;
    count_item();
    listerCircuits();  

    $("body").on("click", "[id^=date]", function () {
        $(this).datepicker({dateFormat: "yy-mm-dd"});
    });
       
    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: FR
     */
    jQuery.extend(jQuery.validator.messages, {
        required: "Ce champ est requis.",
        remote: "Veuillez remplir ce champ pour continuer.",
        email: "Veuillez entrer une adresse email valide.",
        url: "Veuillez entrer une URL valide.",
        date: "Veuillez entrer une date valide.",
        dateISO: "Veuillez entrer une date valide (ISO).",
        number: "Veuillez entrer un nombre valide.",
        digits: "Veuillez entrer (seulement) une valeur numérique.",
        creditcard: "Veuillez entrer un numéro de carte de crédit valide.",
        equalTo: "Veuillez entrer une nouvelle fois la même valeur.",
        accept: "Veuillez entrer une valeur avec une extension valide.",
        maxlength: jQuery.validator.format("Veuillez ne pas entrer plus de {0} caractères."),
        minlength: jQuery.validator.format("Veuillez entrer au moins {0} caractères."),
        rangelength: jQuery.validator.format("Veuillez entrer entre {0} et {1} caractères."),
        range: jQuery.validator.format("Veuillez entrer une valeur entre {0} et {1}."),
        max: jQuery.validator.format("Veuillez entrer une valeur inférieure ou égale à  {0}."),
        min: jQuery.validator.format("Veuillez entrer une valeur supérieure ou égale à  {0}.")
    });
});

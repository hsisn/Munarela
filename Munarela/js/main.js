var prixTotal;
var idCircuit;
var total = 0;
$(document).ready(function() {
    
  listerTT();
  count_item();
  //<li><a href='#'>Circuit-1</a></li>

  $("body").on("click", "[id^=date]", function() {
    $(this).datepicker({ dateFormat: "yy-mm-dd" });
  });

  //afficher les circuits
  //    $("a[name=afficherCircuit]").click(function () {
  //
  //       var cid = $(this).prop("id");
  //       $.ajax({
  //            url: "gestionFilms.php",
  //            method: "POST",
  //            data: {get_seleted_Category: 1, cat_id: cid},
  //            success: function (data) {
  //                $("#get_film").html(data);
  //                if ($("body").width() < 480) {
  //                    $("body").scrollTop(683);
  //                }
  //            }
  //        });
  //
  //    });

  // $("#devenirMembre").click();
  //afficherFormulaire();
  //lister();
  //commit
  //film();
  //tous les films
  /*  function film() {
     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {getfilm: 1},
     success: function (data) {
     $("#get_film").html(data);

     }
     });
     }

     //traitement des click des links categorie
     $("body").delegate(".category", "click", function (event) {
     $("#get_film").html("<h3>Loading...</h3>");
     event.preventDefault();
     var cid = $(this).attr('cid');

     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {get_seleted_Category: 1, cat_id: cid},
     success: function (data) {
     $("#get_film").html(data);
     if ($("body").width() < 480) {
     $("body").scrollTop(683);
     }
     }
     });

     });

     //detail films pour achat


     $("body").delegate("#product", "click", function (event) {
     var pid = $(this).attr("pid");
     event.preventDefault();

     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {addToCart: 1, proId: pid},
     success: function (data) {
     count_item();
     //getCartItem();
     $('#product_msg').html(data);

     }
     });
     });
     //ajouter les films au panier
     //par utilisateur
     count_item();
     function count_item() {
     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {count_item: 1},
     success: function (data) {
     $(".badge").html(data);
     }
     });
     }
     */
    
    
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

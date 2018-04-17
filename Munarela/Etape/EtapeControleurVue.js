//////vue Circuit
//function message(reponse) {
//    var mes = "";
//
//    mes += "<div class='alert alert-success'>";
//    mes += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
//    mes += "<b>" + reponse + "</b>";
//    mes += "</div>";
//    $('#messages').html(mes);
//    setTimeout(function () {
//        $('#messages').html("");
//    }, 5000);
//
//}
//
//function formulaireCircuit(reponse) {
//
//    $taille = reponse.length;
//
//    var input = "";
//    input += " <div class=\"container-fluid\" id=\"conteneurCircuit\" >";
//    input += "                                        <form id=\"contenuCircuit\"class=\"form-group row\" style=\"display: block\">";
//    input += "                                            <div class=\"form-group row\">";
//    input += "                                                <h2 for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Création circuit<\/h2>";
//    input += "                                            <\/div>";
//    input += "";
//    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Nom du circuit<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nomCircuit\" name=\"nomCircuit\" placeholder=\"Entrer nom du participant\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"themeCircuit\" class=\"col-sm-2 col-form-label\">Thématique<\/label>";
//    input += "                                                    <div class=\"col-sm-10\" >";
//    input += "                                                        <select class=\"form-control\" id=\"themeCircuit\" name=\"themeCircuit\" required>                                    ";
//    for (var i = 0; i < $taille; i++) {
//        input += "   <option value='" + reponse[i].idThematique + "'>" + reponse[i].nom + "<\/option>";
//
//    }
//    input += "                                                        <\/select>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"dateDepartCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateDepartCircuit\" name=\"dateDepartCircuit\" placeholder=\"Entrer départ date\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"dateRetourCircuit\" class=\"col-sm-2 col-form-label\">Date de départ<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"dateRetourCircuit\" name=\"dateRetourCircuit\" placeholder=\"Entrer retour date\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"nbPersonneMin\" class=\"col-sm-2 col-form-label\">Nombre personnes minimum<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMin\" name=\"nbPersonneMin\" placeholder=\"Entrer courriel du participant\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"nbPersonneMax\" class=\"col-sm-2 col-form-label\">Nombre personnes maximum<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nbPersonneMax\" name=\"nbPersonneMax\" placeholder=\"Entrer courriel du participant\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"prixCircuit\" class=\"col-sm-2 col-form-label\">Prix<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"prixCircuit\" name=\"prixCircuit\" placeholder=\"Entrer ville du participant\">";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"descripCircuit\" class=\"col-sm-2 col-form-label\">Déscription du circuit<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <textarea class=\"form-control\" rows=\"5\" id=\"descripCircuit\" name=\"descripCircuit\"><\/textarea>";
//    input += "";
//    input += "";
//    input += "";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"nbEtapeCircuit\" class=\"col-sm-2 col-form-label\">Entrer nombre etape<\/label>";
//    input += "                                                    <div class=\"col-sm-10\" >";
//    input += "                                                        <select class=\"form-control\" id=\"nbEtapeCircuit\" name=\"nbEtapeCircuit\" required>";
//    input += "                                                            <option>1<\/option>";
//    input += "                                                            <option>2<\/option>";
//    input += "                                                            <option>3<\/option>";
//    input += "                                                            <option>4<\/option>";
//    input += "                                                            <option>5<\/option>";
//    input += "                                                            <option>6<\/option>";
//    input += "                                                        <\/select>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "                                                <input type=\"button\" id=\"ajouterCircuit\"class=\"btn\" onclick='$(\"#contenuCircuit\").hide(); $(\"#contenuEtape\").show(); AjouterCircuit();' value=\"Sauvegarder et passer aux étapes\" >";
//    input += "                                            <\/div>";
//    input += "";
//    input += "";
//    input += "                                        <\/form>";
//    input += "";
//    input += "                                        <form id=\"contenuEtape\"class=\"form-group row\" style=\"display: none\">";
//    input += "                                            <div class=\"form-group row\">";
//    input += "                                                <h2 for=\"nomCircuit\" class=\"col-sm-2 col-form-label\">Création étape<\/h2>";
//    input += "                                            <\/div>";
//    input += "";
//    input += "                                            <div class=\"container\" style=\"width: 60% ; float: left; margin-left: 20px\" >";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"nomEtape\" class=\"col-sm-2 col-form-label\">Nom de l'étape<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <input type=\"text\" class=\"form-control\" id=\"nomEtape\" name=\"nomEtape\" placeholder=\"Entrer nom du participant\" required>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "";
//    input += "                                                <div class=\"form-group row\">";
//    input += "                                                    <label for=\"duree1\" class=\"col-sm-2 col-form-label\">Durée<\/label>";
//    input += "                                                    <div class=\"col-sm-10\">";
//    input += "                                                        <label for=\"duree2\" class=\"col-sm-2 col-form-label\">      jours<\/label>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "                                                <div id=\"premierJour\">";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <h3 for=\"Hotels\" class=\"col-sm-2 col-form-label\">Jour 1<\/h3>";
//    input += "";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"UrlHotel\" class=\"col-sm-2 col-form-label\">URL(Hotel)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"UrlHotel\" name=\"UrlHotel\" placeholder=\"Entrer courriel du participant\" required>";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"Restaurant\" class=\"col-sm-2 col-form-label\">Restaurant(s)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"Restaurant\" name=\"Restaurant\" placeholder=\"Entrer ville du participant\">";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"UrlRestaurant\" class=\"col-sm-2 col-form-label\">URL Restaurant(s)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"UrlRestaurant\" name=\"UrlRestaurant\" placeholder=\"Entrer ville du participant\">";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"repas\" class=\"col-sm-2 col-form-label\">Repas inclus<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <label><input type=\"checkbox\" name=\"dejeuner\" value=\"\">Déjeuner<\/label>";
//    input += "                                                            <label><input type=\"checkbox\" name=\"diner\" value=\"\">Diner<\/label>";
//    input += "                                                            <label><input type=\"checkbox\" name=\"souper\" value=\"\">Souper<\/label>";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"descripEtape\" class=\"col-sm-2 col-form-label\">Déscription étape<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <textarea class=\"form-control\" rows=\"5\" id=\"descripEtape\" name=\"descripEtape\"><\/textarea>";
//    input += "";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "                                                <div id=\"deuxJour\" style=\"display: none\">";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <h3 for=\"Hotels\" class=\"col-sm-2 col-form-label\">Jour 2<\/h3>";
//    input += "";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"UrlHotel\" class=\"col-sm-2 col-form-label\">URL(Hotel)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"UrlHotel\" name=\"UrlHotel\" placeholder=\"Entrer courriel du participant\" required>";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"Restaurant\" class=\"col-sm-2 col-form-label\">Restaurant(s)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"Restaurant\" name=\"Restaurant\" placeholder=\"Entrer ville du participant\">";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"UrlRestaurant\" class=\"col-sm-2 col-form-label\">URL Restaurant(s)<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <input type=\"text\" class=\"form-control\" id=\"UrlRestaurant\" name=\"UrlRestaurant\" placeholder=\"Entrer ville du participant\">";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"repas\" class=\"col-sm-2 col-form-label\">Repas inclus<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <label><input type=\"checkbox\" name=\"dejeuner\" value=\"\">Déjeuner<\/label>";
//    input += "                                                            <label><input type=\"checkbox\" name=\"diner\" value=\"\">Diner<\/label>";
//    input += "                                                            <label><input type=\"checkbox\" name=\"souper\" value=\"\">Souper<\/label>";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "                                                    <div class=\"form-group row\">";
//    input += "                                                        <label for=\"descripEtape\" class=\"col-sm-2 col-form-label\">Déscription étape<\/label>";
//    input += "                                                        <div class=\"col-sm-10\">";
//    input += "                                                            <textarea class=\"form-control\" rows=\"5\" id=\"descripEtape\" name=\"descripEtape\"><\/textarea>";
//    input += "";
//    input += "                                                        <\/div>";
//    input += "                                                    <\/div>";
//    input += "                                                <\/div>";
//    input += "                                                <input type=\"button\" class=\"btn\" value=\"Jour suivant\" onClick=\" $('#deuxJour').show();\">";
//    input += "                                            <\/div>";
//    input += "";
//    input += "";
//    input += "                                        <\/form>";
//    input += "                                    <\/div>";
//
//    $('#get_result').html(input);
//
//
//
//
//}
//var CircuitVue = function (reponse) {
//    var action = reponse.action;
//    switch (action) {
//        case "enregistrer" :
//            //case "enlever" :
//            //case "modifier" :
//            message(reponse.msg);
//
//            break;
//
//        case "listerCircuit" :
//            listerR(reponse.listetheme);
//            break;
//
//        case "listerParticipant" :
//            listerP(reponse.listetheme);
//            break;
//        case "lister" :
//            formulaireCircuit(reponse.listetheme);
//            break;
//            //case "fiche" :
//            //	afficherFiche(reponse);
//            //break;
//
//    }
//}
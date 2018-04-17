////vue Circuit
function showDays(firstDate, secondDate) {

    var startDay = new Date(firstDate);
    var endDay = new Date(secondDate);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.

    return Math.floor(days);

}

//fonction permettant d'afficher des messages a l'utilisateur
function message(reponse) {
    var mes = "";
    mes += "<div class='alert alert-success'>";
    mes +=
            "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    mes += "<b>" + reponse + "</b>";
    mes += "</div>";
    $("#messages").html(mes);
    setTimeout(function () {
        $("#messages").html("");
    }, 5000);
}

//Fonction qui affiche les circuits pour le client
//Function Affichage Circuit qui se trouvait dans le fichier CircuitAPIJquery.js
function AffichageCircuit(listeDeCircuits) {
    $('#get_result').html("");
    $('#sommaire').html("Tous les circuits");


    taille = listeDeCircuits.length;
    var result = "";
    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-6'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listeDeCircuits[i].titre + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a name='afficherDetailsCircuit'  id='" + listeDeCircuits[i].idCircuit + "' >	<img src='pochettes/" + listeDeCircuits[i].imageCircuit + "' style='width:400px; height:400px;'></a>";
        result += "</div>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'> Description:</span>" + "<span style='font-size: 15px;'>" + listeDeCircuits[i].description + "</span>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'> Prix: </span>" + "<span style='font-size: 15px;'>" + listeDeCircuits[i].prix + " $</span>";
        result += "</div>";

        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);

    $("a[name=afficherDetailsCircuit]").click(function () {
        AfficherDetailsCircuit($(this).prop("id"));
    });
}

//fonction qui affiche le formulaire de creation d'un circuit
function formulaireCircuit(reponse) {
    $taille = reponse.length;

    var input = "";
    input += ' <div class="container-fluid" id="conteneurCircuit" >';
    input +=
            '                                        <form id="contenuCircuit"class="form-group row" style="display: block">';
    input +=
            '                                            <div class="form-group row">';
    input +=
            '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Création circuit</h2>';
    input += "                                            </div>";
    input += "";
    input +=
            '                                            <div class="container" style="width: 100% ;  margin-left: 20px" >';
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nomCircuit" name="nomCircuit" placeholder="Entrer nom du circuit" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
    input +=
            '                                                    <div class="col-sm-10" >';
    input +=
            '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required>                                    ';
    for (var i = 0; i < $taille; i++) {
        input +=
                "   <option value='" +
                reponse[i].idThematique +
                "'>" +
                reponse[i].nom +
                "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit" placeholder="Entrer départ date" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de retour</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    //    document.getElementById("myForm").reset();
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer nombre personnes minimum" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer nombre personnes minimum" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" placeholder="Entrer le prix du circuit">';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit"></textarea>';
    input += "<script>CKEDITOR.replace( 'descripCircuit' );</script>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Entrer nombre etape</label>';
    input +=
            '                                                    <div class="col-sm-10" >';
    input +=
            '                                                        <select class="form-control" id="nbEtapeCircuit" name="nbEtapeCircuit" required>';
    for (var i = 1; i < 11; i++) {
        input += "   <option value='" + i + "'>" + i + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";

    input +=
            '                                              <div class="form-group">';
    input +=
            '                                                      <label for="pochette">Pochette:</label>';

    input +=
            '                                                      <input type="file" class="form-control-file" id="pochette" name="pochette" aria-describedby="fileHelp">';

    input += "                                          </div>";

    input +=
            '                                                <input type="button" id="ajouterCircuit"class="btn" onclick=\'$("#contenuCircuit").hide(); $("#contenuEtape").show(); AjouterCircuit();\' value="Sauvegarder et passer aux étapes" >';
    input += "                                            </div>";
    input += "";
    input += "";
    input += "                                        </form>"; //fin formulaire circuit

    input += ""; //formulaire étape
    input +=
            '                                        <form id="contenuEtape"class="form-group row" style="display: none">';
    input +=
            '                                            <div class="form-group row">';
    input +=
            '                                                <h2 for="nomEtape" class="col-sm-2 col-form-label">Création étape <span id=\'nbEtape\'></span> </h2>';
    input += "                                            </div>";
    input += "";
    input +=
            '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';

    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nomEtape" class="col-sm-2 col-form-label">Nom de l\'étape</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nomEtape" name="nomEtape" placeholder="Entrer nom du participant" required>';
    input += "                                                    </div>";
    input += "                                                </div>";

    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="descripEtape" class="col-sm-2 col-form-label">Déscription étape</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            "                                                            <textarea class='form-control' rows='5' id='descripEtape' name='descripEtape'></textarea>";
    input += "<script>CKEDITOR.replace( 'descripEtape' );</script>";
    input += "";
    input += "                                                        </div>";
    input += "                                                    </div>";

    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbJourEtape" class="col-sm-2 col-form-label">Entrer nombre jour</label>';
    input +=
            '                                                    <div class="col-sm-10" >';

    input +=
            '                                                        <select class="form-control" id="nbJourEtape" name="nbJourEtape" required>';
    for (var i = 1; i < 11; i++) {
        input += "   <option value='" + i + "'>" + i + "</option>";
    }

    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";

    input +=
            "                                                <input type=\"hidden\" id='idCircuit' ><br><br>";
    input +=
            '                                                <input type="button" class="btn" value="Enregistrer étape" onClick=\'  $("#contenuEtape").hide(); $("#contenuJour").show(); AjouterEtape();\'><br><br>';
    input += "                                         </div>";

    input += "                                        </form>"; //fin formulaire étape--------------------------------------------------
    input += "";
    input += "";
    input += "";
    input += ""; //formulaire Jour
    input +=
            '                                        <form id="contenuJour"class="form-group row" style="display: none">';
    input +=
            '                                            <div class="form-group row">';
    input +=
            "                                                <h2 id='labelJour' for=\"nomJour\" class=\"col-sm-2 col-form-label\">Création Jour <span id='nbJour'></span></h2>";
    input += "                                            </div>";
    input += "";
    input +=
            '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';

    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="nomHotel" class="col-sm-2 col-form-label">Hotel</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <input type="text" class="form-control" id="nomHotel" name="nomHotel" placeholder="Entrer courriel du participant" required>';
    input += "                                                        </div>";
    input += "                                                    </div>";

    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="UrlHotel" class="col-sm-2 col-form-label">URL(Hotel)</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <input type="text" class="form-control" id="UrlHotel" name="UrlHotel" placeholder="Entrer courriel du participant" required>';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += "";
    input += "";
    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="nomRestaurant" class="col-sm-2 col-form-label">Restaurant(s)</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <input type="text" class="form-control" id="nomRestaurant" name="nomRestaurant" placeholder="Entrer ville du participant">';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += "";
    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="urlRestaurant" class="col-sm-2 col-form-label">URL Restaurant(s)</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <input type="text" class="form-control" id="urlRestaurant" name="urlRestaurant" placeholder="Entrer ville du participant">';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += "";
    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="repas" class="col-sm-2 col-form-label">Repas inclus</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <label><input type="checkbox" name="dejeuner" value="Déjeuner">Déjeuner</label>';
    input +=
            '                                                            <label><input type="checkbox" name="diner" value="Diner">Diner</label>';
    input +=
            '                                                            <label><input type="checkbox" name="souper" value="Souper">Souper</label>';
    input += "                                                        </div>";
    input += "                                                    </div>";

    input +=
            '                                                    <div class="form-group row">';
    input +=
            '                                                        <label for="descripJour" class="col-sm-2 col-form-label">Déscription jour</label>';
    input +=
            '                                                        <div class="col-sm-10">';
    input +=
            '                                                            <textarea class="form-control" rows="5" id="descripJour" name="descripJour"></textarea>';
    input += "<script>CKEDITOR.replace( 'descripJour' );</script>";

    input += "";
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += "                                                </div>";

    input +=
            '                                                <input type="button" class="btn" value="Enregistrer Jour" onClick="ajouterJour();"><br><br>';
    input += "                                         </div>";

    input += "                                        </form>"; //fin formulaire jour-----------------------------------------------------------------------------------

    input += "                                            </div>";
    input += "";
    input += "";

    input += "                                    </div>";

    $("#get_result").html(input);
    $(function () {
        $('[id^="date_"]').datepicker();
    });
}

//fonction qui affiche la liste des circuits pour l'administrateur selon un autre format
function lesCircuitListe(rep) {
    var listcircuit = rep.listecircuit;
    var taille = listcircuit.length;
    var classe = "glyphicon glyphicon-eye-close";

    var list = "";
    list += '<div class="container">';
    list += "  <h3>Liste des circuits</h3>";
    list += '  <table class="table table-striped">';
    list += "    <thead>";
    list += "      <tr>";
    list += "        <th>Nom</th><th>Prix</th><th>RUD</th>";

    list += "      </tr>";
    list += "    </thead>";
    for (var i = 0; i < taille; i++) {
        list += "    <tbody>";
        list += "      <tr>";
        list += "        <td>" + listcircuit[i].titre + "</td>";
        list += "        <td>" + listcircuit[i].prix + "</td>";
        list += "        <td>";
        list += ' <a href="#" onclick=\'supprimerCircuit(' + listcircuit[i].idCircuit + ');return false\' class="btn btn-primary a-btn-slide-text">';
        list += ' <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>';
        list += "</a>";
        list += ' <a href="#" class="btn btn-primary a-btn-slide-text" onclick="obtenirFicheCircuit(' + listcircuit[i].idCircuit + ');return false">';
        list += '  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> </a>';
        list += '  <a href="#" class="btn btn-primary a-btn-slide-text" onclick="altPublication(' + listcircuit[i].idCircuit + ',' + listcircuit[i].published + ');return false">';
        if (listcircuit[i].published == 1) {
            classe = "glyphicon glyphicon-eye-open";
        }
        list += ' <span class="' + classe + '" aria-hidden="true"></span> </a> </td></tr><tbody>  ';
    }
    list += "  </table></div>";
    $("#get_result").html(list);
}

//fonction pour afficher la fiche du circuit afin de le modifier
function afficherFicheCircuit(reponse) {
    var fiche = reponse.ficheCircuit;
    var theme = reponse.listetheme;
    var taille = theme.length;

    var input = "";
    input += ' <div class="container-fluid" id="conteneurCircuit" >';
    input +=
            '                                        <form id="modifierCircuitForm"class="form-group row" style="display: block">';
    input +=
            '                                            <div class="form-group row">';
    input +=
            '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Modification d\'un circuit</h2>';
    input += "                                            </div>";
    input += "";
    input +=
            '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
    input +=
            '                                                    <div class="col-sm-10">';

    input +=
            '                                                        <input type="text" class="form-control" id="nomCircuit" name="nomCircuit"  value = ' +
            fiche[0].titre +
            " required>";

    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
    input +=
            '                                                    <div class="col-sm-10" >';
    input +=
            '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required>                                    ';
    for (var i = 0; i < taille; i++) {
        input += "   <option";
        if (fiche.idThematique === theme[i].idThematique) {
            input += "selected";
        }

        input +=
                " value='" + theme[i].idThematique + "'>" + theme[i].nom + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit"  required  value = ' +
            fiche[0].dateDeDepart +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required value = ' +
            fiche[0].dateDeRetour +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer courriel du participant" required value = ' +
            fiche[0].nbPersonnesMin +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer courriel du participant" required value = ' +
            fiche[0].nbPersonnesMax +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" required value = ' +
            fiche[0].prix +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="guide" class="col-sm-2 col-form-label">Guide</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="guide" name="guide" required value = ' +
            fiche[0].guide +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="promo" class="col-sm-2 col-form-label">Promotion</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <input type="text" class="form-control" id="idPromo" name="idPromo" required value = ' +
            fiche[0].idPromotion +
            " >";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
    input +=
            '                                                    <div class="col-sm-10">';
    input +=
            '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit">' +
            fiche[0].description +
            "</textarea>";
    input += "";
    input += "";
    input += "";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input +=
            '                                                <div class="form-group row">';
    input +=
            '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Entrer nombre etape</label>';
    input +=
            '                                                    <div class="col-sm-10" >';
    input +=
            '                                                        <select class="form-control" id="nbEtapeCircuit" name="nbEtapeCircuit" required>';
    input +=
            "                                                            <option>1</option>";
    input +=
            "                                                            <option>2</option>";
    input +=
            "                                                            <option>3</option>";
    input +=
            "                                                            <option>4</option>";
    input +=
            "                                                            <option>5</option>";
    input +=
            "                                                            <option>6</option>";
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input +=
            '                                              <div class="form-group">';
    input +=
            '                                                      <label for="imageCircuitLbL">Image Circuit:</label>';

    input +=
            '                                                      <input type="file" class="form-control-file" id="imageCircuit" name="imageCircuit" aria-describedby="fileHelp">';
    input +=
            '  <input type="hidden" name="idCircuit" value=' + fiche[0].idCircuit + ">";
    input += "                                          </div>";
    input +=
            '                                                <input type="button" id="modifierCircuit"class="btn" onclick=\'requeteModifierCircuit();\' value="Modifier Circuit" >';
    input += "                                            </div>";
    input += "";
    input += "";
    input += "                                        </form>"; //fin formulaire circuit

    $("#get_result")
            .html(input)
            .append("<script></script>");
}

//variable pour le prix
var prixReservation;
//fonction qui affiche les details d'un circuit pour le client
function AffichageDetailsCircuit(Circuit) {
    $('#get_result').html("");
    $('#sommaire').html(Circuit[0].titre);

    var taille = Circuit.length;
    var etapes = new Array();
    var descriptionsEtapes = new Array();
    var hotels = new Array();
    var strVar = "";

    // etapes[0] = Circuit[0].nomEtape;

    for (var i = 0; i < taille; i++) {
        var etape = Circuit[i].nomEtape;
        if (jQuery.inArray(etape, etapes) == -1) {
            etapes.push(etape);
        }
    }
     for (var i = 0; i < taille; i++) {
        var etape = Circuit[i].descriptionEtape;
        if (jQuery.inArray(etape, descriptionsEtapes) == -1) {
            etapes.push(etape);
        }
    }
    for (var i = 0; i < taille; i++) {
        var hotel = Circuit[i].nomhotel;
        if (jQuery.inArray(hotel, hotels) == -1) {
            hotels.push(hotel);
        }
    }

    var jour = showDays(Circuit[0].dateDeRetour, Circuit[0].dateDeDepart);
    strVar += "        <br \/>";
    strVar += "        <div>";
    strVar += "            <h2 align=\"center\">" + Circuit[0].titre + "<\/h2>";
    strVar += "            <br \/>";
    strVar += "<div class='container'>";
    strVar += "<div class='row'>";

    strVar += "<div class='col-md-6'>";
    strVar += "<a>	<img src='pochettes/" + Circuit[0].imageCircuit + "' style='width:450px; height:500px;'></a>";

    strVar += "";
    strVar += "";
    strVar += "                    <\/div>";

    strVar += "<div class='col-md-4'>";
    strVar += "            <table class=\"table table-condensed\" style=\"width: 450px; float:right; height: 500px; \">";
    strVar += "                <thead>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <th style=\"background-color: #426CB4; color: white\">" + Circuit[0].titre + "<\/th>";
    strVar += "                        <th style=\"background-color: #426CB4; color: white\"><\/th>";
    strVar += "                    <\/tr>";
    strVar += "                <\/thead>";
    strVar += "                <tbody>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <td style=\"background-color: white; color: black\">Durée<\/td>";
    //calcul du nombre de jours
    strVar += "                        <td style=\"background-color: #426CB4; color: white; width: 70px\">" + "nbr de jour a calculer" + " jours<\/td>";
    strVar += "";
    strVar += "                    <\/tr>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <td style=\"background-color: white; color: black\">Tarifs<\/td>";
    strVar += "                        <td style=\"background-color: #426CB4; color: white\">" + Circuit[0].prix + " $<\/td>";
    strVar += "                    <\/tr>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <td style=\"background-color: white; color: black\">Infos<\/td>";
    strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
    strVar += "";
    strVar += "                    <\/tr>";
    strVar += "                    <tr>";
    strVar += "                        <td style=\"background-color: white; color: black\">" + Circuit[0].description + "<\/td>";
    strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
    strVar += "                    <\/tr>";
    strVar += "";
    strVar += "                <\/tbody>";
    strVar += "            <\/table>";
    strVar += "";
    strVar += "";
    strVar += "";
    strVar += "                    <\/div>";
    strVar += "                    <\/div>";
    strVar += "                    <\/div>";

    strVar += "            <br \/>";
    strVar += "<div class='container'>";
    strVar += "<div class='row'>";
    strVar += "<div class='col-md-10'>";
    strVar += "                <div class=\"card-body\" style=\"background-color: white; color: white;\">";
    strVar += "                    <div class=\"card-header\" style=\"background-color: #426CB4;color: white\">";
    strVar += "                        <ul class=\"nav nav-tabs card-header-tabs\">";
    strVar += "                            <li class=\"nav-item\" >";
    strVar += "                                <a class=\"nav-link active\" name=\"iteneraire\" href=\"#\" style=\"color: white\" onclick=\"return false;\">Itinéraire<\/a>";
    strVar += "                            <\/li>";
    strVar += "                            <li class=\"nav-item\">";
    strVar += "                                <a class=\"nav-link\" name=\"hotels\" href=\"#\" style=\"color: white\" onclick=\"return false\">Hotels<\/a>";
    strVar += "                            <\/li>";
    strVar += "                            <li class=\"nav-item\">";
    strVar += "                                <a class=\"nav-link disabled\" href=\"#\" style=\"color: white\" onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit(" + Circuit[0].idCircuit + ");'>Réservations<\/a>";
    strVar += "                            <\/li>";
    strVar += "                            <li class=\"nav-item\">";
    strVar += "                                <a class=\"nav-link btn btn-danger\" href=\"#\"  onclick='enregistrerPani();'>Ajouter au Panier<\/a>";
    strVar += "                            <\/li>";
    strVar += "                        <\/ul>";
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"card-body\" id=\"suite\" style=\"background-color: cornflowerblue; color: white; \">";
    strVar += "                        <div class=\"card-header\">";
    strVar += "                            <ul class=\"nav nav-tabs card-header-tabs\">";
    for (var i = 0; i < etapes.length; i++) {
        strVar += "                                <li class=\"nav-item\" >";
        strVar += "                                     <a id=\"" + etapes[i] + "\" name=\"etapes\" class=\"nav-link active\" href=\"\" style=\"color: white\" >" + etapes[i] + "<\/a>";
        strVar += "                                <\/li>";
    }
    strVar += "                            <\/ul> <\/div> <\/div>";
    strVar += "                    <p id=\"contenuDetail\"><\/p>  <\/div><\/div><\/div><\/div><\/div>";
    $('#get_result').html(strVar);
    //$('[href]')
    $("a[name='hotels']").click(function () {

        var detail = "";
        for (var i = 0; i < hotels.length; i++) {

            detail += hotels[i] + "<br>";

        }
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });
        $("a[name='iteneraire']").click(function () {
        var etape = $(this).prop("id");
        var detail = "";
        for (var i = 0; i < taille; i++) {            
                detail += descriptionsEtapes[i]+ "<br>";           
        }
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });
    $("a[name='etapes']").click(function () {
        var etape = $(this).prop("id");
        var detail = "";
        for (var i = 0; i < taille; i++) {
            if (Circuit[i].nomEtape == etape) {
                detail += Circuit[i].descriptionJour + "<br>";
            }
        }
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });

    prixReservation = Circuit[0].prix;
    /* result += "<div class='col-md-12'>";
     result += "<div class='panel panel-success'>";
     result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>"+ affichageCircuits[i].titre + "</span></div>";
     result += "<div class='panel-body'>";
     result += "<a>	<img src='pochettes/" + affichageCircuits[i].imageCircuit + "' style='width:500px; height:500px;'></a>";
     result += "<div> Description: " + affichageCircuits[i].description + " <br></div>";
     result += "<div> Prix: " + affichageCircuits[i].prix + " <br></div>";
     result += "<a href='#' class='category btn btn-danger btn-xs' cid='ACTION'  class='' style='float:right;' onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit("+ affichageCircuits[i].idCircuit+ ");'>Reservation </a> ";
     result += "<a href='#' class='category btn btn-success btn-xs' cid='ACTION'  class='' style='float:right;' onclick='FormulaireR(); listerParticipants();infoUser();RamenerCircuit("+ affichageCircuits[i].idCircuit+ ");'> Ajouter au Panier </a>";
     result += "</div>";
     result += "</div>";
     result += "</div>";
     //'"+  affichageCircuits[i].idCircuit +"'
     }
     $('#get_result').html(result);*/


}

//Appel de toutes les autres fonctions de ce fichier
//ces derniers ne sont appelée nul par ailleur a part pour
//AffichageDetailsCircuit elle est appeler dans JourRequete.js apres avoir fini de creer un circuit
/*var CircuitVue = function (reponse) {
    alert("JS-DBug : "+reponse.action);
    var action = reponse.action;
    switch (action) {
        case "enregistrer":
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);
            break;
        case "listerCircuit":
            listerR(reponse.listetheme);
            break;
        case "afficherFiche":
            afficherFicheCircuit(reponse);
            break;
        case "AffichageDetailsCircuit":
            AffichageDetailsCircuit(reponse.listeJours);
            break;
        case "lister":
            formulaireCircuit(reponse.listetheme);
            break;
        case "listerCircuitParThematique":
            AffichageCircuit(reponse.listeCircuits);
            break;
        case "listerLesCircuits":
            lesCircuitListe(reponse);
            break;
    }
};
*/
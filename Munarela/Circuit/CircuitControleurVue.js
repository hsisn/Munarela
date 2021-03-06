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
        result += "</div></div></div></div>";
    }
    $('#get_result').html(result);

    $("a[name=afficherDetailsCircuit]").click(function () {
        AfficherDetailsCircuit($(this).prop("id"));
    });
}

//fonction qui affiche le formulaire de creation d'un circuit
function formulaireCircuit(themes, promos) {
    var nbrThemes = themes.length;
    var nbrPromos = promos.length;
    //alert(JSON.stringify(promos));
    var input = "";
    input += ' <div class="container-fluid" id="conteneurCircuit" >';
    input += '                                        <form id="contenuCircuit"class="form-group row" style="display: block">';
    input += '                                            <div class="form-group row">';
    input += '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Création circuit</h2>';
    input += "                                            </div>";
    input += '                                            <div class="container" style="width: 100% ;  margin-left: 20px" >';
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="nomCircuit" name="nomCircuit" placeholder="Entrer nom du circuit" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Promotion</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="promotion" name="promotion" required>';
    input += '<option value="">Aucune promotion</option>';
    for (var i = 0; i < nbrPromos; i++) {
        input += "   <option value='" + promos[i].idPromotion + "'>" + promos[i].nom + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required> ';
    for (var i = 0; i < nbrThemes; i++) {
        input += "   <option value='" + themes[i].idThematique + "'>" + themes[i].nom + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit" placeholder="Entrer départ date" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de retour</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    //    document.getElementById("myForm").reset();
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer nombre personnes minimum" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer nombre personnes minimum" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" placeholder="Entrer le prix du circuit">';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit"></textarea>';
    input += "<script>CKEDITOR.replace( 'descripCircuit' );</script>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Entrer nombre etape</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="nbEtapeCircuit" name="nbEtapeCircuit" required>';
    for (var i = 1; i < 11; i++) {
        input += "   <option value='" + i + "'>" + i + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                              <div class="form-group">';
    input += '   <label for="pochette">Pochette:</label>';
    input += '<input type="file" class="form-control-file" id="pochette" name="pochette" aria-describedby="fileHelp">';
    input += "  </div>";
    input += '                                                <input type="button" id="ajouterCircuit"class="btn" onclick=\'$("#contenuCircuit").hide(); $("#contenuEtape").show(); AjouterCircuit();\' value="Sauvegarder et passer aux étapes" >';
    input += "                                            </div>";
    input += "                                        </form>"; //fin formulaire circuit
//formulaire étape
    input += '                                        <form id="contenuEtape"class="form-group row" style="display: none">';
    input += '          <div class="form-group row">';
    input += '              <h2 for="nomEtape" class="col-sm-2 col-form-label">Création étape <span id=\'nbEtape\'></span> </h2></div>';
    input += '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nomEtape" class="col-sm-2 col-form-label">Nom de l\'étape</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="nomEtape" name="nomEtape" placeholder="Entrer nom du participant" required>';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="descripEtape" class="col-sm-2 col-form-label">Déscription étape</label>';
    input += '                                                        <div class="col-sm-10">';
    input += "                                                            <textarea class='form-control' rows='5' id='descripEtape' name='descripEtape'></textarea>";
    input += "<script>CKEDITOR.replace( 'descripEtape' );</script>";
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbJourEtape" class="col-sm-2 col-form-label">Entrer nombre jour</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="nbJourEtape" name="nbJourEtape" required>';
    for (var i = 1; i < 11; i++) {
        input += "   <option value='" + i + "'>" + i + "</option>";
    }
    input += "                                                        </select>";
    input += "                                                    </div>";
    input += "                                                </div>";
    input += "                                                <input type=\"hidden\" id='idCircuit' ><br><br>";
    input += '                                                <input type="button" class="btn" value="Enregistrer étape" onClick=\'  $("#contenuEtape").hide(); $("#contenuJour").show(); AjouterEtape();\'><br><br>';
    input += "                                         </div>";
    input += "                                        </form>";
    //fin formulaire étape--------------------------------------------------
    //formulaire Jour
    input += '                                        <form id="contenuJour"class="form-group row" style="display: none">';
    input += '                                            <div class="form-group row">';
    input += "                                                <h2 id='labelJour' for=\"nomJour\" class=\"col-sm-2 col-form-label\">Création Jour <span id='nbJour'></span></h2>";
    input += "                                            </div>";
    input += '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="nomHotel" class="col-sm-2 col-form-label">Hotel</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <input type="text" class="form-control" id="nomHotel" name="nomHotel" placeholder="Entrer courriel du participant" required>';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="UrlHotel" class="col-sm-2 col-form-label">URL(Hotel)</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <input type="text" class="form-control" id="UrlHotel" name="UrlHotel" placeholder="Entrer courriel du participant" required>';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="nomRestaurant" class="col-sm-2 col-form-label">Restaurant(s)</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <input type="text" class="form-control" id="nomRestaurant" name="nomRestaurant" placeholder="Entrer ville du participant">';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="urlRestaurant" class="col-sm-2 col-form-label">URL Restaurant(s)</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <input type="text" class="form-control" id="urlRestaurant" name="urlRestaurant" placeholder="Entrer ville du participant">';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="repas" class="col-sm-2 col-form-label">Repas inclus</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <label><input type="checkbox" name="dejeuner" value="Déjeuner">Déjeuner</label>';
    input += '                                                            <label><input type="checkbox" name="diner" value="Diner">Diner</label>';
    input += '                                                            <label><input type="checkbox" name="souper" value="Souper">Souper</label>';
    input += "                                                        </div>";
    input += "                                                    </div>";
    input += '                                                    <div class="form-group row">';
    input += '                                                        <label for="descripJour" class="col-sm-2 col-form-label">Déscription jour</label>';
    input += '                                                        <div class="col-sm-10">';
    input += '                                                            <textarea class="form-control" rows="5" id="descripJour" name="descripJour"></textarea>';
    input += "<script>CKEDITOR.replace( 'descripJour' );</script></div></div></div>";
    input += '              <input type="button" class="btn" value="Enregistrer Jour" onClick="ajouterJour();"><br><br></div>';
    input += "       </form></div></div>"; //fin formulaire jour-----------------------------------------------------------------------------------

    $("#get_result").html(input);
    $(function () {
        $('[id^="date_"]').datepicker();
    });
}

//fonction qui affiche la liste des circuits pour l'administrateur selon un autre format
function lesCircuitListe(rep) {
    var listcircuit = rep.listecircuit;
    var taille = listcircuit.length;
    var classe = "";

    var list = "";


    list += '<div class="container">';
    list += "  <h3>Liste des circuits</h3>";
    for (var j = 0; j < listeThemes.length; j++) {
        list += "  <h3>" + listeThemes[j].nom + "</h3>";
        list += '  <table id="theme" class="table table-striped">';
        list += "    <tbody>";
        list += "      <tr class='accordion'>";
        list += "        <th>Nom</th><th>Prix</th><th>RUD</th>";
        list += "      </tr>";

        for (var i = 0; i < taille; i++) {
            if (listcircuit[i].idThematique == listeThemes[j].idThematique) {

                list += "      <tr name='circuit' id='" + listcircuit[i].idCircuit + "' >";
                list += "        <td>" + listcircuit[i].titre + "</td>";
                list += "        <td>" + listcircuit[i].prix + "</td>";
                list += '<td> <a href="#" onclick=\'supprimerCircuit(' + listcircuit[i].idCircuit + ');return false\' class="btn btn-primary a-btn-slide-text">';
                list += ' <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>';

                list += ' <a href="#" class="btn btn-primary a-btn-slide-text" onclick="obtenirFicheCircuit(' + listcircuit[i].idCircuit + ');listerEtapes(' + listcircuit[i].idCircuit + ');return false">';
                list += '  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> </a>';
                list += '  <a href="#" class="btn btn-primary a-btn-slide-text" onclick="altPublication(' + listcircuit[i].idCircuit + ',' + listcircuit[i].published + ');return false">';
                if (listcircuit[i].published === '1') {
                    classe = "glyphicon glyphicon-eye-open";
                } else {
                    classe = "glyphicon glyphicon-eye-close";
                }
                list += ' <span class="' + classe + '" aria-hidden="true"></span> </a> </td></tr>';
            }

        }
        list += '</tbody>  ';
        list += "  </table>";
    }
    list += "</div>";

    $("#get_result").html(list);

    $(function () {
        $(".table.table-striped tr:not(.accordion)").hide();
        $(".table.table-striped tr:first-child").show();

        $(".table.table-striped tr.accordion").click(function () {
            $(this).nextAll("tr").fadeToggle(500);
        }).eq(0).trigger('click');
    });
}

//fonction pour afficher la fiche du circuit afin de le modifier
function afficherFicheCircuit(fiche, theme, promos) {
    var nbrThemes = theme.length;
    var nbrPromos = promos.length;
    var input = "";
    input += ' <div class="container-fluid" id="conteneurCircuit" >';
    input += '                                        <form id="modifierCircuitForm"class="form-group row" style="display: block">';
    input += '                                            <div class="form-group row">';
    input += '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Modification d\'un circuit</h2> </div>';
    input += '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '<input type="text" class="form-control" id="nomCircuit" name="nomCircuit"  value = ' + fiche[0].titre + " required></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required>                                    ';
    for (var i = 0; i < nbrThemes; i++) {
        input += "<option ";
        if (fiche[0].idThematique === theme[i].idThematique) {
            input += "selected";
        }
        input += " value='" + theme[i].idThematique + "'>" + theme[i].nom + "</option>";
    }
    input += "                                                        </select></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '<input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit"  required  value = ' +
            fiche[0].dateDeDepart +
            " ></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
    input += '                                                    <div class="col-sm-10">';
    input += ' <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required value = ' +
            fiche[0].dateDeRetour + " ></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
    input += '                                                    <div class="col-sm-10">';
    input += ' <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer courriel du participant" required value = ' +
            fiche[0].nbPersonnesMin + " > </div> </div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '  <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer courriel du participant" required value = ' +
            fiche[0].nbPersonnesMax + " > </div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" required value = ' +
            fiche[0].prix + " ></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="guide" class="col-sm-2 col-form-label">Guide</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <input type="text" class="form-control" id="guide" name="guide" required value = ' +
            fiche[0].guide + " ></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="promo" class="col-sm-2 col-form-label">Promotion</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <select class="form-control" id="promoCircuit" name="promoCircuit" required>';
    input += '<option value="">Aucune promotion</option>';
    for (var i = 0; i < nbrPromos; i++) {
        input += "<option ";
        if (fiche[0].idPromotion === promos[i].idPromotion) {
            input += "selected";
        }
        input += " value='" + promos[i].idPromotion + "'>" + promos[i].nom + "</option>";
    }
    input += "                                                        </select></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
    input += '                                                    <div class="col-sm-10">';
    input += '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit">' +
            fiche[0].description + "</textarea></div></div>";
    input += '                                                <div class="form-group row">';
    input += '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Modifier une étape</label>';
    input += '                                                    <div class="col-sm-10" >';
    input += '                                                        <select class="form-control" id="EtapeDropDown" name="nbEtapeCircuit" required>';
    for (var i = 0; i < listeEtapes.length; i++) {
        input += "   <option value='" + listeEtapes[i].idEtape + "'>" + listeEtapes[i].nomEtape + "</option>";
    }
    input += "                                                        </select>";
    input += '                                                <input type="button" id="modifierEtape" class="btn" value="ModifierEtape" >';
    input += "                                                    </div>";
    input += "                                                </div>";
    input += '                                              <div class="form-group">';
    input += '                                                      <label for="imageCircuitLbL">Image Circuit:</label>';
    input += '                                                      <input type="file" class="form-control-file" id="imageCircuit" name="imageCircuit" aria-describedby="fileHelp">';
    input += '  <input type="hidden" name="idCircuit" value=' + fiche[0].idCircuit + "> </div>";
    input += '                                                <input type="button" id="modifierCircuit"class="btn" onclick=\'requeteModifierCircuit();\' value="Modifier Circuit" >';
    input += "                                            </div>";
    input += "                                        </form>"; //fin formulaire circuit

    $("#get_result")
            .html(input)
            .append("<script></script>");


    $("#modifierEtape").click(function () {
        var etape = $("#EtapeDropDown").val();
        ficheEtape(etape);
    });
}

function ficheEtape(idEtape) {
    var index = findWithAttr(listeEtapes, "idEtape", idEtape);
    var input =
    '   <form id="contenuEtape" class="form-group row" style="">  '  + 
 '       <div class="form-group row">  '  + 
 '           <h2 for="nomEtape" class="col-sm-2 col-form-label">Modification étape  '  + 
 '               <span id="nbEtape"></span>  '  + 
 '           </h2>  '  + 
 '       </div>  '  + 
 '       <div class="container" style="width: 60% ; float: left; margin-left: 20px">  '  + 
 '           <div class="form-group row">  '  + 
 '               <label for="nomEtape" class="col-sm-2 col-form-label">Nom de l\'étape</label>  '  + 
 '               <div class="col-sm-10">  '  + 
 '                   <input type="text" class="form-control" id="nomEtape" name="nomEtape" placeholder="Entrer nom du participant" required=""> </div>  '  + 
 '           </div>  '  + 
 '           <div class="form-group row">  '  + 
 '               <label for="descripEtape" class="col-sm-2 col-form-label">Déscription étape</label>  '  + 
 '           </div>  '  + 
 '           <div class="form-group row">  '  + 
 '               <label for="nbJourEtape" class="col-sm-2 col-form-label">Entrer nombre jour</label>  '  + 
 '               <div class="col-sm-10">  '  + 
 '                   <select class="form-control" id="nbJourEtape" name="nbJourEtape" required="">  '  + 
 '                       <option value="1">1</option>  '  + 
 '                       <option value="2">2</option>  '  + 
 '                       <option value="3">3</option>  '  + 
 '                       <option value="4">4</option>  '  + 
 '                       <option value="5">5</option>  '  + 
 '                       <option value="6">6</option>  '  + 
 '                       <option value="7">7</option>  '  + 
 '                       <option value="8">8</option>  '  + 
 '                       <option value="9">9</option>  '  + 
 '                       <option value="10">10</option>  '  + 
 '                   </select>  '  + 
 '               </div>  '  + 
 '           </div>  '  + 
 '           <input type="hidden" id="idCircuit">  '  + 
 '           <br>  '  + 
 '           <br>  '  + 
 '           <input type="button" class="btn" value="Enregistrer étape" onclick="  $(&quot;#contenuEtape&quot;).hide(); $(&quot;#contenuJour&quot;).show(); AjouterEtape();">  '  + 
 '           <br>  '  + 
 '           <br> </div>  '  + 
 '  </form>  ' ; 
    $('#get_result').html("");
    $("#get_result").html(input);
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
        if (jQuery.inArray(etape, etapes) === -1) {
            etapes.push(etape);
        }
    }

    for (var i = 0; i < taille; i++) {
        var etape = Circuit[i].descriptionEtape;
        if (jQuery.inArray(etape, descriptionsEtapes) === -1) {
            descriptionsEtapes.push(etape);
        }
    }


    for (var i = 0; i < taille; i++) {
        var hotel = Circuit[i].nomhotel;
        var urlHotel = Circuit[i].urlHotel;


        if (jQuery.inArray(hotel.nomhotel, hotels) === -1) {
            hotels.push([hotel, urlHotel]);
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
    strVar += "<a>	<img src='pochettes/" + Circuit[0].imageCircuit + "' style='width:450px; height:500px;'></a> <\/div>";
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
    strVar += "                        <td style=\"background-color: #426CB4; color: white; width: 70px\">" + taille + " jours<\/td>";
    strVar += "                    <\/tr>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <td style=\"background-color: white; color: black\">Tarifs<\/td>";
    strVar += "                        <td style=\"background-color: #426CB4; color: white\">" + Circuit[0].prix + " $<\/td>";
    strVar += "                    <\/tr>";
    strVar += "                    <tr style=\" height: 30px\">";
    strVar += "                        <td style=\"background-color: white; color: black\">Infos<\/td>";
    strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
    strVar += "                    <\/tr>";
    strVar += "                    <tr>";
    strVar += "                        <td style=\"background-color: white; color: black\">" + Circuit[0].description + "<\/td>";
    strVar += "                        <td style=\"background-color: white; color: black\"><\/td>";
    strVar += "                    <\/tr>";
    strVar += "                <\/tbody><\/table><\/div><\/div><\/div>";
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
    //on remplis tous les hotels de tous les jours
    $("a[name='hotels']").click(function () {
        var detail = "";
        for (var i = 0; i < hotels.length; i++) {
            detail += '<a href='+hotels[i][1] +'>'+ hotels[i][0] + "</a><br>";
        }
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });
    //Lorsquon clicque sur itineraire on voit toutes les description des etapes
    $("a[name='iteneraire']").click(function () {
        var detail = "";
        descriptionsEtapes.forEach(function (element) {
            detail += element + "<br>";
        });
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });
    //lorsquon clicque sur les noms d'etapes on voit toutes les informations des jours
    //sur letape en questions
    $("a[name='etapes']").click(function () {
        var etape = $(this).prop("id");
        var detail = "";
        for (var i = 0; i < taille; i++) {
            if (Circuit[i].nomEtape === etape) {
                detail += "Jour " + (i + 1) + "<br>";
                detail += Circuit[i].descriptionJour + "<br>";
            }
        }
        $("#contenuDetail").html(detail);
        $("#contenuDetail").css('color', 'cornflowerblue');
        return false;
    });

    prixReservation = Circuit[0].prix;
}

//Appel de toutes les autres fonctions de ce fichier
//ces derniers ne sont appelés nul par ailleur a part pour
//AffichageDetailsCircuit elle est appeler dans JourRequete.js apres avoir fini de creer un circuit
var CircuitVue = function (reponse) {
    //alert("JS-DBug : " + reponse.action + " a la vue Circuit");
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
            afficherFicheCircuit(reponse.ficheCircuit, reponse.listetheme, reponse.listepromotions);
            break;
        case "AffichageDetailsCircuit":
            AffichageDetailsCircuit(reponse.listeJours);
            break;
        case "lister":
            formulaireCircuit(reponse.listetheme, reponse.listepromotions);
            break;
        case "listerCircuitParThematique":
            AffichageCircuit(reponse.listeCircuits);
            break;
        case "listerLesCircuits":
            lesCircuitListe(reponse);
            break;
    }
};

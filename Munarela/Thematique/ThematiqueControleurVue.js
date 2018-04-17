//vue films
function message(reponse) {
    var mes = "";

    mes += "<div class='alert alert-success'>";
    mes += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    mes += "<b>" + reponse + "</b>";
    mes += "</div>";
    $('#messages').html(mes);
    setTimeout(function () {
        $('#messages').html("");
    }, 5000);

}

function formulaireT() {

    var result = "";

    result += "<div class='col-md-6 col-md-push-2'>";

    result += "<form id='formEnregthems'>";
    result += "<h3>Ajouter une thematique</h3>";
    result += "<div class='form-group'>";
    result += "<label for='nom'>nom:</label>";
    result += "<input type='text' class='form-control' id='nom' name='nom'>";
    result += "</div>";

    result += "<div class='form-group'>";
    result += "<label for='description'>description:</label>";
    result += "<textarea class='form-control' name='description'></textarea>";
     result += "<script>CKEDITOR.replace( 'description' );</script>";
    
    result += " </div>";

    result += "<div class='form-group'>";
    result += "<label for='pochette'>image:</label>";
    result += "<input type='file' class='form-control-file' id='pochette' name='pochette' aria-describedby='fileHelp'";
    result += "</div><br><br>";
    result += "<input type='button' class='btn btn-primary' value='Ajouter' onClick='enregistrerT();'><br><br>";
    result += "</form>";
    result += "</div>";

    $('#get_result').html(result);

}

function listerT(listetheme) {
    var taille;
    taille = listetheme.length;
    var result = "";

    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].nom + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a href='#' name='afficherCircuit'  id='" + listetheme[i].idThematique + "' class=\"thumbnail\">	<img src='pochettes/" + listetheme[i].image + "' style='width:400px; height:300px;'></a>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html(result);
    $("a[name=afficherCircuit]").click( function(){
    AfficherCircuits($(this).prop("id")); 
    return false;
});

}

/*function afficherFiche(reponse){
 var uneFiche;
 if(reponse.OK){
 uneFiche=reponse.fiche;
 $('#formFicheF h3:first-child').html("Fiche du film numero "+uneFiche.idf);
 $('#idf').val(uneFiche.idf);
 $('#titreF').val(uneFiche.titre);
 $('#dureeF').val(uneFiche.duree);
 $('#resF').val(uneFiche.res);
 $('#divFormFiche').show();
 document.getElementById('divFormFiche').style.display='block';
 }else{
 $('#messages').html("Film "+$('#numF').val()+" introuvable");
 setTimeout(function(){ $('#messages').html(""); }, 5000);
 }
 
 }
 */
var thematiqueVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);
            break;
            
        case "lister" :
            listerT(reponse.listetheme);
            break;
            
        case "formulaire" :
            formulaireT();
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}

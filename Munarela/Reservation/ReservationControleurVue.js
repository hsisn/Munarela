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

function formulaireR() {
    var result = "";
    result += "                <div class=\"container-fluid\" >";
    result += "                    <form id=\"formreservation\"class=\"form-group row\" action='https://www.sandbox.paypal.com/cgi-bin/webscr' method='post' >";

    result += "<input type='hidden' name='cmd' value='_cart'>";
    result += "<input type='hidden' name='business' value='Monarela@hotmail.com'>";
    result += "<input type='hidden' name='upload' value='1'>";
    result += "<input type='hidden' name='idUtilisateur' id='idUtilisateur' value=''>";

    result += afficherDivParticipant(result);


    //*******************************************************************


    result += " <div class=\"container\" style=\" float: left; \">";
    result += "<hr class='ligne_horizontal'></hr>";
    result += "<h4 class='titre'>Ajouter participants</h4>";

    result += "     <div class=\"container\">";
    result += "       <div class=\"container fluid\" style=\"width: 60% ; float: left; \" >";

    result += ajoutCategorie("NombreAdulte", "Adulte [+ 12 ans]", result);
    result += ajoutCategorie("NombreEnfant", "Enfant [2- 11 ans]", result);
    result += ajoutCategorie("NombreBebe", "Bébé [0- 2 ans]", result);

    result += "         <div class=\"form-group row\" >";
    result += "             <div class=\"col-sm-10 contenupass\">";
    result += "                 <a href='#'class='btn btn-primary' cid='ajouter' onclick='afficherFormulaire(); '>Enregistrer - passer aux participant(s)</a>";

    result += "             </div>";
    result += "         </div>";

    result += "       </div>";


    result += "                        <div class=\"container fluid\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
    result += "                            <div class=\"form-group \" >";
    result += "                                <label for=\"texttotalCircuit\">Prix total du circuit:</label>";
    result += "                                 <label for=\"totalCircuit\" style='color:red;font-size:25px;margin:5px' id='labtotal' name='labtotal' >4500</label>";
    result += "                            </div>";

    result += "                        </div>";

    result += "     </div>";

    //*************************************************


    result += " <div class=\"container\" style=\" float: left; \">";
    result += "<hr class='ligne_horizontal'></hr>";

    result += "<h4>Informations sur les participants</h4>";

    result += "  <div id='vuePart' class=\"container fluid\" style=\"width: 40% ; \" >";


    result += "                <br>";
    result += "                <br>";

    result += "                                <a href='#'class='btn btn-primary' cid='previsualiser'>Previsualiser la Reservation </a>";
    result += "                      </div>";
    result += "  <div id='vuePart1' class=\"container fluid\" style=\"width: 40% ; float: left; \" >";


    result += "                <br>";
    result += "                <br>";

    result += "                                <a href='#'class='btn btn-primary' cid='previsualiser' onClick='preview();'>Previsualiser la Reservation </a>";
    result += "                      </div>";


    result += "                        <div class=\"container fluid\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
    result += "                            <div class=\"form-group \" >";
    result += "                                <a href='#'class='category' cid='modifier' onClick=\" obtenirFicheParticipant();\" >Modifier   </a>";
    result += "                                <a href='#'class='category' cid='supprimer' onClick=\" supprimerParticipant();FormulaireR();listerParticipants();infoUser();\">supprimer  </a>";
    result += "                             <a href='#'class='category' cid='detail' onClick=\" detailParticipant();\">details   </a>";

    result += "                                </div>";

    result += "                                </div>";

    result += "            </div>";
   


    
    result += "<input type='hidden' name='item_name_1' value='dqd'>";
    result += "<input type='hidden' name='item_number_1' value='1'>";
    result += "<input type='hidden' name='amount_1' id='amount' value='50'>";
    result += "<input type='hidden' name='quantity_1' value='1'>";
    result += "<input type='hidden' name='return' value='http://localhost/project1/payment_success.php'/>";
    result += "<input type='hidden' name='notify_url' value='http://localhost/project1/payment_success.php'>";
    result += "<input type='hidden' name='cancel_return' value='http://localhost/project1/cancel.php'/>";
    result += "<input type='hidden' name='currency_code' value='USD'/>";
    result += "<input type='hidden' name='custom' value='Monarela'/>";
    result += "<input style='float:right;margin-right:80px;' type='image' name='submit'";
    result += "src='https://www.paypalobjects.com/webstatic/en_US/i/btn/png/blue-rect-paypalcheckout-60px.png' alt='PayPal '";
    result += "alt='PayPal - The safer, easier way to pay online'>";

    //******************************************************
    result += "                <br>";
    result += "                <br>";

    result += "  </form>";
    result += " </div>";


    $('#get_result').html(result);

}




function listerR(listetheme) {
    var taille;
    /*var rep="<div class='table-users' style='overflow: scroll; height: 500px;'>";
     rep+="<div class='header'>Liste des films<span style='float:right;padding-right:10px;cursor:pointer;' onClick=\"$('#contenu').hide();\">X</span></div>";
     rep+="<table cellspacing='0'>";
     rep+="<tr><th>NUMERO</th><th>TITRE</th><th>DUREE</th><th>REALISATEUR</th><th>POCHETTE</th></tr>";
     taille=listetheme.length;
     for(var i=0; i<taille; i++){
     rep+="<tr><td>"+listetheme[i].idf+"</td><td>"+listetheme[i].titre+"</td><td>"+listetheme[i].duree+"</td><td>"+listetheme[i].res+"</td><td><img src='pochettes/"+listFilms[i].pochette+"' width=80 height=80></td></tr>";		 
     }    
     rep+="</table>";
     rep+="</div>";
     $('#contenu').html(rep);*/
    //**********************
    taille = listetheme.length;
    var result = "";

    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].nom + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a  href=\"afficherDetail.php?name=" + listetheme[i].id + "\" class=\"thumbnail\">	<img src='pochettes/" + listetheme[i].image + "' style='width:400px; height:300px;'></a>";
        result += "</div>";

        result += "</div>";
        result += "</div>";
    }



    $('#get_result').html(result);

}

//lister particpant
function listerP(listeParticpants) {
    var taille = listeParticpants.length;
    ;
    var rep = "<div class='form-group row'>";
    rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";

    for (var i = 0; i < taille; i++) {
        rep += "<option value='" + listeParticpants[i].idparticipants + ":" + listeParticpants[i].nom + "'>" + listeParticpants[i].nom + "</option>";
    }

    rep += "                                    </select>    ";
    rep += "                                </div>";
    rep += "                            </div>";


    $('#vuePart').html(rep);
}


function previewForm(reponse){
    
    
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
var reservationVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);

            break;

        case "lister" :
            listerR(reponse.listetheme);
            break;

        case "listerParticipant" :
            listerP(reponse.listetheme);
            break;
        case "formulaire" :
            formulaireR();
            break;
            case "previewForm" :
            previewForm(reponse);
            break;



    }
}




function afficherDivParticipant(result) {
    result = "";
    result += "                  <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 20px\" >";
    result += "					<div class=\"form-group row\">";
    result += "                          <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\">Nom</label>";
    result += "                                <div class=\"col-sm-10\">";
    result += "                                    <input type=\"text\" class=\"form-control\" id=\"nomParticipant\" name=\"nomParticipant\" placeholder=\"Entrer nom du participant\" required>";
    result += "                                </div>";
    result += "                            </div>";
    result += "                            <div class=\"form-group row\">";
    result += "                                <label for=\"prenomParticipant\" class=\"col-sm-2 col-form-label\">Prénom</label>";
    result += "                                <div class=\"col-sm-10\">";
    result += "                                    <input type=\"text\" class=\"form-control\" id=\"prenomParticipant\" name=\"prenomParticipant\" placeholder=\"Entrer prénom    du participant\" required>";
    result += "                                </div>";
    result += "                            </div>";

    result += "                            <div class=\"form-group row\">";
    result += "                                <label for=\"sexeParticipant\" class=\"col-sm-2 col-form-label\">Sexe</label>";
    result += "                                <div class=\"col-sm-10\" >";
    result += "                                    <select class=\"form-control\" id=\"sexeParticipant\" name=\"sexeParticipant\" required>";
    result += "                                        <option></option>";
    result += "                                        <option>Femme</option>";
    result += "                                        <option>Homme</option>";
    result += "                                        <option>Autre</option>";
    result += "                                    </select>    ";
    result += "                                </div>";
    result += "                            </div>";
    result += "                            <div class=\"form-group row\">";
    result += "                                <label for=\"courielParticipant\" class=\"col-sm-2 col-form-label\">Courriel</label>";
    result += "                                <div class=\"col-sm-10\">";
    result += "                                    <input type=\"text\" class=\"form-control\" id=\"courielParticipant\" name=\"courielParticipant\" placeholder=\"Entrer courriel du participant\" required>";
    result += "                                </div>";
    result += "                            </div>";


    result += "                            <div class=\"form-group row\">";
    result += "                                <label for=\"paysParticipant\" class=\"col-sm-2 col-form-label\">Pays</label>";
    result += "                                <div class=\"col-sm-10\">";
    result += "                                    <select class=\"form-control\"  id=\"paysParticipant\" name=\"paysParticipant\" required>";
    result += "                                        <option value=\"\">Pays...</option>";
    result += "                                        <option value=\"AF\">Afghanistan</option>";
    result += "                                  <option value=\"AL\">Albania</option>";
    result += "                            <option value=\"DZ\">Algeria</option>";
    result += "                      <option value=\"AS\">American Samoa</option>";
    result += "                <option value=\"AD\">Andorra</option>";
    result += "          <option value=\"AG\">Angola</option>";
    result += "    <option value=\"AI\">Anguilla</option>";

    result += "                                        <option value=\"AR\">Argentina</option>";
    result += "                                  <option value=\"AA\">Armenia</option>";
    result += "                            <option value=\"AW\">Aruba</option>";
    result += "                      <option value=\"AU\">Australia</option>";
    result += "                <option value=\"AT\">Austria</option>";
    result += "          <option value=\"AZ\">Azerbaijan</option>";
    result += "    <option value=\"BS\">Bahamas</option>";
    result += "                                        <option value=\"BH\">Bahrain</option>";
    result += "                                  <option value=\"BD\">Bangladesh</option>";
    result += "                            <option value=\"BB\">Barbados</option>";
    result += "                      <option value=\"BY\">Belarus</option>";
    result += "                <option value=\"BE\">Belgium</option>";
    result += "          <option value=\"BZ\">Belize</option>";
    result += "    <option value=\"BJ\">Benin</option>";
    result += "                                        <option value=\"BM\">Bermuda</option>";
    result += "                                        <option value=\"BT\">Bhutan</option>";
    result += "                                        <option value=\"BO\">Bolivia</option>";
    result += "                                  <option value=\"BL\">Bonaire</option>";
    result += "                            <option value=\"BA\">Bosnia &amp; Herzegovina </option>";
    result += "                                        <option value=\"BW\">Botswana</option>";
    result += "                                  <option value=\"BR\">Brazil</option>";
    result += "                            <option value=\"BC\">British Indian Ocean Ter</option>";
    result += "                                        <option value=\"BN\">Brunei</option>";
    result += "                                  <option value=\"BG\">Bulgaria</option>";
    result += "                            <option value=\"BF\">Burkina Faso</option>";
    result += "                      <option value=\"BI\">Burundi</option>";
    result += "                <option value=\"KH\">Cambodia</option>";
    result += "          <option value=\"CM\">Cameroon</option>";
    result += "    <option value=\"CA\">Canada</option>";
    result += "                                        <option value=\"IC\">Canary Islands</option>";
    result += "                                  <option value=\"CV\">Cape Verde</option>";
    result += "                            <option value=\"KY\">Cayman Islands</option>";
    result += "                      <option value=\"CF\">Central African Republic</option>";
    result += "                <option value=\"TD\">Chad</option>";
    result += "          <option value=\"CD\">Channel Islands</option>";
    result += "    <option value=\"CL\">Chile</option>";
    result += "                                        <option value=\"CN\">China</option>";
    result += "                                  <option value=\"CI\">Christmas Island</option>";
    result += "                            <option value=\"CS\">Cocos Island</option>";
    result += "                      <option value=\"CO\">Colombia</option>";
    result += "                <option value=\"CC\">Comoros</option>";
    result += "          <option value=\"CG\">Congo</option>";
    result += "    <option value=\"CK\">Cook Islands</option>";
    result += "                                        <option value=\"CR\">Costa Rica</option>";
    result += "                                  <option value=\"CT\">Cote D\'Ivoire</option>";
    result += "                            <option value=\"HR\">Croatia</option>";
    result += "                      <option value=\"CU\">Cuba</option>";
    result += "                <option value=\"CB\">Curacao</option>";
    result += "          <option value=\"CY\">Cyprus</option>";
    result += "    <option value=\"CZ\">Czech Republic</option>";
    result += "<option value=\"DK\">Denmark</option>";
    result += "                                        <option value=\"DJ\">Djibouti</option>";
    result += "                                  <option value=\"DM\">Dominica</option>";
    result += "                            <option value=\"DO\">Dominican Republic</option>";
    result += "                      <option value=\"TM\">East Timor</option>";
    result += "                <option value=\"EC\">Ecuador</option>";
    result += "          <option value=\"EG\">Egypt</option>";
    result += "    <option value=\"SV\">El Salvador</option>";

    result += "                                    </select>";
    result += "                          </div>";
    result += "                </div>";
    result += "          <div class=\"form-group row\">";
    result += "        <label for=\"villeParticipant\" class=\"col-sm-2 col-form-label\">Ville</label>";
    result += "  <div class=\"col-sm-10\">";
    result += "                                    <input type=\"text\" class=\"form-control\" id=\"villeParticipant\" name=\"villeParticipant\" placeholder=\"Entrer ville du participant\">";
    result += "                          </div>";
    result += "                </div>";
    result += "          <div class=\"form-group row\">";
    result += "        <label for=\"codePostalParticipant\" class=\"col-sm-2 col-form-label\">Code Postal</label>";
    result += "  <div class=\"col-sm-10\">";
    result += "<input type=\"text\" class=\"form-control\" id=\"codePostalParticipant\" name=\"codePostalParticipant\" placeholder=\"Entrer code postal du participant\">";
    result += "                                </div>";
    result += "                      </div>";

    result += "                <div class=\"form-group row\" >";
    result += "             <label for=\"tel\" class=\"col-sm-2 col-form-label titrepass\">Tel</label>";
    result += "       <div class=\"col-sm-10 contenupass\">";
    result += "     <input type=\"text\" class=\"form-control\" id=\"tel\" name=\"tel\" placeholder=\"Entrer telephone\" required>";
    result += "                                </div>";
    result += "                      </div>";

    result += "                <div class=\"form-group row\" >";
    result += "             <label for=\"fax\" class=\"col-sm-2 col-form-label titrepass\">Fax</label>";
    result += "       <div class=\"col-sm-10 contenupass\">";
    result += "     <input type=\"text\" class=\"form-control\" id=\"fax\" name=\"fax\" placeholder=\"Entrer Fax\" required>";
    result += "                                </div>";
    result += "                      </div>";
    result += "                      </div>";



    result += "                        <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
    result += "                      <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\" style=\" width: 100%; float: left\">Informations sur le passeport</label>";
    result += "                <br><br>";
    result += "          <div class=\"form-group row\" >";
    result += "        <label for=\"numeroPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Numéro</label>";
    result += "  <div class=\"col-sm-10 contenupass\" >";
    result += "<input type=\"text\" class=\"form-control \" id=\"numeroPasseport\" name=\"numeroPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
    result += "                                </div>";
    result += "                      </div>";
    result += "                <div class=\"form-group row\" >";
    result += "              <label for=\"dateDelPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Date délivrance</label>";
    result += "        <div class=\"col-sm-10 contenupass\" >";
    result += "      <input type=\"text\" class=\"form-control\" id=\"dateDelPasseport\" name=\"dateDelPasseport\" placeholder=\"Entrer Date de délivrance du passeport\" required>";
    result += "                                </div>";
    result += "                      </div>";
    result += "                <div class=\"form-group row\" >";
    result += "              <label for=\"dateExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Date expiration</label>";
    result += "        <div class=\"col-sm-10 contenupass\">";
    result += "      <input type=\"text\" class=\"form-control\" id=\"dateExpPasseport\" name=\"dateExpPasseport\" placeholder=\"Entrer date dèxpération du passeport\" required>";
    result += "                                </div>";
    result += "                      </div>";
    result += "                <div class=\"form-group row\" >";
    result += "              <label for=\"delivrerAExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Délivré à</label>";
    result += "        <div class=\"col-sm-10 contenupass\">";
    result += "      <input type=\"text\" class=\"form-control\" id=\"delivrerAExpPasseport\" name=\"delivrerAExpPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
    result += "                                </div>";
    result += "                      </div>";
    result += "                <div class=\"form-group row\" >";
    result += "             <label for=\"nationalite\" class=\"col-sm-2 col-form-label titrepass\">Nationalité</label>";
    result += "       <div class=\"col-sm-10 contenupass\">";
    result += "     <input type=\"text\" class=\"form-control\" id=\"nationalite\" name=\"nationalite\" placeholder=\"Entrer la nationalité\" required>";
    result += "                                </div>";
    result += "                      </div>";

    result += "                      </div>";
    return result;
}

function ajoutCategorie(nom, label, result) {
    result = "";
    result += "                            <div class=\"form-group row\">";
    result += "                                <label for=" + nom + " class=\"col-sm-2 col-form-label\">" + label + "</label>";
    result += "                                <div class=\"col-sm-10\" >";
    result += "                                    <select class=\"form-control\" id=" + nom + " name=" + nom + " required>";
    //result += "                                        <option></option>";
    for (var i = 0; i < 11; i++) {

        result += "   <option value='" + i + "'>" + i + "<\/option>";

    }

    result += "                                    </select>    ";
    result += "                                </div>";
    result += "                            </div>";

    return result;

}

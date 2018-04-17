//vue films
function listerP(listeParticpants) {
    var taille = listeParticpants.length;
    ;
    var rep = "<div class='form-group row'>";
    rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";
    rep += "                                        <option></option>";
    for (var i = 0; i < taille; i++) {
        rep += "<option value='" + listeParticpants[i].nom + "'>" + listeParticpants[i].nom + "</option>";
    }

    rep += "                                    </select>    ";
    rep += "                                </div>";
    rep += "                            </div>";
    rep += "<input type=\"button\" class=\"btn\" value=\"Modifier\" onClick=\" modifier();\" style=\"float: right; \"><br><br>";
    rep += "<input type=\"button\" class=\"btn\" value=\"Supprimer\" onClick=\" supprimer();\" style=\"float: right; \">";

    $('#get_result').html(rep);

}

//function listerP(listeParticpants) {
//    var taille = listeParticpants.length;
//    ;
//    var rep = "<div class='form-group row'>";
//    rep += "                                <label for=\"listParticipant\" class=\"col-sm-2 col-form-label\">Liste Participants</label>";
//    rep += "                                <div class=\"col-sm-10\" >";
//    rep += "                                    <select class=\"form-control\" id=\"listParticipant\" name=\"listParticipant\" required>";
//    rep += "                                        <option></option>";
//    for (var i = 0; i < taille; i++) {
//        rep += "<option value=" + listeParticpants[i].nom + ">" + listeParticpants[i].nom + "</option>";
//    }
//
//    rep += "                                    </select>    ";
//    rep += "                                </div>";
//    rep += "                            </div>";
//    rep += "<input type=\"button\" class=\"btn\" value=\"Modifier\" onClick=\" modifier();\" style=\"float: right; \"><br><br>";
//    rep += "<input type=\"button\" class=\"btn\" value=\"Supprimer\" onClick=\" supprimer();\" style=\"float: right; \">";
//
//    $('#get_result').html(rep);
//}



function afficherFormParticipant(reponse) {
    var NbAdulte = reponse.adulte;
    var NbEnfant = reponse.enfant;
    var NbBebe = reponse.bebe;
    var nomParticipant = reponse.nomParticipant;
    var idUtilisateur = reponse.idUtilisateur;
    var prenomParticipant = reponse.prenomParticipant;
    var sexeParticipant = reponse.sexeParticipant;
    var courielParticipant = reponse.courielParticipant;
    //var memeAdresse = reponse.memeAdresse;
    var paysParticipant = reponse.paysParticipant;
    var villeParticipant = reponse.villeParticipant;
    var codePostalParticipant = reponse.codePostalParticipant;
    var numeroPasseport = reponse.numeroPasseport;
    var dateDelPasseport = reponse.dateDelPasseport;
    var delivrerAExpPasseport = reponse.delivrerAExpPasseport;
    var dateExpPasseport = reponse.dateExpPasseport;
    var nationalite = reponse.nationalite;
    var telPostalParticipant = reponse.telPostalParticipant;
    var prix = reponse.prix;

    var rep = "";
    rep += "                <div class=\"container-fluid\" >";
    rep += "                    <form id=\"contenuParticpants\"class=\"form-group row\" >";
    rep += "                    <input type=\"hidden\" name=\"prixhidden\" id=\"prixhidden\" value=\"" + prixTotal + "\"/>";
    rep += "                    <input type=\"hidden\" name=\"idCircuitHidden\" id=\"idCircuitHidden\" value=\"" + idCircuit + "\"/>";
    rep += "                    <input type=\"hidden\" name=\"NbAdulte\" value=\"" + NbAdulte + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"NbEnfant\" value=\"" + NbEnfant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"NbBebe\" value=\"" + NbBebe + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"nomParticipant\" value=\"" + nomParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"idUtilisateur\" value=\"" + idUtilisateur + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"prenomParticipant\" value=\"" + prenomParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"sexeParticipant\" value=\"" + sexeParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"courielParticipant\" value=\"" + courielParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"paysParticipant\" value=\"" + paysParticipant + "\" \/>";
    //rep += "                    <input type=\"hidden\" name=\"memeAdresse\" value=\"" + memeAdresse + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"villeParticipant\" value=\"" + villeParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"codePostalParticipant\" value=\"" + codePostalParticipant + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"numeroPasseport\" value=\"" + numeroPasseport + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"dateDelPasseport\" value=\"" + dateDelPasseport + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"delivrerAExpPasseport\" value=\"" + delivrerAExpPasseport + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"dateExpPasseport\" value=\"" + dateExpPasseport + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"nationalite\" value=\"" + nationalite + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"telPostalParticipant\" value=\"" + telPostalParticipant + "\" \/>";
    for (var i = 1; i <= NbAdulte; i++) {
        rep += "                <div class=\"container-fluid\" style=\'float: left;'>";
        rep += " <h3>Adulte Numéro " + i + "</h3>";
        rep = formParticipant(rep, "Adulte" + i);
        rep += "                </div>";
        rep += "<hr class='ligne_horizontal'>";
        rep += "<br><br><br>";

    }
    for (var i = 1; i <= NbEnfant; i++) {
        rep += "                <div class=\"container-fluid\" style=\'float: left;'>";
        rep += " <h3  >Enfant Numéro " + i + "</h3>";
        rep = formParticipant(rep, "Enfant" + i);
        rep += "                </div>";
        rep += "<hr class='ligne_horizontal'>";

        rep += "<br><br><br>";

    }
    for (var i = 1; i <= NbBebe; i++) {
        rep += "                <div class=\"container-fluid\" style=\'float: left;'>";
        rep += " <h3  >Bébé Numéro " + i + "</h3>";
        rep = formParticipant(rep, "Bebe" + i);
        rep += "                </div>";
        rep += "<hr class='ligne_horizontal'>";
        rep += "<br><br><br>";

    }
    rep += "<input type=\"button\" class=\"btn\" value=\"Ajouter participants\" onClick=\" enregistrer(); formulaireR();listerParticipants();infoUser();\" style=\"float: right; \">";
    rep += "                <br>";
    rep += "                <br>";
    rep += "  </form>";

    rep += "                    </div>";
    $('#sommaire').text("Ajout participants");
    $('#get_result').html(rep);
    $(function () {
        $('[id^="date_"]').datepicker();
    });
}

function afficherDetailPart(reponse) {

    var rep = "";
    rep += "                <div class=\"container-fluid\" >";
    rep += "                    <form id=\"contenuModifierParticipant\"class=\"form-group row\" >";
    rep += "                    <input type=\"hidden\" name=\"idAdresse\" value=\"" + reponse.detailParticipant.idAdresse + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"idPasseport\" value=\"" + reponse.detailParticipant.idPasspor + "\" \/>";
    rep += "                    <input type=\"hidden\" name=\"idParticipant\" value=\"" + reponse.detailParticipant.idparticipants + "\" \/>";
    rep = formParticipant(rep, "");
    rep += "<input id='retourRes' type=\"button\" class=\"btn\" value=\"Retour réservation\" onClick=\"formulaireR();listerParticipants();infoUser();\" style=\"float: right;\">";
    rep += "                    </div>";//fin div form
    rep += "<input id='modifierPart' type=\"button\" class=\"btn\" value=\"Modifier participants\" onClick=\" modifierParticipant(); formulaireR();listerParticipants();infoUser();\" style=\"float: right; display:none;\">";
    rep += "                    </div>";//fin div form
    rep += "                    </div>";//fin div container
    $('#sommaire').text("detail participant " + reponse.detailParticipant.nom);

    $('#get_result').html(rep);

}

/****************************************************************************************************************/
                                                    /*debut switch
/****************************************************************************************************************/

var filmsVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
        case "enleverParticpant" :
        case "modifier" :
            message(reponse.msg);
            break;
        case "lister" :
            listerP(reponse.listeParticpants);
            break;
        case "afficherFormulaire" :
            $('#get_result').html(reponse.msg);
            break;
        case "fiche" :
            afficherFiche(reponse);
            break;
        case "afficherParticipant" :
            afficherFormParticipant(reponse);
            break;
        case "detail" :
            afficherDetailPart(reponse);
            break;

    }
}
/****************************************************************************************************************/
                                                    /*fin switch
/****************************************************************************************************************/

function formParticipant(rep, numeroParticipant) {



    rep += "                          <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 20px\" >";
    rep += "				<div class=\"form-group row\">";
    rep += "                                  <label for=\"nomParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Nom </label>";
    rep += "                                    <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"nomParticipant" + numeroParticipant + "\" name=\"nomParticipant" + numeroParticipant + "\" placeholder=\"Entrer nom du participant\" required>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"prenomParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Prénom</label>";
    rep += "                                    <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"prenomParticipant" + numeroParticipant + "\" name=\"prenomParticipant" + numeroParticipant + "\" placeholder=\"Entrer prénom    du participant\" required>";
    rep += "                                    </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"sexeParticipant\" id='labelSexe' class=\"col-sm-2 col-form-label\">Sexe</label>";
    rep += "                                <div class=\"col-sm-10\" >";
    rep += "                                    <select class=\"form-control\" id=\"sexeParticipant" + numeroParticipant + "\" name=\"sexeParticipant" + numeroParticipant + "\" required>";
    rep += "                                        <option></option>";
    rep += "                                        <option>Femme</option>";
    rep += "                                        <option>Homme</option>";
    rep += "                                        <option>Autre</option>";
    rep += "                                    </select>    ";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"courielParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Couriel</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"courielParticipant" + numeroParticipant + "\" name=\"courielParticipant" + numeroParticipant + "\" placeholder=\"Entrer courriel du participant\" required>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"memeAdresse" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Même adresse</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                <div class=\"form-check\">";
    rep += "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse" + numeroParticipant + "\" id=\"oui\" value=\"option1\" >";
    rep += "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Oui</label>";
    rep += "                                   </div>";

    rep += "                                   <div class=\"form-check\">";
    rep += "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse" + numeroParticipant + "\" id=\"non\" value=\"option2\" checked>";
    rep += "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Non</label>";
    rep += "                                </div>";
    rep += "                                </div>";
    rep += "                            </div>";

    rep += "                            <div class=\"form-group row\">";
    rep += "                                <label for=\"paysParticipant" + numeroParticipant + "\" id='labelPays' class=\"col-sm-2 col-form-label\">Pays</label>";
    rep += "                                <div class=\"col-sm-10\">";
    rep += "                                    <select class=\"form-control\"  id=\"paysParticipant" + numeroParticipant + "\" name=\"paysParticipant" + numeroParticipant + "\" required>";
    rep += "                                        <option value=\"\">Pays...</option>";
    rep += "                                        <option value=\"AF\">Afghanistan</option>";
    rep += "                                  <option value=\"AL\">Albania</option>";
    rep += "                            <option value=\"DZ\">Algeria</option>";
    rep += "                      <option value=\"AS\">American Samoa</option>";
    rep += "                <option value=\"AD\">Andorra</option>";
    rep += "          <option value=\"AG\">Angola</option>";
    rep += "    <option value=\"AI\">Anguilla</option>";

    rep += "                                        <option value=\"AR\">Argentina</option>";
    rep += "                                  <option value=\"AA\">Armenia</option>";
    rep += "                            <option value=\"AW\">Aruba</option>";
    rep += "                      <option value=\"AU\">Australia</option>";
    rep += "                <option value=\"AT\">Austria</option>";
    rep += "          <option value=\"AZ\">Azerbaijan</option>";
    rep += "    <option value=\"BS\">Bahamas</option>";
    rep += "                                        <option value=\"BH\">Bahrain</option>";
    rep += "                                  <option value=\"BD\">Bangladesh</option>";
    rep += "                            <option value=\"BB\">Barbados</option>";
    rep += "                      <option value=\"BY\">Belarus</option>";
    rep += "                <option value=\"BE\">Belgium</option>";
    rep += "          <option value=\"BZ\">Belize</option>";
    rep += "    <option value=\"BJ\">Benin</option>";
    rep += "                                        <option value=\"BM\">Bermuda</option>";
    rep += "                                        <option value=\"BT\">Bhutan</option>";
    rep += "                                        <option value=\"BO\">Bolivia</option>";
    rep += "                                  <option value=\"BL\">Bonaire</option>";
    rep += "                            <option value=\"BA\">Bosnia &amp; Herzegovina </option>";
    rep += "                                        <option value=\"BW\">Botswana</option>";
    rep += "                                  <option value=\"BR\">Brazil</option>";
    rep += "                            <option value=\"BC\">British Indian Ocean Ter</option>";
    rep += "                                        <option value=\"BN\">Brunei</option>";
    rep += "                                  <option value=\"BG\">Bulgaria</option>";
    rep += "                            <option value=\"BF\">Burkina Faso</option>";
    rep += "                      <option value=\"BI\">Burundi</option>";
    rep += "                <option value=\"KH\">Cambodia</option>";
    rep += "          <option value=\"CM\">Cameroon</option>";
    rep += "    <option value=\"CA\">Canada</option>";
    rep += "                                        <option value=\"IC\">Canary Islands</option>";
    rep += "                                  <option value=\"CV\">Cape Verde</option>";
    rep += "                            <option value=\"KY\">Cayman Islands</option>";
    rep += "                      <option value=\"CF\">Central African Republic</option>";
    rep += "                <option value=\"TD\">Chad</option>";
    rep += "          <option value=\"CD\">Channel Islands</option>";
    rep += "    <option value=\"CL\">Chile</option>";
    rep += "                                        <option value=\"CN\">China</option>";
    rep += "                                  <option value=\"CI\">Christmas Island</option>";
    rep += "                            <option value=\"CS\">Cocos Island</option>";
    rep += "                      <option value=\"CO\">Colombia</option>";
    rep += "                <option value=\"CC\">Comoros</option>";
    rep += "          <option value=\"CG\">Congo</option>";
    rep += "    <option value=\"CK\">Cook Islands</option>";
    rep += "                                        <option value=\"CR\">Costa Rica</option>";
    rep += "                                  <option value=\"CT\">Cote D\'Ivoire</option>";
    rep += "                            <option value=\"HR\">Croatia</option>";
    rep += "                      <option value=\"CU\">Cuba</option>";
    rep += "                <option value=\"CB\">Curacao</option>";
    rep += "          <option value=\"CY\">Cyprus</option>";
    rep += "    <option value=\"CZ\">Czech Republic</option>";
    rep += "<option value=\"DK\">Denmark</option>";
    rep += "                                        <option value=\"DJ\">Djibouti</option>";
    rep += "                                  <option value=\"DM\">Dominica</option>";
    rep += "                            <option value=\"DO\">Dominican Republic</option>";
    rep += "                      <option value=\"TM\">East Timor</option>";
    rep += "                <option value=\"EC\">Ecuador</option>";
    rep += "          <option value=\"EG\">Egypt</option>";
    rep += "    <option value=\"SV\">El Salvador</option>";

    rep += "                                    </select>";
    rep += "                          </div>";
    rep += "                </div>";
    rep += "          <div class=\"form-group row\">";
    rep += "        <label for=\"villeParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Ville</label>";
    rep += "  <div class=\"col-sm-10\">";
    rep += "                                    <input type=\"text\" class=\"form-control\" id=\"villeParticipant" + numeroParticipant + "\" name=\"villeParticipant" + numeroParticipant + "\" placeholder=\"Entrer ville du participant\">";
    rep += "                          </div>";
    rep += "                </div>";
    rep += "          <div class=\"form-group row\">";
    rep += "        <label for=\"codePostalParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Code Postal</label>";
    rep += "  <div class=\"col-sm-10\">";
    rep += "<input type=\"text\" class=\"form-control\" id=\"codePostalParticipant" + numeroParticipant + "\" name=\"codePostalParticipant" + numeroParticipant + "\" placeholder=\"Entrer code postal du participant\">";
    rep += "                                </div>";
    rep += "                      </div>";

    rep += "           <div class=\"form-group row\">";
    rep += "               <label for=\"telPostalParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\">Téléphone</label>";
    rep += "               <div class=\"col-sm-10\">";
    rep += "                   <input type=\"text\" class=\"form-control\" id=\"telPostalParticipant" + numeroParticipant + "\" name=\"telPostalParticipant" + numeroParticipant + "\" placeholder=\"Entrer téléphone du participant\">";
    rep += "               </div>";
    rep += "           </div>";

    rep += "            </div>   ";


    rep += "                        <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
    rep += "                      <label for=\"nomParticipant" + numeroParticipant + "\" class=\"col-sm-2 col-form-label\" style=\" width: 100%; float: left\">Informations sur le passeport</label>";
    rep += "                <br><br>";
    rep += "          <div class=\"form-group row\" >";
    rep += "        <label for=\"numeroPasseport" + numeroParticipant + "\" class=\"col-sm-2 col-form-label titrepass\" >Numéro</label>";
    rep += "  <div class=\"col-sm-10 contenupass\" >";
    rep += "<input type=\"text\" class=\"form-control \" id=\"numeroPasseport" + numeroParticipant + "\" name=\"numeroPasseport" + numeroParticipant + "\" placeholder=\"Entrer Numéro du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"dateDelPasseport" + numeroParticipant + "\" class=\"col-sm-2 col-form-label titrepass\" >Date délivrance</label>";
    rep += "        <div class=\"col-sm-10 contenupass\" >";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"dateDelPasseport" + numeroParticipant + "\" name=\"dateDelPasseport" + numeroParticipant + "\" placeholder=\"Entrer Date de délivrance du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"dateExpPasseport" + numeroParticipant + "\" class=\"col-sm-2 col-form-label titrepass\">Date expiration</label>";
    rep += "        <div class=\"col-sm-10 contenupass\">";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"dateExpPasseport" + numeroParticipant + "\" name=\"dateExpPasseport" + numeroParticipant + "\" placeholder=\"Entrer date dèxpération du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "              <label for=\"delivrerAExpPasseport" + numeroParticipant + "\" class=\"col-sm-2 col-form-label titrepass\">Délivré à</label>";
    rep += "        <div class=\"col-sm-10 contenupass\">";
    rep += "      <input type=\"text\" class=\"form-control\" id=\"delivrerAExpPasseport" + numeroParticipant + "\" name=\"delivrerAExpPasseport" + numeroParticipant + "\" placeholder=\"Entrer Numéro du passeport\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "                <div class=\"form-group row\" >";
    rep += "             <label for=\"nationalite" + numeroParticipant + "\" class=\"col-sm-2 col-form-label titrepass\">Nationalité</label>";
    rep += "       <div class=\"col-sm-10 contenupass\">";
    rep += "     <input type=\"text\" class=\"form-control\" id=\"nationalite" + numeroParticipant + "\" name=\"nationalite" + numeroParticipant + "\" placeholder=\"Entrer la nationalité\" required>";
    rep += "                                </div>";
    rep += "                      </div>";
    rep += "            </div>";


    return rep;
}
<?php

session_start();
require_once "../includes/modele.inc.php";
$tabRes = array();

function enregistrer() {

    global $tabRes;

    $NbAdulte = $_POST['NbAdulte'];
    $NbEnfant = $_POST['NbEnfant'];
    $NbBebe = $_POST['NbBebe'];
    $idUtilisateur = $_SESSION['idUtilisateur'];
    $prix = $_POST['prixhidden'];
    $idCircuit = $_SESSION['idCircuit'];
    $tabRes['prixCircuit'] = $prix;
    
    //information sur le participant principal
    $nomParticipant = $_POST['nomParticipant'];
    $prenomParticipant = $_POST['prenomParticipant'];
    $sexeParticipant = $_POST['sexeParticipant'];
    $courielParticipant = $_POST['courielParticipant'];
    $paysParticipant = $_POST['paysParticipant'];
    $villeParticipant = $_POST['villeParticipant'];
    $codePostalParticipant = $_POST['codePostalParticipant'];
    $numeroPasseport = $_POST['numeroPasseport'];
    $dateDelPasseport = $_POST['dateDelPasseport'];
    $delivrerAExpPasseport = $_POST['delivrerAExpPasseport'];
    $dateExpPasseport = $_POST['dateExpPasseport'];
    $nationalite = $_POST['nationalite'];
    $telephone = $_POST['telPostalParticipant'];
    $totalParticipant = $NbAdulte + $NbEnfant + $NbBebe + 1;
    $tabRes['existe'] = false;

    //requete réservation
    try {

        $requete = "SELECT count(*) as 'doublons' FROM reservation WHERE  idCircuit=? and idUtilisateur=?";
        $unModele = new circuitModel($requete, array($idCircuit, $idUtilisateur));
        $stmt = $unModele->executer();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $doublon = $ligne->doublons;
        }
        if ($doublon >= 1) {
            $tabRes['existe'] = true;
            return;
        }
    } catch (Exception $exc) {
        echo $exc;
    }

    try {

        $requete = "INSERT INTO reservation VALUES(0,?,?,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($prix, $totalParticipant, $NbAdulte, $NbEnfant, $NbBebe, date('Y-m-j H:i:s'), $idUtilisateur, $idCircuit, $prix));
        $stmt = $unModele->executer();
        $idReservation = $unModele->lastID;
    } catch (Exception $exc) {
        echo $exc;
    }

    //insertion du premier participant

    try {
        $requete = "INSERT INTO adresse VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant));
        $stmt = $unModele->executer();
        $idAdresse = $unModele->lastID;

        $requete = "INSERT INTO passeport VALUES(0,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport));
        $stmt = $unModele->executer();
        $idPasseport = $unModele->lastID;

        $requete = "INSERT INTO participants VALUES(0,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone, $idAdresse, $idPasseport));
        $stmt = $unModele->executer();
        $idParticipant = $unModele->lastID;

        $requete = "INSERT INTO reservationparticipant VALUES(?,?)";
        $unModele = new circuitModel($requete, array($idParticipant, $idReservation));
        $stmt = $unModele->executer();
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }

    if ($NbAdulte > 0) {
        for ($index = 1; $index <= $NbAdulte; $index++) {

            $nomParticipant = $_POST['nomParticipantAdulte' . $index];
            $prenomParticipant = $_POST['prenomParticipantAdulte' . $index];
            $sexeParticipant = $_POST['sexeParticipantAdulte' . $index];
            $courielParticipant = $_POST['courielParticipantAdulte' . $index];
            $memeAdresse = $_POST['memeAdresseAdulte' . $index];
            $paysParticipant = $_POST['paysParticipantAdulte' . $index];
            $villeParticipant = $_POST['villeParticipantAdulte' . $index];
            $codePostalParticipant = $_POST['codePostalParticipantAdulte' . $index];
            $numeroPasseport = $_POST['numeroPasseportAdulte' . $index];
            $dateDelPasseport = $_POST['dateDelPasseportAdulte' . $index];
            $delivrerAExpPasseport = $_POST['delivrerAExpPasseportAdulte' . $index];
            $dateExpPasseport = $_POST['dateExpPasseportAdulte' . $index];
            $nationalite = $_POST['nationaliteAdulte' . $index];
            $telephone = $_POST['telPostalParticipantAdulte' . $index];

            try {
                $requete = "INSERT INTO adresse VALUES(0,?,?,?)";
                $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant));
                $stmt = $unModele->executer();
                $idAdresse = $unModele->lastID;

                $requete = "INSERT INTO passeport VALUES(0,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport));
                $stmt = $unModele->executer();
                $idPasseport = $unModele->lastID;

                $requete = "INSERT INTO participants VALUES(0,?,?,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone, $idAdresse, $idPasseport));
                $stmt = $unModele->executer();
                $idParticipant = $unModele->lastID;

                $requete = "INSERT INTO reservationparticipant VALUES(?,?)";
                $unModele = new circuitModel($requete, array($idParticipant, $idReservation));
                $stmt = $unModele->executer();
            } catch (Exception $e) {
                echo $e;
            } finally {
                unset($unModele);
            }
        }
    }

    if ($NbEnfant > 0) {
        for ($index = 1; $index <= $NbEnfant; $index++) {

            $nomParticipant = $_POST['nomParticipantEnfant' . $index];
            $prenomParticipant = $_POST['prenomParticipantEnfant' . $index];
            $sexeParticipant = $_POST['sexeParticipantEnfant' . $index];
            $courielParticipant = $_POST['courielParticipantEnfant' . $index];
            $memeAdresse = $_POST['memeAdresseEnfant' . $index];
            $paysParticipant = $_POST['paysParticipantEnfant' . $index];
            $villeParticipant = $_POST['villeParticipantEnfant' . $index];
            $codePostalParticipant = $_POST['codePostalParticipantEnfant' . $index];
            $numeroPasseport = $_POST['numeroPasseportEnfant' . $index];
            $dateDelPasseport = $_POST['dateDelPasseportEnfant' . $index];
            $delivrerAExpPasseport = $_POST['delivrerAExpPasseportEnfant' . $index];
            $dateExpPasseport = $_POST['dateExpPasseportEnfant' . $index];
            $nationalite = $_POST['nationaliteEnfant' . $index];
            $telephone = $_POST['telPostalParticipantEnfant' . $index];

            try {
                $requete = "INSERT INTO adresse VALUES(0,?,?,?)";
                $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant));
                $stmt = $unModele->executer();
                $idAdresse = $unModele->lastID;

                $requete = "INSERT INTO passeport VALUES(0,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport));
                $stmt = $unModele->executer();
                $idPasseport = $unModele->lastID;

                $requete = "INSERT INTO participants VALUES(0,?,?,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone, $idAdresse, $idPasseport));
                $stmt = $unModele->executer();
                $idParticipant = $unModele->lastID;

                $requete = "INSERT INTO reservationparticipant VALUES(?,?)";
                $unModele = new circuitModel($requete, array($idParticipant, $idReservation));
                $stmt = $unModele->executer();
            } catch (Exception $e) {
                echo $e;
            } finally {
                unset($unModele);
            }
        }
    }

    if ($NbBebe > 0) {
        for ($index = 1; $index <= $NbBebe; $index++) {

            $nomParticipant = $_POST['nomParticipantBebe' . $index];
            $prenomParticipant = $_POST['prenomParticipantBebe' . $index];
            $sexeParticipant = $_POST['sexeParticipantBebe' . $index];
            $courielParticipant = $_POST['courielParticipantBebe' . $index];
            $memeAdresse = $_POST['memeAdresseBebe' . $index];
            $paysParticipant = $_POST['paysParticipantBebe' . $index];
            $villeParticipant = $_POST['villeParticipantBebe' . $index];
            $codePostalParticipant = $_POST['codePostalParticipantBebe' . $index];
            $numeroPasseport = $_POST['numeroPasseportBebe' . $index];
            $dateDelPasseport = $_POST['dateDelPasseportBebe' . $index];
            $delivrerAExpPasseport = $_POST['delivrerAExpPasseportBebe' . $index];
            $dateExpPasseport = $_POST['dateExpPasseportBebe' . $index];
            $nationalite = $_POST['nationaliteBebe' . $index];
            $telephone = $_POST['telPostalParticipantBebe' . $index];

            try {
                $requete = "INSERT INTO adresse VALUES(0,?,?,?)";
                $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant));
                $stmt = $unModele->executer();
                $idAdresse = $unModele->lastID;

                $requete = "INSERT INTO passeport VALUES(0,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport));
                $stmt = $unModele->executer();
                $idPasseport = $unModele->lastID;

                $requete = "INSERT INTO participants VALUES(0,?,?,?,?,?,?,?)";
                $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone, $idAdresse, $idPasseport));
                $stmt = $unModele->executer();
                $idParticipant = $unModele->lastID;

                $requete = "INSERT INTO reservationparticipant VALUES(?,?)";
                $unModele = new circuitModel($requete, array($idParticipant, $idReservation));
                $stmt = $unModele->executer();
            } catch (Exception $e) {
                echo $e;
            } finally {
                unset($unModele);
            }
        }
    }
    $tabRes['action'] = "enregistrer";

    $tabRes['msg'] = "Participant bien enregistré";
}

//create dynamic  form with jquery php mysql
//http://talkerscode.com/webtricks/create-dynamic-form-using-php-jquery-and-mysql.php

function lister() {
    global $tabRes;
    $tabRes['action'] = "lister";

    $requete = "SELECT * FROM participants";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listeFilms'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeFilms'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function listerParticipant() {
    global $tabRes;
    $tabRes['action'] = "lister";
    $idUtilisateur = $_SESSION['idUtilisateur'];
    $idCircuit = $_SESSION['idCircuit'];
    $requete = "select * FROM participants P, reservation R, reservationparticipant V, adresse A, passeport S WHERE
                        P.idparticipants = V.idParticipants and
                        R.idReservation = V.idReservation and
                        P.idAdresse=A.idAdresse and
                        P.idPasspor=S.idPasspor and
                        R.idCircuit = ? and
                        R.idUtilisateur = ? ";

    // $requete = "SELECT * FROM participants";
    try {
        $unModele = new circuitModel($requete, array($idCircuit, $idUtilisateur));
        $stmt = $unModele->executer();
        $tabRes['listeParticpants'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeParticpants'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function afficher() {
    global $tabRes;
//    $adulte = $_POST["NombreAdulte"];
    //    $enfant = $_POST["NombreEnfant"];
    //    $bebe = $_POST["NombreBebe"];
    try {

        $tabRes['action'] = "afficherFormulaire";

        $rep = "";

        $rep .= "                <div class=\"container-fluid\" >";
        $rep .= "                    <form id=\"contenuParticpants\"class=\"form-group row\" >";

        $rep .= "                          <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 20px\" >";
        $rep .= "				<div class=\"form-group row\">";
        $rep .= "                                  <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\">Nom</label>";
        $rep .= "                                    <div class=\"col-sm-10\">";
        $rep .= "                                    <input type=\"text\" class=\"form-control\" id=\"nomParticipant\" name=\"nomParticipant\" placeholder=\"Entrer nom du participant\" required>";
        $rep .= "                                </div>";
        $rep .= "                            </div>";

        $rep .= "                            <div class=\"form-group row\">";
        $rep .= "                                <label for=\"prenomParticipant\" class=\"col-sm-2 col-form-label\">Prénom</label>";
        $rep .= "                                    <div class=\"col-sm-10\">";
        $rep .= "                                    <input type=\"text\" class=\"form-control\" id=\"prenomParticipant\" name=\"prenomParticipant\" placeholder=\"Entrer prénom    du participant\" required>";
        $rep .= "                                    </div>";
        $rep .= "                            </div>";

        $rep .= "                            <div class=\"form-group row\">";
        $rep .= "                                <label for=\"sexeParticipant\" class=\"col-sm-2 col-form-label\">Sexe</label>";
        $rep .= "                                <div class=\"col-sm-10\" >";
        $rep .= "                                    <select class=\"form-control\" id=\"sexeParticipant\" name=\"sexeParticipant\" required>";
        $rep .= "                                        <option></option>";
        $rep .= "                                        <option>Femme</option>";
        $rep .= "                                        <option>Homme</option>";
        $rep .= "                                        <option>Autre</option>";
        $rep .= "                                    </select>    ";
        $rep .= "                                </div>";
        $rep .= "                            </div>";

        $rep .= "                            <div class=\"form-group row\">";
        $rep .= "                                <label for=\"courielParticipant\" class=\"col-sm-2 col-form-label\">Courriel</label>";
        $rep .= "                                <div class=\"col-sm-10\">";
        $rep .= "                                    <input type=\"text\" class=\"form-control\" id=\"courielParticipant\" name=\"courielParticipant\" placeholder=\"Entrer courriel du participant\" required>";
        $rep .= "                                </div>";
        $rep .= "                            </div>";

        $rep .= "                            <div class=\"form-group row\">";
        $rep .= "                                <label for=\"memeAdresse\" class=\"col-sm-2 col-form-label\">Même adresse</label>";
        $rep .= "                                <div class=\"col-sm-10\">";
        $rep .= "                                <div class=\"form-check\">";
        $rep .= "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse\" id=\"oui\" value=\"option1\" checked>";
        $rep .= "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Oui</label>";
        $rep .= "                                   </div>";

        $rep .= "                                   <div class=\"form-check\">";
        $rep .= "                                    <input class=\"form-check-input\" type=\"radio\" name=\"memeAdresse\" id=\"non\" value=\"option2\" >";
        $rep .= "                                    <label class=\"form-check-label\" for=\"exampleRadios1\">Non</label>";
        $rep .= "                                </div>";
        $rep .= "                                </div>";
        $rep .= "                            </div>";

        $rep .= "                            <div class=\"form-group row\">";
        $rep .= "                                <label for=\"paysParticipant\" class=\"col-sm-2 col-form-label\">Pays</label>";
        $rep .= "                                <div class=\"col-sm-10\">";
        $rep .= "                                    <select class=\"form-control\"  id=\"paysParticipant\" name=\"paysParticipant\" required>";
        $rep .= "                                        <option value=\"\">Pays...</option>";
        $rep .= "                                        <option value=\"AF\">Afghanistan</option>";
        $rep .= "                                  <option value=\"AL\">Albania</option>";
        $rep .= "                            <option value=\"DZ\">Algeria</option>";
        $rep .= "                      <option value=\"AS\">American Samoa</option>";
        $rep .= "                <option value=\"AD\">Andorra</option>";
        $rep .= "          <option value=\"AG\">Angola</option>";
        $rep .= "    <option value=\"AI\">Anguilla</option>";

        $rep .= "                                        <option value=\"AR\">Argentina</option>";
        $rep .= "                                  <option value=\"AA\">Armenia</option>";
        $rep .= "                            <option value=\"AW\">Aruba</option>";
        $rep .= "                      <option value=\"AU\">Australia</option>";
        $rep .= "                <option value=\"AT\">Austria</option>";
        $rep .= "          <option value=\"AZ\">Azerbaijan</option>";
        $rep .= "    <option value=\"BS\">Bahamas</option>";
        $rep .= "                                        <option value=\"BH\">Bahrain</option>";
        $rep .= "                                  <option value=\"BD\">Bangladesh</option>";
        $rep .= "                            <option value=\"BB\">Barbados</option>";
        $rep .= "                      <option value=\"BY\">Belarus</option>";
        $rep .= "                <option value=\"BE\">Belgium</option>";
        $rep .= "          <option value=\"BZ\">Belize</option>";
        $rep .= "    <option value=\"BJ\">Benin</option>";
        $rep .= "                                        <option value=\"BM\">Bermuda</option>";
        $rep .= "                                        <option value=\"BT\">Bhutan</option>";
        $rep .= "                                        <option value=\"BO\">Bolivia</option>";
        $rep .= "                                  <option value=\"BL\">Bonaire</option>";
        $rep .= "                            <option value=\"BA\">Bosnia &amp; Herzegovina </option>";
        $rep .= "                                        <option value=\"BW\">Botswana</option>";
        $rep .= "                                  <option value=\"BR\">Brazil</option>";
        $rep .= "                            <option value=\"BC\">British Indian Ocean Ter</option>";
        $rep .= "                                        <option value=\"BN\">Brunei</option>";
        $rep .= "                                  <option value=\"BG\">Bulgaria</option>";
        $rep .= "                            <option value=\"BF\">Burkina Faso</option>";
        $rep .= "                      <option value=\"BI\">Burundi</option>";
        $rep .= "                <option value=\"KH\">Cambodia</option>";
        $rep .= "          <option value=\"CM\">Cameroon</option>";
        $rep .= "    <option value=\"CA\">Canada</option>";
        $rep .= "                                        <option value=\"IC\">Canary Islands</option>";
        $rep .= "                                  <option value=\"CV\">Cape Verde</option>";
        $rep .= "                            <option value=\"KY\">Cayman Islands</option>";
        $rep .= "                      <option value=\"CF\">Central African Republic</option>";
        $rep .= "                <option value=\"TD\">Chad</option>";
        $rep .= "          <option value=\"CD\">Channel Islands</option>";
        $rep .= "    <option value=\"CL\">Chile</option>";
        $rep .= "                                        <option value=\"CN\">China</option>";
        $rep .= "                                  <option value=\"CI\">Christmas Island</option>";
        $rep .= "                            <option value=\"CS\">Cocos Island</option>";
        $rep .= "                      <option value=\"CO\">Colombia</option>";
        $rep .= "                <option value=\"CC\">Comoros</option>";
        $rep .= "          <option value=\"CG\">Congo</option>";
        $rep .= "    <option value=\"CK\">Cook Islands</option>";
        $rep .= "                                        <option value=\"CR\">Costa Rica</option>";
        $rep .= "                                  <option value=\"CT\">Cote D\'Ivoire</option>";
        $rep .= "                            <option value=\"HR\">Croatia</option>";
        $rep .= "                      <option value=\"CU\">Cuba</option>";
        $rep .= "                <option value=\"CB\">Curacao</option>";
        $rep .= "          <option value=\"CY\">Cyprus</option>";
        $rep .= "    <option value=\"CZ\">Czech Republic</option>";
        $rep .= "<option value=\"DK\">Denmark</option>";
        $rep .= "                                        <option value=\"DJ\">Djibouti</option>";
        $rep .= "                                  <option value=\"DM\">Dominica</option>";
        $rep .= "                            <option value=\"DO\">Dominican Republic</option>";
        $rep .= "                      <option value=\"TM\">East Timor</option>";
        $rep .= "                <option value=\"EC\">Ecuador</option>";
        $rep .= "          <option value=\"EG\">Egypt</option>";
        $rep .= "    <option value=\"SV\">El Salvador</option>";

        $rep .= "                                    </select>";
        $rep .= "                          </div>";
        $rep .= "                </div>";
        $rep .= "          <div class=\"form-group row\">";
        $rep .= "        <label for=\"villeParticipant\" class=\"col-sm-2 col-form-label\">Ville</label>";
        $rep .= "  <div class=\"col-sm-10\">";
        $rep .= "                                    <input type=\"text\" class=\"form-control\" id=\"villeParticipant\" name=\"villeParticipant\" placeholder=\"Entrer ville du participant\">";
        $rep .= "                          </div>";
        $rep .= "                </div>";
        $rep .= "          <div class=\"form-group row\">";
        $rep .= "        <label for=\"codePostalParticipant\" class=\"col-sm-2 col-form-label\">Code Postal</label>";
        $rep .= "  <div class=\"col-sm-10\">";
        $rep .= "<input type=\"text\" class=\"form-control\" id=\"codePostalParticipant\" name=\"codePostalParticipant\" placeholder=\"Entrer code postal du participant\">";
        $rep .= "                                </div>";
        $rep .= "                      </div>";

        $rep .= "           <div class=\"form-group row\">";
        $rep .= "               <label for=\"telPostalParticipant\" class=\"col-sm-2 col-form-label\">Téléphone</label>";
        $rep .= "               <div class=\"col-sm-10\">";
        $rep .= "                   <input type=\"text\" class=\"form-control\" id=\"telPostalParticipant\" name=\"telPostalParticipant\" placeholder=\"Entrer téléphone du participant\">";
        $rep .= "               </div>";
        $rep .= "           </div>";

        $rep .= "            </div>   ";

        $rep .= "                        <div class=\"container\" style=\"width: 40% ; float: left; margin-left: 60px\" >";
        $rep .= "                      <label for=\"nomParticipant\" class=\"col-sm-2 col-form-label\" style=\" width: 100%; float: left\">Informations sur le passeport</label>";
        $rep .= "                <br><br>";
        $rep .= "          <div class=\"form-group row\" >";
        $rep .= "        <label for=\"numeroPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Numéro</label>";
        $rep .= "  <div class=\"col-sm-10 contenupass\" >";
        $rep .= "<input type=\"text\" class=\"form-control \" id=\"numeroPasseport\" name=\"numeroPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
        $rep .= "                                </div>";
        $rep .= "                      </div>";
        $rep .= "                <div class=\"form-group row\" >";
        $rep .= "              <label for=\"dateDelPasseport\" class=\"col-sm-2 col-form-label titrepass\" >Date délivrance</label>";
        $rep .= "        <div class=\"col-sm-10 contenupass\" >";
        $rep .= "      <input type=\"text\" class=\"form-control\" id=\"dateDelPasseport\" name=\"dateDelPasseport\" placeholder=\"Entrer Date de délivrance du passeport\" required>";
        $rep .= "                                </div>";
        $rep .= "                      </div>";
        $rep .= "                <div class=\"form-group row\" >";
        $rep .= "              <label for=\"dateExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Date expiration</label>";
        $rep .= "        <div class=\"col-sm-10 contenupass\">";
        $rep .= "      <input type=\"text\" class=\"form-control\" id=\"dateExpPasseport\" name=\"dateExpPasseport\" placeholder=\"Entrer date dèxpération du passeport\" required>";
        $rep .= "                                </div>";
        $rep .= "                      </div>";
        $rep .= "                <div class=\"form-group row\" >";
        $rep .= "              <label for=\"delivrerAExpPasseport\" class=\"col-sm-2 col-form-label titrepass\">Délivré à</label>";
        $rep .= "        <div class=\"col-sm-10 contenupass\">";
        $rep .= "      <input type=\"text\" class=\"form-control\" id=\"delivrerAExpPasseport\" name=\"delivrerAExpPasseport\" placeholder=\"Entrer Numéro du passeport\" required>";
        $rep .= "                                </div>";
        $rep .= "                      </div>";
        $rep .= "                <div class=\"form-group row\" >";
        $rep .= "             <label for=\"nationalite\" class=\"col-sm-2 col-form-label titrepass\">Nationalité</label>";
        $rep .= "       <div class=\"col-sm-10 contenupass\">";
        $rep .= "     <input type=\"text\" class=\"form-control\" id=\"nationalite\" name=\"nationalite\" placeholder=\"Entrer la nationalité\" required>";
        $rep .= "                                </div>";
        $rep .= "                      </div>";
        $rep .= "            </div>";

        $rep .= "<input type=\"button\" class=\"btn\" value=\"Ajouter participants\" onClick=\" ajouterParticipant(); formulaireR();listerParticipants();infoUser();\" style=\"float: right; \">";
        $rep .= "                <br>";
        $rep .= "                <br>";
        $rep .= "  </form>";

        $rep .= "                    </div>";

        $tabRes['msg'] = $rep;
    } catch (Exception $e) {
        
    } finally {
        
    }
}

function enleverParticipant() {
    global $tabRes;

    $idParticpant = $_POST['listParticipant'];

//    $idParticpant = split(':', $listParticipan)[0];
    //    $text = split(':', $listParticipan)[1];

    try {
        $requete = "SELECT * FROM participants WHERE idparticipants=?";
        $unModele = new circuitModel($requete, array($idParticpant));
        $stmt = $unModele->executer();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
//            $unModele->enleverFichier("pochettes", $ligne->pochette);
            $requete = "DELETE FROM participants WHERE idparticipants=?";
            $unModele = new circuitModel($requete, array($idParticpant));
            $stmt = $unModele->executer();
            $tabRes['action'] = "enleverParticpant";
            $tabRes['msg'] = "participant " . $idParticpant . " bien enleve";
        } else {
            $tabRes['action'] = "enlever";
            $tabRes['msg'] = "participant " . $idParticpant . " introuvable";
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function fiche() {
    global $tabRes;
    $idf = $_POST['numF'];
    $tabRes['action'] = "fiche";
    $requete = "SELECT * FROM participants WHERE idf=?";
    try {
        $unModele = new circuitModel($requete, array($idf));
        $stmt = $unModele->executer();
        $tabRes['fiche'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['fiche'] = $ligne;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

//methode fiche
function detail() {
    global $tabRes;
    $idParticipant = $_POST['listParticipant'];
    $tabRes['action'] = "detail";
    $requete = "SELECT * FROM participants WHERE idparticipants=?";
    try {
        $unModele = new circuitModel($requete, array($idParticipant));
        $stmt = $unModele->executer();
        $tabRes['detailParticipant'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['detailParticipant'] = $ligne;
            $idAdresse = $ligne->idAdresse;
            $idPasseport = $ligne->idPasspor;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {

        unset($unModele);
    }
    $requete = "SELECT * FROM passeport WHERE idPasspor=?";
    try {
        $unModele = new circuitModel($requete, array($idPasseport));
        $stmt = $unModele->executer();
        $tabRes['detailPasseport'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['detailPasseport'] = $ligne;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {

        unset($unModele);
    }

    $requete = "SELECT * FROM adresse WHERE idAdresse=?";
    try {
        $unModele = new circuitModel($requete, array($idAdresse));
        $stmt = $unModele->executer();
        $tabRes['detailadresse'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['detailadresse'] = $ligne;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {

        unset($unModele);
    }
}

function modifierParticipant() {
    global $tabRes;

    $idParticipant = $_POST['idParticipant'];

    $idAdresse = $_POST['idAdresse'];
    $idPasseport = $_POST['idPasseport'];
    $nomParticipant = $_POST['nomParticipant'];
    $prenomParticipant = $_POST['prenomParticipant'];
    $sexeParticipant = $_POST['sexeParticipant'];
    $courielParticipant = $_POST['courielParticipant'];
    $memeAdresse = $_POST['memeAdresse'];
    $paysParticipant = $_POST['paysParticipant'];
    $villeParticipant = $_POST['villeParticipant'];
    $codePostalParticipant = $_POST['codePostalParticipant'];
    $numeroPasseport = $_POST['numeroPasseport'];
    $dateDelPasseport = $_POST['dateDelPasseport'];
    $delivrerAExpPasseport = $_POST['delivrerAExpPasseport'];
    $dateExpPasseport = $_POST['dateExpPasseport'];
    $nationalite = $_POST['nationalite'];
    $telephone = $_POST['telPostalParticipant'];

    try {
        //Recuperer ancienne pochette
        //                $requette = "SELECT imageCircuit FROM circuit WHERE idCircuit=?";
        //                $unModele = new circuitModel($requette, array($idCircuit));
        //                $stmt = $unModele->executer();
        //                $ligne = $stmt->fetch(PDO::FETCH_OBJ);
        //                $anciennePochette = $ligne->imageCircuit;
        //                $imageCircuit = $unModele->verserFichier("pochettes", "imageCircuit", $anciennePochette, $nomCircuit);

        $requete = "UPDATE participants SET nom=?,prenom=?, courriel=?, sexe=?,"
                . " tel=? WHERE idparticipants=?";
        $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone,
            $idParticipant));
        $stmt = $unModele->executer();

        $requete = "UPDATE adresse SET ville=?,codePostale=?, pays=? WHERE idAdresse=?";
        $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant, $idAdresse));
        $stmt = $unModele->executer();

        $requete = "UPDATE passeport SET numeroPass=?,dateDelivPass=?, dateExpiration=?, nationalites=?,"
                . " lieuDeliv=? WHERE idPasspor=?";
        $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport,
            $idPasseport));
        $stmt = $unModele->executer();

        $tabRes['action'] = "modifier";
        $tabRes['msg'] = "participant $nomParticipant bien modifie";
    } catch (Exception $e) {
        print_r($e);
    } finally {
        unset($unModele);
    }
}

function afficherFormulaireTous() {
    global $tabRes;

    $adulte = $_POST["NombreAdulte"];
    $enfant = $_POST["NombreEnfant"];
    $bebe = $_POST["NombreBebe"];
    //$prix = $_POST["labtotal"];
    //information sur le participant principal
    $nomParticipant = $_POST['nomParticipant'];
    $prenomParticipant = $_POST['prenomParticipant'];
    $sexeParticipant = $_POST['sexeParticipant'];
    $courielParticipant = $_POST['courielParticipant'];
    //$memeAdresse = $_POST['memeAdresse'];
    $paysParticipant = $_POST['paysParticipant'];
    $villeParticipant = $_POST['villeParticipant'];
    $codePostalParticipant = $_POST['codePostalParticipant'];
    $numeroPasseport = $_POST['numeroPasseport'];
    $dateDelPasseport = $_POST['dateDelPasseport'];
    $delivrerAExpPasseport = $_POST['delivrerAExpPasseport'];
    $dateExpPasseport = $_POST['dateExpPasseport'];
    $nationalite = $_POST['nationalite'];
    $telephone = $_POST['tel'];
    $idUtilisateur = $_POST['idUtilisateur'];

    $tabRes['action'] = "afficherParticipant";
    $tabRes['adulte'] = $adulte;
    $tabRes['enfant'] = $enfant;
    $tabRes['bebe'] = $bebe;
    //$tabRes['prix'] = $prix;
    $tabRes['nomParticipant'] = $nomParticipant;
    $tabRes['prenomParticipant'] = $prenomParticipant;
    $tabRes['sexeParticipant'] = $sexeParticipant;
    $tabRes['courielParticipant'] = $courielParticipant;
    //$tabRes['memeAdresse'] = $memeAdresse;
    $tabRes['paysParticipant'] = $paysParticipant;
    $tabRes['villeParticipant'] = $villeParticipant;
    $tabRes['codePostalParticipant'] = $codePostalParticipant;
    $tabRes['numeroPasseport'] = $numeroPasseport;
    $tabRes['dateDelPasseport'] = $dateDelPasseport;
    $tabRes['delivrerAExpPasseport'] = $delivrerAExpPasseport;
    $tabRes['dateExpPasseport'] = $dateExpPasseport;
    $tabRes['nationalite'] = $nationalite;
    $tabRes['telPostalParticipant'] = $telephone;
    $tabRes['idUtilisateur'] = $idUtilisateur;
}

function ajoutPart() {
    try {
        $requete = "INSERT INTO adresse VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($villeParticipant, $codePostalParticipant, $paysParticipant));
        $stmt = $unModele->executer();
        $idAdresse = $unModele->lastID;

        $requete = "INSERT INTO passeport VALUES(0,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($numeroPasseport, $dateDelPasseport, $dateExpPasseport, $nationalite, $delivrerAExpPasseport));
        $stmt = $unModele->executer();
        $idPasseport = $unModele->lastID;

        $requete = "INSERT INTO participants VALUES(0,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomParticipant, $prenomParticipant, $courielParticipant, $sexeParticipant, $telephone, $idAdresse, $idPasseport));
        $stmt = $unModele->executer();

        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "Participant bien enregistré";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

//******************************************************
//Contr�leur
$action = $_POST['action'];
//$action = 'previewForm';
switch ($action) {
    case "enregistrer":
        enregistrer();
        break;
    case "lister":
        listerParticipant();
        break;
    case "supprimerParticipant":
        enleverParticipant();
        break;
    case "fiche":
        fiche();
        break;
    case "detail":
        detail();
        break;
    case "afficherFormulaires":
        afficher();
        break;
    case "modifierParticipant":

        modifierParticipant();
        break;
    case "afficherFormulaireTous":
        afficherFormulaireTous();
        break;

    case "previewForm":
        listerParticipant();
        break;
}
echo json_encode($tabRes);

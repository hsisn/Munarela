<?php

require_once("../includes/modele.inc.php");
require_once("../includes/init.php");
$tabRes = array();

function listerEtapes() {

    global $tabRes;
    $idCircuit = $_POST['idCircuit'];
    $requete = "SELECT * FROM etape WHERE idCircuit=?";
    try {
        $unModele = new circuitModel($requete, array( $idCircuit));
        $stmt = $unModele->executer();
        $tabRes['listeEtapes'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeEtapes'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function enregistrerEtape() {
    global $tabRes;

    $nomEtape = $_POST['nomEtape'];
    $descriptionEtape = $_POST['descE'];

    try {
        $idCircuit = $_SESSION["idCircuit"];
        $unModele = new circuitModel();
        //$pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO etape VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nomEtape, $descriptionEtape, $idCircuit));
        $stmt = $unModele->executer();
        $_SESSION["idEtape"] = $unModele->lastID;

        $tabRes['action'] = "enregistrer";
        // $tabRes['idCircuit'] = $idCircuit;
        $tabRes['msg'] = "étape bien enregistrer";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function dataready($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//******************************************************
//Controleur etape
$action = $_POST['action'];
switch ($action) {
    case "enregistrerEtape" :
        enregistrerEtape();
        break;
    case "listerEtapes" :
        listerEtapes();
        break;
}
echo json_encode($tabRes);
?>
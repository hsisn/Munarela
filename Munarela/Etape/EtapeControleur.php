<?php

require_once("../includes/modele.inc.php");
require_once("../includes/init.php");
$tabRes = array();


function enregistrerEtape() {
    global $tabRes;
   
    $nomEtape = $_POST['nomEtape'];
    $descriptionEtape = $_POST['descE'];  
   
    try {
          $idCircuit=$_SESSION["idCircuit"];
        $unModele = new circuitModel();
        //$pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO etape VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nomEtape,$descriptionEtape,$idCircuit));
        $stmt = $unModele->executer();
        $_SESSION["idEtape"]=$unModele->lastID;
       
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

}
echo json_encode($tabRes);
?>
<?php
require_once("../includes/modele.inc.php");
require_once("../includes/init.php");
$tabRes = array();


function enregistrerJour() {
    global $tabRes;
   
    $nomHotel = $_POST['nomHotel'];
    $urlHotel = $_POST['UrlHotel'];
    $nomRestaurant = $_POST['nomRestaurant'];
    $urlRestaurant = $_POST['urlRestaurant'];
    $dejeuner = 0;
    $diner = 0;
    $souper = 0;
    $descripJour = $_POST['descJ'];
    $idEtape=$_SESSION["idEtape"];

    if (isset($_POST['dejeuner'])) {
        $dejeuner=1;
    }
    if (isset($_POST['diner'])) {
        $diner=1;
    }
    if (isset($_POST['souper'])) {
        $souper=1;
    }
    
    try {
          $idCircuit=$_SESSION["idCircuit"];
        $unModele = new circuitModel();
        //$pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO jour VALUES(?,?,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomHotel,$urlHotel,$nomRestaurant,$urlRestaurant,$dejeuner,
            $diner,$souper,$descripJour,$idEtape));
        $stmt = $unModele->executer();
        
        $tabRes['action'] = "enregistrer";
        $tabRes['idCircuit'] = $idCircuit;
        $tabRes['msg'] = "Jour bien enregistrer";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}


//Controleur
$action = $_POST['action'];
switch ($action) {
    case "enregistrerJour" :
        enregistrerJour();
        break;
    
    
}
echo json_encode($tabRes);

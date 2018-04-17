<?php
session_start();
require_once("../includes/modele.inc.php");
$tabRes = array();

function enregistrer() {
    global $tabRes;
    $nom = $_POST['nom'];
    $description = $_POST['description'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nom);
        $requete = "INSERT INTO thematique VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nom, $description, $pochete));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "thamatique bien enregistrer";
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function lister() {
    global $tabRes;
    $tabRes['action'] = "lister";
    $requete = "SELECT * FROM thematique";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function previewForm() {
    global $tabRes;
    $tabRes['action'] = "preview";
    $requete = "SELECT * FROM thematique";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

//lister les particpants
//function listerParticipant() {
//    global $tabRes;
//    $tabRes['action'] = "listerParticpants";
//    $requete = "SELECT * FROM participants";
//    try {
//        $unModele = new circuitModel($requete, array());
//        $stmt = $unModele->executer();
//        $tabRes['listeParticpants'] = array();
//        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
//            $tabRes['listeParticpants'][] = $ligne;
//        }
//    } catch (Exception $e) {
//        
//    } finally {
//        unset($unModele);
//    }
//}

 
 
 //lister les circuit par id
function  circuitparid() {
    global $tabRes;
    $id = $_POST['idc'];
    
    $tabRes['action'] = "ramener";
    $requete = "SELECT * FROM circuit where idCircuit=?";
    try {
        $unModele = new circuitModel($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['circuitid'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['circuitid'][] = $ligne;
        }
        
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}



//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
    case "enregistrer" :
        enregistrer();
        break;
    case "lister" :
        lister();
        break;

    case "listerParticipant" :
        listerParticipant();
        break;
   
    
    case "ramener" :
        circuitparid();
        break;
    
    
    
}
echo json_encode($tabRes);
?>
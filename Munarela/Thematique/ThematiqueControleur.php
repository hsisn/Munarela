<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}


require_once "../includes/modele.inc.php";
include_once '../promotion/promotionControleur.php';
$tabRes = array();

function enregistrer()
{
    global $tabRes;
    $nom = $_POST['nom'];
    $description = $_POST['desc'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nom);
        $requete = "INSERT INTO thematique VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nom, $description, $pochete));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "thematique bien enregistrée";
    } catch (Exception $e) {

    } finally {
        unset($unModele);
    }
}

function listerThematique()
{
    global $tabRes;

    $tabRes['action'] = "lister";
    if(isset($_SESSION['idUtilisateur'])){
          $tabRes['id'] = $_SESSION['idUtilisateur'];  
    }

    $requete = "SELECT * FROM thematique";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
    if (isset($_POST["getPromo"])) {

        listerPromotions();
        $tabRes['action'] = "lister";
    }
}

function getListThematique()
{
    global $tabRes;
    listerThematique();
    return $tabRes['listetheme'];
}
//Contr�leur

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    switch ($action) {
        case "enregistrer":
            enregistrer();
            echo json_encode($tabRes);
            break;
        case "lister":
            listerThematique();
            echo json_encode($tabRes);
            break;
    }
}

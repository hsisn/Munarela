<?php

require_once "../includes/modele.inc.php";

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$tabRes = array();

function enregistrerPromotion() {
    global $tabRes;

    $nomPromotion = $_POST['nomPromotion'];
    $dateDebut = $_POST['dateDebut'];
    $dateFin = $_POST['dateFin'];
    $taux = $_POST['taux'];

    try {
        $unModele = new circuitModel();
        $requete = "INSERT INTO promotion VALUES(0,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomPromotion, $taux, $dateDebut, $dateFin));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "Promotion bien enregistrée";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function listerPromotions() {
    global $tabRes;
    $tabRes['action'] = "listerLesPromotions";
    $requete = "SELECT * FROM promotion";
    try {
        $unModele = new circuitModel($requete, []);
        $stmt = $unModele->executer();
        $tabRes['listepromotions'] = [];
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listepromotions'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function effacerPromotion() {
    global $tabRes;
    $idPromotion = $_POST['idPromotion'];
    try {
        $requete = "SELECT * FROM promotion WHERE idPromotion=?";
        $unModele = new circuitModel($requete, array($idPromotion));
        $stmt = $unModele->executer();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $requete = "DELETE FROM promotion WHERE idPromotion=?";
            $unModele = new circuitModel($requete, array($idPromotion));
            $stmt = $unModele->executer();
            $tabRes['msg'] = "Promotion " . $idPromotion . " bien enlevée";
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function modifierPromotion() {
    global $tabRes;
    $idPromotion = $_POST['idPromotion'];
    $nomPromotion = $_POST['nomPromotion'];
    $dateDebut = $_POST['datedebut'];
    $dateFin = $_POST['datefin'];
    $taux = $_POST['taux'];


    try {

        $requete = "UPDATE promotion SET nom=?,taux=?, datedebut=?, datefin=?"
                . " WHERE idPromotion=?";
        $unModele = new circuitModel($requete, array($nomPromotion, $taux, $dateDebut, $dateFin));
        $stmt = $unModele->executer();
        $tabRes['action'] = "modifier";
        $tabRes['msg'] = "Promotion $idPromotion bien modifiée";
    } catch (Exception $e) {
        print_r($e);
    } finally {
        unset($unModele);
    }
}

function getListPromotion(){
    global $tabRes;
    listerThematique();
    return $tabRes['listepromotions'];
}

if (isset($_POST['action'])) {
    $action = $_POST['action'];
    switch ($action) {
        case "enregistrerPromotion":
            enregistrerPromotion();
            echo json_encode($tabRes);
            break;
        case "listerPromotions":
            listerPromotions();
            echo json_encode($tabRes);
            break;
        case "effacerPromotion":
            effacerPromotion();
            echo json_encode($tabRes);
            break;
        case "modifierPromotion":
            modifierPromotion();
            echo json_encode($tabRes);
            break;
    }
}

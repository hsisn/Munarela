<?php

require_once "../includes/modele.inc.php";
include_once '../promotion/promotionControleur.php';

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (isset($_GET['idCircuit'])) {
    $_SESSION["idCircuit"] = $_GET['idCircuit'];
    ficheCircuit();
} else if (isset($_GET['idThem'])) {
    listerCircuitParThematique();
}

$tabRes = array();

/** Function qui ...*/
function enregistrerCircuit()
{
    global $tabRes;

    $nomCircuit = $_POST['nomCircuit'];
    $dateDepart = $_POST['dateDepartCircuit'];
    $dateRetour = $_POST['dateRetourCircuit'];
    $nbPersonnesMax = $_POST['nbPersonneMax'];
    $nbPersonnesMin = $_POST['nbPersonneMin'];
    $description = $_POST['desc'];
    $prix = $_POST['prixCircuit'];
    $idthematique = $_POST['themeCircuit'];
    $imageCircuit = $_POST['imageCircuit'];
    $guide = $_POST['guide'];
    $idPromo = null;

    if (!$_POST['promoCircuit'] === '') {
        $idPromo = $_POST['promoCircuit'];
    }

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO circuit VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomCircuit, $dateDepart, $dateRetour, $nbPersonnesMax, $nbPersonnesMin, $description, $prix, $pochete, null, null, $idthematique, 0));
        $stmt = $unModele->executer();
        $_SESSION["idCircuit"] = $unModele->lastID;
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "circuit bien enregistrer";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

/** Function qui sert au admin ...*/
function listerLesCircuit()
{
    global $tabRes;
    $tabRes['action'] = "listerLesCircuits";
    $requete = "SELECT * FROM circuit";
    try {
        $unModele = new circuitModel($requete, []);
        $stmt = $unModele->executer();
        $tabRes['listecircuit'] = [];
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listecircuit'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}


/** Function qui prend tous les details sur un circuit afin de les afficher a l'utilisateur
cette function est aussi appelée apres la modification d'un circuit par l'admin pour qu'il
voit le résultat */
function getDetailCircuit()
{
    global $tabRes;

    $idCircuit = $_POST['idCircuit'];
    $_SESSION["idCircuit"] =$idCircuit;
    $requete = "SELECT * FROM jour,Etape,Circuit WHERE Circuit.idCircuit = Etape.idCircuit AND Etape.idEtape = jour.IdEtape "
        . "AND Circuit.idCircuit = ?";
    try {
        $unModele = new circuitModel($requete, array($idCircuit));
        $stmt = $unModele->executer();
        $tabRes['listeJours'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeJours'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
    $promotion = $tabRes['listeJours'][0]->idPromotion;
    $prix = $tabRes['listeJours'][0]->prix;
    if ($promotion) {
        listerPromotions();

        foreach ($tabRes['listepromotions'] as $promo) {
            $taux = $promo->taux;

            if ($promo->idPromotion == $promotion) {
                foreach ($tabRes['listeJours'] as $jour) {
                    $jour->prix = $prix * $taux;
                }
            }
        }
    }
    $tabRes['action'] = "AffichageDetailsCircuit";

    echo json_encode($tabRes);
}

/** Function qui ...*/
function listerCircuitParThematique()
{
    global $tabRes;
    listerPromotions();
    $tabRes['action'] = "listerCircuitParThematique";
    $requete = "SELECT * FROM circuit WHERE idThematique=? AND published=1";
    try {
        $unModele = new circuitModel($requete, array($_GET['idThem']));
        $stmt = $unModele->executer();
        $tabRes['listeCircuits'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listeCircuits'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
    echo json_encode($tabRes);
}

/** Function qui ...*/
function ficheCircuit()
{
    global $tabRes;
    include '../Thematique/ThematiqueControleur.php';

    $idCircuit;
    if (isset($_POST['idCircuit'])) {
        $idCircuit = $_POST['idCircuit'];
        listerThematique();
        listerPromotions();
        $tabRes['action'] = "afficherFiche";
    }
    if (isset($_GET['idCircuit'])) {
        $idCircuit = $_GET['idCircuit'];
        $tabRes['action'] = "AffichageDetailsCircuit";
    }

    $requete = "SELECT * FROM circuit WHERE idCircuit=?";
    try {
        $unModele = new circuitModel($requete, array($idCircuit));
        $stmt = $unModele->executer();
        $tabRes['ficheCircuit'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['ficheCircuit'][] = $ligne;
            $tabRes['OK'] = true;
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
    echo json_encode($tabRes);
}

/** Function qui ...*/
function effacerCircuit()
{
    global $tabRes;
    $idCircuit = $_POST['idCircuit'];
    try {
        $requete = "SELECT * FROM circuit WHERE idCircuit=?";
        $unModele = new circuitModel($requete, array($idCircuit));
        $stmt = $unModele->executer();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            //$unModele->enleverFichier("pochettes", $ligne->pochette);
            $requete = "DELETE FROM circuit WHERE idCircuit=?";
            $unModele = new circuitModel($requete, array($idCircuit));
            $stmt = $unModele->executer();
            $tabRes['msg'] = "Circuit " . $idCircuit . " bien enleve";
        }
    } catch (Exception $e) {

    } finally {
        unset($unModele);
    }
}

/** Function qui ...*/

function modifierCircuit()
{
    global $tabRes;
    $idCircuit = $_POST['idCircuit'];
    $nomCircuit = $_POST['nomCircuit'];
    $dateDepart = $_POST['dateDepartCircuit'];
    $dateRetour = $_POST['dateRetourCircuit'];
    $nbPersonnesMax = $_POST['nbPersonneMax'];
    $nbPersonnesMin = $_POST['nbPersonneMin'];
    $description = $_POST['descripCircuit'];
    $prix = $_POST['prixCircuit'];
    //$imageCircuit = $_POST['imageCircuit'];
    $guide = $_POST['guide'];
    $idPromo = null;
    $idthematique = $_POST['themeCircuit'];

    if ($_POST['promoCircuit']) {
        $idPromo = $_POST['promoCircuit'];
    }

    try {
        //Recuperer ancienne pochette
        $requette = "SELECT imageCircuit FROM circuit WHERE idCircuit=?";
        $unModele = new circuitModel($requette, array($idCircuit));
        $stmt = $unModele->executer();
        $ligne = $stmt->fetch(PDO::FETCH_OBJ);
        $anciennePochette = $ligne->imageCircuit;
        $imageCircuit = $unModele->verserFichier("pochettes", "imageCircuit", $anciennePochette, $nomCircuit);
        $requete = "UPDATE circuit SET titre=?,dateDeDepart=?, dateDeRetour=?, nbPersonnesMax=?,"
            . " nbPersonnesMin=?, description=?, prix=?, imageCircuit=?,"
            . " guide=?, idPromotion=?, idThematique=? WHERE idCircuit=?";
        $unModele = new circuitModel($requete, array($nomCircuit, $dateDepart, $dateRetour, $nbPersonnesMax, $nbPersonnesMin,
            $description, $prix, $imageCircuit, $guide, $idPromo, $idthematique, $idCircuit));
        $stmt = $unModele->executer();
        $tabRes['idCircuit'] = "$idCircuit";
        $tabRes['msg'] = "Circuit $idCircuit bien modifie";
    } catch (Exception $e) {
        print_r($e);
    } finally {
        unset($unModele);
    }
}

/** Function qui ...*/
function altPublication()
{

    $idCircuit = $_POST['idCircuit'];
    $published = $_POST['published'];

    if ($published == "true") {
        $published = 1;
    } else {
        $published = 0;
    }

    try {
        $requete = "UPDATE circuit SET published=? WHERE idCircuit=?";
        $unModele = new circuitModel($requete, array($published, $idCircuit));
        $stmt = $unModele->executer();
    } catch (Exception $e) {
        print_r($e);
    } finally {
        unset($unModele);
    }
    listerLesCircuit();
}

//$_POST['action'] = "afficherDetailsCircuit";

if (isset($_POST['action'])) {
    $action = $_POST['action'];
    switch ($action) {
        case "enregistrerCircuit":
            enregistrerCircuit();
            echo json_encode($tabRes);
            break;
        case "listerCircuit":
            listerLesCircuit();
            echo json_encode($tabRes);
            break;
        case "effacerCircuit":
            effacerCircuit();
            echo json_encode($tabRes);
            break;
        case "ficheCircuit":
            ficheCircuit();
            break;
        case "modifier":
            modifierCircuit();
            echo json_encode($tabRes);
            break;
        case "atlernerPublication":
            altPublication();
            echo json_encode($tabRes);
            break;
        case "afficherDetailsCircuit":
            getDetailCircuit();
            break;
    }
}

<?php
session_start();
require_once "../includes/modele.inc.php";
$tabRes = array();

function enregistrerpanier()
{

    global $tabRes;
    $p_id = $_SESSION["idCircuit"];
    //$p_id=$_POST['idCircuit'];

    try {

        if (isset($_SESSION["email"])) {

            $user_id = $_SESSION["email"];

            $requete = "SELECT * FROM panier WHERE idCircuit =? AND email =?";
            $unModele = new circuitModel($requete, array($p_id, $user_id));
            $stmt = $unModele->executer();
            $count = $stmt->rowCount();
            if ($count > 0) {

                $tabRes['msg'] = " circuit deja ajouter  Continue votre selection..! ";

                $tabRes['action'] = "enregistrerPani";
            } else {

                $requete = "INSERT INTO panier VALUES (0,?,?)";
                $unModele = new circuitModel($requete, array($p_id, $user_id));
                $stmt = $unModele->executer();
                $tabRes['msg'] = " circuit  Ajouter..! ";

                $tabRes['action'] = "enregistrerPani";

            }

        }
    } catch (Exception $e) {
    } finally {
        unset($unModele);
    }

}

function listerPanier()
{
    global $tabRes;
    $tabRes['action'] = "listerP";
    ////////////////////////////

    if (isset($_SESSION["email"])) {
        try {
            $email = $_SESSION["email"];
            $requete = "SELECT a.idCircuit,a.imageCircuit,a.titre,a.prix,b.idPanier FROM circuit a,panier b WHERE a.idCircuit=b.idCircuit AND b.email='$email'";
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

    }

}

/////////////////////////
//Count User panier item
function compterP()
{
    global $tabRes;

    //if (isset($_POST["count_item"])) {

    try {
        if (isset($_SESSION["email"])) {
            $adr = $_SESSION["email"];
        }

        $requette = "SELECT * FROM panier WHERE email = ? and idCircuit is not null";
        $unModele = new circuitModel($requette, array($adr));
        $stmt = $unModele->executer();

        $count = $stmt->rowCount();
        $_SESSION["count"] = $count;
        $tabRes['action'] = "compterP";
        $tabRes['compt'] = $count;
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }

}

///////////////////////////
function removePanier()
{
    global $tabRes;
    $id = $_POST['idp'];

    $tabRes['action'] = "removeP";
    $requete = "Delete  FROM panier where idPanier=?";
    try {
        $unModele = new circuitModel($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['msg'] = "Panier supperimer ...";

    } catch (Exception $e) {

    } finally {
        unset($unModele);
    }
}

//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
    case "enregistrerPani":
        enregistrerpanier();
        break;
    case "compterP":
        compterP();
        break;

    case "removeP":
        removePanier();
        break;

    case "listerP":
        listerPanier();
        break;

}
echo json_encode($tabRes);

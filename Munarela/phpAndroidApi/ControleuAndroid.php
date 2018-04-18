<?php
	require_once("../includes/modele.inc.php");
require_once("../includes/init.php");

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (isset($_GET['idCircuit'])) {
    $_SESSION["idCircuit"]=$_GET['idCircuit'];
    ficheCircuit();
} else if (isset($_GET['idThem'])) {
    listerCircuitParThematique();
}

$tabRes = array();
///////////////////////utilisateur/////////////////////////////////////
function login() {
    global $tabRes;
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    try {
        $unModele = new circuitModel();
        $requete = "SELECT email, idUtilisateur, password FROM utilisateur WHERE email =? AND password =? ";

        $unModele = new circuitModel($requete, array($email, $password));
        $stmt = $unModele->executer();
        $count = $stmt->rowCount();
        
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $_SESSION['idUtilisateur'] = $ligne->idUtilisateur;
        }
        
        if ($count == 1) {
            if (isset($_POST['remember'])) {
                setcookie('email', $email, time() + 86400);
            }

            $_SESSION['email'] = $email;
           
            //redirect("index.php");
            $tabRes['msg'] = "utilisateur authentifier avec success";
        } else {
            $tabRes['msg'] = "username ou Mot de passe errone.";
        }

        $tabRes['action'] = "login";
    } catch (Exception $e) {
        
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
}

function register() {
    global $tabRes;
    $tabRes['action'] = "register";
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $display_name = $_POST['display_name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $active= 1;
    //$confirm_password= $_POST['confirm_password'];




    try {
        $unModele = new circuitModel();

        $requete = "INSERT INTO utilisateur VALUES(0,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($first_name, $last_name, $display_name, $email, $password,$active));
        $stmt = $unModele->executer();       
        
        $tabRes['action'] = "register";
        $tabRes['msg'] = "utilisateur bien enregistrer";
    } catch (Exception $e) {

        echo $e;
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
  }

function logout() {
    global $tabRes;
    $tabRes['action'] = "logout";

    try {
        session_destroy();

        if (isset($_COOKIE['email'])) {
            unset($_COOKIE['email']);

            setcookie('email', '', time() - 86400);
        }

        $tabRes['msg'] = "deconnecter";
    } catch (Exception $e) {
        echo $e;
    } finally {
        echo json_encode($tabRes);  
       unset($unModele);
    }
}

//information user connecter
function information() {
    global $tabRes;
    $tabRes['action'] = "infouser";


    if (isset($_SESSION["email"])) {
        $email = $_SESSION["email"];
    } else {
        $email = "";
    }

    $requete = "SELECT idUtilisateur,last_name,first_name,email FROM utilisateur where email=?";
    try {
        $unModele = new circuitModel($requete, array($email));
        $stmt = $unModele->executer();
        $tabRes['information'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['information'][] = $ligne;
            $_SESSION['idUtilisateur']=$ligne->idUtilisateur;
           
        }
    } catch (Exception $e) {
        
    } finally {
        echo json_encode($tabRes);  
        unset($unModele);
    }
}

//////////////////////////////thematique///////////////////////////////////
function enregistrer() {
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
        $tabRes['msg'] = "thamatique bien enregistrer";
    } catch (Exception $e) {
        
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
}

function listerThematique() {
    global $tabRes;
    $tabRes['action'] = "listerT";
    
    $requete = "SELECT * FROM thematique";
    
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme']= array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
         echo json_encode($tabRes);
        unset($unModele);
    }
}
function getListThematique(){
    global $tabRes;
    listerThematique();
    return $tabRes['listetheme'];
}

 ////////////////Circuit///////////////////////   

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
    $idPromo = $_POST['idPromo'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nomCircuit);
        $requete = "INSERT INTO circuit VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($nomCircuit, $dateDepart, $dateRetour, $nbPersonnesMax, $nbPersonnesMin, $description, $prix, $pochete, null, null, $idthematique,0));
        $stmt = $unModele->executer();
        $_SESSION["idCircuit"] = $unModele->lastID;
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "circuit bien enregistrer";
    } catch (Exception $e) {
        echo $e;
    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }
}

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
        echo json_encode($tabRes);
        unset($unModele);
    }
}

function listerCircuitParThematique()
{
    global $tabRes;
    $tabRes['action'] = "lister";
    $requete = "SELECT * FROM circuit WHERE idThematique=?";
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
        echo json_encode($tabRes);
        unset($unModele);
    }
    echo json_encode($tabRes);
}

function ficheCircuit()
{
    global $tabRes;
    include '../Thematique/ThematiqueControleur.php';

    $idCircuit;
    if (isset($_POST['idCircuit'])) {
        $idCircuit = $_POST['idCircuit'];
        listerThematique();
    }
    if (isset($_GET['idCircuit'])) {
        $idCircuit = $_GET['idCircuit'];
    }

    $requete = "SELECT * FROM circuit WHERE idCircuit=?";
    try {
        $unModele = new circuitModel($requete, array($idCircuit));
        $stmt = $unModele->executer();
        $tabRes['ficheCircuit'] = array();
        if ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['ficheCircuit'][] = $ligne;
            $tabRes['OK'] = true;
            $tabRes['action'] = "afficherFiche";
        } else {
            $tabRes['OK'] = false;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }
    echo json_encode($tabRes);
    

}

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
    $idPromo = $_POST['idPromo'];
    $idthematique = $_POST['themeCircuit'];

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
        $tabRes['action'] = "modifier";
        $tabRes['msg'] = "Circuit $idCircuit bien modifie";
    } catch (Exception $e) {
        print_r($e);
    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }
}
////////////////////etape////////////////////////////////
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
         echo json_encode($tabRes);
        unset($unModele);
    }
}


////////////////////jour////////////////////////////
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
         echo json_encode($tabRes);
        unset($unModele);
    }
}
//////////////////////////Panier//////////////////////////
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

                $tabRes['action'] = "enregistrerPaniP";
            } else {

                $requete = "INSERT INTO panier VALUES (0,?,?)";
                $unModele = new circuitModel($requete, array($p_id, $user_id));
                $stmt = $unModele->executer();
                $tabRes['msg'] = " circuit  Ajouter..! ";

                $tabRes['action'] = "enregistrerPaniP";

            }

        }
    } catch (Exception $e) {
    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }

}

function listerPanier()
{
    global $tabRes;
    $tabRes['action'] = "listerPP";
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
            echo json_encode($tabRes);
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
        $tabRes['action'] = "compterPP";
        $tabRes['compt'] = $count;
    } catch (Exception $e) {
        echo $e;
    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }

}

///////////////////////////
function removePanier()
{
    global $tabRes;
    $id = $_POST['idp'];

    $tabRes['action'] = "removePP";
    $requete = "Delete  FROM panier where idPanier=?";
    try {
        $unModele = new circuitModel($requete, array($id));
        $stmt = $unModele->executer();
        $tabRes['msg'] = "Panier supperimer ...";

    } catch (Exception $e) {

    } finally {
        echo json_encode($tabRes);
        unset($unModele);
    }
}

////////////////////Reservation////////////////////////////////////
function enregistrerR() {
    global $tabRes;
    $nom = $_POST['nom'];
    $description = $_POST['description'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $nom);
        $requete = "INSERT INTO thematique VALUES(0,?,?,?)";
        $unModele = new circuitModel($requete, array($nom, $description, $pochete));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrerR";
        $tabRes['msg'] = "thamatique bien enregistrer";
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function lister() {
    global $tabRes;
    $tabRes['action'] = "listerR";
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
    $tabRes['action'] = "previewR";
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

 
 
 //lister les circuit par id
function  circuitparid() {
    global $tabRes;
    $id = $_POST['idc'];
    
    $tabRes['action'] = "ramenerR";
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

//lister toutes les réservations
function  listerReservation() {
    global $tabRes;
      
    $tabRes['action'] = "listerTouteReservationR";
    $requete = "SELECT * FROM reservation";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['lesReservation'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['lesReservation'][] = $ligne;
        }
        
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
  ///////utilisateur/////////////////////
    case "loginU" :
        login();
        break;
    case "registerU" :
        register();
        break;
    case "logoutU" :
        logout();
        break;
    case "infouserU" :
        information();
        break;
   ////////////////thematique///////////////////////
    
     case "enregistrerT" :
            enregistrer();
            echo json_encode($tabRes);
            break;
        case "listerT" :
            listerThematique();
            echo json_encode($tabRes);
            break;
 ////////////////Circuit///////////////////////    
        
         case "enregistrerCircuitC":
            enregistrerCircuit();
           
            break;
        case "afficherFormCircuitC":
            afficherFormCircuit();
            
            break;
        case "listerCircuitC":
            listerLesCircuit();
            
            break;
        case "ficheCircuitC":
            ficheCircuit();

            break;
        case "modifierC":
            modifierCircuit();
          
            break;
        
        //////etape////////////////
         case "enregistrerEtapeE" :
        enregistrerEtape();
        break;
    ///////////////jours//////////////
      case "enregistrerJourJ" :
        enregistrerJour();
        break;
    
    //////////////Panier///////////////////
    case "enregistrerPaniP":
        enregistrerpanier();
        break;
    case "compterPP":
        compterP();
        break;

    case "removePP":
        removePanier();
        break;

    case "listerPP":
        listerPanier();
        break;
/////////////Reservation///////////////////////////
     case "enregistrerR" :
        enregistrerR();
        break;
    case "listerR" :
        lister();
        break;

    case "listerParticipantR" :
        listerParticipant();
        break;
   
    
    case "ramenerR" :
        circuitparid();
        break;
    
    case "listerReservationR" :
        listerReservation();
        break;
   
    
    
    
    
    }
        
        
    
    
    

   
        
        
               
        
        
        
	?>

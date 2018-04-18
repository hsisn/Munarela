//Requetes Étapes
var nbEtape = 0;

//Requete d'ajout d'étapes
function AjouterEtape() {
    $('#sommaire').html("creation des jours");
    nbEtape++;
    nbJour=0;
   

    $('#nbEtape').html(nbEtape);
    $('#nbJour').html(nbJour + 1);
    var maxEtape = $('#nbEtapeCircuit').val();

    if (nbEtape > maxEtape) {
        //alert("je suis dans le if maxetape");
        $('#messages').html("max Etape");
        $('#contenuJour').show();
        $('#contenuEtape').hide();
        // nbEtape=0;
        return;
    }
      maxjour=$('#nbJourEtape').val();
    var formEtape = new FormData(document.getElementById('contenuEtape'));
    $('#contenuEtape')[0].reset();
    formEtape.append('action', 'enregistrerEtape');
    var data = CKEDITOR.instances.descripEtape.getData();
        formEtape.append("descE",data); 
    $.ajax({
        type: 'POST',
        url: 'Etape/EtapeControleur.php',
        data: formEtape,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);

            CircuitVue(reponse);
            $('#nbJour').html(nbJour + 1);
            
//            $('#idCircuit').val(reponse.idCircuit);
//            alert("avec jquery "+$('#idCircuit').val());
//            alert("avec reponse "+reponse.idCircuit);

        },
        fail: function (err) {

        }
    });
}

//Requete pour recupérer toutes les étapes d'un circuit donnée
function listerEtapes(idCircuit) {
    var formListerEtapes = new FormData();
    formListerEtapes.append("action", "listerEtapes"); 
    formListerEtapes.append("idCircuit", idCircuit);
    $.ajax({
        type: "POST",
        url: "Etape/EtapeControleur.php",
        data: formListerEtapes,
        contentType: false,
        processData: false,
        dataType: "json", 
        success: function (reponse) {     
            setEtapes(reponse.listeEtapes);
        },
        fail: function (err) {}
    });
}

///*function enlever(){
//	var leForm=document.getElementById('formEnleverThem');
//	var formthem = new FormData(leForm);
//	formthem.append('action','enlever');//alert(formFilm.get("action"));
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formthem,//leForm.serialize(),
//		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
//		processData : false,
//		dataType : 'json', //text pour le voir en format de string
//		success : function (reponse){//alert(reponse);
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}
//
//function obtenirFiche(){
//	$('#divFiche').hide();
//	var leForm=document.getElementById('formFiche');
//	var formFilm = new FormData(leForm);
//	formFilm.append('action','fiche');
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formFilm,
//		contentType : false, 
//		processData : false,
//		dataType : 'json', 
//		success : function (reponse){//alert(reponse);
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}
//
//function modifier(){
//	var leForm=document.getElementById('formFicheT');
//	var formthem = new FormData(leForm);
//	formthem.append('action','modifier');
//	$.ajax({
//		type : 'POST',
//		url : 'Thematique/ThematiqueControleur.php',
//		data : formthem,
//		contentType : false, 
//		processData : false,
//		dataType : 'json', 
//		success : function (reponse){//alert(reponse);
//					$('#divFormFiche').hide();
//					thematiqueVue(reponse);
//		},
//		fail : function (err){
//		}
//	});
//}*/
///////////////////////////
//
//
//function FormulaireR(){
//        var reponse={"action":"formulaire"};
//        	reservationVue(reponse);
//	
//}

//lister les participant
//function FormulaireCircuit() {
//    var formFilm = new FormData();
//    formFilm.append('action','lister');//alert(formFilm.get("action"));
//    $.ajax({
//        type: 'POST',
//        url: 'Thematique/ThematiqueControleur.php',
//        data: formFilm,
//        contentType: false,
//        processData: false,
//        dataType: 'json', //text pour le voir en format de string
//        success: function (reponse) {
//            //alert(reponse);
//            CircuitVue(reponse);
//        },
//        fail: function (err) {
//        }
//    });
//}


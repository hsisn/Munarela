/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  var nbJour=0;
  var maxjour;
  var maxEtape;
  
  
function ajouterJour() {
   
    $('#nbEtape').html(nbEtape+1);
    
     nbJour++;
      $('#nbJour').html(nbJour+1);
     
     //alert($('#nbJourEtape').val());
     
    
     maxEtape=$('#nbEtapeCircuit').val();
    //alert(", maxjour = "+maxjour+ ", maxEtape = "+maxEtape+ ", nbJour = "+nbJour+ ", nbEtape = "+nbEtape);
    

    
    
    if(nbEtape>=maxEtape && nbJour>=maxjour){
        
        register();
       // $('#messages').html("Circuit ajouté");
       // listerTT();
        //alert("id circuit = "+$('#idCircuit').val());
        AfficherDetailsCircuit($('#idCircuit').val());
        nbJour=0;
        nbEtape=0;
        
        return;
    }
    
      if (nbJour>=maxjour) {
        $('#messages').html("max Jour");
        $('#contenuJour').hide();
        nbJour=0;
        $('#contenuEtape').show();
        
        return;
    }
register();
   
}
function listerJour(idEtape) {
    var formListerEtapes = new FormData();
    formListerEtapes.append("action", "listerJours"); 
    formListerEtapes.append("idEtape", idEtape);
    $.ajax({
        type: "POST",
        url: "Jour/JourControleur.php",
        data: formListerEtapes,
        contentType: false,
        processData: false,
        dataType: "json", 
        success: function (reponse) {     
            setJours(reponse.listeJours);
        },
        fail: function (err) {}
    });
}

function register(){
   
          var formEtape = new FormData(document.getElementById('contenuJour'));
    $('#contenuJour')[0].reset();
    formEtape.append('action', 'enregistrerJour');
    var data = CKEDITOR.instances.descripJour.getData();
        formEtape.append("descJ",data); 
    $.ajax({
        type: 'POST',
        url: 'Jour/JourControleur.php',
        data: formEtape,
        dataType: 'json', //text pour le voir en format de string
        async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            //$('#messages').html(reponse.msg);
            //JourVue(reponse);
            
                       $('#idCircuit').val(reponse.idCircuit);
                        
                       
//            alert("avec jquery "+$('#idCircuit').val());
//           alert("avec reponse "+reponse.idCircuit);
        },
        fail: function (err) {

        }
    });
    
}

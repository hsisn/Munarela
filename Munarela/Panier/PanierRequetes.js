//requ�tes thematique
function enregistrerPani(){
	var formpanier= new FormData();
	formpanier.append('action','enregistrerPani');
        
        //var idc=$('#idCircuit').val();
       // alert(idc);
        //formpanier.append('idCircuit',idc);
        
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formpanier,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
                    count_item();
                    
		  panierVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

count_item();
   
 function count_item() {
     
     var formp= new FormData();
	formp.append('action','compterP');
        //formp.append('count_item',1);
        
        $.ajax({
           type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formp,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);                  
                    
		$(".badge").html(reponse.compt);
		},
		fail : function (err){
		   
		}
        })
    }

function listerPanier(){
          $('#sommaire').html("le panier "); 
	var formpanier= new FormData();
	formpanier.append('action','listerP');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formpanier,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					panierVue(reponse);
                                       
		},
		fail : function (err){
		}
	});
        
        
}


//remove panier 
function removePanier(rid) {
    var formpa = new FormData();
    formpa.append('action', "removeP");//alert(formFilm.get("action"));
    formpa.append('idp', rid);
    $.ajax({
        type: 'POST',
        url: 'Panier/PanierControleur.php',
        data: formpa,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) { //alert(reponse);
            listerPanier();
            count_item();        
            panierVue(reponse);

        },
        fail: function (err) {
        }
    });
}

/*function enlever(){
	var leForm=document.getElementById('formEnleverThem');
	var formthem = new FormData(leForm);
	formthem.append('action','enlever');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formthem,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}

function obtenirFiche(){
	$('#divFiche').hide();
	var leForm=document.getElementById('formFiche');
	var formFilm = new FormData(leForm);
	formFilm.append('action','fiche');
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formFilm,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}

function modifier(){
	var leForm=document.getElementById('formFicheT');
	var formthem = new FormData(leForm);
	formthem.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'Panier/PanierControleur.php',
		data : formthem,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					$('#divFormFiche').hide();
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}*/
/////////////////////////
/*function FormulaireT(){
        var reponse={"action":"formulaire"};
        	thematiqueVue(reponse);
	
}*/
//requ�tes thematique
/*function enregistrerT(){
	var formthematique = new FormData(document.getElementById('formEnregthems'));
	formthematique.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthematique,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}
*/
/*function listerTT(){
	var formthematique = new FormData();
	formthematique.append('action','lister');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthematique,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}
*/
/*function enlever(){
	var leForm=document.getElementById('formEnleverThem');
	var formthem = new FormData(leForm);
	formthem.append('action','enlever');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
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
		url : 'Thematique/ThematiqueControleur.php',
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
		url : 'Thematique/ThematiqueControleur.php',
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
function formulairelogin(){
        var reponse={"action":"flogin"};
        	utilisateurVue(reponse);
                
                
                            $('#loginform').validate({// initialize the plugin
        rules: {
          
                email: {
                 email:true,
                minlength: 4
            }
         ,
            password: {
               
                minlength: 2
            }
         
        
           
         
        },

        errorPlacement: function (label, element) {
            label.addClass("valid");
            label.insertAfter(element);
        }, wrapper: 'span'





    });
	
                
	
}

function logoutU(){ 
    
           var formuser = new FormData();
	formuser.append('action','logout');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Utilisateur/UtilisateurControleur.php',
		data : formuser, 
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
		
                if (reponse.msg=="deconnecter") {
                window.location.href ='index.php';
            }  } ,
		fail : function (err){
		}
	});
        
        
}






function formulaireregister(){
        var reponse={"action":"fregister"};
        	utilisateurVue(reponse);
                
                $('#registration_form').validate({// initialize the plugin
           rules: {
           first_name: {
                  minlength: 4
            }
            ,
            last_name: {
               
                minlength: 4
            },
             display_name: {
         
                minlength: 4
            }
            
            ,
                email: {
                email:true,
                minlength: 4
            }
         ,
            password: {
               
                minlength: 4
            },
              confirm_password: {
               
                minlength:2
            }
         
        
           
         
        },

        errorPlacement: function (label, element) {
            label.addClass("valid");
            label.insertAfter(element);
        }, wrapper: 'span'





    });
	
}

function loginU(){
       var formuser = new FormData(document.getElementById('loginform'));
	formuser.append('action','login');
         if (!$('#loginform').valid()) return;
	$.ajax({
		type : 'POST',
		url : 'Utilisateur/UtilisateurControleur.php',
		data : formuser,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
                    
                    
                if (reponse.msg=="utilisateur authentifier avec success") {
                window.location.href = 'index.php';
            } else {
            }
		utilisateurVue(reponse);
                                       
                                        
		},
		fail : function (err){
		   
		}
	});
	
}

function registerU(){
        var formuser = new FormData(document.getElementById('registration_form'));
	formuser.append('action','register');
       if (!$('#registration_form').valid()) return;
        
	$.ajax({
		type : 'POST',
		url : 'Utilisateur/UtilisateurControleur.php',
		data : formuser,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){ //alert(reponse);
                                        
                // if (reponse.msg=="index") {
              
                utilisateurVue(reponse);
                  listerTT();
               // window.location.href = 'index.php';
          //  } else {
           // }
		//utilisateurVue(reponse);
                                       
                                        
		},
		fail : function (err){
		   
		}
	});
}
//requ�tes films
function message(reponse) {
    var mes = "";

    mes += "<div class='alert alert-success'>";
    mes += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    mes += "<b>" + reponse + "</b>";
    mes += "</div>";
    $('#messages').html(mes);
    setTimeout(function () {
        $('#messages').html("");
    }, 5000);

}
function enregistrer() {

    var formFilm = new FormData(document.getElementById('contenuParticpants'));
    formFilm.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {
            // alert("la reponse = "+reponse+" mon prix "+reponse.prixCircuit+" existe "+reponse.existe);
            if (reponse.existe) {
                alert('vous avez déja réservé ce circuit');
                listerTT();
                return;
            }
            $('#labtotal').text(reponse.prixCircuit + " $");
            $('#montantpayervalue').text(reponse.prixCircuit + " $");

            $('#information').show();

//histoire reyder*********************************************************************
            $("#montantpayervalue").text(reponse.circuitid[0].prix * 0.3 + " $");
            $("input[name='montantpayer']").each(function () {
                $(this).change(function () {
                    if ($("#montantpayerdepot").is(":checked")) {
                        $("#montantpayervalue").text(($("#amount").val() * 0.3) + " $");
                    } else {
                        $("#montantpayervalue").text($("#amount").val() + " $");
                    }
                    ;
                })
            });

            $("#formreservation").submit(function () {
                if ($("#montantpayerdepot").is(":checked")) {
                    $("#amount").val($("#amount").val() * 0.3);
                }
            });
//fin histoire reyder*********************************************************************
        },
        fail: function (err) {

        }
    });
}

function ajouterParticipant() {

    var formParticpants = new FormData(document.getElementById('contenuParticpants'));
    //var formParticpants = $("#ajouterParticipant").serialize();
    //formParticpants.push({"action":"enregistrer"}); 
    $('input[type=hidden][id=prixhidden]').val(prixTotal);

    formParticpants.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formParticpants,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {
            //alert(reponse);
            filmsVue(reponse);
        
        },
        fail: function (err) {

        }
    });
}

function lister() {
    var formFilm = new FormData();
    formFilm.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);
        },
        fail: function (err) {
        }
    });
}


function afficherFormulaire() {

    var formFilm = new FormData(document.getElementById('formreservation'));
    formFilm.append('action', 'afficherFormulaireTous');//alert(formFilm.get("action"));
    //$('input[type=hidden][id=prixhidden]').val($("label[id=labtotal]").val());
    prixTotal = $("label[id=labtotal]").text().replace('$', '');


    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm, //leForm.serialize(),
        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            //alert(reponse);
            filmsVue(reponse);

        },
        fail: function (err) {
        }
    });

}

function supprimerParticipant() {

    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'supprimerParticipant');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm, //leForm.serialize(),
        contentType: false, //Enlever ces deux directives si vous utilisez serialize()
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            filmsVue(reponse);

        },
        fail: function (err) {
        }
    });
}

function detailParticipant() {

    $('#divFiche').hide();
    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'detail');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {


            filmsVue(reponse);
            $('select').hide();
            $("input[type=text][id=nomParticipant]").val(reponse.detailParticipant.nom);
            $("input[type=text][id=prenomParticipant]").val(reponse.detailParticipant.prenom);
            $("input[type=text][id=courielParticipant]").val(reponse.detailParticipant.courriel);
            $("input[type=text][id=telPostalParticipant]").val(reponse.detailParticipant.tel);
            $("input[type=text][id=villeParticipant]").val(reponse.detailadresse.ville);
            $("input[type=text][id=codePostalParticipant]").val(reponse.detailadresse.codePostale);

            $('#labelSexe').text("Sexe : " + reponse.detailParticipant.sexe);
            $('#labelPays').text("Pays : " + reponse.detailadresse.pays);
            //$("input[type=text][id=paysParticipant]").val(reponse.detailadresse.pays);
            $("input[type=text][id=numeroPasseport]").val(reponse.detailPasseport.numeroPass);
            $("input[type=text][id=dateDelPasseport]").val(reponse.detailPasseport.dateDelivPass);
            $("input[type=text][id=dateExpPasseport]").val(reponse.detailPasseport.dateExpiration);
            $("input[type=text][id=nationalite]").val(reponse.detailPasseport.nationalites);
            $("input[type=text][id=delivrerAExpPasseport]").val(reponse.detailPasseport.lieuDeliv);

        },
        fail: function (err) {
        }
    });
}

function modifierParticipant() {

    var formParticpant = new FormData(document.getElementById('contenuModifierParticipant'));

    formParticpant.append('action', 'modifierParticipant');

    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formParticpant,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {//alert(reponse);

            filmsVue(reponse);
        },
        fail: function (err) {
        }
    });
}

function obtenirFicheParticipant() {
    $('#divFiche').hide();
    var leForm = document.getElementById('formreservation');
    var formFilm = new FormData(leForm);
    formFilm.append('action', 'detail');
    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (reponse) {//alert(reponse);

            filmsVue(reponse);
            $('#modifierPart').show();
            //$('select').hide();
            $("input[type=text][id=nomParticipant]").val(reponse.detailParticipant.nom);
            $("input[type=text][id=prenomParticipant]").val(reponse.detailParticipant.prenom);
            $("input[type=text][id=courielParticipant]").val(reponse.detailParticipant.courriel);
            $("input[type=text][id=telPostalParticipant]").val(reponse.detailParticipant.tel);
            $("input[type=text][id=villeParticipant]").val(reponse.detailadresse.ville);
            $("input[type=text][id=codePostalParticipant]").val(reponse.detailadresse.codePostale);

//            $('#labelSexe').text("Sexe : "+reponse.detailParticipant.sexe);
//            $('#labelPays').text("Pays : "+reponse.detailadresse.pays);
            //$("input[type=text][id=paysParticipant]").val(reponse.detailadresse.pays);
            $("input[type=text][id=numeroPasseport]").val(reponse.detailPasseport.numeroPass);
            $("input[type=text][id=dateDelPasseport]").val(reponse.detailPasseport.dateDelivPass);
            $("input[type=text][id=dateExpPasseport]").val(reponse.detailPasseport.dateExpiration);
            $("input[type=text][id=nationalite]").val(reponse.detailPasseport.nationalites);
            $("input[type=text][id=delivrerAExpPasseport]").val(reponse.detailPasseport.lieuDeliv);
        },
        fail: function (err) {
        }
    });


}



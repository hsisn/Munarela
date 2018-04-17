//requ�tes RESERVATION
function enregistrerR() {
    var formreservation = new FormData(document.getElementById('formEnrReserv'));
    formreservation.append('action', 'enregistrer');
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formreservation,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            reservationVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function listerRR() {
    var formreservation = new FormData();
    formreservation.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formreservation,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            reservationVue(reponse);
        },
        fail: function (err) {
        }
    });
}




function FormulaireR() {
    var reponse = {"action": "formulaire"};
    reservationVue(reponse);

    var textLab = parseInt(prixReservation);


    $('#NombreAdulte').on('change', function () {
        total = textLab + (parseInt($("#NombreAdulte option:selected").val()) +
                (parseInt($("#NombreEnfant option:selected").val()) * 0.75) +
                (parseInt($("#NombreBebe option:selected").val())) * 0.5) * textLab;
        $("#labtotal").text(total + " $");
        $("#amount").val(total);
        $("#amount_1").val(total * .5);


    });

    $('#NombreEnfant').on('change', function () {

        total = textLab + (parseInt($("#NombreAdulte option:selected").val()) +
                (parseInt($("#NombreEnfant option:selected").val()) * 0.75) +
                (parseInt($("#NombreBebe option:selected").val())) * 0.5) * textLab;

        $("#labtotal").text(total + " $");
        $("#amount").val(total);
        $("#amount_1").val(total * .5);


    });

    $('#NombreBebe').on('change', function () {
        total = textLab + (parseInt($("#NombreAdulte option:selected").val()) +
                (parseInt($("#NombreEnfant option:selected").val()) * 0.75) +
                (parseInt($("#NombreBebe option:selected").val())) * 0.5) * textLab;

        $("#labtotal").text(total + " $");
        $("#amount").val(total);
        $("#amount_1").val(total * .5);

    });

}

//lister les participant
function listerParticipants() {
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


//information sur  user connecter
function infoUser() {
    var formFilm = new FormData();
    formFilm.append('action', 'infouser');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Utilisateur/UtilisateurControleur.php',
        data: formFilm,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {//alert(reponse);
            //reponse = JSON.parse(reponse);			
            filmsVue(reponse);

            $("input[type=text][id=nomParticipant]").val(reponse.information[0].last_name);
            $("input[type=text][id=prenomParticipant]").val(reponse.information[0].first_name);
            $("input[type=text][id=courielParticipant]").val(reponse.information[0].email);

            $("input[type=hidden][id=idUtilisateur]").val(reponse.information[0].idUtilisateur);

        },
        fail: function (err) {
        }
    });
}




//ramener circuit par identifiant 
function RamenerCircuit(rid) {
    var formcirc = new FormData();
    formcirc.append('action', "ramener");//alert(formFilm.get("action"));
    formcirc.append('idc', rid);
    $.ajax({
        type: 'POST',
        url: 'Reservation/ReservationControleur.php',
        data: formcirc,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) { //alert(reponse);

            $("#labtotal").html(reponse.circuitid[0].prix + " $");
            $("#amount").val(reponse.circuitid[0].prix);

        },
        fail: function (err) {
        }
    });
}

function prix(idSelect, textLab, taux) {

    //var total = 0;
    $(idSelect).on('change', function () {

        var selectVal = parseInt($(idSelect + " option:selected").val());
        if (selectVal !== 0)
            total = selectVal * textLab * taux;


        else {
            total = textLab;
            $("#labtotal").text(textLab);
            $("#amount").val(textLab);


        }

    });
    return total;
}

function preview() {
    var formReservartion = new FormData();
    formReservartion.append('action', "previewForm");//alert(formFilm.get("action"));

    $.ajax({
        type: 'POST',
        url: 'participants/participantsControleur.php',
        data: formReservartion,
        contentType: false,
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
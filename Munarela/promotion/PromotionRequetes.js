function enregistrerPromotion() {
    var formPromo = new FormData(document.getElementById('formPromotion'));
    formPromo.append('action', 'enregistrerPromotion');

    $.ajax({
        type: 'POST',
        url: 'promotion/promotionControleur.php',
        data: formPromo,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            //alert(JSON.stringify(reponse));
            listerTT();
        },
        fail: function (err) {

        }
    });
}
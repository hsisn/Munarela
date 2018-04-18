//requ�tes thematique
function enregistrerT() {
    var formthematique = new FormData(document.getElementById('formEnregthems'));
    formthematique.append('action', 'enregistrer');
    var data = CKEDITOR.instances.description.getData();
    formthematique.append("desc", data);

    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: formthematique,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            $.each(reponse.listetheme, function (index, theme) {
                $("#circuitDropdown").append("<li><a>" + theme.nom + "</a></li>");
                $("#circuitDropdown:last-child").attr('onclick', 'AfficherDetailsCircuit(' + theme.idThematique + ');return false;');
            });
            thematiqueVue(reponse);
        },
        fail: function (err) {

        }
    });
}

function listerTT() {
    $('#sommaire').html("Tous les Themes");

    var formthematique = new FormData();
    formthematique.append('action', 'lister');//alert(formFilm.get("action"));
    $.ajax({
        type: 'POST',
        url: 'Thematique/ThematiqueControleur.php',
        data: formthematique,
        contentType: false,
        processData: false,
        dataType: 'json', //text pour le voir en format de string
        success: function (reponse) {
            $.each(reponse.listetheme, function (index, theme) {
                $("#themeDropdown").append('<li onclick="AfficherCircuits(' + theme.idThematique + ');return false;"><a>' + theme.nom + "</li>");
            });
            setListeThemes(reponse.listetheme);
            thematiqueVue(reponse);
        }
    }).done(function () {

    });

}

function FormulaireT() {
    var reponse = {"action": "formulaire"};
    thematiqueVue(reponse);

    $('#formEnregthems').validate({// initialize the plugin
        rules: {
            nom: {
                required: true,
                minlength: 4
            }
        },
        errorPlacement: function (label, element) {
            label.addClass("valid");
            label.insertAfter(element);
        }, wrapper: 'span'





    });

}
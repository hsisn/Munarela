function formulairePromotion() {

    var result = "";

    result += "<div class='col-md-6 col-md-push-2'>";

    result += "<form id='formPromotion'>";
    result += "<h3>Ajouter une promotion</h3>";
    result += "<div class='form-group'>";
    result += "<label for='nom'>nom:</label>";
    result += "<input type='text' class='form-control' id='nomPromotion' name='nomPromotion'>";
    result += "</div>";
    result += '                                                <div class="form-group row">';
    result += '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de Début</label>';
    result += '                                                    <div class="col-sm-10">';
    result += '                                                        <input type="text" class="form-control" id="dateDebut" name="dateDebut" placeholder="Entrer départ date" required>';
    result += "                                                    </div>";
    result += "                                                </div>";
    result += '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de Fin</label>';
    result += '                                                    <div class="col-sm-10">';
    result += '                                                        <input type="text" class="form-control" id="dateFin" name="dateFin" placeholder="Entrer retour date" required>';
    result += "                                                    </div>";
        result += "<div class='form-group'>";
    result += "<label for='nom'>Taux:</label>";
    result += "<input type='numeric' class='form-control' id='taux' name='taux'>";
    result += "</div>";
    result += "<input type='button' class='btn btn-primary' value='Ajouter' onClick='enregistrerPromotion();'><br><br>";
    result += "</form>";
    result += "</div>";

    $('#get_result').html(result);

}
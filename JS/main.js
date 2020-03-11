var form = document.forms["form"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var amount = parseInt(form["amount"].value);
    var percentSelection = parseInt(form["select"].value);
    var customersTotal = parseInt(form["customers"].value);
    var tips;

    form["amount"].value = "";
    form["select"].value = "";
    form["customers"].value = "";

    if (amount.value == null) {
        swal(`Jūs neįvedėte visų duomenų`);
    } else if (percentSelection == "30") {
        tips = amount * percentSelection / 100 / customersTotal;
        swal(`Iš viso jūs paliekate po ${tips} Eur arbatpinigių`);

    } else if (percentSelection.textContent = "20% - Labai geras") {
        tips = amount * percentSelection / 100 / customersTotal;
        swal(`Iš viso jūs paliekate po ${tips} Eur arbatpinigių`);

    } else if (percentSelection = "10") {
        tips = amount * percentSelection / 100 / customersTotal;
        swal(`Iš viso jūs paliekate po ${tips} Eur arbatpinigių`);

    } else if (percentSelection = "5") {
        tips = amount * percentSelection / 100 / customersTotal;
        swal(`Iš viso jūs paliekate po ${tips} Eur arbatpinigių`);

    } else if (percentSelection = "1") {
        tips = amount * percentSelection / 100 / customersTotal;
        swal(`Iš viso jūs paliekate po ${tips} Eur arbatpinigių`);
    }
})

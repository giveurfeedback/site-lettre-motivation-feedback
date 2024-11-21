function recupererMotif()
{
    return document.querySelector('input[name="motif-refus"]:checked').parentNode.innerText  
}


function genererContenuMail()
{
    const motifRefus = recupererMotif()
    const messageSaisi = document.querySelector("#message").value

    const contenuMail = 
`Nous ne pouvons pas vous prendre en stage pour la raison suivante : ${motifRefus}.
——————————————————————————————————————————————————

${messageSaisi}

——————————————————————————————————————————————————
Carrefour Euralille
Lille 59000`

    return contenuMail
}

function envoyerMail()
{
    const emailDestination = "florentinlentier@gmail.com"
    const sujetMail = encodeURIComponent("Refus de stage")
    const contenuMail = encodeURIComponent(genererContenuMail())

    const urlMail = `mailto:${emailDestination}?subject=${sujetMail}&body=${contenuMail}`

    const lien = document.createElement("a")
    lien.href = urlMail

    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}

const boutonEnvoyer = document.querySelector("#envoyer")
boutonEnvoyer.addEventListener("click", envoyerMail)
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    // METTRE L'ALERTE POUR REMPLIR LE URL
    if (url === '') {
        alert("Entrez s'il vous plaît votre URL");
    } else {
        showSpinner();

        // Afficher le spinner pendant une seconde
        setTimeout(() => {
            hideSpinner();

            // AFFICHER LE QR CODE
            generateQRCode(url, size);

            // L'url de l'image passer en sauvegarde
            setTimeout(() => {
                // Créer une variable que l'image sera disponible
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
};

// Générer le QR Code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode' , {
        text: url,
        widht: size,
        height: size
    });
};

// Effacer le qr code et enregistrer le bouton
const clearUI = () => {
    qr.innerHTML = '';
// Effacer bouton sauvegarder de l'image
const saveLink = document.getElementById('save-link');
if (saveLink) {
    saveLink.remove();
}
}

const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Télécharger';
    document.getElementById('generated').appendChild(link); //appendChild le déplace de sa position actuelle vers une nouvelle position
}

// MONTRER LE SPINNER QUAND APPUYER SUR LE BOUTTON
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}
hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    // METTRE L'ALERTE POUR REMPLIR LE URL
    if (url === '') {
        alert("Entrez s'il vous plaît votre URL");
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();

            // AFFICHER LE QR CODE
            generateQRCode(url, size);
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

// MONTRER LE SPINNER QUAND APPUYER SUR LE BOUTTON
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}
hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
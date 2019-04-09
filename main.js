var qrcode;
var urlParams = new URLSearchParams(window.location.search);
var mpUser_id = urlParams.get('mpuserid');
var idPV = urlParams.get('idpv');

if (document.getElementById("qrcode")) {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "",
        width: 512,
        height: 512,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    qrcode.clear();
    qrcode.makeCode('https://mercadopago.com/s/qr/' + mpUser_id + '/pv' + idPV);

    document.getElementById('pv').innerHTML = 'Punto de Venta ' + idPV;
}
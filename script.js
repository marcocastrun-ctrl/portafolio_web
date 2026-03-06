function downloadPDF(){

    const element=document.querySelector('#pdf-content');
    //console.log("element");

    const otp={
        margin: [10, 5, 15, 5], // [arriba, izquierda, abajo, derecha] en nm
        filename: 'Hoja_de_vida_Marco_Antonio_Rivera_Castaño.pdf',
        image: { type: 'png', quality:1},
        html2canvas:{
            scale: 2,
            useCORS: true,
            scrollY:0
        },
        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation: 'portrait' //Orientación vertical
        }
    }

    html2pdf().set(otp).from(element).save();

}

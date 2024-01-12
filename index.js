document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll('.input-data input');

    inputFields.forEach(input => {
        input.addEventListener('input', function () {
            const label = this.parentNode.querySelector('label');
            if (this.value.trim() !== '') {
                label.classList.add('focused');
            } else {
                label.classList.remove('focused');
            }
        });
    });
});


import { PDFDocument, rgb } from 'https://cdn.skypack.dev/pdf-lib'


const generatePDF = async (name, roll, programme, branch, roomNo, hallNo, purpose, email, altEmail, contact, local, permanent, thesis, date1, head, date2) => {

    const exBytes = await fetch("./SBF.pdf").then((res) =>
        res.arrayBuffer()
    );

    const exFont = await fetch("./Sanchez-Regular.ttf").then((res) =>
        res.arrayBuffer()
    );


    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);

    const myFont = await pdfDoc.embedFont(exFont)

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const font_size = 10;

    firstPage.drawText(name, {
        x: 171,
        y: 565,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(roll, {
        x: 120,
        y: 527,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (programme.length < 26) {
        firstPage.drawText(programme, {
            x: 142,
            y: 488,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(programme, {
            x: 85,
            y: 474,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (branch.length < 32) {
        firstPage.drawText(branch, {
            x: 355,
            y: 488,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(branch.substring(0, 32) + "-", {
            x: 355,
            y: 488,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(branch.substring(32, branch.length), {
            x: 355,
            y: 474,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    firstPage.drawText(roomNo, {
        x: 132,
        y: 450,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(hallNo, {
        x: 371,
        y: 450,
        size: font_size,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (purpose.length > 65) {
        firstPage.drawText(purpose.substring(0, 65) + "-", {
            x: 128,
            y: 413,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(purpose.substring(65, purpose.length), {
            x: 60,
            y: 400,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(purpose, {
            x: 128,
            y: 413,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (email.length > 21) {
        firstPage.drawText(email.substring(0, 21), {
            x: 123,
            y: 377,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(email.substring(21, email.length), {
            x: 123,
            y: 364,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else {
        firstPage.drawText(email, {
            x: 123,
            y: 377,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (altEmail.length > 25) {
        firstPage.drawText(altEmail.substring(0, 25), {
            x: 378,
            y: 377,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(altEmail.substring(25, altEmail.length), {
            x: 378,
            y: 364,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });

    } else {
        firstPage.drawText(altEmail, {
            x: 378,
            y: 377,
            size: font_size+1,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(contact, {
        x: 199,
        y: 340,
        size: font_size+1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (local.length < 35) {
        firstPage.drawText(local, {
            x: 45,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (local.length >= 35 && local.length < 70) {
        firstPage.drawText(local.substring(0, 35) + "-", {
            x: 45,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(35, local.length), {
            x: 45,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (local.length >= 70 && local.length < 106) {
        firstPage.drawText(local.substring(0, 35) + "-", {
            x: 45,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(35, 70) + "-", {
            x: 45,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(70, local.length), {
            x: 45,
            y: 248,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(local.substring(0, 35) + "-", {
            x: 45,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(35, 70) + "-", {
            x: 45,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(local.substring(70, 106) + "-", {
            x: 45,
            y: 248,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(local.substring(106, local.length), {
            x: 45,
            y: 230,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (permanent.length < 35) {
        firstPage.drawText(permanent, {
            x: 315,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (permanent.length >= 35 && permanent.length < 70) {
        firstPage.drawText(permanent.substring(0, 35) + "-", {
            x: 315,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(35, permanent.length), {
            x: 315,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else if (permanent.length >= 70 && permanent.length < 106) {
        firstPage.drawText(permanent.substring(0, 35) + "-", {
            x: 315,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(35, 70) + "-", {
            x: 315,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(70, permanent.length), {
            x: 315,
            y: 248,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    } else {
        firstPage.drawText(permanent.substring(0, 35) + "-", {
            x: 315,
            y: 290,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(35, 70) + "-", {
            x: 315,
            y: 269,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(permanent.substring(70, 106) + "-", {
            x: 315,
            y: 248,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(permanent.substring(106, permanent.length), {
            x: 315,
            y: 230,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }

    if (thesis.length > 21) {

        firstPage.drawText(thesis.substring(0, 21) + "-", {
            x: 255,
            y: 169,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(thesis.substring(21, thesis.length), {
            x: 255,
            y: 153,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });


    } else {
        firstPage.drawText(thesis, {
            x: 255,
            y: 169,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(date1, {
        x: 435,
        y: 169,
        size: font_size+1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

    if (head.length > 12) {

        firstPage.drawText(head.substring(0, 12) + "-", {
            x: 315,
            y: 116,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });

        firstPage.drawText(head.substring(12, head.length), {
            x: 315,
            y: 101,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });


    } else {
        firstPage.drawText(head, {
            x: 315,
            y: 116,
            size: font_size,
            font: myFont,
            color: rgb(0, 0, 0),
        });
    }


    firstPage.drawText(date2, {
        x: 437,
        y: 116,
        size: font_size+1,
        font: myFont,
        color: rgb(0, 0, 0),
    });

        const pdfBytes = await pdfDoc.save();

        var file = new File(
        [pdfBytes],
        "SBF Loan Form.pdf",
        {
          type: "application/pdf;charset=utf-8",
        }
      );
     saveAs(file);


    // const uri = await pdfDoc.saveAsBase64({ dataUri: true })

    // document.querySelector('#mypdf').src = uri
};

function formatDate(date) {
    if(date.length==0){
        return ""
    }
    var inputDate = date.split('-');
    var formattedDate = inputDate[2]+"-"+inputDate[1]+"-"+inputDate[0];
    return formattedDate;
}

const submitBtn = document.getElementById('btn')

const name = document.querySelector("#studentInput")
const roll = document.querySelector("#rollInput")
const programme = document.querySelector("#programmeInput")
const branch = document.querySelector("#branchInput")
const roomNo = document.querySelector("#roomNoInput")
const hallNo = document.querySelector("#hallInput")
const email = document.querySelector("#emailInput")
const altEmail = document.querySelector("#altEmailInput")
const local = document.querySelector("#locAddInput")
const permanent = document.querySelector("#perAddInput")
const contact = document.querySelector("#contactParInput")
const purpose = document.querySelector("#purposeInput")
const thesis = document.querySelector("#thesisInput")
const date1 = document.querySelector("#date1Input")
const head = document.querySelector("#headInput")
const date2 = document.querySelector("#date2Input")

submitBtn.addEventListener('click', (ev) => {

    ev.preventDefault()

    if(name.value.length == 0 || roll.value.length == 0 || programme.value.length == 0 || branch.value.length == 0 || roomNo.value.length == 0 || hallNo.value.length == 0 || email.value.length == 0 || altEmail.value.length == 0 || local.value.length == 0 || permanent.value.length == 0 || contact.value.length == 0 || purpose.value.length == 0){
        alert("Please fill all the required details before submitting")
        return
    }
    generatePDF(name.value.toUpperCase(), roll.value, programme.value.toUpperCase(), branch.value.toUpperCase(), roomNo.value.toUpperCase(), hallNo.value.toUpperCase(), purpose.value.toUpperCase(), email.value, altEmail.value, contact.value, local.value.toUpperCase(), permanent.value.toUpperCase(), thesis.value.toUpperCase(), formatDate(date1.value), head.value.toUpperCase(), formatDate(date2.value))
})








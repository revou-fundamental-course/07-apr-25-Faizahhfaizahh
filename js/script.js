var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("mySlides");
    if (n > imgList.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = imgList.length};
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
},3000)

// function validationForm(){
//     console.log("Form validation started");
//     const name = document.getElementById('name').value;
//     console.log('Name', name);

//     if (name != '') {
//         alert('Please enter yout name!')
//     } else {
//         // Disini logika ketika sukses
//         alert('Thank you for your submission!')
//     }
    
// }

function validationForm() {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('date').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const message = document.getElementById('msg').value.trim();
    const output = document.getElementById('output-msg-us');

    let gender = '';
    if (genderMale) {
        gender = 'Male';
    } else if (genderFemale) {
        gender = 'Female';
    }

    // Validasi untuk form
    if (name === '' || dob === '' || (!genderMale && !genderFemale) || message === '') {
        alert('Please complete all form fields!');
        return;
    }

    // Menampilkan data
    const result = `Name: ${name}\nDate of Birth: ${dob}\nGender: ${gender}\nMessage: ${message}`;
    output.value = result;

    alert('Thank you for your submission!');
}


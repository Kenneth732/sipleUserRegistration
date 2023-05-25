document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleUserInput();
});

const handleUserInput = () => {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let country = document.querySelector('#country').value;
    let city = document.querySelector('#city').value;
    let religion = document.querySelector('#religion').value;

    if(firstName === "" || lastName === "" || country === "" || city === "" || religion === ""){
        return alert(`Fill the form please...`)
    }else{
        handleAcceptUserData(firstName, lastName, country, city, religion)
    }
}

const handleAcceptUserData = ( firstname, lastname, natinality, hometown, eligionname ) => {
    document.querySelector('#firstname').innerText = firstname;
    document.querySelector('#lastname').innerText = lastname;
    document.querySelector('#nationality').innerText = natinality;
    document.querySelector('#town').innerText = hometown;
    document.querySelector('#religionname ').innerText = eligionname ;

    document.querySelector('#story').removeAttribute('class')
}
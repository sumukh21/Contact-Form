// Initialize Firebase
var config = {
    apiKey: "AIzaSyAisqvdJcATnwJB0Hsz7DkqJDrd7qbKLW8",
    authDomain: "contactform-8604a.firebaseapp.com",
    databaseURL: "https://contactform-8604a.firebaseio.com",
    projectId: "contactform-8604a",
    storageBucket: "contactform-8604a.appspot.com",
    messagingSenderId: "684732548699"
  };
  firebase.initializeApp(config);

//Reference messsages collection
var messageRef = firebase.database().ref('messages');

//Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit',submitForm)

//Submit Form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name=getInputValid('name');
    var company=getInputValid('company');
    var email=getInputValid('email');
    var phone=getInputValid('phone');
    var message=getInputValid('message');

    // Save Message
    saveMessage(name,company,email,phone,message);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';


    //Hide Alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    },3000);

    //Clear
    document.getElementById('contactForm').reset();

}

//function to get form values
function getInputValid(id){
    return document.getElementById(id).value;
}



//Save the message to firebase
function saveMessage(name,company,email,phone,message){

    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    })
}
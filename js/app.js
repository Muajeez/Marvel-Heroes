$(document).ready(function() {
    if ($('#newContact').length > 0 ) {
        contactScript('forcontact');
    }
});
//firebase
function contactScript(value) {
    var a = { 
      apiKey: "AIzaSyAy4cOzEiQnFTODY-jg9EJXvyJlBc3iCsM",
      authDomain: "myprofile-ef753.firebaseapp.com",
      databaseURL: "https://myprofile-ef753.firebaseio.com",
      projectId: "myprofile-ef753",
      storageBucket: "myprofile-ef753.appspot.com",
      messagingSenderId: "578094377531"
    };
    firebase.initializeApp(a);
    var b = firebase.database().ref("messages");
        $("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            f = { name: c, email: d};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}

$(function() {
  $('.itemHeight').matchHeight();
});
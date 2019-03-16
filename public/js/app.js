
var config = {
    apiKey: "AIzaSyAxL9K3ZH1Vw462_YWIoZ6Olmcm1IUmo_I",
    authDomain: "wallpaperapp-787df.firebaseapp.com",
    databaseURL: "https://wallpaperapp-787df.firebaseio.com",
    projectId: "wallpaperapp-787df",
    storageBucket: "wallpaperapp-787df.appspot.com",
    messagingSenderId: "359784049084"
  };
  firebase.initializeApp(config);
  firebase.auth.Auth.Persistence.LOCAL;
$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
    });
    
});
$("#btn-logout").click(function(e){
  firebase.auth().signOut();
});
function switchView(view){
  $.get({
    url:view,
    cache: false,
  }).then(function(data){
    $("#container").html(data);
  });
}
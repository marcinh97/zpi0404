function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    alert("HELLO");
    console.log(id_token);
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/try');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        alert('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
}

console.log("model.js");

let _db;

//exports initFirebase()
export function initFirebase() {
  //Tells console if there is a user or not
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("There is a user");
    } else {
      console.log("No User");
      _db = "";
    }

    //callback();
  });
}

//exports signIn for Authentication
export function signIn(callback) {
  //signs in anonmously
  firebase
    .auth()
    .signInAnonymously()
    .then((res) => {
      _db = firebase.firestore();
      callback();
    });
}

//Retrieve albums from the database based on genre
export function getAlbumByGenre(genre) {
  //Adds data to the screen
  $(".content").html("");
  $(".content").append(`<h1>Popular ${albums.value} Albums</h1>`);

  //Retrieves data from firestore
  _db
    .collection("albums")
    .where("genre", "==", genre)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let genre = doc.data();
        console.log(genre);
        $(".content").append(`
        <div class="albumContent">
        <h3>${genre.albumName}</h3>
        <h4>${genre.artistName}</h4>
        <img src="${genre.albumPhoto}" alt="" width="175px" height="auto"/>
      </div>`);
      });
    });
}

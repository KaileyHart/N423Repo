console.log("app.js");

//Imports our Model Controller
import * as Model from "../model/model.js";

function initListeners() {
  $("#albums").change(() => {
    Model.getAlbumByGenre(albums.value);
    // console.log(albums.value);
  });
}

//Makes sure the doc is ready
$(document).ready(function () {
  Model.initFirebase();
  Model.signIn(initListeners);
});

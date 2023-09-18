const listPhotos= async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const photos= await response.json();
    let v1="";
    let v2="";
    let v3="";
    var roots = photos.map(function (img) {
        v1=img.url;
      });
    roots = photos.map(function (img) {
        if (v1 != img.url) {
            v2=img.url;  
        }
      });
      roots = photos.map(function (img) {
        if (v1 != img.url && v2!=img.url) {
            v3=img.url;  
        }
      });
    document.getElementById("id1").src=v1;
    document.getElementById("id2").src=v2; 
    document.getElementById("id3").src=v3; 
}

window.addEventListener("load", function(){
    listPhotos();
})
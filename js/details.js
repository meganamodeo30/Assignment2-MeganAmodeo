var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '7s9alkgveov0',
    accessToken: 'dJJYa0G8qLauS_hyeAunluoNCFtOvabKgP-wGDHwLjo',
  });

  client.getEntry(id).then(function (entry) {
        var title = document.createElement('h2');
        title.innerHTML = entry.fields.title;
        document.getElementById("place-for-content").append(title);
        console.log(entry);

        var gallery = document.createElement('div');
        entry.fields.gallery.forEach(function (img) {
            var galleryImage = document.createElement('img');
            galleryImage.src = img.fields.file.url;
            gallery.append(galleryImage);

        });
        document.getElementById("place-for-content").append(gallery);
 
  });
let gallery = document.getElementById('gallery');

$.ajax({
    url: '/api/gallery',
    method: 'get',
    dataType: 'json',
    success: function(data){
	    console.dir(data['files']);

        gallery.innerHTML = gallery.innerHTML + `<p>Gallery is not fully loaded. Loaded only last 100</p>`

        for (file in data['files']) {
            console.log(data['files'][file]);
            gallery.innerHTML = gallery.innerHTML + `<img src='/outputs/${data['files'][file]}'>`
        }
    },
    error: function (jqXHR, exception) {
        if (jqXHR.status === 0) {
            gallery.innerText = 'Not connected, verify network';
        } else if (jqXHR.status == 500) {
            gallery.innerText = "Something strange is happening on the server and it can't get a list of images for the gallery";
        } else {
            gallery.innerText = 'Something went wrong...';
            console.error(jqXHR.responseText);
        }
    }
});
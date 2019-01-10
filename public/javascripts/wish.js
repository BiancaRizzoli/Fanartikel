function addWish(ArtID) {
    var daddy = {ArtikelID: ArtID}
    $.ajax({
        url: '/wishlist',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(daddy),
        dataType: 'json',
        success: (res) => {
            if (res.sherlock) {
                var element = document.getElementById('a'+daddy.ArtikelID)
                element.classList.remove("red")
            } else { 
                var element = document.getElementById('a'+daddy.ArtikelID)
                element.classList.add("red")
            }
        },
        error: (res) => {
            console.log('Error')
        }
    })
}


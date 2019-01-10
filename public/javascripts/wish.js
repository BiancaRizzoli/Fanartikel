function addWish(ArtID) {
    var daddy = {ArtikelID: ArtID}
    $.ajax({
        url: '/wishlist',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(daddy),
        dataType: 'json',
        success: (res) => {
            console.log(res.message)
        },
        error: (res) => {
            console.log('Error')
        }
    })
}


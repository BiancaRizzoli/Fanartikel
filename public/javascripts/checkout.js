var addToCheckout = (ArtID) => {
    var data = {
        ArtID: ArtID
    }
    $.ajax({
        url: '/checkout',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: (res) => {
            $('#total').text(res.price +' €')
        },
        error: (res) => {
            console.log('Error')
        }
    })

}
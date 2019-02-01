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
            $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-success alert-dismissible fade show text-center" role="alert">Artikel hinzugefügt.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
            setTimeout(() => {
                $(".alert").alert('close')
            }, 5000);
        },
        error: (res) => {
            $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-danger alert-dismissible fade show text-center" role="alert">Error<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
            setTimeout(() => {
                $(".alert").alert('close')
            }, 5000);
        }
    })

}
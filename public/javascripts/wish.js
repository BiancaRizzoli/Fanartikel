function addWish(ArtID) {
    var daddy = { ArtikelID: ArtID }
    $.ajax({
        url: '/wishlist',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(daddy),
        dataType: 'json',
        success: (res) => {
            if (res.sherlock) {
                var element = document.getElementById('a' + daddy.ArtikelID)
                element.classList.remove("red")
                /*if (document.getElementsByClassName('alert')) {
                    $(".alert").alert('close')
                    $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-' + res.type + ' alert-dismissible fade show text-center" role="alert">' + res.message + '.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
                    setTimeout(() => {
                        $(".alert").alert('close')
                    }, 2000);
                } else {
                    $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-' + res.type + ' alert-dismissible fade show text-center" role="alert">' + res.message + '.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
                    setTimeout(() => {
                        $(".alert").alert('close')
                    }, 2000);
                }*/
            } else {
                var element = document.getElementById('a' + daddy.ArtikelID)
                element.classList.add("red")
                /*if (document.getElementsByClassName('alert')) {
                    $(".alert").alert('close')
                    $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-' + res.type + ' alert-dismissible fade show text-center" role="alert">' + res.message + '.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
                    setTimeout(() => {
                        $(".alert").alert('close')
                    }, 2000);
                } else {
                    $('body').after('<div style="position: fixed;bottom: 5px;left: 10px;" class="alert alert-' + res.type + ' alert-dismissible fade show text-center" role="alert">' + res.message + '.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
                    setTimeout(() => {
                        $(".alert").alert('close')
                    }, 2000);
                }*/
            }
        },
        error: () => {
            console.log('Error')
        }
    })
}

function removeWish(ArtID) {
    var mommy = { ArtikelID: ArtID }
    $.ajax({
        url: 'wishlist/remove',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(mommy),
        dataType: 'json',
        success: () => {
            var datSelector = '#'+mommy.ArtikelID
            $(datSelector).remove()
            if ($('.simpleCart_shelfItem').length === 0) {
                $('#pic').removeClass('hide');
            } 
            console.log($('.simpleCart_shelfItem').length);
        },
        error: (res) => {
            console.log('Error')
        }
    })
}


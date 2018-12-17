ArtID = []

$(document).ready(() => {
    $('#btn-upload').click(() => {
        if (ArtID.length > 0) {
            $.ajax({
                url: '/dashboard/delete',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(ArtID),
                dataType: 'json'
            })
        }
    })
})

function addRows(ID) {
    if (document.getElementById(ID).checked) {
        ArtID.push(ID)
    } else {
        // ID löschen
    }
}
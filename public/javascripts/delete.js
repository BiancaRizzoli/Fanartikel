ArtID = []

$(document).ready(() => {
    $('#btn-upload').click(() => {
        if (ArtID.length > 0) {
            $.ajax({
                url: '/dashboard/delete',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(ArtID),
                dataType: 'json',
                success: ()=>{
                    window.location.reload()
                },
                error:  ()=>{
                    window.location.reload()
                }
            })
        }
    })
})

function addRows(ID) {
    if (document.getElementById(ID).checked) {
        ArtID.push(ID)
    } else { 
        var index = ArtID.indexOf(ID)
        ArtID.splice(index, 1)
    } 
}
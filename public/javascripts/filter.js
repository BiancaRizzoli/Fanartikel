/*categories = [{ besch: 'Bekleidung', id: 1 }, { besch: 'Schmuck', id: 2 }];
colors = [];

//die Arrays müssen noch mit den dazugehörigen Daten befüllt werden!!

Prodlist = [{ artId: 1, filterId: 1, colorId: 1 }, { artId: 2, filterId: 2, colorId: 2 }];

//filtert nach Categorien
function filterCategorie(catId) {
    categories.find(function (filter) {
        if (filter.id == catId) {
            Prodlist.foreach(function (prod) {
                var prodcard = document.getElementById(prod.artId);

                prodcard.style.display = block;

                if (prod.filterId != filter.id) {
                    prodcard.style.display = none;
                }
            });
        }
    });
}

function filterColor(colId) {
    colors.find(function (color) {
        if (color == colId) {
            ProdView
        }
    });
}*/

$(document).ready(() => {
    $('#btn-filter').click(() => {
        $.ajax({
            url: '/filter',
            type: 'POST',
            success: (res) => {
                
            },
            error: () => {
                
            }
        })
    })
})
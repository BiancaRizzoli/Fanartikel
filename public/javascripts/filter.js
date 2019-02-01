var category = (data) => {
    var fuckingArray = []
    fuckingArray.push(data)
    $.ajax({
        url: '/category',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(fuckingArray),
        dataType: 'json',
        success: (res) => {
            /*for (var i = 0; i < res[0].length; i++) {
                document.getElementById(res[0][i]).style.display = 'block'
            }*/
            for (var i = 0; i < res.length; i++) {
                document.getElementById(res[i]).style.display = 'none'
            }
        },
        error: () => {
            console.log('Error')
        }
    })
}

var color = (data) => {
    var fuckingArray = []
    fuckingArray.push(data)
    $.ajax({
        url: '/color',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(fuckingArray),
        dataType: 'json',
        success: (res) => {
            /*for (var i = 0; i < res[0].length; i++) {
                document.getElementById(res[0][i]).style.display = 'block'
            }*/
            for (var i = 0; i < res.length; i++) {
                document.getElementById(res[i]).style.display = 'none'
            }
        },
        error: () => {
            console.log('Error')
        }
    })
}

var fandom = (data)=>{
    var fuckingArray = []
    fuckingArray.push(data)
    $.ajax({
        url: '/fandom',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(fuckingArray),
        dataType: 'json',
        success: (res) => {
            for (var i = 0; i < res[0].length; i++) {
                document.getElementById(res[0][i]).style.display = 'block'
            }
            for (var i = 0; i < res[1].length; i++) {
                document.getElementById(res[1][i]).style.display = 'none'
            }
        },
        error: (res) => {
            console.log(res)
        }
    })
}

var reset = ()=>{
    $.ajax({
        url: '/reset',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        success: (res) => {
            for (var i = 0; i < res.length; i++) {
                document.getElementById(res[i]).style.display = 'block'
            }
        },
        error: () => {
            console.log('Error')
        }
    }) 
}
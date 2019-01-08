$(document).ready(() => {
    $('#btn-Bekleidung').click(() => {
        var data = [1]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Schmuck').click(() => {
        var data = [2]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Repliken').click(() => {
        var data = [3]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Schuhe').click(() => {
        var data = [4]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Zubehör').click(() => {
        var data = [5]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Zauberstäbe').click(() => {
        var data = [6]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                alert('Error')
            }
        })
    })
    $('#btn-Taschen').click(() => {
        var data = [7]
        $.ajax({
            url: '/category',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                console.log('Error')
            }
        })
    })
    $('#btn-1').click(() => {
        var data = [1]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: (res) => {
                for (var i = 0; i < res[0].length; i++) {
                    document.getElementById(res[0][i]).style.display = 'block'
                }
                for (var i = 0; i < res[1].length; i++) {
                    document.getElementById(res[1][i]).style.display = 'none'
                }
            },
            error: () => {
                console.log('Error')
            }
        })
    })
    $('#btn-2').click(() => {
        var data = [2]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-3').click(() => {
        var data = [3]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-4').click(() => {
        var data = [4]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-5').click(() => {
        var data = [5]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-6').click(() => {
        var data = [6]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-7').click(() => {
        var data = [7]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
    $('#btn-8').click(() => {
        var data = [8]
        $.ajax({
            url: '/color',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
                console.log('Error')
            }
        })
    })
})



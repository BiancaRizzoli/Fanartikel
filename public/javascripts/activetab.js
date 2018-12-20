$(function(){
    $('a[data-toggle="pill"]').on('click', function(e) {
        window.localStorage.setItem('activeTab',$(e.target).attr('href'))
    })
    var activeTab = window.localStorage.getItem('activeTab')
    if (activeTab) {
        $('#pills-tab a[href="'+ activeTab + '"]').tab('show')
        window.localStorage.removeItem("activeTab")
    }
})
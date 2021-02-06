$(document).ready(function(){
    $('.search').on('input', ()=>{
        $.post('/search', {
            data: $('.search').val()
        }, function(status, data){
            console.log(status)
            console.log(data)
        })
    })
});
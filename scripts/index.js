$(document).ready(function() {
    console.log('ready');
})

$('#btn-home').click(function() {
    console.log('home clicked');
    $("html, body").animate({ scrollTop: 0 }, "slow");    
})
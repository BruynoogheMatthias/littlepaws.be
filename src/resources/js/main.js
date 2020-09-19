$(document).ready(() => {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('a[href^="#"]').not('a[href="#"]').click(

        (e) => {
         
            $('section').removeClass('active')
            $('nav ul a').removeClass('active')
            $('a[href^="' + $(e.target).closest('a[href^="#"]').attr('href') + '"]').addClass('active')
            $($(e.target).closest('a[href^="#"]').attr("href")).addClass('active')
            M.Sidenav.getInstance($(".sidenav")).close()
        })

    initPage()

})

const initPage = () => {

    let location = window.location.href
    try {
       
        if (location.split("#")[1] == 'undefined') {
            location = "#" + location.split("#")[1]
        } else {
            location = "#home"
        }
    } catch (error) {
        location = '#home'
    }
    console.log("opening on " + location)
    $('a[href="' + location + '"]').trigger('click')
}
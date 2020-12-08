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

window.onpopstate = function(event){
    initPage()
}

const initPage = () => {

    fixLocation()
    window.setTimeout(()=>{window.scrollTo(0,0)}, 0)
}
const fixLocation = ()=>{
    let location = window.location.href
    console.log(location)
    try {
       
        if (location.split("#")[1] != null) {
            location = "#" + location.split("#")[1]
            console.log('found '+location)
        } else {
            location = "#home"
            console.log('defaulting to Home')
        }
        
    } catch (error) {
        location = '#home'
    }
    console.log("opening on " + location)
    $('a[href="' + location + '"]').trigger('click');
    window.setTimeout(()=>{window.scrollTo(0,0)}, 0)
}
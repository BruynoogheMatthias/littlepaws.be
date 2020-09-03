$(document).ready(() => {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('a[href^="#"]').not('a[href="#"]').click(

        (e) => {
            e.preventBubbling
            console.log(e.target)
            $('section').removeClass('active')
            $('nav ul a').removeClass('active')
            $('a[href^="'+$(e.target).attr('href')+'"]').addClass('active')
            $($(e.target).attr("href")).addClass('active')
            M.Sidenav.getInstance($(".sidenav")).close()
        })

        console.log($('a[href^="#home"]'))
        $('a[href="#home"]').trigger('click')
})


$(document).ready(() => {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('a[href^="#"]').not('a[href="#"]').click(

        (e) => {
            console.log($(e.target).closest('a[href^="#"]'))
            $('section').removeClass('active')
            $('nav ul a').removeClass('active')
            $('a[href^="'+$(e.target).closest('a[href^="#"]').attr('href')+'"]').addClass('active')
            $($(e.target).closest('a[href^="#"]').attr("href")).addClass('active')
            M.Sidenav.getInstance($(".sidenav")).close()
        })

        console.log($('a[href^="#home"]'))
        $('a[href="#home"]').trigger('click')
})


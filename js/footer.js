function click(oa, oImg) {
    $(oa).click(function () {
        for (var i = 0; i < $(oa).length; i++) {
            $(oa).eq(i).removeClass(oImg);
            $(oa).eq(i).find('img').attr('src', `./img/footer/${i + 1}.png`);
        }
        $(this).addClass(oImg);
        $(this).find('img').attr('src', `./img/footer/${$(this).index() + 1}-${$(this).index() + 1}.png`);
    })
}
click('footer a', 'footer');
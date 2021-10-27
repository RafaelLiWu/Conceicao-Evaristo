let mudar = (e) => {
    $('.obras-buttons .list-group-item').removeClass('active');
    $(e).addClass('active');
    let key = $(e).attr("data-key");
    document.querySelector('.obras-sliders-inner').style.marginLeft = `calc(-300px * ${key})`
}
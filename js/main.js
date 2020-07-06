$(document).ready(function () {

    // Responsive Menu
    $("#menu").click(function (e) {
        e.preventDefault()
        $(".ownlist").fadeToggle(500);
    })


    // Slow Slide
    $(".slowdown").click(function (e) {
        e.preventDefault()
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, function () {
            window.location.hash = hash;
        })
    })

    // Timer

    var countDownDate = new Date("Oct 18, 2020 18:16:52").getTime();
    var myfunc = setInterval(function () {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        $("#week").html(Math.floor(timeleft / (1000 * 60 * 60 * 24 * 7)));
        $("#day").html(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
        $("#hours").html(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        $("#min").html(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
        $("#sec").html(Math.floor((timeleft % (1000 * 60)) / 1000));
        $("#msec").html(Math.floor((timeleft % (1000))));
    })

    $("#shop1").click(function () {
        $("#shop1").attr("href", "#shop").fade()
    })

    // Slider

    let models = [
        {
            name: "John Alonso",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed incidunt vitae error sint voluptates  ex, vel illo beatae cum labore sapiente consequatur commodi, voluptas pariatur!",
            image: "img/person_2.jpg"
        },
        {
            name: "John Alonso 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque earum reprehenderit voluptatibus necessitatibus facilis cum minus maxime inventore illum pariatur saepe eveniet ea sed, est fugiat quo cupiditate quos natus? Inventore et placeat quibusdam, quasi",
            image: "img/about_1.jpg"
        },
        {
            name: "John Alonso 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque earum reprehenderit voluptatibus necessitatibus facilis cum minus maxime inventore illum",
            image: "img/person_2 copy.jpg"
        }
    ]

    let i = 0
    let slideCounty = models.length

    showSlide(i)

    $("#leftarrow").on("click", function (e) {
        $(".dot").on("click", function (e) {
            e.preventDefault()
        })
        e.preventDefault()
        i--
        console.log(i);
        showSlide(i)
    })
    $("#rightarrow").on("click", function (e) {
        e.preventDefault()
        i++
        console.log(i);
        showSlide(i)
    })

    function showSlide(index) {
        i = index
        if (index < 0) {
            i = slideCounty - 1
        }
        if (index >= slideCounty) {
            i = 0
        }
        $(".images").attr("src", models[i].image)
        $("#sliderp").html(models[i].text)
        $("#sliderh5").html(models[i].name)
    }




    // Fixed Top

    var num = 10; 

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
})

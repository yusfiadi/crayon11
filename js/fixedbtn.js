        $(document).ready(function () {

            $('.fixed-action-btn').fadeOut();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.fixed-action-btn').fadeIn();
                } else {
                    $('.fixed-action-btn').fadeOut();
                }
            });

            $('.fixed-action-btn').click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });

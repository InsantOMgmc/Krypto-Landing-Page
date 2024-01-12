const hero_tl = gsap.timeline()
hero_tl.fromTo('.leftToRight-big',
    {
        opacity: 0,
        x: -500
    },
    {
        opacity: 1,
        x: 0,
        duration: 1
    }, .01)
    .fromTo('.rightToLeft-big',
        {
            opacity: 0,
            x: 500
        },
        {
            opacity: 1,
            x: 0,
            duration: 1
        }, .01)
    .fromTo('.hero__subtitle',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: .75
        }, .5)
    .fromTo('.start-date .start-date__item',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: .75,
            stagger: .10
        }, .5)
    .fromTo('.action__download',
        {
            opacity: 0,
            x: -200
        },
        {
            opacity: 1,
            x: 0,
            duration: .75
        }, .3)
    .fromTo('.action__trade',
        {
            opacity: 0,
            x: 200
        },
        {
            opacity: 1,
            x: 0,
            duration: .75
        }, .3)
    .fromTo('.coins-block div',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            stagger: .10,
            duration: .75
        }, .5)
    .fromTo('.header__logo',
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: .75
        }, .5)
    .fromTo('.header__nav-list li',
        {
            opacity: 0,
            y: -100
        },
        {
            opacity: 1,
            y: 0,
            duration: .75,
            stagger: .10
        }, .5)
    .fromTo('.header__sign-in-btn', { opacity: 0, }, { opacity: 1, }, .5)
    .fromTo('.accept',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: .75,
        }, .3)

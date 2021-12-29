const buletanGerak ={
    curviness: 1.25,
    autoRotate: true,
    values: [{x:100, y:-20}]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".buletan-1", 1, {
        bezier: buletanGerak,
        ease: Power1.easeInOut
    })
);

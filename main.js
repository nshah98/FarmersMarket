// Just some fancy waste your time real quick 2 sec delay I took from one of my old sites i made a long ago
//  when I was just a little boy trying to make websites for small local stores in my neighnorhood.
//
TweenMax.to('.overlay h1', 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to('.overlay', 2, {
  delay: 1,
  top: '-100%',
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  '.nav ul li',
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  },
  0.2
);

TweenMax.staggerFrom(
  '.social-media ul li',
  1,
  {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  },
  0.2
);

TweenMax.from('.card', 2, {
  delay: 0.4,
  opacity: 0,
  x: 40,
  ease: Expo.easeInOut
});

TweenMax.from('.card h1', 1, {
  delay: 0.1,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from('.card p', 4, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from('.header h1', 2, {
  delay: 2.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from('.header p', 2, {
  delay: 2.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from('.header button', 2, {
  delay: 2.6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

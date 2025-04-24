function clutterMaking(kuchdo) {
    var content = kuchdo.textContent;
    var clutter = "";
    var spiltedText = content.split("");
    spiltedText.forEach(elem => {
        clutter = clutter + `<span>${elem}</span>`;
    })
    kuchdo.innerHTML = clutter;
}

var tl = gsap.timeline();
tl.from("nav .part1 h2", {
    y: -50,
    opacity: 0,
    duration: 0.4
})
tl.from("nav .part2 li", {
    y: -30,
    opacity: 0,
    stagger: 0.1
})
tl.from("#page1 .text-part h2,#page1 .text-part hr,#page1 .text-part h1,#page1 .text-part h4", {
    x: -10,
    opacity: 0,
    stagger: 0.1
})

var h2 = document.querySelector("#about .div2 h2");
clutterMaking(h2);
gsap.from("#about .div2 h2 span", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: ("#about .div2 h2 span", {
        trigger: "#about .div2 h2 span",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1
    })
})
gsap.from("#about .div2 p", {
    x: -30,
    opacity: 0,
    scrollTrigger: ("#about .div2 p", {
        trigger: "#about .div2 p",
        scroller: "body",
        start: "top 70%"
    })
})

var heading = document.querySelector("#page3 .div2 h2");
clutterMaking(heading);
gsap.from("#page3 .div2 h2 span", {
    opacity: 0,
    stagger: 0.03,
    scrollTrigger: ("#page3 .div2 h2 span", {
        trigger: "#page3 .div2 h2 span",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1
    })
})

function animateLeft(content) {
    gsap.from(content, {
        x: -50,
        opacity: 0,
        scrollTrigger: (content, {
            scroller: "body",
            trigger: content,
            start: "top 65%",
            end: "top 75%",
            scrub: 1
        })
    })
}
function animateRight(content) {
    gsap.from(content, {
        x: 50,
        opacity: 0,
        scrollTrigger: (content, {
            scroller: "body",
            trigger: content,
            start: "top 70%",
            end: "top 80%",
            scrub: 1
        })
    })
}
animateLeft("#project .wrapper .row .pehla");
animateRight("#project .wrapper .row .first");
animateLeft("#project .wrapper .row .dusra");
animateRight("#project .wrapper .row .second");
animateLeft("#project .wrapper .row .teesra");
animateRight("#project .wrapper .row .third");
animateLeft("#project .wrapper .row .last");
animateRight("#project .wrapper .row .fourth");
animateLeft("#contact .left");
animateRight("#contact .right");
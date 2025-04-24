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

function clutterMaking(kuchdo){
    let content = kuchdo.textContent;
    let spilted = content.split("");
    let clutter = "";
    spilted.forEach(elem => {
        clutter+= `<span>${elem}</span>`
    });
    kuchdo.innerHTML = clutter;
}

var h2 = document.querySelector("#about .div2 h2");
clutterMaking(h2);
gsap.from("#about .div2 h2 span",{
    opacity: 0,
    stagger: 0.12,
    scrollTrigger: ("#about .div2 h2 span",{
        scroller: "body",
        trigger: "#about .div2 h2 span",
        start: "top 70%",
        end: "top 50%",
        scrub:1
    })
})
gsap.from("#about .div2 p",{
    x: 30,
    opacity: 0,
    scrollTrigger: ("#about .div2 p",{
        scroller: "body",
        trigger: "#about .div2 p",
        start: "top 70%"
    })
})
h2 = document.querySelector("#page3 .div2 h2");
clutterMaking(h2);
gsap.from("#page3 .div2 h2 span",{
    opacity: 0,
    stagger: 0.12,
    scrollTrigger: ("#page3 .div2 h2 span",{
        scroller: "body",
        trigger: "#page3 .div2 h2 span",
        start: "top 70%",
        end: "top 90%",
        scrub:1
    })
})

function animateLeft(content){
    gsap.from(content,{
        x: -50,
        opacity: 0,
        scrollTrigger: (content,{
            scroller: "body",
            trigger: content,
            start: "top 60%",
            end: "top 40%",
            scrub: 1
        })
    })
}
function animateRight(content){
    gsap.from(content,{
        x: 50,
        opacity: 0,
        scrollTrigger: (content,{
            scroller: "body",
            trigger: content,
            start: "top 60%",
            end: "top 40%",
            scrub: 1
        })
    })
}
animateLeft("#project .wrapper .row .pehla");
animateRight("#project .wrapper .row .dusra");
animateLeft("#project .wrapper .row .teesra");
animateRight("#project .wrapper .row .last");
animateRight("#project .wrapper .row .first");
animateLeft("#project .wrapper .row .second");
animateRight("#project .wrapper .row .third");
animateLeft("#project .wrapper .row .fourth");
animateLeft("#contact .left");
animateRight("#contact .right");
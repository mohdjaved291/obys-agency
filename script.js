function loadingAnimation() {
    let tl = gsap.timeline({});

    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
    });

    tl.from("#line1-part1", {
        opacity: 0,
        duration: 0.5,
        onStart: function () {
            let h5 = document.querySelector("#line1-part1 h5");
            let grow = 0;

            let interval = setInterval(() => {
                if (grow < 100) {
                    h5.innerHTML = grow++;
                }
                else {
                    h5.innerHTML = grow;
                    clearInterval(interval)
                }
            }, 20);
        },
    }, "-=0.3");

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
        duration: 0.5
    }, "-=0.2")

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut"
    })

    tl.from("#page1", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.3");

    tl.to("#loader", {
        display: "none",
    });

    tl.from("nav", {
        opacity: 0,
        duration: 0.5
    }, "-=0.5")

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.3")
}

function cursorAnimation() {
    const cursor = document.querySelector("#crsr");
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        let dx = mouseX - cursorX;
        let dy = mouseY - cursorY;

        cursorX += dx * 0.1;
        cursorY += dy * 0.1;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        requestAnimationFrame(animate);
    }

    animate();

    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();

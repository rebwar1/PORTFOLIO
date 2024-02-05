gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const timeline = gsap.timeline();

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

const menuItems = document.querySelectorAll(".navbar li a");
menuItems.forEach(item => {
  item.classList.add("flash-menu");

  item.addEventListener("click", () => {
    // Scroll to the section corresponding to the clicked menu item
    const targetId = item.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    gsap.to(window, {
      scrollTo: {
        y: targetSection,
        offsetY: 70, // Adjust this value based on your layout
      },
      duration: 1,
    });
  });

  item.addEventListener("mouseenter", handleMenuHover);
  item.addEventListener("mouseleave", handleMenuHoverOut);
});

gsap.to(".flash-menu", {
  color: getRandomColor,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  stagger: 0.1,
  ease: "power1.inOut",
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleMenuHover(event) {
  gsap.to(event.target, {
    scale: 1.2,
    duration: 0.3,
  });
}

function handleMenuHoverOut(event) {
  gsap.to(event.target, {
    scale: 1,
    duration: 0.3,
  });
}

gsap.to(".img-container", {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: ".video-section",
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true,
  },
});

gsap.to(".right", {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left", {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".txt-bottom", {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2,
  },
});

tl.from(".left-side div", {
  y: 150,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
  delay: 0.5,
})
  .from(".right-side", { opacity: 0, duration: 2 }, 0.5)
  .to(".wrapper", { x: -window.innerWidth });

ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  start: "top top",
  end: "+=300",
  scrub: 1,
  pin: true,
  ease: "ease",
});

timeline
  .from(".title span", {
    y: 150,
    skewY: 7,
    duration: 3,
  })
  .from(".txt-bottom", {
    letterSpacing: -5,
    opacity: 0,
    duration: 3,
  });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".star").forEach(star => {
  gsap.fromTo(
    star,
    {
      x: 1000,
      rotation: 450,
      opacity: 0,
      y: 0,
    },
    {
      x: -1000,
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 7,
      delay: 0,
      repeat: -1,
      ease: "linear",
    }
  );
});

gsap.utils.toArray(".meteor").forEach(star => {
  gsap.fromTo(
    star,
    {
      x: 1000,
      rotation: 450,
      opacity: 0,
      y: 0,
    },
    {
      x: -1000,
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 7,
      delay: 0,
      repeat: -1,
      ease: "linear",
    }
  );
});

gsap.utils.toArray(".title-about").forEach(title => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: title,
    }
  );
});

gsap.utils.toArray(".pe").forEach(p => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: p,
    }
  );
});

gsap.utils.toArray(".line-about").forEach(line => {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: "0%",
    },
    {
      opacity: 1,
      width: "100%",
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    }
  );
});

gsap.utils.toArray(".rotation-about").forEach(rotate => {
  gsap.fromTo(
    rotate,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: rotate,
    }
  );
});

gsap.utils.toArray(".star-card").forEach(star => {
  gsap.fromTo(
    star,
    {
      rotation: 450,
      opacity: 0,
      y: 100,
    },
    {
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
      scrollTrigger: star,
    }
  );
});

gsap.utils.toArray(".title-card").forEach(title => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: title,
    }
  );
});

gsap.utils.toArray(".p-card").forEach(p => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 1000,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 600,
      skewX: 0,
      duration: 3,
      delay: 0.5,
      scrollTrigger: p,
    }
  );
});

gsap.utils.toArray(".button-card").forEach(button => {
  gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: button,
    }
  );
});

gsap.from(".pyramid-card", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
});

gsap.fromTo(
  ".hand-card",
  {
    scale: 0.2,
    opacity: 0,
    skewY: 30,
  },
  {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: ".hand-card",
  }
);

gsap.utils.toArray(".line-card").forEach(line => {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: "0%",
    },
    {
      opacity: 1,
      width: "100%",
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    }
  );
});

gsap.utils.toArray(".rotation-card").forEach(rotate => {
  gsap.fromTo(
    rotate,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: rotate,
    }
  );
});

gsap.fromTo(
  ".card",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".card",
  }
);

// Add this line to include the ScrollTo plugin
gsap.registerPlugin(ScrollTo);

document.addEventListener("DOMContentLoaded", function () {
  const aboutMenuItem = document.querySelector('a[href="#about"]');
  const portfolioMenuItem = document.querySelector('a[href="#portfolio"]');

  aboutMenuItem.addEventListener("click", function (event) {
    event.preventDefault();

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#about",
        offsetY: 50, // Adjust this value if needed
      },
      ease: "power1.inOut",
    });
  });

  portfolioMenuItem.addEventListener("click", function (event) {
    event.preventDefault();

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#portfolio",
        offsetY: 50, // Adjust this value if needed
      },
      ease: "power1.inOut",
    });
  });
});

// 💫💫💫💫💫💫💫 💫💫💫💫💫💫💫 💫💫💫💫💫💫💫  Skills
document.getElementById("linkedin-link").onclick = function () {
  window.open("https://www.linkedin.com/in/yourusername", "_blank");
};

document.getElementById("github-link").onclick = function () {
  window.open("https://github.com/yourusername", "_blank");
};

const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

function scrollHeader() {
  const header = document.querySelector("#header");
  this.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu a[href *=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".menu a[href *=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

const pages = document.querySelectorAll(".page");
const resume = document.querySelector(".resume");

function resumeActive() {
  const scrollY = window.pageYOffset;

  pages.forEach((page) => {
    const sectionHeight = page.offsetHeight;
    const sectionTop = page.offsetTop - 120;

    let sectionId = page.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".resume_tabs a[href *=" + sectionId + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".resume_tabs a[href *=" + sectionId + "]")
        .classList.remove("current");
    }
  });
}

window.addEventListener("scroll", resumeActive);

let filterItems = document.querySelectorAll(".portfolio_filters li");

function activePortfolio() {
  filterItems.forEach((el) => {
    el.classList.remove("filter-active");
    this.classList.add("filter-active");
  });
}

filterItems.forEach((el) => {
  el.addEventListener("click", activePortfolio);
});

let mixerPortfolio = mixitup(".portfolio_wrap-container", {
  selectors: {
    target: ".portfolio_item",
  },
  animation: {
    duration: 300,
  },
});

function sendEmail() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;
  let params = {
    name,
    email,
    phone,
    message,
  };
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("빈칸이 있습니다. 전부 다 입력하세요.");
  } else if (name !== "" && email !== "" && phone !== "" && message !== "") {
    emailjs
      .send("service_p2kirpz", "template_h1po2rg", params)
      .then(function () {
        alert("성공적으로 메세지를 전송했습니다.");
      });
  }
}

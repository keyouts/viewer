document.addEventListener("DOMContentLoaded", () => {
      const slides = [
        {
          src: "https://via.placeholder.com/500x300?text=Image+1",
          link: "https://example.com/page1"
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+2",
          link: "https://example.com/page2"
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+3",
          link: "https://example.com/page3"
        }
      ];

      let current = 0;
      const imgEl = document.getElementById("carousel-image");
      const linkEl = document.getElementById("carousel-link");

      function showSlide(index) {
        current = (index + slides.length) % slides.length;
        imgEl.src = slides[current].src;
        linkEl.href = slides[current].link;
      }

      document.querySelector(".nav.right").addEventListener("click", () => {
        showSlide(current + 1);
      });

      document.querySelector(".nav.left").addEventListener("click", () => {
        showSlide(current - 1);
      });

      showSlide(current);
    });
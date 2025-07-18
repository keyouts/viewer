document.addEventListener("DOMContentLoaded", () => {
      const slides = [
        {
          src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/0c26bc8a-e48b-44e4-84d2-a1b8a43602e7/WhimsyAHairSalon.png?content-type=image%2Fpng",
          link: "https://whimsy-ahairsalon.square.site/"
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+2",
          link: "https://example.com/page2"
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+3",
          link: "https://example.com/page3"
        }
    src: "https://via.placeholder.com/500x300?text=Image+4",
          link: "https://example.com/page4"
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

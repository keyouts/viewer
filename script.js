document.addEventListener("DOMContentLoaded", () => {
      const slides = [
        {
                  src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/85df8771-7533-43ac-ad8c-ee051e5ddecb/MoffittSmith.png?content-type=image%2Fpng",
        },
        {
          src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/0c26bc8a-e48b-44e4-84d2-a1b8a43602e7/WhimsyAHairSalon.png?content-type=image%2Fpng",

        },
        {    
              src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/199b639e-f4ca-4e30-a5e3-3478a9bc5891/RecordSmith.png?content-type=image%2Fpng",
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

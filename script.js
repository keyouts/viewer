document.addEventListener("DOMContentLoaded", () => {
      const slides = [
        {
          src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/0c26bc8a-e48b-44e4-84d2-a1b8a43602e7/WhimsyAHairSalon.png?content-type=image%2Fpng",
          link: "https://whimsy-ahairsalon.square.site/"
        },
        {
          src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/973b290a-fcbb-47dd-825b-b51aaa613a2d/logo.png?content-type=image%2Fpng",
          link: "https://www.moffitt-smith.net/"
        },
        {
          src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/e2d43826-01b9-4db6-b323-4dc473ef913b/RecordSmith.png?content-type=image%2Fpng",
          link: "https://www.recordsmithofpennsylvania.com/"
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

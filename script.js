document.addEventListener("DOMContentLoaded", () => {
 const slides = [
  {
    src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/85df8771-7533-43ac-ad8c-ee051e5ddecb/MoffittSmith.png?content-type=image%2Fpng",
    alt: "Logo for Moffitt-Smith, a furniture wholesaler."
  },
  {
    src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/20e0e43c-665f-4130-8646-e575336da484/WhimsyAHairSalon.jpg?content-type=image%2Fjpeg",
    alt: "Logo for Whimsy: A Hair Salon."
  },
  {
    src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/199b639e-f4ca-4e30-a5e3-3478a9bc5891/RecordSmith.png?content-type=image%2Fpng",
    alt: "Logo for Record Smith, a record store."
  },
  {
    src: "https://images.squarespace-cdn.com/content/686b137649e6ef6f1bbbe325/3d60cdfa-1484-40f4-9e64-01dd1cbc8461/KeystoneILogo.png?content-type=image%2Fpng",
    alt: "Logo for Keystone I, a tarot reader.
  }
];



  let current = 0;
  const imgEl = document.getElementById("carousel-image");

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  imgEl.src = slides[current].src;
  imgEl.alt = slides[current].alt;
}

  document.querySelector(".nav.right").addEventListener("click", () => {
    showSlide(current + 1);
  });

  document.querySelector(".nav.left").addEventListener("click", () => {
    showSlide(current - 1);
  });

  showSlide(current);
});

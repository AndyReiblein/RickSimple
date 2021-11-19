export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

export function checkBare(jpg) {
  if (!jpg) return;

  const bare = document.querySelector(".cta-btn--bare");
  bare.setAttribute("src", jpg);
}
export function checkSkate(jpg) {
  if (!jpg) return;

  const skateboarder = document.querySelector(".cta-btn--skateboarder");
  bare.setAttribute("src", jpg);
}
export function checkTattoo(jpg) {
  if (!jpg) return;

  const tiny_tattoo = document.querySelector(".cta-btn--tiny_tattoo");
  bare.setAttribute("src", jpg);
}
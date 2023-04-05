export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const cube = document.getElementById("cube");
  const allFaces = document.querySelectorAll(".face");

  const faces = allFaces.length;
  const offsetFace = faces * 2.5;
  const lapDeg = 360;
  const degValue = lapDeg / faces;

  let deg = 0;

  const slide = (params) => {
    params.style.transitionDuration = "2s";
    params.style.transform = `rotateY(${deg}deg)`;
  };
  prevBtn.addEventListener("click", () => {
    deg += degValue;
    slide(cube);
  });
  nextBtn.addEventListener("click", () => {
    deg -= degValue;
    slide(cube);
  });

  for (let index = 0; index < allFaces.length; index++) {
    const element = allFaces[index];
    const newDegValue = degValue * index;
    element.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
  }
};

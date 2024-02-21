import sbuLogo from "./sbu-logo.png";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container text-center">
    <div class="row">
      <div class="m-auto col-2">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${sbuLogo}" class="w-75" alt="SBU logo" />
      </a>
      </div>
      <div class="col-10 align-middle fs-1 fw-bold p-5">
          The SBM Innovation Lab
      </div>
    </div>
    <div class="card shadow mb-5 rounded bg-primary text-white text-start fs-5 mx-5 p-3">
        This is the home of the Innovation Lab showcase. Here you will find projects that showcases techniques and tools learned in the SBM Innovation Group.
    </div>
  </div>
`;

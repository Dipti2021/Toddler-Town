
document.querySelector('#home').addEventListener('click', homePageRender);


  async function homePageRender() {
    document.getElementById("wrapper").style.display="block";
    document.getElementById("main").style.display="none";
  }
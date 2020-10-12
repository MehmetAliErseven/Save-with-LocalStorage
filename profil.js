document
  .getElementById("files")
  .addEventListener("change", handleFileSelect, false);

let imagesObject = [];

function handleFileSelect(evt) {
  const files = evt.target.files;

  for (var i = 0, f; (f = files[i]); i++) {
    if (!f.type.match("image.*")) {
      return alert("This is not an image");
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      displayImgData(e.target.result);
      addImage(e.target.result);
    };

    reader.readAsDataURL(f);
  }
}

function addImage(imgData) {
  imagesObject.push(imgData);
  displayNumberOfImgs();
  localStorage.setItem("images", JSON.stringify(imagesObject));
}

function displayImgData(imgData) {
  const span = document.createElement("span");
  span.innerHTML = '<img class="imgstyle fadeIn" src="' + imgData + '"/>';
  document.getElementById("list").insertBefore(span, null);
}

function loadFromLocalStorage() {
  const images = JSON.parse(localStorage.getItem("images"));

  if (images && images.length > 0) {
    imagesObject = images;

    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}

function displayNumberOfImgs() {
  if (imagesObject.length > 0) {
    document.getElementById("state").innerHTML =
      imagesObject.length +
      " image" +
      (imagesObject.length > 1 ? "s" : "") +
      " stored in your browser";

    document.getElementById("deleteImgs").style.display = "block";
    document.getElementById("plus").style.display = "none";
    document.getElementById("back").style.display = "none";
  } else {
    document.getElementById("state").innerHTML =
      "No images stored in your browser.";
    document.getElementById("state").classList.add("fadeIn");
    document.getElementById("deleteImgs").style.display = "none";
  }
}

document.getElementById("deleteImgs").addEventListener("click", deleteImages);

function deleteImages() {
  imagesObject = [];
  localStorage.removeItem("images");
  document.getElementById("plus").style.display = "";
  document.getElementById("plus").classList.add("fadeIn");
  document.getElementById("back").style.display = "";
  document.getElementById("back").classList.add("fadeIn");
  displayNumberOfImgs();
  document.getElementById("list").innerHTML = "";
}

loadFromLocalStorage();

const goUp = document.getElementById("goUp");
goUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

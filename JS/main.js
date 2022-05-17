function getEle(id) {
  return document.getElementById(id);
}

// CSS Navbar
const header = document.querySelector("header");
function onScrollHandler(event) {
    if (window.scrollY > 0) {
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.zIndex = "100";
        header.style.top = "0";
        header.style.backgroundColor = "rgba(255,255,255,1)";
        getEle("navbar-collapse").style.margin ="0 auto"; 
        getEle("header__menu").style.padding = "0.5rem 0";
        getEle("logo").style.display = "none";
        header.style.boxShadow = "0 0 30px rgba(0,0,0,0.8)";
    } else {
        header.style.position = null;
        header.style.width = null;
        header.style.zIndex = null;
        header.style.top = null;
        header.style.backgroundColor = "rgba(255,255,255,0)";
        getEle("header__menu").style.padding = null;
        getEle("logo").style.display = "block";
        header.style.boxShadow = null;
    }
}

window.addEventListener("scroll", onScrollHandler);

services = new Services();
getList();

function getList() {
  var promise = services.fetchData();
  promise
    .then(function (result) {
      console.log(result.data);
      renderHTML(result.data);
    })
    .catch(function (error) {});
}

function renderHTML(data) {
  content = "";
  for (var i = 0; i < data.length; i++) {
    var person = data[i];
    if (person.loaiND == "GV") {
      content += `
      <!-- Item ${i + 1} -->
        <div class="feature-item col-lg-3 col-md-5 col-7">
                    <div class="card">
                        <img class="card-img-top" src="./Img/${
                          person.hinhAnh
                        }" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-intro">${person.ngonNgu}</h4>
                            <h2 class="card-title">${person.hoTen}</h2>
                            <p class="card-text">${person.moTa}</p>
                        </div>
                    </div>
                </div>
        `;
    }
  }
  getEle("teacher-list").innerHTML = content;
}

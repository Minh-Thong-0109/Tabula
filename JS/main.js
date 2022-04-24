function getEle(id) {
  return document.getElementById(id);
}

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

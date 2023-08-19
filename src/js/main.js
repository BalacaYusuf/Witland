

let box_container = document.querySelector(".box-container");

function getFile(callBack) {
    const giveData = new XMLHttpRequest();
    giveData.open("GET", "../public/json/support.json");

    giveData.onload = (function () {

        if (giveData.status == 200) {
            let myArray = JSON.parse(giveData.response);
            
            myArray.forEach(el => {
                console.log(el);
                callBack((el));
            });

        }
        else {
            console.log("Error  =" + giveData.status);
        }
    })

    giveData.send();


}

function showAction(el) {

    const boxItem = document.createElement("div");
    boxItem.classList.add("box-item");
    boxItem.innerHTML =
        `
    <div class="image">
              <img src=${el.src} alt="" />
            </div>

            <div class="box-wrapper">
              <div class="box-title">
                <h1>
                  <a href="">${el.title}</a>
                </h1>

                <p>${el.text}</p>
              </div>
            </div>
    `

    box_container .append(boxItem);
}

getFile(showAction);
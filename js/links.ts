var settings = {
    categoryList: []
};
var creatingTableStorage = {
    elementList: [],
    newCategories: []
};
document.addEventListener('DOMContentLoaded', function () {
    getSettings();
    addEvents();
});
function getSettings() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../php/ajax.php", true);
    xhttp.addEventListener('load', function (event) {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            let jsonFile = JSON.parse(xhttp.responseText);
            settings.categoryList = jsonFile.categoryList;
        }
    });
    xhttp.send();
}
function addEvents() {
    let elements = document.getElementsByClassName('add-element-event');
    for(let i of elements) {
        i.addEventListener('click', function (ev) {
            addNewListElement(ev);
        });
    }
}

function addNewListElement(ev) {
    let tr = new Blueprint().singleEpisode();
    creatingTableStorage.elementList.push(tr);
    let tbody = document.getElementById('list-create-tbody');
    tbody.appendChild(tr.get());
}

function swapElementOnChecked(element: HTMLElement, swapToSeries: boolean) {

}
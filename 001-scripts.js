var items = [
    {
        itemName: "visit my sister",
        itemDetails: "she ask me to visit her",
        itemDate: "2022-08-08",
        itemRate: "4"
    },
    {
        itemName: "play football",
        itemDetails: "play football with friends",
        itemDate: "2022-08-09",
        itemRate: "2"
    },
    {
        itemName: "learn css",
        itemDetails: "learn css from udimy course",
        itemDate: "2022-08-10",
        itemRate: "3"
    },
];

function startList() {
    items.forEach(function (element, index) {
        var oneRow = document.querySelector(".listHeader");
        var newRow = oneRow.cloneNode(true);
        newRow.querySelector(".itemName").innerText = element.itemName;
        newRow.querySelector(".itemDetails").innerText = element.itemDetails;
        newRow.querySelector(".itemDate").innerText = element.itemDate;

        newRow.querySelector(".itemRate").innerText = "";
        var oneStar = document.querySelector("#starRate").cloneNode(true);
        for (var i = 0; i < parseInt(element.itemRate); i++) {
            newRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
        }

        newRow.querySelector(".operations").innerHTML = "";
        newRow.querySelector(".operations").innerHTML = "<i onclick='deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp; <i onclick='updateItem(this);' class='fa-solid fa-pen-to-square'></i>  &nbsp; <i class='fa-solid fa-angles-up'></i> &nbsp; <i class='fa-solid fa-angles-down'></i>";

        document.querySelector(".itemsList").appendChild(newRow);

    });
};

/* ******************** delete operation *************************************** */
var deletedRow;

function deleteItem(deleteIcon) {
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#deleteDialoug").style.display = "block";

    var deleteItemName = deleteIcon.parentNode.parentNode.querySelector(".itemName").innerText;
    document.querySelector("#deleteItemName").innerHTML = deleteItemName;

    deletedRow = deleteIcon.parentNode.parentNode;
}
function noDelete() {
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#deleteDialoug").style.display = "none";
}
function yesDelete() {
    deletedRow.remove();
    noDelete();
}

/* *****************  create item ********************************************** */
function createItem() {
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#createDialoug").style.display = "block";
}
function cancelNew() {
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#createDialoug").style.display = "none";
}
function saveNew() {
    var itemName = document.querySelector("#itemName").value;
    var itemDetails = document.querySelector("#itemDetails").value;
    var itemDate = document.querySelector("#itemDate").value;
    var itemRate = document.querySelector("input[name='itemRate']:checked").value;

    var oneRow = document.querySelector(".listHeader");
    var newRow = oneRow.cloneNode(true);
    newRow.querySelector(".itemName").innerText = itemName;
    newRow.querySelector(".itemDetails").innerText = itemDetails;
    newRow.querySelector(".itemDate").innerText = itemDate;

    newRow.querySelector(".itemRate").innerText = "";
    var oneStar = document.querySelector("#starRate").cloneNode(true);
    for (var i = 0; i < parseInt(itemRate); i++) {
        newRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
    }

    newRow.querySelector(".operations").innerHTML = "";
    newRow.querySelector(".operations").innerHTML = "<i onclick='deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp; <i onclick='updateItem(this);' class='fa-solid fa-pen-to-square'></i>  &nbsp; <i class='fa-solid fa-angles-up'></i> &nbsp; <i class='fa-solid fa-angles-down'></i>";

    document.querySelector(".itemsList").appendChild(newRow);

    cancelNew();
}
/* *****************  update item ********************************************** */
let urrentUpdate;
function updateItem(item) {
    let updatedItem = item.parentNode.parentNode;
    currentUpdate = updatedItem;
    document.querySelector("#lightScreen").style.display = "block";
    document.querySelector("#updateDialoug").style.display = "block";
    document.querySelector("#updateName").value = updatedItem.children[0].innerText;
    document.querySelector("#updateDetails").value = updatedItem.children[1].innerText;
    document.querySelector("#updateDate").value = updatedItem.children[2].innerText;
    
}
function cancelUpdate() {
    document.querySelector("#lightScreen").style.display = "none";
    document.querySelector("#updateDialoug").style.display = "none";
}
function saveUpdate() {
    var itemName = document.querySelector("#updateName").value;
    var itemDetails = document.querySelector("#updateDetails").value;
    var itemDate = document.querySelector("#updateDate").value;
    var itemRate = document.querySelector("input[name='updateRate']:checked").value;

    var oneRow = document.querySelector(".listHeader");
    var newRow = oneRow.cloneNode(true);
    newRow.querySelector(".itemName").innerText = itemName;
    newRow.querySelector(".itemDetails").innerText = itemDetails;
    newRow.querySelector(".itemDate").innerText = itemDate;

    newRow.querySelector(".itemRate").innerText = "";
    var oneStar = document.querySelector("#starRate").cloneNode(true);
    for (var i = 0; i < parseInt(itemRate); i++) {
        newRow.querySelector(".itemRate").innerHTML += oneStar.innerHTML;
    }

    newRow.querySelector(".operations").innerHTML = "";
    newRow.querySelector(".operations").innerHTML = "<i onclick='deleteItem(this);' class='fa-solid fa-trash-can'></i> &nbsp; <i onclick='updateItem(this);' class='fa-solid fa-pen-to-square'></i>  &nbsp; <i class='fa-solid fa-angles-up'></i> &nbsp; <i class='fa-solid fa-angles-down'></i>";

    currentUpdate.innerHTML = newRow.innerHTML;

    cancelUpdate();
}
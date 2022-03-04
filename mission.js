// QuerySelector
const container = document.querySelector(".container")
const items = document.querySelector(".items")
const addItems = document.querySelector(".addItems")
// AppendChild
document.body.appendChild(container)
container.appendChild(items)
container.appendChild(addItems)
// QuerySelector
const Name = document.querySelector(".Name")
const Price = document.querySelector(".Price")
const Select = document.querySelector(".Select")
const Url = document.querySelector(".Url")
const addItem = document.querySelector(".addItem")
// Error message (price>0 && fill everything)
const error = document.createElement("p")
error.innerHTML = " - Make sure you fill everything - price is asked to be at least 1$ <br> - Url need to be valid start with(http)"
error.className = "error"
// AddEvent
addItem.addEventListener("click", function (e) {
    if (Name.value && Price.value >= 1 && Url.value.startsWith("http")) {
        console.log("dsd")
        // MainDivItems
        const itemDiv = document.createElement("div")
        itemDiv.className = "itemDiv"
        // Exit
        const itemDivExit = document.createElement("p")
        itemDivExit.className = "itemDivExit"
        itemDivExit.textContent = "x"
        //
        itemDivExit.addEventListener("click", function () {
            itemDivExit.parentElement.remove()
        })
        // Image
        const itemImg = document.createElement("img")
        itemImg.className = "itemImg"
        itemImg.src = Url.value
        // Name
        const itemName = document.createElement("h3")
        itemName.className = "itemName"
        itemName.textContent = "Name: " + Name.value
        // Price
        const itemPrice = document.createElement("p")
        itemPrice.className = "itemPrice"
        itemPrice.textContent = "Price: " + Price.value + "$"
        // Category
        const itemCategory = document.createElement("p")
        itemCategory.className = "itemCategory"
        itemCategory.textContent = "Category: " + Select.value
        // AppendChild
        items.appendChild(itemDiv)
        itemDiv.appendChild(itemDivExit)
        itemDiv.appendChild(itemImg)
        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemPrice)
        itemDiv.appendChild(itemCategory)
        // Alearing Inputs
        Name.value = ""
        Price.value = ""
        itemCategory.value = ""
        Url.value = ""
        // Error Message
        error.remove()
    } else {
        addItems.appendChild(error)
    }
})

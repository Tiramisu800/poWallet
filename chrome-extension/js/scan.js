import { getRisk } from './meter.js'


const button = document.querySelector("#scan-btn")
const outputElement = document.querySelector("#risk")

button.addEventListener("click", async function() {
    const address = document.querySelector("#input-address").value
    outputElement.innerHTML = "Fetching..."
    outputElement.innerHTML = await getRisk(address)
})

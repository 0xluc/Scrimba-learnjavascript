count = 0
countEl = document.getElementById("count-el")
function increment() {
    count++
    countEl.textContent = count
}
saveEl = document.getElementById("save-el")

function save() {
    saveEl.textContent += " - " + count
    count = 0
    countEl.textContent = count
}
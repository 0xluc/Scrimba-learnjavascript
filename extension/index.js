let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsLocalStorage){
    myLeads = leadsLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
    // Get current active window url
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
   
})

function render(leads) {
    let listItems = ''

    for (let i = 0; i < leads.length; i++) {
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        
        //listItems += "<li>" + "<a target='_blank' href="+myLeads[i]+">" + myLeads[i] + "</a>"+ "</li>";
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick", function(){
    myLeads=[]
    localStorage.clear()
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))

    
})



let chr = []
// Turn ascii characteres into an array with all the characteres to be randomized
for (let index = 32; index < 127; index++) {
    chr.push(index)
}
function codesToString(arr){
    return String.fromCharCode(...arr);
}
chr = codesToString(chr)


function genPass() {
    // Get element
    let passwordsEl = document.getElementById("passwords-el")
    passwordsEl.innerText = ""
    // For loop of number of passwords
    for (let index = 0; index < 4; index++) {
        //temporary var to store characteres
        let pass = ''
        //For loop of number of characteres per password
        for (let a = 0; a < 15; a++) {
            //Get a random number between 1 and 95
            let randNumber = Math.floor(Math.random() * 95)
            //Get a chr
            let charactere = chr[randNumber]
            //Add chr to pass and create a password
            pass += charactere
        }
        //print pass
        passwordsEl.innerText+=pass
        //Jump a line
        passwordsEl.innerHTML += "<br>"
    }
}

genPass()
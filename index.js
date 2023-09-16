//build
let warrantyHeader = document.createElement("h2")
warrantyHeader = "Warranty Information"
//install
document.body.append(warrantyHeader)




// let firstNameLabel = document.createElement("label")
// firstNameLabel.textContent = "First Name"

// document.body.append(firstNameLabel)

// let firstNameInput = document.createElement("input")
// document.body.append(firstNameInput)



function addLabelAndInput(labelName){
    let linebreak = document.createElement("br")
    document.body.append(linebreak)
   
    //creat label
    let label = document.createElement("label")
    label.textContent = labelName
    document.body.append(label)
    
    
    //create input
    let input = document.createElement("input")
    input.setAttribute("id", labelName)
    document.body.append(input)
}

addLabelAndInput("FirstName", "First Name")
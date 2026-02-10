// Log message to confirm that the script is loaded
console.log("Array Challenge Script Loaded");
//Array Challenge: Add and Remove Names from an Array and Display Them
// Initialize an empty array to store names
let names = [];

// Get references to HTML elements by their IDs
const nameInput = document.getElementById("nameInput");
const addName = document.getElementById("addButton");
const removeName = document.getElementById("removeButton");
const namesList = document.getElementById("namesList");
let message="";
// Event listener for adding a name when the Add button is clicked
addName.addEventListener('click', () => {
    // Check if the input field is empty
    if (nameInput.value === "") {
        message += "Please enter a valid name.";
        showToast(message);
        return; // Stop execution if no name is entered
    }
    // Check if the name already exists in the array
    else if (names.includes(nameInput.value)) {
        message = "";
        message +="Name already exists in the list.";
        showToast(message);
        return; // Stop execution if name is duplicate
    }
    // If name is valid and not duplicate
    else {
        message = "";
        // Add the name to the array
        names.push(nameInput.value);
        message +=`Adding name: ${nameInput.value}`;
        showToast(message);
        // Update the displayed list
        namesListFunct();
    }
});
message = "";
 // reset message each time

// Event listener for removing a name when the Remove button is clicked
removeName.addEventListener('click', () => {
    // Check if the name exists in the array
    if (!names.includes(nameInput.value)) {
        message = "";
        message +="Name not found in the list.";
        showToast(message);
        return; // Stop execution if name does not exist
    } else {
        message = "";
        // Find the index of the name in the array
        let nameIndex = names.indexOf(nameInput.value);
        // Remove the name using splice(startIndex, deleteCount)
        //1 → the number of elements to remove starting from that index.
        names.splice(nameIndex, 1);
        message +=`Removing name: ${nameInput.value}`;
        showToast(message);
    }
    // Update the displayed list after removal
    namesListFunct();
});

// Function to update the displayed list of names
function namesListFunct() {
    // Clear the existing list
    namesList.innerHTML = "";
    // Loop through each name in the array and create an <li> element
    names.forEach((name) => {
        let li = document.createElement("li");
        li.textContent = name;
        namesList.appendChild(li);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    //Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/*
for (let i = 0; i <= 30; i++) {
    let result = 10 * i;
    console.log(`10 x ${i} = ${result}`);
}
*/
// End of Array Challenge Script
//String Loop Challenge: Display the string entered without vowels
let stringButton= document.getElementById("stringButton");
let stringOutput= document.getElementById("stringOutput");
stringButton.addEventListener('click', () => {
    let inputString= document.getElementById("stringInput").value;
    stringOutput.innerHTML = "";
    for (let char of inputString){
        if(!"aeiouAEIOU".includes(char)){
            stringOutput.innerHTML += `${char}</br>`;
        }

    }})
//End of String Loop Challenge
//Array Loop Challenge: Search if the name is present in the array and display it 
let inputName = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let searchOutput = document.getElementById("arrayLoopOutput");
let students = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
 

searchButton.addEventListener('click', () => {
    // Merge with names array from previous challenge
    students = students.concat(names);
    //Or using the spread operator(modern way): 
    // students = [...students, ...names]
    let searchName = inputName.value.trim().toLowerCase(); // trim() removes spaces
    let found = false;
    searchOutput.innerHTML = "";

    for (let student of students) {
        if (student.toLowerCase() === searchName) {
            searchOutput.innerHTML = `✅ Name <strong>${student}</strong> found in the array.`;
            found = true;
            break;
        }
    }

    if (!found) {
        searchOutput.innerHTML = `❌ Name not found in the array.`;
    }
});

console.log(students);
//End of Array Loop Challenge

//Multiplication Table Challenge: Display multiplication table of a number entered
for (let i = 1; i <= 11; i++) {
    document.getElementById("multiplicationTableChallenge").innerHTML +=`<h2>Multiplication Table Challenge ${i}</h2>`;
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        document.getElementById("multiplicationTableChallenge").innerHTML += (`${i} x ${j} = ${result}<br>`);
        
    }
}


//Reverse Array Function Challenge: Reverse an array without using built-in reverse method
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length -1; i >= 0; i--){
        /*  Incorrect
        let revLength=0;  // Always resets to 0 IN THE LOOP //you can keep revLength outside the loop so it works 
        reversedArr[revLength] = arr[i];  // Always writes to index 0
        revLength ++;
        */
       //Correction
       reversedArr.push(arr[i]);
       //the simplest built-in
       //console.log(arr.slice().reverse());
        
    }
    return reversedArr;
}

var arr = [9,7,1,3,10,'hello',true];
console.log(reverseArray(students));
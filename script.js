// up to now we made some boxes and buttons, now we need to say what they have to do
const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');

// we need to do something after clicking on the btn, it means we need onClick property and run a function for that 
// any click on btn will activate the function
btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;

   

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i =0 ; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value} <br />`; 
}
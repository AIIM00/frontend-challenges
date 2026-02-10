const btn = document.getElementById('runAnonymousFunctions');
btn.addEventListener('click', function() {
    // setInterval() is used in JavaScript when you want to run a function repeatedly, at a fixed time interval.
    setInterval(function() {
        // Generate random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        /*16777215	Maximum hex color value (#FFFFFF → 0xFFFFFF)
        Math.random()	Generates random number 0–1
        * 16777215	Expands that to full color range
        toString(16)	Converts number to hex string
        "#" + ...	Makes it a CSS color*/
        const btnrandomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Set as background color
        document.body.style.backgroundColor = randomColor;
        // Change button color too
        btn.style.backgroundColor = btnrandomColor;
        btn.textContent = `Color: ${randomColor}`;

    }, 2000);
    
})
console.log('Hello')
    //Array challenge 
    const arr = [10,30,23,5,45,67,76,89];
    var total =  arr.reduce((prev,current)=>{
        return prev + current
    });
    var contentCounter = arr.length;
    resultArr=[total,contentCounter];
    console.log(resultArr);

    function allSameCase(word) {
   let checkWord = word.toLowerCase();
   if(word !== checkWord)
    return false
    else return true

}
console.log(allSameCase("hello"));
console.log(allSameCase("HELLO"));
console.log(allSameCase("Hello"));
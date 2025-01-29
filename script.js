function checkDate(){
    const today = new Date();
    const valentinesDay = new Date("2025-02-14");
    console.log(today);
    console.log(valentinesDay);

    if (today.getTime() !== valentinesDay.getTime()) {
        const diffInMilliseconds = valentinesDay - today; // Difference in milliseconds
        const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)); // Convert to days
        return diffInDays;
    }
}

function displayHome(){
    let time = checkDate();

    if(time > 0){
        console.log(time);
        $(".daysCounter").css("display", "block");
        $(".daysCounter :nth-child(1)").after(`<p class="days"> ${time} </p>`);
        
    }else{
        $(".valentinesQuestion").css("display", "block");
    }
}

displayHome();

$("#noBtn").on("mouseover", function() {
    // alert("Mouse over detected!");

    const maxWidth = $(window).width() - $(this).outerWidth();  // subtract element width to avoid overflow
    const maxHeight = $(window).height()- $(this).outerHeight();  // subtract element height to avoid overflow

    // Generate random positions within the window's width and height
    // Math random will generate a random number bt 0 and 1
    // Multiply it by maxwidth to generate a number bt 0 and max screen width/height
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    $(this).css({
        left: randomX + "px",
        top: randomY + "px"
    })
});


$("#yesBtn").on("click", function(){
    window.location.href="yes.html";
})
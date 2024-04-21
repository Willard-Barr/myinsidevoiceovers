let isViewVisible = false;

const menu = () => {
    const viewElement = document.getElementById("view");
    if (!isViewVisible) {
        viewElement.style.display = "flex";
        isViewVisible = true;
    } else {
        viewElement.style.display = "none";
        isViewVisible = false;
    }
}




function playClickSound() {
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
}

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        var hoverSound = document.getElementById("hoverSound");
        hoverSound.play();
    });
});

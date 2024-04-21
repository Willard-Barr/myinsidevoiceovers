// Function to filter comics based on user input
function filterComics() {
    let input, filter, containers, container, h2, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    containers = document.getElementsByClassName("container-content");

    // Loop through all container contents
    for (i = 0; i < containers.length; i++) {
        container = containers[i];
        h2 = container.getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;

        // If the comic title matches the search input, display the container, otherwise hide it
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            container.style.display = "";
        } else {
            container.style.display = "none";
        }
    }
}

// Add event listener for the search input
document.getElementById("search").addEventListener("keyup", filterComics);
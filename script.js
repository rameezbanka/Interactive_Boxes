

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    // Define an array for  initial colors of each box
    const initialBoxColors = ["#FF5733", "#33FF57", "#5733FF"];
    
    boxes.forEach((box, index) => {
        // Set the initial color for each box
        box.style.backgroundColor = initialBoxColors[index];

        box.addEventListener("click", function () {
            boxes.forEach((otherBox, otherIndex) => {
                if (otherBox !== this) {
                    otherBox.classList.remove("expanded");
                    otherBox.style.backgroundColor = initialBoxColors[otherIndex]; // Reset other box colors
                }
            });

            if (!this.classList.contains("expanded")) {
                this.classList.add("expanded");

                // Use a different color when the box is expanded
                this.style.backgroundColor = "#00FFFF";
            } else {
                this.classList.remove("expanded");

                this.style.backgroundColor = initialBoxColors[index];
            }
        });
    });
});

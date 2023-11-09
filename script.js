const box = document.getElementById("changeBox");
        const colors = ["red", "yellow", "green" , "blue"]; // Array of shadow colors
        let index = 0;

        function changeShadowColor() {
            box.style.boxShadow = `0px 0px 40px ${colors[index]}`;
            index = (index + 1) % colors.length; // Cycle through the colors
        }

        // Change the box-shadow color every 3 seconds
        setInterval(changeShadowColor, 2000);
const text = document.getElementById("name");
const theme = document.getElementById("theme");
const card = document.getElementById("card");
const generate = document.getElementById("generate");
const download = document.getElementById("download");
const heading = document.getElementById("card-title");
const details = document.getElementVyId("card-greeting");
const container = document.getElementById("container")

generate.addEventListener("click", () => {
    container.style.marginLedt = "36%"
    container.style.marginRight = "36%"
    const textvalue = text.value.trim().charAt(0).toUpperCase() + text.ariaValueMax.trim().slice(1);
    const themevalue = theme.value;
    const thememessages = {
        Birthday: ``,
        Wedding: ``,
        Valentines: ``,
        Friendship: ``,
        Anniversary: ``,
        Graduation: ``,
        Mother: ``,
        Father: ``,
    }

    if (textvalue.trim() === "") {
        details.textContent = "Please enter a name"
        details.style.color = "red";
    };

    if (textvalue.trim() !== "") {
        details.textContent = thememessages[themevalue];
        downloads.style.display = "block";
    }

    if (themevalue === "Birthday" && textvalue.trim() !== "") {
        heading.textContent = `Happy Birthday, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

    else if (themevalue === "Valentines") {
        heading.textContent = `Happy Valentine's Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "block";
    }
    
    else if (themevalue === "Friendship") {
        heading.textContent = `Happy Friendship Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "block";
    }

    else if (themeValue === "Mother") {
        heading.textContent = `Happy Mother's Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }
    card.classList.remove("card");
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        container.style.marginLeft = "36%"
        container.style.marginRight = "36%"
        const textvalue = textvalue.trim().charAt(0).toUpperCase() + text.value.trim().slice(1);
        const themevalue = theme.value;
        const thememessages =
        {
            Birthday: ``,
            Wedding: ``,
            Valentines: ``,
            Friendship: ``,
            Anniversary: ``,
            Graduation: ``,
            Mother: ``,
            Father: ``,
        }

        if (textvalue.trim() === "") {
            details.textContent = "Please enter a name"
            details.style.color = "red";
        };

        if (textvalue === "Birthday" && textvalue.trim() !== "") {
            heading.textContent = `HAppy Birthday, &{textvalue}!`
            heading.style.fontSize = "24px"
            details.style.color = "block";
        }

        else if (themevalue === "Wedding") {
            heading.textContent = `Congratulations, ${textvalue}!`
            heading.style.fontSize = "22px"
            details.style.color = "black";
        }

        else if (themevalue === "Valentines") {
            heading.textContent = `Happy Valentines day, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Friendship") {
            heading.textContent = `Happ Friendship day, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Mother") {
            heading.textContent = `Happy Mother's Day, ${textvalue}!`
            heading.style.fontSize = "22px"
            details.style.color = "black";
        }
        card.classList.remove("card");
    }
})

download.addEventListener("click", () => {
    html2canvas(card).then((canvas) => {
        let link = (document.createElement("a"));
        link.href = canvas.toDataURL("image/png");
        link.download = "Greeting-Card.png";
        link.click();
    });
});
const text = document.getElementById("name");
const theme = document.getElementById("theme");
const card = document.getElementById("card");
const generate = document.getElementById("generate");
const download = document.getElementById("download");
const heading = document.getElementById("card-title");
const details = document.getElementById("card-greeting");
const container = document.getElementById("container")

generate.addEventListener("click", () => {
    container.style.marginLeft = "36%"
    container.style.marginRight = "36%"
    const textvalue = text.value.trim().charAt(0).toUpperCase() + text.value.trim().slice(1);
    const themevalue = theme.value;
    const thememessages = {
        Birthday: `🥳 Wishing you a day full of joy and laughter! May this day bring you happiness! Enjoy your special day! 🎁`,
        Wedding: `❤️ Congratulations on your special day! Wishing you and your partner a lifetime of love, happiness, and many memories together! 💍`,
        Valentines: `💘 Wishing you a Valentine's Day filled with love, laughter, and happiness. May your heart always be full of love. 💝`,
        Friendship: `😃 Thank you for being such an amazing friend. Wishing you an endless amount of happiness. 😃`,
        Anniversary: `💕 May our love grow stronger each day. Wishing you many more moments together 💞`,
        Graduation: `🎓 Congratulations on graduating! Your hard work has paid off. Wishing you success and happiness in your next steps ✨`,
        Mother: `🌷 Thank you for your love, kindness and support. Wishing you a day filled with happiness. 🌹`,
        Father: `🩵 Thank you for your strength, encouragement and support. Wishing you a day filled with happiness. 💙`,
    }

    if (textvalue.trim() === "") {
        details.textContent = "Please enter a name"
        details.style.color = "red";
    };

    if (textvalue.trim() !== "") {
        details.textContent = thememessages[themevalue];
        download.style.display = "block";
    }

    if (themevalue === "Birthday" && textvalue.trim() !== "") {
        heading.textContent = `Happy Birthday, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

        else if (themevalue === "Wedding") {
        heading.textContent = `Congrats on your wedding day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

    else if (themevalue === "Valentines") {
        heading.textContent = `Happy Valentine's Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "black";
    }
    
    else if (themevalue === "Friendship") {
        heading.textContent = `Happy Friendship Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "black";
    }

        else if (themevalue === "Anniversary") {
        heading.textContent = `Happy Anniversary, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

        else if (themevalue === "Graduation") {
        heading.textContent = `Congratulations, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

    else if (themevalue === "Mother") {
        heading.textContent = `Happy Mother's Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

        else if (themevalue === "Father") {
        heading.textContent = `Happy Father's Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }
    card.classList.remove("card");
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        container.style.marginLeft = "36%"
        container.style.marginRight = "36%"
        const textvalue = 
            text.value.trim().charAt(0).toUpperCase() + 
            text.value.trim().slice(1);
        const themevalue = theme.value;
        const thememessages =
        {
            Birthday: `🥳 Wishing you a day full of joy and laughter! May this day bring you happiness! Enjoy your special day! 🎁`,
            Wedding: `❤️ Congratulations on your special day! Wishing you and your partner a lifetime of love, happiness, and many memories together! 💍`,
            Valentines: `💘 Wishing you a Valentine's Day filled with love, laughter, and happiness. May your heart always be full of love. 💝`,
            Friendship: `😃 Thank you for being such an amazing friend. Wishing you an endless amount of happiness. 😃`,
            Anniversary: `💕 May our love grow stronger each day. Wishing you many more moments together 💞`,
            Graduation: `🎓 Congratulations on graduating! Your hard work paid off. Wishing you success and happiness in your next steps ✨`,
            Mother: `🌷 Thank you for your love, kindness and support. Wishing you a day filled with happiness. 🌹`,
            Father: ` 🩵Thank you for your strength, encouragement and support. Wishing you a day filled with happiness. 💙`,
        }

        if (textvalue.trim() === "") {
            details.textContent = "Please enter a name"
            details.style.color = "red";
        };

        if (themevalue === "Birthday" && textvalue.trim() !== "") {
            heading.textContent = `🍰 Happy Birthday, ${textvalue}!`
            heading.style.fontSize = "24px"
            details.style.color = "black";
        }

        else if (themevalue === "Wedding") {
            heading.textContent = `💍 Congratulations, ${textvalue}!`
            heading.style.fontSize = "22px"
            details.style.color = "black";
        }

        else if (themevalue === "Valentines") {
            heading.textContent = `🌹 Happy Valentine's day, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Friendship") {
            heading.textContent = `🤗 Happy Friendship day, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Anniversary") {
            heading.textContent = `💓 Happy Anniversary, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Graduation") {
            heading.textContent = `🎓 Happy Graduation, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Mother") {
            heading.textContent = `💝 Happy Mother's Day, ${textvalue}!`
            heading.style.fontSize = "22px"
            details.style.color = "black";
        }
        else if (themevalue === "Father") {
            heading.textContent = `🔧 Happy Father's Day, ${textvalue}!`
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
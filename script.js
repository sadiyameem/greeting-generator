const text = document.getElementById("name");
const theme = document.getElementById("theme");
const card = document.getElementById("card");
const generate = document.getElementById("generate");
const download = document.getElementById("download");
const heading = document.getElementById("card-title");
const details = document.getElementById("card-greeting");
const container = document.getElementById("container");

generate.addEventListener("click", () => {
    container.style.marginLeft = "36%"
    container.style.marginRight = "36%"
    const textvalue = text.value.trim().charAt(0).toUpperCase() + text.value.trim().slice(1);
    const themevalue = theme.value;
    const thememessages = {
        Birthday: `🥳 Wishing you a day full of joy and laughter! May this day bring you happiness! Enjoy your special day! 🎁`,
        Wedding: `❤️ Congratulations on your special day! Wishing you and your partner a lifetime of love, happiness, and many memories together! 💍`,
        Valentines: `💘 Wishing you a Valentine's Day filled with love, laughter, and happiness. May your heart always be full of love. 💝`,
        Christmas: `🎄 Wishing you a warm, happy and wonderful day with the people that you love! 🎁`,
        Anniversary: `💕 May our love grow stronger each day. Wishing you many more moments together 💞`,
        Graduation: `🎓 Congrats on graduating! Your hard work paid off. Wishing you success in your next steps 📜`,
        Mother: `🌷 Thank you for your love, kindness and support. Wishing you a day filled with happiness. 🌹`,
        Father: `🩵 Thank you for your strength, encouragement and support. Wishing you a day filled with happiness. 💙`,
    }

    if (textvalue.trim() === "") {
        details.textContent = "Please enter a name"
        details.style.color = "black";
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
        heading.textContent = `Congrats on your Wedding Day, ${textvalue}!`
        heading.style.fontSize = "22px"
        details.style.color = "black";
    }

    else if (themevalue === "Valentines") {
        heading.textContent = `Happy Valentine's Day, ${textvalue}!`
        heading.style.fontSize = "20px"
        details.style.color = "black";
    }

    else if (themevalue === "Christmas") {
        heading.textContent = `Merry Christmas, ${textvalue}!`
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
            Christmas: `🎄 Wishing you a warm, happy and wonderful day with the people that you love! 🎁`,
            Anniversary: `💕 May our love grow stronger each day. Wishing you many more moments together 💞`,
            Graduation: `🎓 Congratulations on graduating! Your hard work has paid off. Wishing you success and happiness in your next steps 📜`,
            Mother: `🌷 Thank you for your love, kindness and support. Wishing you a day filled with happiness. 🌹`,
            Father: `🩵 Thank you for your strength, encouragement and support. Wishing you a day filled with happiness. 💙`,
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

        
        else if (themevalue === "Christmas") {
            heading.textContent = `Merry Christmas, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
    }

        else if (themevalue === "Anniversary") {
            heading.textContent = `💓 Happy Anniversary, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Graduation") {
            heading.textContent = `🎓 Congrats, ${textvalue}!`
            heading.style.fontSize = "20px"
            details.style.color = "black";
        }

        else if (themevalue === "Mother") {
            heading.textContent = `💝 Happy Mother's Day, ${textvalue}!`
            heading.style.fontSize = "22px"
            details.style.color = "black";
        }
        else if (themevalue === "Father") {
            heading.textContent = `🩵 Happy Father's Day, ${textvalue}!`
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

function updateTime() {
    var currentTime = new Date().toLocaleString();
    var TimeText = document.querySelector("#timeElement");
    TimeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

const themeToggleBtn = document.querySelector('.theme-toggle');
const darktheme = localStorage.getItem('theme');
darktheme && document.body.classList.add(darktheme);

handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme')
    }
};

themeToggleBtn.addEventListener('click', () => {
    handleThemeToggle();
});

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    "The word “holiday” comes from the Old English word “hāligdæg,” which means “holy day.”",
    "Halloween originated from the Celtic festival of Samhain, which celebrated the end of the harvest season.",
    "The first Thanksgiving was celebrated by the Pilgrims in 1621 in Plymouth, Massachusetts.",
    "In Norway, it is traditional to hide brooms on Christmas Eve to prevent witches from stealing them.",
    "The tradition of blowing out candles on a birthday cake dates back to ancient Greece.",
    "In Greece, it is traditional to leave a piece of cake on the doorstep on Christmas Eve as a symbol of hospitality.",
    "In Austria, it is traditional to leave a pickle on the Christmas tree, and the first person to find it receives a special gift.",
    "In the Netherlands, Sinterklaas (Santa Claus) arrives by boat and is accompanied by his helpers, who are dressed in blackface.",
    "In the United States, Memorial Day is celebrated on the last Monday in May to honor those who have died while serving in the military.",
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();

        const card = document.createElement("div");
        card.className = "color-card";

        card.innerHTML = `
            <div class="color-box" style="background-color: ${color}">
                <span class="hex-code">${color}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            copyColor(color);
        });

        palette.appendChild(card);
    }

    message.textContent = "";
}

async function copyColor(color) {
    try {
        await navigator.clipboard.writeText(color);

        message.textContent = `${color} copied to clipboard!`;

        setTimeout(() => {
            message.textContent = "";
        }, 2000);

    } catch (error) {
        message.textContent = "Unable to copy color.";
    }
}

generateBtn.addEventListener("click", generatePalette);

// Generate palette when page loads
generatePalette();
const timaverk = document.getElementById("aefingar");

/// ----- HELPER FUNCTIONS -----

function addSection(title, subtitle) {
    const section = document.createElement("section")
    section.style.marginBottom = "30px"

    const h3 = document.createElement("h3")
    h3.textContent = title
    section.appendChild(h3)

    if (subtitle) {
        const p = document.createElement("p")
        p.textContent = subtitle
        p.style.marginTop = "4px"
        p.style.opacity = "0.8"
        section.appendChild(p)        
    }


    timaverk.appendChild(section)
    return section
}

// FOR LOOP

{
    const s = addSection("Æfing 1: For loop", "Gerum 5 sinnum töflu")
    for (let i = 1; i <= 10; i++) {
        const p = document.createElement("p")
        p.textContent = `5 * ${i} = ${5*i}`
        s.appendChild(p)
    }
}

/// FOR LOOP - CONTINUE

{
    const s = addSection("Æfing 2: For loop með continue", "Prenta countdown frá 10 en sleppa tölunni 5")

    for (let i = 10; i >= 0; i--) {
        if (i === 5) {
            continue
        }
        const p = document.createElement("p")
        p.textContent = `${i}`
        s.appendChild(p)
    }
}

/// FOR LOOP - BREAK

{
    const s = addSection("Æfing 3: For loop með break", "Teljum frá 1 upp í 10, en hættum um leið og fyrsta tala sem deilist með 6 kemur upp")

    for (let i = 1; i <= 10; i++) {
        if (i % 6 === 0) {

            const p = document.createElement("p")
            p.textContent = `Stoppum á tölu ${i}, því hún er deilanleg með 6` 
            s.appendChild(p)
            break
        }
        const p = document.createElement("p")
        p.textContent = i
        s.appendChild(p)
    }
}

/// WHILE LOOPS

{
    const s = addSection("Æfing 4: While loops", "Byrja með breytu með gildi 1 og tvöfalda hana þangað til hún verður orðin stærri en 100")
    let tala = 1
    while (tala < 100) {
        const p = document.createElement("p")
        p.textContent = `Tala = ${tala}`
        s.appendChild(p)
        // tala = tala * 2
        tala *= 2
    }
}

{
    const s = addSection("Æfing 5: While loop 2: electric boogaloo", "Prenta allar oddatölur undir 20")
    let oddatala = 1;

    while (oddatala < 20) {
        const p = document.createElement("p")
        p.textContent = `Oddatala: ${oddatala}`
        s.appendChild(p)
        oddatala += 2
    }
}

/// DO...WHILE LOOP

{
    const s = addSection("Æfing 6: Do...while loop", "Dice game")
    let roll;

    do {
        roll = Math.floor(Math.random() * 6) + 1;
        const p = document.createElement("p")
        p.textContent = `Rúlluðum: ${roll}`
        s.appendChild(p)
    } while (roll != 6)

    const p = document.createElement("p")
    p.textContent = `Jibbí þú rúllaðir ${roll}`
    s.appendChild(p)
}

/// FOR...OF LOOP

{
    const s = addSection("Æfing 7: For...of loop", "Setja alla liti í uppercase")
    const litir = ["red", "green", "blue"]

    for (let litur of litir) {
        const p = document.createElement("p")
        p.textContent = litur.toUpperCase()
        s.appendChild(p)
    }
}

/// FOR...IN LOOP

{
    const s = addSection("Æfing 8: For...in loop", "Prenta aðeins gildi sem eru tölur")
    const data = { a: 10, b: 'Daniel', c: true, d: 3 }

    for (const key in data) {
        if (typeof data[key] === "number") {
            const p = document.createElement("p")
            p.textContent = `${key}: ${data[key]}`
            s.appendChild(p)
        }
    }
}
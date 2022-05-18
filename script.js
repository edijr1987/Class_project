//Creating a program with "class" in JavaScript

class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "What would you like to do?\n" +
                                "1- Engage the spaceship\n" +
                                "2- Print the spaceship\n" +
                                "3- Leave the programm")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Inform the spaceship name")
    let crewQuantity = prompt("Inform the crew quantity")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name +
                            " (" + spaceship.crewQuantity + " crews)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}

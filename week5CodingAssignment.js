class Game{
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    decribe() {
        return `${this.title} is ${this.genre}` 
    }
}


class Platform {
    constructor (name) {
        this.name = name;
        this.games = [];
    }
    
    addGame(game) {
        if (game instanceof Game) {
            this.games.push(game);
        } else {
            throw new Error(`You can only add an instance of Game. Arguement is not a game: ${game}`);
        }
    }

    describe() {
        return `${this.name} has ${this.games.length} games`;
    }
}

class Menu {
    constructor() {
        this.platforms = [];
        this.selectedPlatform = null;
    }

    
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPlatform();
                    break;
                case '2':
                    this.viewPlatform();
                    break;
                case '3':
                    this.deletePlatform();
                    break;
                case '4':
                    this.displayPlatforms();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Have a nice day');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new platform
        2) view platform
        3) delete platform
        4) display all platforms
        `);
    }

showPlatformMenuOptions(platformInfo) {
return prompt(`
0) back
1) create game
2) delete game
----------------------------
${platformInfo}
`);
}

    displayPlatforms() {
        let platformString = '';
        for (let i = 0; i < this.platforms.length; i++) {
        platformString += i + ') ' + this.platforms[i].name + '\n';
    }
    alert(platformString);
}

createPlatform() {
    let name = prompt('Enter name for new platform');
    this.platforms.push(new Platform(name));
}

viewPlatform() {
    let index = prompt('Enter the index of the platform you wish to view');
    if (index > -1 && index < this.platforms.length) {
        this.selectedPlatform = this.platforms[index];
        let description = 'Platform Name: ' + this.selectedPlatform.name + '\n';
    
        for (let i = 0; i < this.selectedPlatform.games.length;i++) {
            description += i + ') ' + this.selectedPlatform.games[i].name
             + ' - ' + this.selectedPlatform.games[i].genre + '\n';
}

let selection = this.showPlatformMenuOptions(description);
switch (selection) {
    case '1':
        this.createGame();
        break;
    case '2':
        this.deleteGame();
}
    }
}

deletePlatform() {
    let index = prompt('Enter the index of the platform you wish to delete');
    if (index > -1 && index < this.platforms.length) {
        this.platforms.splice(index, 1);
    }
}

createGame() {
    let name = prompt('Enter name of new game:');
    let genre = prompt('Enter genre of new game:');
    this.selectedPlatform.games.push(new Game(name, genre));
}

deleteGame() {
    let index = prompt('Enter the index of the game you wish to delete:');
    if(index > -1 && index < this.selectedPlatform.games.length) {
        this.selectedPlatform.games.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();
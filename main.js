const player1 = {
    name: 'KITANA',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: [
        'fist',
    ],
    attack: () => {
        console.log(`${this.name} Fight...`);
    }
}
const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: [
        'filthy language'
    ],
    attack: () => {
        console.log(`${this.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');

function createPlayer(className, player) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $hp = document.createElement('div');
    $hp.classList.add('life');
    $hp.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    $progressbar.appendChild($hp);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = player.img;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild( $character);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $arenas.appendChild($player);
}
createPlayer('player1', player1);
createPlayer('player2', player2);
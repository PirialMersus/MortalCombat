const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
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
    player: 2,
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

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(player) {
    const $player = createElement('div', 'player' + player.player);
    const $progressbar = createElement('div', 'progressbar');
    const $hp = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');

    $hp.style.width = player.hp + '%';

    $name.innerText = player.name;

    $progressbar.appendChild($hp);
    $progressbar.appendChild($name);

    $img.src = player.img;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $player.appendChild($progressbar);
    $player.appendChild($character);
    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= Math.random() * 20; 
    if (player.hp < 0) {
        $randomButton.disabled = true;
        player.hp = 0;
        $arenas.appendChild(playerLose(player.name));
        console.log([`player${3 - player.player}`].name);
    }
    $playerLife.style.width = player.hp + '%';

    // if (player.hp < 0) {
    //     $randomButton.disabled = true;
    //     player.hp = 0;
    //     $arenas.appendChild(playerLose(player.name));
    // }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

$randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


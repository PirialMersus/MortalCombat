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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= getRandomInt(20);

    if (player.hp < 0) {

        player.hp = 0;
    }
    $playerLife.style.width = player.hp + '%';
    return player.hp;
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' win';

    return $winTitle;
}

$randomButton.addEventListener('click', () => {
    const player1Hp = changeHP(player1);
    const player2Hp = changeHP(player2);
    if (player1Hp <= 0 || player2Hp <= 0) {
        $randomButton.disabled = true;
        if (player1Hp > player2Hp) {
            $arenas.appendChild(playerWin(player1.name));
            player2.hp = 0;
        } else if (player1Hp < player2Hp) {
            $arenas.appendChild(playerWin(player2.name));
            player1.hp = 0;
        } else {
            $arenas.appendChild(playerWin('Friendship'));
        }
    }

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));



///.....................OMEGA NOTAS PARA MYSELF-HOLA PALLA!...................


///Cosas a añadir en el futuro: Mas monsters/ que los mensajes tarden un segundo en aparecer en los display
/// que haya textos narrando la batalla epica/ Tras la muerte del monster que reinice todo y aparezca nuevo monster...
///sonidos chulos de ataque, etc... posible musica de fondo de rpg...
///poder equiparse el loot y que sumen stats...
///posibles NPCs con dialogos que ayuden dando objetos...
///para futuro lejano: Loop de juego estilo roguelite con drops a lo diablo2


///apretar ctrl+f5 en browser para reiniciar todo...just in case...



const button = document.getElementById('boton');
const displayHit = document.getElementById('hit');
const displayPlayerLife = document.getElementById('playerLife');
const displayDrop = document.getElementById('randomDrop');
const reset = document.getElementById('resetButton');

let monsterLife = 25;
let playerLife = 30;
let isPlayerTurn = true; ///False for monster turn.
const monsterALoot = [
    '10 Gold', 'rotten egg', 'smelly chicken head', 'wooden sword', 'nothing has dropped'
]

let hasDroppedLoot = false; ///Esto hace que el boton no siga soltando loot una vez el bicho a muerto.


function attack() {

    if(isPlayerTurn){
    let randomNumberAttack = Math.floor(Math.random() * 7) + 1; // Attack value between 1 and 7

    monsterLife -= randomNumberAttack; // Subtract attack value from monster life

    if (monsterLife <= 0) {
        displayHit.value = 'Monster defeated!';
        monsterLife = 0; // Ensure monsterLife doesn't go negative
        
    if(!hasDroppedLoot){ ///Esto hace que el boton no siga soltando loot una vez el bicho a muerto.
        monsterALootDrop();
        hasDroppedLoot = true;
        
    }
       return 
        
    } else {
        displayHit.value = `Monster life: ${monsterLife}`; // Display remaining monster life
    }    

}
    isPlayerTurn = false;
    monsterAttack();
    
    
}


///Monster Attack to Player

function monsterAttack() {
    let randomNumberMonster = Math.floor(Math.random() * 9) + 2; /// el ataque basico del monster tiene un minimo de 2 de daño.

    playerLife -= randomNumberMonster;

    if(playerLife <= 0){
        displayPlayerLife.value = 'You died!';
        playerLife = 0;
        return

    }else {
        displayPlayerLife.value = `Player life: ${playerLife}`; // Display remaining Player life
    }
    isPlayerTurn = true;    
}

///drop from monster A

function monsterALootDrop(){
    let randomDropIndex = Math.floor(Math.random() * monsterALoot.length); //drops item from monster
    
    if(monsterLife <= 0){ 
       displayDrop.value = `Monster has dropped:  ${monsterALoot[randomDropIndex]}`;
       return
    }
    
}

///reset button (este boton es temporal, para no tener que apretar ctrl+f5) Pero el juego no lo tendria, pasaria a un nuevo monster.

function resetGame() {
    monsterLife = 20; // Reset monster life
    playerLife = 30; // reset player life
    hasDroppedLoot = false; // Reset loot flag
    isPlayerTurn = true; // Reset turn
    displayHit.value = ''; // Clear display
    displayDrop.value = '';
    displayPlayerLife.value = '';
    console.log("Game has been reset.");
}




button.addEventListener('click', attack);
button.addEventListener('click', resetGame);

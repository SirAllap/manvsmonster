///.....................OMEGA NOTAS PARA MYSELF-HOLA PALLA!...................

///Cosas a añadir en el futuro: Mas monsters/ que los mensajes tarden un segundo en aparecer en los display
/// que haya textos narrando la batalla epica/ Tras la muerte del monster que reinice todo y aparezca nuevo monster...
///sonidos chulos de ataque, etc... posible musica de fondo de rpg...
///poder equiparse el loot y que sumen stats...
///posibles NPCs con dialogos que ayuden dando objetos...
///para futuro lejano: Loop de juego estilo roguelite con drops a lo diablo2


///apretar ctrl+f5 en browser para reiniciar todo...just in case...

// Para mantener este código más limpio, sacamos la lista de monstruos a un archivo separado

/*
AAAARRRRMIIISSSUUUUUAAAAAANNNNN
AAAARRRRMIIISSSUUUUUAAAAAANNNNN
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢀⡴⠉⠀⠀⠀⣠⠞⠁⣠⠖⠋⠁⠀⠀⣠⠞⠁⠀⠀⢸⣷⣶⣦⠀⠀⣄⠙⢦⠀⠀⠙⢆⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⣠⠖⠋⠀⢀⠖⣠⠊⢀⡴⠋⠁⠀⠀⢀⣤⡾⠁⠀⣠⠆⠀⣸⣟⡉⠘⣧⡀⠈⢧⠈⢧⠀⠀⠈⢣⡀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣩⠴⡾⠃⠀⠀⣴⠃⠀⠀⢠⠞⠀⠀⠀⠀⡠⢞⡟⠀⢀⡾⠁⡆⠀⣿⡏⠙⢦⢾⣷⡀⠈⣆⠈⢇⠰⡀⠀⠱⡀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠁⠀⠀⡼⠁⠀⠀⣰⠏⠀⠀⠀⢀⡼⢁⡜⠀⢠⡟⠀⢀⠇⢀⣿⠁⠀⠀⢻⣿⣷⡄⠘⡄⠘⡆⠹⡀⠀⢹⡀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⣠⠂⣼⠁⠀⠀⢠⠇⠀⠀⠀⠀⡞⠀⡜⠁⣴⡟⠀⠀⣼⠀⣼⡏⠀⠀⠀⠀⢻⣿⡿⠀⢱⡀⠸⡄⢳⠀⠀⢧⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⢠⠃⢰⠃⠀⠀⢠⠏⠀⠀⠀⠀⡾⠀⢰⠃⢀⡟⠀⠀⢀⡏⢰⣿⠁⠀⠀⠀⠀⠀⢻⣽⡆⠈⣇⠀⢳⠘⡇⠀⠸⡄⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⡜⠀⡜⠀⠀⢠⡏⠀⠀⣸⠁⣸⠀⠀⡟⢀⡼⠀⠀⠀⣸⠀⣼⠏⠀⠀⠀⠀⠀⠀⠀⢳⣷⠀⢹⠀⠘⡄⢱⠀⠀⠹⡀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⢰⡇⠀⡇⠀⢠⣿⠁⠀⢰⠇⢠⠇⠀⢠⠇⣸⠃⠀⠀⢠⡇⣰⡟⠀⠀⣀⣀⠀⠀⠀⠀⠈⣿⡆⢸⡆⠀⣧⢸⡄⠀⠀⣧⡀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⢸⠀⠀⡇⠀⣾⡟⠀⠀⡏⠀⡞⠀⠀⢸⢀⡇⠀⠀⠀⡾⢠⣿⢃⡴⠋⠀⠘⢦⠀⠀⠀⠀⠸⣷⢸⢇⠀⢹⠘⣷⠀⠀⣿⠹⡀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⡇⠀⠀⡇⢠⣻⠃⠀⢰⠃⢸⠁⠀⠀⢸⣿⠀⠀⠀⣰⠁⣬⠏⢸⠀⢚⣉⣡⠟⠀⠀⠀⢀⡤⣿⢠⢻⠀⢸⠀⣿⠀⠀⡏⠀⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⣯⠀⠀⡇⠀⠀⡇⢺⡏⠀⠀⢸⠀⡸⠀⠀⠀⣼⣿⠀⠀⢰⠏⣾⡟⠀⠘⢦⡈⠉⠁⢀⣠⣴⠞⠉⠀⢹⣼⠘⠇⢸⣴⣿⡄⠀⡇⢀⡇⢨⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⢧⠀⢠⢷⣾⢰⠀⢀⡇⠀⡇⠀⠀⡄⢻⡇⠀⢠⠏⢠⡾⠁⠀⠀⣀⣽⣿⢿⡿⠟⠓⠒⠦⣄⢸⡿⡇⠀⣸⡿⠂⡇⠀⡇⢸⠁⣸⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⢣⡀⢸⡄⣾⣟⡇⣿⠀⢸⡇⢸⡇⠀⢰⠀⢸⠃⢠⡟⢰⣿⡁⠀⠀⠾⠿⠿⠟⠋⣀⣠⣤⣤⣀⠈⣿⠻⡇⡀⡟⠛⢰⡄⢸⡇⣾⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⢸⣿⠛⣿⠁⣿⠀⢀⡇⠸⡇⠀⣼⠀⠸⣆⣾⡇⣼⡟⣷⠀⠀⠀⠀⠀⠐⠿⠿⠛⠉⠙⠛⢿⣇⣠⣧⢸⣿⠁⠀⣷⡈⣷⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣾⡏⠀⠾⡀⢹⡀⠘⡇⢻⡇⠀⣿⡄⠀⣿⣿⣗⣿⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⡟⣿⠀⠀⡟⢷⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⢳⠀⠀⢷⢸⡇⠀⠃⢸⡇⣠⣿⡇⢰⣿⣿⣿⡇⠨⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡇⣿⣆⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠀⠸⡆⠀⠀⠈⣿⠀⠀⣼⣷⣿⣿⢇⣾⣿⢿⡿⣆⣸⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⣿⣷⣿⡿⢳⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⡞⣇⠀⢹⣇⣴⡿⢻⣿⣿⣾⠟⠁⠘⠇⠈⠻⢶⡠⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣻⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠏⠀⣿⣠⣿⣿⢿⡇⠀⠙⠋⠁⠀⠀⠀⠀⠀⠀⠂⠙⠶⠜⠊⠛⠩⠋⣉⣠⡤⠀⠀⠀⠀⣼⡿⣯⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠋⠘⣿⣆⠀⠀⠀⠐⠒⢢⣤⣤⠤⠴⠒⠒⠒⠒⠒⠒⠒⠚⠉⠉⠁⠀⠀⠀⢀⣼⠏⢰⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠿⣿⣦⡀⢀⡴⣚⡵⠚⠁⠀⣀⣀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢠⣾⢿⣆⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡟⣩⠞⠉⠀⠀⠀⠀⠈⠉⢛⣟⠛⠉⠁⠀⠀⠀⠀⠀⢀⣴⢿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⠟⠉⠳⣄⡀⠀⠀⠀⣠⣀⣼⣿⠀⣠⡄⠀⠀⠀⢀⣴⡟⠁⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣼⡇⠀⠀⠈⠻⣦⣶⣤⣿⣷⣿⣿⣶⣿⣷⣴⣿⣴⠟⠋⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣾⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠙⠛⠿⠿⠿⠿⠿⠿⠛⠛⠛⠁⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡏⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠁⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⠃⠈⠻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢞⡆⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣟⠁⠀⠀⠀⠈⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⣾⠁⠀⢀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠈⠳⢦⣀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢰⢇⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⣀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠉⠳⠦⣤⡤⠶⠟⠁⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
AAAARRRRMIIISSSUUUUUAAAAAANNNNN
AAAARRRRMIIISSSUUUUUAAAAAANNNNN
*/


import monsterList from './monster_data.js'

// Constantes globales
const monsterScreen = document.getElementById('monster')
const playerScreen = document.getElementById('player')
const dropScreen = document.getElementById('drop')
const resetButton = document.getElementById('resetButton')
const nextMonsterButton = document.getElementById('nextMonsterButton')
const attackButton = document.getElementById('attackButton')
const boostedAttackBadge = document.getElementById('boostedAttackBadge')
const playerInitLife = 900
const playerInitAttack = 0

// Variables globales
let isPlayerTurn = true
let monsterIndex = 0

// Frases de victoria
const winPhrases = [
    "We win! Snacks on me!",
    "Victory! Now, where’s my nap?",
    "Winner, winner, chicken dinner!",
    "We’re on fire! Not literally... I hope.",
    "Success! I’m calling my mom!"
]

// Función que inicializa al jugador
const player = (life, boostAttack, backpack = []) => {
    return {
        playerLife: life,
        playerAttackDamage: boostAttack,
        backpack
    }
}

// Función que inicializa el monstruo
const monsterToBattle = (index) => {
    // como index es un argumento que se pasa al función, podemos utilizarlo para acceder al array de monstruos
    // y obtener los valores de los objetos que se encuentran en ese array
    const { name, attack, health, drops } = monsterList[index]
    /*
    Esto se llama destructuring, accedemos a las keys de un objeto de una forma mas limpia => const { name, attack, health, drops } = monsterList[index]
    
    - Es lo mismo que esto, ejemplo:
        Imaginate que index es 0

        const monster = monsterList[0]
            console.log(monster)
                =>  {
                        name: 'Goblin',
                        attack: 2,
                        health: 15,
                        drops: [
                            { type: 'Gold', amount: 3, description: '3 Gold' },
                            { type: 'Amulet', magicHeal: 5, description: 'Goblin Amulet' },
                            { type: 'Health Potion', heal: 8, description: 'Small Health Potion' },
                            { type: 'Useless Item', description: 'Rotten egg' },
                            { type: 'Weapon', boostAttack: 1, description: 'Goblin Fang' }
                        ]
                    },

        como ya sabes, a los valores de un objeto los puedes acceder con un . o ([''] si es una key compuesta u otros casos mas complejos)
        entoces para conseguir el mismo resultado que utilizando el destructuring

        utilizamos la constante (monster) donde hemos guardado el valor de monsterList[0]

        return {
            monsterName: monster.name,
            monsterAttackDamage: monster.attack,
            monsterLife: monster.health,
            monsterDrops: monster.drops,
            hasDroppedLoot: false
                ** en este caso CREAMOS UNA NUEVA {KEY: VALUE} con el nombre KEY=>hasDroppedLoot y la inicializamos a VALUE=>false
                ** esto pasará con cada monstruo nuevo
        }

    */

    return {
        monsterName: name,
        monsterAttackDamage: attack,
        monsterLife: health,
        monsterDrops: drops,
        hasDroppedLoot: false
    }
}

// Función que devuelve toda la información del juego actual
const getGameInfo = () => {
    return {
        // los 3 puntos se llaman spread operator y sirven para copiar los valores de un objeto o array
        // como player(playerInitLife, playerInitAttack) tiene un return que nos devuelve un objeto 
        // podemos utilizar el spread operator para copiar los valores de ese objeto
        ...player(playerInitLife, playerInitAttack), // este copiara => playerLife, playerAttackDamage y backpack
        ...monsterToBattle(monsterIndex),            // este copiara => monsterName, monsterAttackDamage, monsterLife, monsterDrops y hasDroppedLoot
        numberOfMonsters: monsterList.length         // aqui crearemos un nuevo key y lo inicializamos a la longitud del array de monstruos
    }
}

// Inicializamos las variables globales con la información del juego actual
// ⚠️⚠️⚠️⚠️⚠️ ESTAS SON LAS VARIABLES GLOBALES QUE CAMBIAN DINAMICAMENTE EN EL JUEGO ⚠️⚠️⚠️⚠️⚠️
let {
    playerLife,
    playerAttackDamage,
    backpack,
    numberOfMonsters,
    monsterName,
    monsterAttackDamage,
    monsterLife,
    monsterDrops,
    hasDroppedLoot
} = getGameInfo()

// Función para mostrar mensajes en pantalla
const displayMessage = (message, display) => {
    display.innerHTML = message
}

// Función que actualiza los displays del jugador y del monstruo
const updateDisplays = () => {
    monsterScreen.innerHTML = `${monsterName} life: ${monsterLife}`
    playerScreen.innerHTML = `Player life: ${playerLife}`
}

// Función que cambia al siguiente monstruo
const nextMonster = () => {
    if (monsterIndex < numberOfMonsters - 1) {
        monsterIndex++
        attackButton.style.display = 'block'
        nextMonsterButton.style.display = 'none'

        // OTRO EJEMPLO DE DESTRUCTURACIÓN
        // Obtener los datos del monstruo utilizando la destructuración y en este caso le asigno un alias a cada variable
        const {
            /* 
            original: alias,
            original: alias,
            original: alias
             */
            monsterName: name,
            monsterLife: life,
            monsterAttackDamage: attackDamage,
            monsterDrops: drops,
            hasDroppedLoot: loot } = monsterToBattle(monsterIndex)

        // Aqui reescribimos las variables que cambian DINÁMICAMENTE utilizando el alias, en este caso las asignaremos con las del nuevo monstruo
        monsterName = name
        monsterLife = life
        monsterAttackDamage = attackDamage
        monsterDrops = drops
        hasDroppedLoot = loot

        dropScreen.style.display = 'none'
        updateDisplays()
    }
}


// Función que comprueba el estado del juego
const checkGameStatus = () => {
    if (monsterLife <= 0) {
        monsterLife = 0
        monsterScreen.style.cssText = "background-color: rgb(84, 88, 79); color: rgb(196, 206, 184);"
        monsterScreen.innerHTML = `${monsterName} defeated!`
        playerScreen.style.cssText = "background-color: rgb(140, 150, 117); color: rgb(196, 206, 184);"
        playerScreen.innerHTML = winPhrases[Math.floor(Math.random() * winPhrases.length)]

        // si el monstruo es el último del array de monstruos, mostrar el botón de reiniciar
        if (monsterIndex === numberOfMonsters - 1) {
            resetButton.style.display = 'block'
        } else {
            nextMonsterButton.style.display = 'flex'
        }

        attackButton.style.display = 'none'
        dropScreen.style.display = 'block'

        if (!hasDroppedLoot) {
            monsterRandomDrop(monsterDrops, backpack)
            hasDroppedLoot = true
        }
        return
    }

    if (playerLife <= 0) {
        playerScreen.innerHTML = 'You died!'
        playerScreen.style.cssText = "background-color: rgb(84, 88, 79); color: rgb(196, 206, 184);"
        monsterScreen.style.cssText = "background-color: rgb(140, 150, 117); color: rgb(196, 206, 184);"
        dropScreen.style.display = 'block'
        dropScreen.innerHTML = 'Monster just ate your arse!'
        attackButton.style.display = 'none'
        resetButton.style.display = 'block'
        playerLife = 0
    }

    updateDisplays()
}

// Función que ejecuta la acción del jugador y el ataque del monstruo
const action = () => {
    const playerAttackAction = Math.floor(Math.random() * 7) + 1 + playerAttackDamage
    monsterLife -= playerAttackAction
    isPlayerTurn = false

    checkGameStatus()

    if (monsterLife > 0) {
        const monsterAttackAction = Math.floor(Math.random() * 8) + 1 + monsterAttackDamage
        playerLife -= monsterAttackAction
        isPlayerTurn = true
    }

    checkGameStatus()
}

// Función que randomiza el drop del monstruo derrotado
const monsterRandomDrop = (drops, backpack) => {
    const drop = drops[Math.floor(Math.random() * drops.length)]
    backpack.push(drop)

    switch (drop.type) {
        case 'Gold':
            displayMessage(`You found ${drop.amount} Gold!`, dropScreen)
            break
        case 'Weapon':
            playerAttackDamage += drop.boostAttack
            displayMessage(`You received a ${drop.description}! Your attack increased by ${drop.boostAttack}!`, dropScreen)
            boostedAttackBadge.style.display = 'block'
            boostedAttackBadge.innerHTML = `+${playerAttackDamage}`
            break
        default:
            if (drop.heal) {
                playerLife += drop.heal
                displayMessage(`You healed for ${drop.heal} health!`, dropScreen)
            }
            if (drop.magicHeal) {
                playerLife += drop.magicHeal
                displayMessage(`Your magically healed for ${drop.magicHeal} health!`, dropScreen)
            }
            break
    }
}

// Función que reinicia el juego
const resetGame = () => {
    isPlayerTurn = true;

    ({ playerLife, playerAttackDamage, backpack } = player(playerInitLife, playerInitAttack))
    monsterIndex = 0

    let gameInfo = getGameInfo();
    ({ monsterName, monsterLife, monsterAttackDamage, hasDroppedLoot } = gameInfo)

    updateDisplays()
    monsterScreen.style.cssText = "background-color: rgb(185, 190, 167); color: #272727;"
    playerScreen.style.cssText = "background-color: rgb(185, 190, 167); color: #272727;"
    dropScreen.style.display = 'none'
    attackButton.style.display = 'block'
    resetButton.style.display = 'none'
    nextMonsterButton.style.display = 'none'
    boostedAttackBadge.style.display = 'none'
}

// Event listener para manejar el juego cuando se presione una tecla
document.addEventListener('keydown', (e) => {
    const { key } = e
    // si la tecla es a y el jugador tiene vida y el monstruo tiene vida, ejecutar la acción
    if (key === 'a' && playerLife > 0 && monsterLife > 0) {
        action()
    }
    // si la tecla es s y el monstruo NO tiene vida, ejecutar el siguiente monstruo
    if (key === 's' && monsterLife <= 0) {
        nextMonster()
    }
    // si la tecla es r y (el jugador NO tiene vida o (el monstruo NO tiene vida y el monstruo es el último del array de monstruos)), reiniciar el juego
    if (key === 'r' && (playerLife <= 0 || (monsterLife <= 0 && monsterIndex === numberOfMonsters - 1))) {
        resetGame()
    }
})

attackButton.addEventListener('click', action)
nextMonsterButton.addEventListener('click', nextMonster)
resetButton.addEventListener('click', resetGame)
/*
⣿⣻⣿⣿⡟⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⢟⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢫⣊⣽⣵⠖⠀⠻⣿⣿⣿⣿⣿⣿⣯⢻⣿⣷⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⣐⢣
⣿⣷⣻⣿⠁⠀⠀⠀⠀⠀⣰⣿⠟⠉⢐⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠜⣫⣿⢯⡞⠀⠀⠹⣿⣿⣿⣿⣿⣿⠀⢿⣿⡄⣀⣴⣟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⢆⢧
⣿⣿⣷⠉⠀⠀⠀⠀⢀⡾⠋⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣇⣴⢏⣵⢏⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⠀⠈⢿⣧⠓⢉⣯⢧⢿⣿⣿⣿⣿⠌⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡜⣎
⣿⣿⣿⠀⠀⠀⠀⠀⠋⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⠇⣼⣷⠟⠁⠀⢀⡴⢃⠀⠹⣿⣿⣿⣿⡃⠀⠈⣿⡔⠋⣡⢣⣾⠿⣿⣿⣿⡃⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⢻⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠜⣲
⣿⣿⡯⠀⠀⠀⠀⠀⠀⠀⠀⢀⢮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⣿⣿⣿⠾⠋⠁⠀⣠⢞⡿⡵⡻⣂⠀⢹⣿⣿⣿⡇⠀⣴⡻⣷⣔⣯⢾⠵⢫⢿⣿⣿⠅⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠙⢿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⣸⡱
⣞⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢨⡗⣿⣿⠀⠀⠀⠈⠙⢫⢋⣼⣿⡛⠀⠀⢻⣿⣿⡆⠀⠙⣡⣼⣾⢜⣣⢔⣵⣫⣿⣿⡁⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠰⢨⣱⢹
⣿⠼⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠟⠁⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠀⢻⣿⢀⣀⣀⣀⠤⢤⣉⣁⠈⠛⠃⠀⠘⣿⣿⠇⠀⠀⠀⠀⣈⣧⣉⣛⣑⣛⡍⢿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠚⣧⠀⠀⠀⠀⠀⠀⢀⢃⠳⣬⠳
⣿⠃⠀⠀⠀⠀⠀⠀⢀⣾⠟⠋⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠐⠒⢻⣿⠁⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡹⣿⡃⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠈⠹⠉⠓⠂⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠑⠀⠀⠀⠀⠀⠄⣎⢳⡜⡳
⣿⠁⠀⠀⠀⠀⠀⠀⠋⠁⠀⠀⠀⢀⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠀⠈⣿⣀⡤⠠⠄⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠅⢠⠄⠀⠀⣴⣒⠶⠭⠤⢄⣀⡀⠀⠀⠀⢸⡏⢿⣿⣿⣿⣿⣿⣿⣿⠈⠻⣿⣷⣄⠀⠀⠀⠀⠀⢀⡚⣬⢳⣚⠵
⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⢢⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣨⣟⠶⠶⠉⠛⠓⠭⣍⣉⠒⠀⠀⠀⠀⠀⠸⠇⡞⠀⢒⡩⢕⡒⠐⠂⠒⠒⠒⠪⢅⡀⠀⢸⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠀⠈⠙⢿⣮⣢⣄⠀⡐⢬⡺⡵⣏⢮⡓
⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡄⣻⣿⣿⣿⡿⣻⣿⣿⣿⣿⣿⣿⢻⣿⣿⡇⣠⠟⣉⣀⣀⣀⡠⠄⣀⣀⠈⡙⠻⠄⠀⠀⠀⢀⣴⢿⠃⢰⣟⠫⠥⠤⠠⢠⣤⠠⠤⠤⣀⡉⠂⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠈⠪⠝⠿⣽⣰⢣⣟⡽⣎⠷⡡
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⢰⣻⣿⣿⡟⠁⣿⣿⣿⣿⣿⣿⣿⠈⣿⣿⡟⠫⠥⠤⠤⠼⠿⠧⠤⠔⢒⡋⠁⠀⠀⠀⠀⠀⠉⣼⣻⠀⠘⠫⢔⣒⡒⠠⠼⢟⢣⢖⣒⠒⠋⠁⢀⠀⢨⣿⣿⣿⣿⡝⣿⣿⣿⠀⠀⢀⠠⡐⣋⠖⣼⣻⠿⣼⢯⡝⣧⠑
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡱⠌⣿⣿⡟⠀⢸⣿⣿⣿⣿⣿⣿⣿⡀⢹⣿⡗⠈⠓⠒⠒⠒⠒⠒⠲⠟⠛⢉⣵⡦⣶⠀⠀⠀⠀⠉⣟⠀⠀⠙⠒⠒⠠⠍⠻⡤⠂⠒⠲⡖⠋⠉⠉⠀⢸⣿⣿⣿⣿⡇⠸⣿⣿⡃⠰⣌⠲⡱⡜⣾⣱⢯⡿⡽⣾⡹⢆⡍
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢑⡀⣿⡟⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠟⠁⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠉⠀⠀⠀⠀⣾⣿⣿⣿⣿⣷⢐⢻⣿⣇⠳⣌⡳⣽⣹⢾⣽⢯⡿⣽⢶⡛⢦⠐
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢢⠀⣿⠁⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠸⢿⠀⠀⣀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠹⠰⢤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢻⣿⣿⣿⣿⣿⣎⡽⣿⣧⣛⡼⣳⢷⣯⡿⣯⡿⣽⡳⣯⢝⠢⡁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡠⢈⠃⢠⣾⡿⠋⢁⣿⣿⣿⡿⣿⣿⣷⠀⠀⠈⣀⣼⣥⢞⣅⠀⠀⠀⠀⠀⠀⡰⠋⢉⣉⡀⠀⠀⠀⠀⢀⣠⣀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠿⠳⣿⣿⣷⣽⣻⡷⣾⢽⣯⣿⢾⣟⣷⣻⡗⣿⡱⣎⠱⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢁⠂⣾⡿⠋⠀⠀⢸⣿⣽⢱⢲⡌⠻⣿⣇⢰⡾⣟⣷⡟⣫⠞⠀⠀⠀⠀⠀⠀⢧⡀⢾⣿⣿⠀⠀⠀⠠⣻⣿⡿⢂⡴⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡴⣾⢣⢹⣿⢿⡿⣟⡿⣽⣻⢾⣽⣻⢞⡷⣯⢟⡾⣱⢎⠱⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠄⠁⠀⠀⠀⢀⠀⢻⢿⠀⢸⣽⣆⢹⡹⠀⢀⣼⣷⠿⣫⠀⡀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣯⣶⣿⠀⣾⣿⣻⣽⢿⣽⣳⣯⣟⡾⣽⢯⡿⣭⣟⣞⡳⢎⠢⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣈⠂⠄⠀⠀⠀⠈⠀⠀⢪⢧⠘⣧⣻⣀⡇⠀⠚⡡⢋⣴⡷⣻⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣼⡧⠏⣰⣿⣳⣟⡾⣯⣟⣷⣻⢾⡽⣯⢷⣻⣳⡽⢮⡝⢎⡰⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⣄⠊⠄⠀⠀⠀⠀⠀⠀⠀⠩⡳⣀⠉⠙⠻⡄⠀⣵⣿⡯⣺⣿⡥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⠋⢀⣠⢞⡏⢷⣛⡾⣽⣳⣟⡾⣽⢯⡿⣽⢯⣷⣻⡼⣻⡜⣡⠂⡁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⡰⢈⠄⠀⠀⠀⠀⠀⠀⠀⠀⠉⡈⠳⢦⣄⣹⡄⠑⠋⠈⠙⠋⠓⠀⢀⣀⡤⠴⢖⡒⣒⢒⡒⣒⢒⡒⢖⠲⡒⢦⠤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⣠⠞⢒⠫⡐⢊⠜⣢⢛⡼⢳⣛⡾⣽⢯⡿⣽⢯⣟⣾⣳⡽⣣⠟⡤⠁⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡑⢌⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡑⢢⠐⡀⠙⢦⡀⠀⠀⠀⠀⠐⠛⠓⠚⠓⠒⠓⠚⠒⠓⠞⠦⠙⠮⠱⠭⠖⠳⠴⠒⠦⠭⠟⠂⠀⠀⢀⡴⠃⠁⠀⠁⡘⠄⢊⢄⠣⢜⠣⣏⡽⣏⡿⣽⢯⣟⡾⣷⢯⣷⢫⣝⡰⢁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡑⢌⠂⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⠑⠄⠂⠀⠙⢦⡀⠀⠀⠀⠀⠀⠉⠒⠒⠦⠤⠤⠤⢀⣀⣀⠀⡀⣀⢀⡠⠤⠤⠀⠀⠀⠀⣠⠴⠋⠀⠀⠀⠀⠀⠀⠈⠀⠌⠒⡈⠱⢌⡚⣭⢻⣽⣻⢾⡽⣯⣟⡾⣝⢦⡑⢂⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⢈⠐⠀⠈⠐⣙⢳⡤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢁⠂⡱⢌⡻⣜⣯⠿⣽⣳⢯⡽⣞⢧⡙⠄⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠜⣄⠊⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠄⠀⠁⢆⠣⣜⠢⡉⠙⣶⢦⣤⣄⣀⣀⣀⡀⣀⣀⣀⣀⣤⡤⠴⠒⠋⠍⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢀⠢⠱⣙⢮⢿⡽⢯⣻⡽⣝⡮⡕⢊⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢭⠰⡈⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠈⢄⠫⡔⢣⠐⠀⢸⣎⡜⡹⢻⢿⣿⣿⣿⣿⣿⠟⣻⠁⠀⠀⠀⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡌⢾⡹⣞⣯⢷⣻⡝⣾⣉⠆⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢊⠵⣁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠈⡕⣪⢅⠊⠀⠸⡝⢶⣡⢃⡎⡜⣩⢫⡑⢦⣹⢾⠀⠀⠀⠀⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡰⣙⠾⣽⣞⣳⣻⠵⣍⠖⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢜⡢⢅⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠒⡥⣊⠔⠀⠀⡇⠀⠙⢶⣸⡰⢡⢆⣹⠖⠃⢸⠀⠀⠀⠀⡐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⠐⣩⢛⡼⣞⣳⣭⠿⣜⢣⠐
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢪⡜⡥⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡉⢖⡡⢊⠀⠀⡇⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⢸⠄⠀⠀⠀⠐⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⢋⡼⢭⣳⣭⢟⡼⢢⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢡⢚⡴⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣢⢑⠢⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢸⡆⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠂⡜⢣⢗⣮⢻⣜⠣⠌
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣈⠞⡴⣁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢎⡁⠂⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⣴⠇⠸⡇⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⠘⠤⣋⢼⡳⢮⣙⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⣀⠻⡴⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣌⣧⣘⡀⡟⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠇⠀⢿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⠂⡱⢪⣝⡳⣌⠣
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠁⠤⣛⠴⣁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⣠⠞⣱⠗⣳⡄⠘⣧⣶⣶⣷⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⡁⠳⣌⠷⣭⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⢁⠲⣍⠷⣀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠸⣾⠕⣹⣟⣴⠆⠘⢏⠙⢿⣿⡿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠱⡌⣟⢶⡩
⠀⠀⠀⠀⠀⠀⠀⠀⠠⡘⢀⠲⣭⡳⡅⠀⠀⠀⠀⣠⣤⣤⣤⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣰⠟⡵⢃⣤⠏⡀⠓⠌⣻⣿⣟⣿⣿⣿⣿⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⡸⢬⣳⢣
⠀⠀⠀⠀⠀⠀⠀⠀⠤⡑⠂⡜⣶⡻⡔⣁⡤⠤⠚⣿⣿⣿⣿⢿⣻⣿⣻⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠞⢡⡮⠔⢡⢫⡿⠃⠀⠀⠀⢿⣿⣻⣿⣿⢿⣿⡿⣿⣿⣿⣶⣶⣾⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠣⢏⡾⣱
⠀⠀⠀⠀⠀⠀⠀⢀⠢⢡⠁⣼⣳⠟⠋⠁⠀⠀⠀⣿⣿⣿⣿⣻⣿⣳⣿⣿⣻⣯⣿⡏⠒⠲⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠰⢃⣉⡤⠤⠤⠴⠒⠚⣿⣿⣽⣿⣿⣿⣿⣟⣾⡿⣽⣿⢿⣿⣿⣷⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣍⢺⡱⢧
⠀⠀⠀⠀⠀⠀⠀⢀⠎⣐⡶⠋⠀⠀⣀⠀⠀⠀⠀⢼⣿⣿⡿⣽⣷⣿⣿⣻⣽⣷⡿⠁⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⢸⣿⣯⣿⣿⣿⣿⣿⣯⣿⣟⣯⣿⣿⣷⣿⡆⠀⠉⠲⢄⡀⠀⠀⠀⠀⠀⠀⣂⠧⡝⣧
⠀⠀⠀⠀⠀⠀⠀⢢⡼⠋⠀⢀⡠⠞⠁⠀⠀⠀⠀⣾⣿⣿⡿⣿⣽⣾⣟⣿⣽⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠒⠀⠀⠀⠀⠀⠾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣽⣿⣿⣯⣿⣿⢷⣿⣻⣽⣿⣯⣿⡇⠀⠀⠀⠀⠉⠢⣄⠀⠀⠀⠀⢄⠫⡼⣱
⠀⠀⠀⠀⠀⠀⣰⠏⢀⣠⢔⡋⠀⣀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣻⣽⣾⢿⣽⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡎⢸⣿⣯⣿⣿⣿⣿⣾⢿⣻⣿⣽⣿⣿⣽⣿⠀⠀⠀⠀⠀⣠⢼⠗⣤⠀⠀⢀⢣⢳⡱
⠀⠀⠀⠀⠀⡴⠃⡨⠏⣡⣫⠔⠋⠁⠀⠀⠀⠀⢰⣿⣿⣿⣷⣿⣻⣽⡿⣯⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢞⠝⣜⣨⣿⣿⣽⣿⣿⣿⣾⡿⣟⣷⡿⣽⣿⡿⣿⠀⠀⠀⡴⠊⠱⢃⣞⠴⡷⣄⠀⢎⠲⣍
⠀⠀⠀⠀⡼⠑⣊⠤⢚⡥⣊⡀⠀⠀⠀⡀⠀⠀⢸⣿⣿⣿⡾⣟⣿⣽⣿⣻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⣎⠜⣫⡠⣿⣿⣽⣿⣷⣿⣿⢿⣟⣯⣿⡿⣿⣿⢿⡇⠀⠀⠀⢠⠴⠊⠁⠼⣵⡏⡳⣌⠳⣌
⠀⠀⠀⡼⠁⠀⢠⠔⢉⢴⠟⠀⣀⡴⠚⠁⠀⠀⣿⣿⣿⣷⡿⣿⣯⣿⢾⣟⣿⠀⠀⠀⠀⠀⠀⢀⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢠⠞⢁⢞⡕⢡⣿⣿⣽⣾⣿⣯⣿⣿⣿⣻⣷⣿⣿⡿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠀⠈⢷⡌
⠀⠀⣰⠃⠀⠀⠀⠀⠑⢃⡤⡞⠁⠀⠀⠀⠀⢸⣿⣿⣿⢷⣿⣟⣷⡿⣿⣻⣿⡀⠀⠀⠀⠀⢶⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣿⡇⢸⣿⡿⣾⣟⣿⣻⣽⣿⣷⣿⣻⣾⢿⣿⣟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻
⠀⢀⠃⠀⠀⠀⢀⡠⠖⣡⢞⠤⠀⠀⠀⠀⢀⣿⣿⣿⣿⣻⣽⣾⣟⣿⣟⣯⣿⣧⠀⠀⠀⠀⠈⢛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠃⠀⠀⠀⠀⠀⠀⠀⠈⠀⣾⣿⣟⣿⣽⣟⣿⣻⣿⣿⢾⡿⣽⣿⣿⡿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/
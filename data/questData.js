const theWall = {
    id: 'theWall',
    title: 'The White Walkers',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'white-walkers.png',
    audio: 'monsters.wav',
    action: 'monster-scream.wav',
    description: `
        You enter the wall, and you see so many white walkers. What do you do?
    `,
    choices: [{
        id: 'fight',
        description: 'Fight with them!!!',
        result: `
           You lost to the white walkers, go back to home and learn how to code!
        `,
        hp: -30,
        gold: 35
    }, {
        id: 'drink',
        description: 'Drink with white walkers',
        result: `
            Drink with them. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const westeros = {
    id: 'westeros',
    title: 'The Iron Throne',
    map: {
        top: '57%',
        left: '20%'
    },
    image: 'iron-throne.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
      You all a big iron thron with nobody searing on there, what do you do?
    `,
    choices: [{
        id: 'seat',
        description: 'seat on the iron throne',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const essos = {
    id: 'essos',
    title: 'The Dragon Land',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'dragon-baby.jpg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    theWall,
    westeros,
    essos
];

export default quests;

// function orang() {
//     let xp = 0
//     let hp = 70
//     let fightingStyle = 'Warrior'
//     let inventory = ['health potion', 'mana potion']
//     let profile = {
//         name: 'Mikaela',
//         race: 'Demon',
//         gender: true,
//     }

//     if (hp < 20) {
//         console.log(`hp too low, forced to use ${inventory[0]}`)
//     }
//     else {
//         console.log('you just get hit, watch you hp bar')
//     }


//     switch (profile.race) {
//         case ('Angel'):
//             console.log('You are born as an angle and expected to be a healer and protect people in danger')
//             break;
//         case ('Demon'):
//             console.log('You are born as a fire on earth and your desired to destroy and make anyone trumble to its path')
//             break;
//         case ('Goblin'):
//             console.log('You are born as a Goblin, you only desired to gain all the treasure on the planet')
//             break;

//         default:
//             console.log("race not decided");

//     }

//     switch (fightingStyle) {
//         case ('Warrior'):
//             console.log(`you have more defense than the other because you are warrior`)
//             break;
//         case ('Archer'):
//             console.log('you have less defense than the other class with exchange range and greater damage')
//             break;
//         case ('Shaolin'):
//             console.log('you have the most perfect defense than other class that exist')
//             break;

//         default:
//             console.log("you not have any fighting style");

//     }
// }

// orang()


angka = 100
for (let i = 1; i < angka; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
        console.log('fizzbuzz'); // Angka yang kelipatan 3 dan 2
    } else if (i % 3 === 0) {
        console.log('fizz'); // Angka yang kelipatan 3
    } else if (i % 2 === 0) {
        console.log('buzz'); // Angka yang kelipatan 2
    } else {
        console.log(i); // Angka lainnya
    }
}


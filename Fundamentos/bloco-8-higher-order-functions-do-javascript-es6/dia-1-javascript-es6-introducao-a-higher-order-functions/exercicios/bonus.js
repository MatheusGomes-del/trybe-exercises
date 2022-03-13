const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const damageDragon = (character) =>  {
   const damageDragon = Math.floor((Math.random() * (character.strength - 15 + 1) + 15))
   return damageDragon
}

const damageWarrior = (character) => {
    const damageWarrior = Math.floor((Math.random() * (60 - character.strength + 1)) + character.strength)
    return damageWarrior
}

const wasteMana = (character) => {
   const mana = character.mana
   const minDamage = character.intelligence
   const maxDamage = minDamage * 2
   let information = {mana: 0, cantAttack : 'Não possui mana o suficiente'}

   if(mana < 15){
       return information
   }else{
       damageMage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage)
       information.mana = 15
       information.cantAttack = damageMage
       return information
   }
}

//Second Part

const gameActions = {
    // Crie as HOFs neste objeto.
    turnWarrior: (callback) => {
       const damageWarrior = callback(warrior)
       warrior.damage = damageWarrior
       dragon.healthPoints -= damageWarrior
    },

    turnMage: (callback) => {
        const mageInformation = callback(mage)
        const damageMage = mageInformation.information
        mage.damage = damageMage
        mage.mana -= mageInformation.mana
        dragon.healthPoints -= damageMage
    },

    turnDragon: (callback) => {
        const damageDragon = callback(dragon)
        mage.healthPoints -= damageDragon
        warrior.healthPoints -= damageDragon
        dragon.damage = damageDragon
    },

    battle: () => battleMembers
};


gameActions.turnWarrior(damageWarrior)
gameActions.turnMage(wasteMana)
gameActions.turnDragon(damageDragon)
console.log(gameActions.battle())
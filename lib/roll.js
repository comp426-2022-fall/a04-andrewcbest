export default function roll(sides, dice, rolls){
    var outcomes = []
    for(let i =0; i < rolls; i ++){
        var sum = 0;
        for(let j = 0; j < dice; j ++){
            sum += 1 + Math.floor(Math.random() * sides)
        }
        outcomes[i] = sum;
    }

    var object = {
        sides: sides,
        dice: dice, 
        rolls: rolls, 
        results: outcomes
    }
    
    return object;
}


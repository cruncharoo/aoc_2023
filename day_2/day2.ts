const test_data = [
'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
]

function game_formatter(game: string) {
    const colon = game.indexOf(":")
    let game_data = game.slice(colon+2)
    let rounds: Array<string> = []
    let round
    while (game_data) {
        let semi_colon = game_data.indexOf(";")
        if (semi_colon != -1 ) {
            round = game_data.slice(0,semi_colon)
            rounds.push(round)
            game_data = game_data.slice(semi_colon+2)
        }
        else {
            rounds.push(game_data)
            game_data = ''
        }
    }
    let round_objects: Array<object>= []
    rounds.forEach(round => {
        let round_object = {}
        while (round.indexOf(",") != -1) {
            let dice = round.slice(0,round.indexOf(","))
            let number = dice.slice(0,dice.indexOf(" "))
            let color = dice.slice(dice.indexOf(" ")+1)
            round_object[color] = number
            round = round.slice(round.indexOf(",") + 2)
        }
        if (round.length > 0) {
            let dice = round
            let number = dice.slice(0,dice.indexOf(" "))
            let color = dice.slice(dice.indexOf(" ") + 1)
            round_object[color] = number
        }
        round_objects.push(round_object)
    })
    return round_objects
}

console.log(game_formatter(test_data[0]))
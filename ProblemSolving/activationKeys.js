function solve(arr) {
    let activationKey = arr.shift();

    let command = arr.shift().split('>>>');
    while (command[0] !== "Generate") {

        if (command[0] === 'Contains') {
            let substring = command[1];
            if (!activationKey.includes(substring)) {
                console.log(`Substring not found!`);
            } else {
                console.log(`${activationKey} contains ${substring}`);
            }
        } else if (command[0] === 'Flip') {
            let key = activationKey.split('');
            if (command[1] === 'Upper') {
                for (let i = Number(command[2]); i < Number(command[3]); i++) {
                    key[i] = key[i].toUpperCase();

                }
            } else {
                for (let i = Number(command[2]); i < Number(command[3]); i++) {
                    key[i] = key[i].toLowerCase();
                }
            }
            activationKey = key.join('');

        } else if (command[0] === 'Slice') {
            let startIndex = Number(command[1]);
            let count  = Number(command[2]) - Number(command[1]);
            let key = activationKey.split('');
            key.splice(startIndex, count);
            activationKey = key.join('');
        }
        command = arr.shift().split('>>>');
    }
   console.log(`Your activation key is: ${activationKey}`);
}

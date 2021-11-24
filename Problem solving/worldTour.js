function solve(arr) {
    let stopString = arr.shift();

    let command = arr.shift().split(':');

    while (command[0] !== "Travel") {
        if (command[0] === 'Add Stop') {
            if (command[1] >= 0 && command[1] < stopString.length) {
                addStop(stopString, command);
            }
        } else if (command[0] === 'Remove Stop') {
            if ((command[1] >= 0 && command[1] < stopString.length) && (command[2] >= 0 && command[2] < stopString.length)) {
                removeStop(stopString, command);
            }
        } else {
            while (stopString.includes(command[1])) {
                stopString = stopString.replace(command[1], command[2])
            }
        }
        console.log(stopString);
        command = arr.shift().split(':');
    }
    console.log(`Ready for world tour! Planned stops: ${stopString}`);

    function addStop(input, command) {
        stopString = stopString.split('');
        stopString.splice(Number(command[1]), 0, command[2]);
        stopString = stopString.join('');
        return stopString;

    }
    function removeStop(input, command) {
        stopString = stopString.split('');
        let startIndex = command[1];
        let deletCount = Math.abs(command[1] - command[2]);
        stopString.splice(startIndex, ++deletCount);
        stopString = stopString.join('');
        return stopString;
    }
}
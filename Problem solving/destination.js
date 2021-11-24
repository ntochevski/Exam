function solve(input) {
    let travelPoints = 0;
    let destinations = [];
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})(\1)/g;
    let destinationNames = pattern.exec(input);

    while (destinationNames !== null) {
        destinations.push(destinationNames.groups.destination);
        destinationNames = pattern.exec(input);
    }
    for (let element of destinations) {
        travelPoints += element.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

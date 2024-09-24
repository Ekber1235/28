const names = ['Michael', 'Trevor', 'Franklin', 'Lamar', 'Jimmy'];


function printWithDashes(name) {
    console.log(name);
    console.log('--------');
    console.log('--------');
}

function printWithHearts() {
    names.forEach(name => {
        console.log(`<3<3<3<3 ${name} <3<3<3<3`);})
}

function printWithIndex(name, index) {
    console.log(`${index} - ${name}`);
}


names.forEach(printWithDashes);

printWithHearts();

names.forEach(printWithIndex);

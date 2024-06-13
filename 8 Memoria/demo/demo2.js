var x = [];


grow = () => {
    x.push(new Array(100000000).join('x'));
    console.log("Created");
}

document.getElementById("demo2").addEventListener('click', grow);
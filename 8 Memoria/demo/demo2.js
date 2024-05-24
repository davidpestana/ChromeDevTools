var x = [];


grow = () => {
    x.push(new Array(1000000).join('x'));
    alert("Created");
}

document.getElementById("demo2").addEventListener('click', grow);
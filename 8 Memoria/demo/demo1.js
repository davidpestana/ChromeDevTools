
create = () => {
    var ul = document.createElement("ul");
    for(var i = 0; i < 1000; i++) {
        let li = document.createElement("li");
        ul.append(li);
        console.log(ul);
    }
    alert("Created");
}

document.getElementById("demo1").addEventListener('click', create);
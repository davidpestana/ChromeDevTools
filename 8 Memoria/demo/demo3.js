var x2 = [];

grow2 = () => {
    console.log("StartingTest");
    for(var i=0; i< 10000; i++){
        document.body.appendChild(document.createElement('div'));
    }
    x2.push(new Array(1000000).join('x'));
    doSomeThing1();
    doSomeThing2();
    doSomeThing3();
    console.log("Ending Test");
}


const doSomeThing1 = () => {
    console.log('do 1');
    for(var i=0; i< 100; i++){
        console.log('createElement');
        document.body.appendChild(document.createElement('div'));
    }
    x2.push(new Array(1000000).join('x'));
}
const doSomeThing2= () => {
    console.log('do 2');
    for(var i=0; i< 5000; i++){
        console.log('createElement');
        document.body.appendChild(document.createElement('div'));
    }
    x2.push(new Array(1000000).join('x'));
}
const doSomeThing3 = () => {
    console.log('do 3');
    for(var i=0; i< 50000; i++){
        console.log('createElement');
        document.body.appendChild(document.createElement('div'));
    }
    x2.push(new Array(1000000).join('x'));
}

        
document.getElementById("demo3").addEventListener('click', grow2);
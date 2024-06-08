function cores() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function tcorf () {
    document.getElementById('fundo').style.backgroundColor = cores();
}
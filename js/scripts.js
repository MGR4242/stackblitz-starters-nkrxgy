function createWave(word) {
    const container = document.getElementById('wave-container');
    container.innerHTML = word.split('').map((letter, index) => 
        `<span style="--i:${index + 1}">${letter}</span>`
    ).join('');
}

const container = document.getElementById('wave-container');
const word = container.getAttribute('data-word');
createWave(word);
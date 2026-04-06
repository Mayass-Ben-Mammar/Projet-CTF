const challenges = [
    { id: 1, cat: "REVERSE", title: "Strings Power", pts: 50, hash: "a88c43df0bd242b8931605fa184799bed6dcee6e0dc528f4744a23524b1aad34" },       // CTF{STRINGS_WIN}
    { id: 2, cat: "REVERSE", title: "Logique Hex", pts: 100, hash: "1a8dd6a35c20e389f02cbebe408142abddfc3ad2fb23effe8201a82071e61163" },        // CTF{0x484558}
    { id: 3, cat: "REVERSE", title: "Le Comparateur", pts: 150, hash: "e3a80002d62871ea366d6358794bbcb70fbc73ca70b878b850165cdd764b0dad" },     // CTF{XOR_IS_EASY}
    { id: 4, cat: "REVERSE", title: "Python Bytecode", pts: 200, hash: "b37e203b9ffd0f54827a8e83a525e5a6e5a5628039c64b3500c3d2357dd72f3a" },    // CTF{ESREVER}
    { id: 5, cat: "REVERSE", title: "Entrée Cachée", pts: 250, hash: "522424614116d4b5fe2a7b2d87c6ac3f51d2068272de5374f05174b4cc8e4ab7" },      // CTF{GDB_MASTER}
    { id: 6, cat: "PWN", title: "Overflow 101", pts: 50, hash: "5af110e84b19dc421150b67d95384d03835844884afb597ed4dcb70c0b5c4443" },            // CTF{BUF_0VERFL0W_BASIC}
    { id: 7, cat: "PWN", title: "Format String", pts: 100, hash: "2762c26de0796236fcc98a8534c2902e0467082ebcc6fa4da8df503a422bba09" },          // CTF{PRINTF_LEAK}
    { id: 8, cat: "PWN", title: "Integer Overflow", pts: 150, hash: "2bbdd9017d683139c283c6cdb8c14b46b7e6944a23ee952ddf092f58385063bb" },       // CTF{INT_OV3RFL0W}
    { id: 9, cat: "PWN", title: "Scripting / Pwn", pts: 200, hash: "5a5038a5ff213e938ca6e0b4bbcab8c7e871586f4b982a58fadf0319fbd1293c" },        // CTF{SCRIPTING_HACKS}
    { id: 10, cat: "PWN", title: "Ret2Win", pts: 250, hash: "9212f83fc28c3f86e74d059a3d7f43313fd889811828061a5732a9629e6f1bdc" },               // CTF{RET_2_WIN}
    { id: 11, cat: "OSINT", title: "GitHub Leak", pts: 100, hash: "f78a491a1561fe7057aa9ba5d0ee31241a7a662c096a938eecdaf938193a27fa" },         // CTF{GIT_NEVER_FORGETS}
    { id: 12, cat: "FORENSICS", title: "Magic Bytes", pts: 100, hash: "21989a7734c9ed3a4d9a3ca6f1967b97c16b414965caed00ee182ec793fc604e" },     // CTF{M4G1C_BYT3S_R3V34L}
    { id: 13, cat: "FORENSICS", title: "Trafic Suspect", pts: 150, hash: "25a132222f14ef560547ef7b330eb39b29bf6f6fb55f0a4c6098bcede0604c97" },  // CTF{NETWORK_SNIFFER_MODE}
    { id: 14, cat: "WEB", title: "Cookie Monster", pts: 100, hash: "21f89fd0c7a7333805013f73edd37fd49102f0827ccb98774a5309068db62e1e" },        // CTF{C00K1E_M0NST3R}
    { id: 15, cat: "WEB", title: "SQL Injection", pts: 200, hash: "9c3fa1cb58dc3dcae97e70f5aa7a699349c82debe4cb368576515f3bba372990" }          // CTF{SQL_1NJ3CT10N_M4ST3R}
];

let solved = JSON.parse(localStorage.getItem('ctf_solved')) || [];
let currentCategory = 'ALL';

function closeModal() {
    const checkbox = document.getElementById('accept-rules');
    const modal = document.getElementById('welcome-modal');

    if (checkbox.checked) {
        modal.style.display = 'none';
    } else {
        alert("Vous devez accepter les conditions pour entrer dans le système.");
    }
}

function filterCat(category, element) {
    currentCategory = category;

    // Mise à jour visuelle des tags dans la barre
    const tags = document.querySelectorAll('.tag');
    tags.forEach(t => t.classList.remove('active'));
    element.classList.add('active');

    render();
}

function render() {
    const list = document.getElementById('challengesList');
    list.innerHTML = '';
    let totalScore = 0;

    challenges.forEach(ch => {
        if (solved.includes(ch.id)) totalScore += ch.pts;
    });

    const filtered = currentCategory === 'ALL' 
        ? challenges 
        : challenges.filter(ch => ch.cat === currentCategory);

    filtered.forEach(ch => {
        const isSolved = solved.includes(ch.id);
        
        const fileName = `${ch.cat.toLowerCase()}_${ch.id}.zip`;

        list.innerHTML += `
            <div class="challenge ${isSolved ? 'solved' : ''}">
                <div class="challenge-header">
                    <h3><span class="badge">[${ch.cat}]</span> ${ch.title}</h3>
                    <a href="defis/${fileName}" class="download-btn" title="Télécharger les fichiers" download>
                        [DL]
                    </a>
                </div>
                <p style="color:#A0A0A0; font-size:0.9em; margin-bottom:5px;">Points: ${ch.pts}</p>
                ${isSolved ? '<span class="solved-text">✔ TERMINÉ</span>' : `
                    <div class="input-group">
                        <input type="text" id="input-${ch.id}" placeholder="Flag...">
                        <button onclick="checkFlag(${ch.id})">OK</button>
                    </div>
                `}
            </div>
        `;
    });

    document.getElementById('totalScore').innerText = totalScore;
    document.getElementById('solvedCount').innerText = solved.length;
}

async function checkFlag(id) {
    const inputField = document.getElementById(`input-${id}`);
    const input = inputField.value.trim();
    
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const ch = challenges.find(c => c.id === id);
    
    if (hashHex === ch.hash) {
        alert("Félicitations ! Flag correct.");
        if (!solved.includes(id)) {
            solved.push(id);
            localStorage.setItem('ctf_solved', JSON.stringify(solved));
        }
        render();
    } else {
        alert("Accès refusé : Flag invalide.");
        inputField.value = '';
    }
}

render();
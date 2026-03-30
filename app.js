/* 
   Passa ou Repassa Catarina - Engine Core (SAEB Edition)
*/

let gameState = {
    currentQuestionIndex: 0,
    questions: [],
    timer: 144, // 2:24 em segundos conforme imagem
    timerInterval: null,
    isPaused: false,
    groups: [
        { points: 0, members: { A: false, B: false, C: false, D: false } },
        { points: 0, members: { A: false, B: false, C: false, D: false } },
        { points: 0, members: { A: false, B: false, C: false, D: false } },
        { points: 0, members: { A: false, B: false, C: false, D: false } },
        { points: 0, members: { A: false, B: false, C: false, D: false } },
        { points: 0, members: { A: false, B: false, C: false, D: false } }
    ]
};

function startGame() {
    // Carregar e embaralhar questões
    gameState.questions = [...allQuestions].sort(() => Math.random() - 0.5);
    gameState.currentQuestionIndex = 0;
    
    document.getElementById('setupScreen').style.display = 'none';
    resetPoints();
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const q = gameState.questions[gameState.currentQuestionIndex];
    document.getElementById('questionInfo').textContent = `Questão ${gameState.currentQuestionIndex + 1} de ${gameState.questions.length}`;
    document.getElementById('questionText').textContent = q.question;
    renderOptions(q);
}

function renderOptions(q) {
    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = `opt-${i}`;
        btn.innerHTML = `${letters[i]}) ${opt}`;
        btn.onclick = () => selectOption(i);
        grid.appendChild(btn);
    });
}

function selectOption(index) {
    const q = gameState.questions[gameState.currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    
    btns.forEach((btn, i) => {
        btn.classList.remove('correct', 'wrong');
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index) {
            btn.classList.add('wrong');
        }
    });
    
    // Se o usuário clicou na opção correta, você pode querer adicionar lógica de pontos automática,
    // mas no layout do professor (imagem), os pontos parecem ser manuais.
}

function showAnswer() {
    const q = gameState.questions[gameState.currentQuestionIndex];
    const correctBtn = document.getElementById(`opt-${q.correct}`);
    if (correctBtn) correctBtn.classList.add('correct');
}

function toggleTimer() {
    gameState.isPaused = !gameState.isPaused;
    const btn = document.getElementById('pauseBtn');
    if (gameState.isPaused) {
        btn.innerHTML = '▶ Retomar Tempo';
        btn.classList.replace('btn-orange', 'btn-green');
    } else {
        btn.innerHTML = '⏸ Pausar Tempo';
        btn.classList.replace('btn-green', 'btn-orange');
    }
}

function startTimer() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isPaused && gameState.timer > 0) {
            gameState.timer--;
            updateTimerUI();
        } else if (gameState.timer === 0) {
            clearInterval(gameState.timerInterval);
            triggerPie();
        }
    }, 1000);
}

function updateTimerUI() {
    const m = Math.floor(gameState.timer / 60);
    const s = gameState.timer % 60;
    document.getElementById('timerText').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function nextQuestion() {
    if (gameState.currentQuestionIndex < gameState.questions.length - 1) {
        gameState.currentQuestionIndex++;
        loadQuestion();
        resetTimerShort();
    }
}

function prevQuestion() {
    if (gameState.currentQuestionIndex > 0) {
        gameState.currentQuestionIndex--;
        loadQuestion();
    }
}

function resetTimerShort() {
    gameState.timer = 144; // Volta para 2:24 ou o tempo padrão
    updateTimerUI();
}

function forceFinishAndShow() {
    gameState.timer = 0;
    updateTimerUI();
    showAnswer();
}

// Lógica de Grupos
function toggleMember(groupNum, memberID) {
    const group = gameState.groups[groupNum - 1];
    group.members[memberID] = !group.members[memberID];
    
    const btn = document.querySelector(`#group${groupNum} .member-btn:nth-child(${['A','B','C','D'].indexOf(memberID)+1})`);
    if (btn) {
        if (group.members[memberID]) {
            btn.classList.add('active');
            addPoints(groupNum, 1);
        } else {
            btn.classList.remove('active');
            addPoints(groupNum, -1);
        }
    }
}

function addPoints(groupNum, points) {
    gameState.groups[groupNum - 1].points += points;
    if (gameState.groups[groupNum - 1].points < 0) gameState.groups[groupNum - 1].points = 0;
    document.getElementById(`points${groupNum}`).textContent = gameState.groups[groupNum - 1].points;
}

function resetPoints() {
    gameState.groups.forEach((g, i) => {
        g.points = 0;
        document.getElementById(`points${i+1}`).textContent = '0';
        const btns = document.querySelectorAll(`#group${i+1} .member-btn`);
        btns.forEach(b => b.classList.remove('active'));
        Object.keys(g.members).forEach(m => g.members[m] = false);
    });
}

function triggerPie() {
    const overlay = document.getElementById('pieOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
}

function resetSimulado() {
    if (confirm("Deseja reiniciar o simulado?")) {
        gameState.timer = 144;
        gameState.isPaused = false;
        closeResults();
        startGame();
    }
}

function endSimulado() {
    clearInterval(gameState.timerInterval);
    gameState.isPaused = true;
    
    const resultsBody = document.getElementById('resultsBody');
    resultsBody.innerHTML = '';
    
    // Criar ranking
    const sortedGroups = gameState.groups
        .map((g, i) => ({ name: `Grupo ${i + 1}`, points: g.points }))
        .sort((a, b) => b.points - a.points);
        
    sortedGroups.forEach(group => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <span>${group.name}</span>
            <span class="result-points">${group.points} pts</span>
        `;
        resultsBody.appendChild(div);
    });
    
    document.getElementById('resultsModal').style.display = 'flex';
}

function closeResults() {
    document.getElementById('resultsModal').style.display = 'none';
}

function exportResults() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Grupo,Pontuacao\n";
    
    gameState.groups.forEach((g, i) => {
        csvContent += `Grupo ${i+1},${g.points}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "resultados_simulado_saeb.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* 
   Passa ou Repassa Catarina - Engine Core
*/

let gameState = {
    teams: [
        { name: "Time Azul", score: 0, color: '#007bff' },
        { name: "Time Amarelo", score: 0, color: '#ffc107' }
    ],
    currentTurn: 0, // 0 para Azul, 1 para Amarelo
    currentQuestionIndex: 0,
    passCount: 0, // 0: Normal, 1: Passou, 2: Repassou
    timeLeft: 60,
    timerMax: 60,
    timerInterval: null,
    isPaused: false,
    gameQuestions: []
};

// Síntese de Voz
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'pt-BR';
utterance.rate = 1.0;

function speak(text) {
    if (synth) {
        synth.cancel();
        utterance.text = text;
        // synth.speak(utterance); // Opcional, descomentar para ativar voz
    }
}

async function startGame() {
    await Tone.start();
    
    // Configurações Iniciais
    gameState.teams[0].name = document.getElementById('blueTeamName').value || "Time Azul";
    gameState.teams[1].name = document.getElementById('yellowTeamName').value || "Time Amarelo";
    gameState.timerMax = parseInt(document.getElementById('timerSetting').value);
    
    document.getElementById('displayBlueName').textContent = gameState.teams[0].name;
    document.getElementById('displayYellowName').textContent = gameState.teams[1].name;
    
    // Embaralhar Questões
    gameState.gameQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    
    document.getElementById('setupScreen').style.display = 'none';
    loadRound();
}

function loadRound() {
    if (gameState.currentQuestionIndex >= gameState.gameQuestions.length) {
        alert("Fim do jogo! Parabéns às equipes.");
        return;
    }

    gameState.passCount = 0;
    updateTurnUI();
    showQuestionBase();
    startTimer();
}

function updateTurnUI() {
    const blueIcon = document.getElementById('blueIcon');
    const yellowIcon = document.getElementById('yellowIcon');
    const badge = document.getElementById('turnBadge');
    
    blueIcon.classList.remove('active');
    yellowIcon.classList.remove('active');
    
    if (gameState.currentTurn === 0) {
        blueIcon.classList.add('active');
        badge.textContent = `Vez de: ${gameState.teams[0].name}`;
        badge.style.background = gameState.teams[0].color;
        badge.style.color = "#fff";
    } else {
        yellowIcon.classList.add('active');
        badge.textContent = `Vez de: ${gameState.teams[1].name}`;
        badge.style.background = gameState.teams[1].color;
        badge.style.color = "#000";
    }
}

function showQuestionBase() {
    const q = gameState.gameQuestions[gameState.currentQuestionIndex];
    document.getElementById('qNumber').textContent = `RODADA ${gameState.currentQuestionIndex + 1}`;
    document.getElementById('qCategory').textContent = q.category || "SAEB";
    document.getElementById('question').textContent = q.question;
    
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    
    // Resetar botões de ação
    const passBtn = document.getElementById('passBtn');
    passBtn.textContent = "PASSAR";
    passBtn.className = "action-btn pass";
    passBtn.style.display = 'block';
    
    document.getElementById('gameActions').style.display = 'flex';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
}

function handleAction(type) {
    if (type === 'respond') {
        clearInterval(gameState.timerInterval);
        document.getElementById('gameActions').style.display = 'none';
        showAnswerSelection();
    } else if (type === 'pass') {
        passQuestion();
    }
}

function passQuestion() {
    gameState.passCount++;
    gameState.currentTurn = 1 - gameState.currentTurn; // Alterna time
    updateTurnUI();
    
    const passBtn = document.getElementById('passBtn');
    
    if (gameState.passCount === 1) {
        passBtn.textContent = "REPASSAR";
        passBtn.classList.add('repass');
    } else if (gameState.passCount === 2) {
        passBtn.style.display = 'none'; // Não pode mais passar
    }
    
    // Reinicia o tempo para o novo time pensar
    clearInterval(gameState.timerInterval);
    startTimer();
}

function showAnswerSelection() {
    const q = gameState.gameQuestions[gameState.currentQuestionIndex];
    const grid = document.getElementById('options');
    grid.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65+i)}) ${opt}`;
        btn.onclick = () => checkAnswer(i);
        grid.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = gameState.gameQuestions[gameState.currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    
    btns.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index) btn.classList.add('incorrect');
    });

    const isCorrect = (index === q.correct);
    
    if (isCorrect) {
        gameState.teams[gameState.currentTurn].score += 10;
        document.getElementById(gameState.currentTurn === 0 ? 'blueScore' : 'yellowScore').textContent = gameState.teams[gameState.currentTurn].score;
    } else {
        // Se errou na pergunta repassada ou normal
        triggerPie();
    }

    showResultSummary(isCorrect);
}

function triggerPie() {
    const overlay = document.getElementById('pieOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
}

function showResultSummary(isCorrect) {
    const q = gameState.gameQuestions[gameState.currentQuestionIndex];
    const box = document.getElementById('resultBox');
    box.style.display = 'block';
    
    box.innerHTML = `
        <h3 style="color: ${isCorrect ? '#28a745' : '#dc3545'}">
            ${isCorrect ? '✅ ACERTOU!' : '❌ ERROU!'}
        </h3>
        <p><strong>Resposta Correta:</strong> ${q.options[q.correct]}</p>
        <div style="margin-top: 10px; font-size: 0.9em; opacity: 0.8">
            <strong>Porquê?</strong> ${q.resolution || ''}
        </div>
    `;
    
    document.getElementById('nextBtn').disabled = false;
}

function startTimer() {
    gameState.timeLeft = gameState.timerMax;
    updateTimerUI();
    
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isPaused) {
            gameState.timeLeft--;
            updateTimerUI();
            
            if (gameState.timeLeft <= 10) {
                document.getElementById('timerOrb').classList.add('warning');
            } else {
                document.getElementById('timerOrb').classList.remove('warning');
            }

            if (gameState.timeLeft <= 0) {
                clearInterval(gameState.timerInterval);
                handleTimeout();
            }
        }
    }, 1000);
}

function handleTimeout() {
    triggerPie();
    showAnswerSelection(); // Força mostrar as alternativas para o professor explicar
    checkAnswer(-1); // Errou por tempo
}

function updateTimerUI() {
    const m = Math.floor(gameState.timeLeft / 60);
    const s = gameState.timeLeft % 60;
    document.getElementById('timerText').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function nextRound() {
    gameState.currentQuestionIndex++;
    // O próximo time inicia a próxima rodada por padrão, ou quem ganhou? 
    // Vamos alternar o time inicial a cada rodada.
    gameState.currentTurn = (gameState.currentQuestionIndex) % 2;
    loadRound();
}

function togglePause() {
    gameState.isPaused = !gameState.isPaused;
}

function resetGame() {
    if (confirm("Deseja sair deste jogo?")) {
        location.reload();
    }
}

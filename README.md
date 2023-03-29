<div class="markdown prose w-full break-words dark:prose-invert dark">
    <h1>Aim Lab de Pobre - Mini Jogo de Pontaria</h1>
    <p>Este é um componente React que implementa um mini-jogo de pontaria chamado "Aim Lab de Pobre". Ele usa os hooks
        <code>useState</code>, <code>useEffect</code> e <code>useRef</code> para gerenciar o estado do jogo e a
        interação com o usuário.</p>
    <h2>Estados</h2>
    <p>O componente <code>App</code> começa definindo 6 estados:</p>
    <ul>
        <li><code>score</code>: mantém a pontuação atual do jogador</li>
        <li><code>timeLeft</code>: mantém o tempo restante do jogador</li>
        <li><code>targetPosition</code>: mantém a posição atual do alvo na tela</li>
        <li><code>isStarted</code>: indica se o jogo está em andamento ou não</li>
        <li><code>isFinished</code>: indica se o jogo terminou ou não</li>
        <li><code>timerIntervalRef</code>: é uma referência para o intervalo do temporizador que é criado mais tarde
        </li>
    </ul>
    <h2>Funções</h2>
    <p>O componente define três funções que manipulam os estados:</p>
    <ul>
        <li><code>startExercise()</code>: define os estados iniciais do jogo e começa um novo jogo</li>
        <li><code>stopExercise()</code>: para o temporizador e redefine o estado <code>isStarted</code> para false</li>
        <li><code>handleTargetClick()</code>: é chamada quando o jogador acerta o alvo. Ela atualiza a pontuação do
            jogador e redefine a posição do alvo.</li>
    </ul>
    <h2>useEffect</h2>
    <p>O componente também usa o <code>useEffect</code> hook para controlar o temporizador. Quando
        <code>isStarted</code> é <code>true</code> e <code>isFinished</code> é <code>false</code>, o
        <code>useEffect</code> cria um novo intervalo de tempo que decrementa o <code>timeLeft</code> a cada segundo.
        Quando o tempo chega a zero, o intervalo é cancelado, <code>isFinished</code> é definido como <code>true</code>
        e o tempo restante é definido como zero.</p>
    <h2>Interface do Usuário</h2>
    <p>O componente renderiza a interface do usuário com base nos estados atuais. Ele exibe:</p>
    <ul>
        <li>Um botão "Começar" se o jogo ainda não começou</li>
        <li>Uma contagem de pontos e tempo restante</li>
        <li>Um alvo que o jogador deve clicar para ganhar pontos</li>
        <li>Um botão "Parar" para interromper o jogo</li>
        <li>Um botão "Começar" para iniciar um novo jogo quando o jogo acabou</li>
    </ul>
    <h2>Licença</h2>
    <p>Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais informações.</p>
</div>
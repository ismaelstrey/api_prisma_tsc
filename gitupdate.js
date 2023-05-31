const { exec } = require('child_process');

// Função para verificar atualizações no Git
const checkGitUpdates = () => {
    exec('git fetch', (err, stdout) => {
        if (err) {
            console.error('Ocorreu um erro ao verificar as atualizações do Git:', err);
            return;
        }

        const output = stdout.trim();

        if (output === '') {
            console.log('Não há atualizações disponíveis.');
        } else {
            console.log('Há atualizações disponíveis. Execute "git pull" para atualizar o repositório.');
        }
    });
};

// Verificar atualizações a cada 1 minuto
setInterval(checkGitUpdates, 60000);
let game = {
    run() {
        let rightAnswerCount = 0;

        for (let item in questions) {
            let question = `${questions[item].question}\n`;
            for (let i = 0; i < questions[item].answers.length; i++) {
                question += `${questions[item].answers[i]}\n`
            }

            let answer = game.getAnswer(question);
            if (answer === 'X' || answer === null) {
                console.log(`Игра окончена. Количество правильных ответов: ${rightAnswerCount}`);
                return;
            }
            if (answer === questions[item].correctAnswer) {
                rightAnswerCount++;
            }
        };

        console.log(`Поздравляем, игра окончена! Количество правильных ответов: ${rightAnswerCount}\nЧтобы сыграть еще раз, введите game.run() и нажмите Enter.`);
    },

    getAnswer(question) {
        const availableAnswers = ['A', 'B', 'C', 'D', 'X'];
        while (true) {
            let answer = prompt(`${question}`);
            if (answer === null) {
                return null;
            }
            if (!availableAnswers.includes(answer)) {
                alert('Для выбора варианта ответа необходимо ввести A, B, C или D. Для выхода введите X.');
                continue;
            }
            return answer;
        }
    },

    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"!\nДля выбора варианта ответа необходимо ввести A, B, C или D. Для выхода введите X.');
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },

};

game.init();
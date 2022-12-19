let cycle = true;


while (cycle === true) {
    const answer = confirm('Привет, это небольшой сборник Великих цитат.\nНу что, поехали набираться мудрости?');
    if (answer === true) {
        const answer = confirm('Помни, если тебя съели у тебя есть два выхода…\nДальше?');
        if (answer === true) {
            const answer = confirm('Время не просто — оно просто время\nДальше?');
            if (answer === true) {
                const answer = confirm('Бесплатный сыр бывает только бесплатным.\nДальше?');
                if (answer === true) {
                    const answer = confirm('Запомните, а то забудете.\nДальше?');
                    if (answer === true) {
                        const answer = confirm('Лучше один раз упасть, чем сто раз упасть.\n На этом все, мы с тобой молодцы.');
                        if (answer === true) {
                            cycle = false
                        }
                    } else if (answer === false) {
                        alert('Ну как хочешь.');
                        cycle = false;
                    }
                } else if (answer === false) {
                    alert('Ну как хочешь');
                    cycle = false;
                }
            } else if (answer === false) {
                alert('Ну как хочешь');
                cycle = false;
            }
        } else if (answer === false) {
            alert('Ну как хочешь');
            cycle = false;
        }  
    } else if (answer === false) {
        alert('Ну как хочешь.') ;
        cycle = false;
    }
}

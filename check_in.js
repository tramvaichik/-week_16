            function register() {
                let nickname, catMail, humanName, humanPhone, homeAddress;

                nickname = document.getElementById('nickname').value;
                catMail = document.getElementById('catMail').value;
                humanName = document.getElementById('humanName').value;
                humanPhone = document.getElementById('humanPhone').value;
                homeAddress = document.getElementById('homeAddress').value;



                if (nickname == '') {
                    alert("Ты забыл написать свою кличку!");
                } else if (catMail == '') {
                    alert("Котик, ты забыл почту!");
                } else if (humanName == '') {
                    alert("Будь внимательнее, нет имени человека!");
                } else if (humanPhone == '') {
                    alert('A телефон?');
                } else if (isNaN(parseInt(humanPhone))) {
                    alert("В телефоне не должно быть букв!");
                } else if (homeAddress == '') {
                    alert('Соберись! Ты пропустил домашний адрес!');
                } else {
                    alert(`Привет, ${nickname}!`);
                }
            }
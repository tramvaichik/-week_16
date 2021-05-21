            function register() {
                let nickname, catMail, humanName, humanPhone, homeAddress;

                nickname = document.getElementById('nickname').value;
                catMail = document.getElementById('catMail').value;
                humanName = document.getElementById('humanName').value;
                humanPhone = document.getElementById('humanPhone').value;
                homeAddress = document.getElementById('homeAddress').value;

                humanPhone = parseInt(humanPhone);


                if (nickname == '' || catMail == '' || humanName == '' || humanPhone == '' || homeAddress == '') {
                    alert("Ты забыл заполнить какое-то поле!");
                } else if (isNaN(humanPhone)) {
                    alert("В телефоне не должно быть букв!");
                } else {
                    alert(`Привет, ${nickname}!`);
                }
            }
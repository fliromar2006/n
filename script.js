function calculateAgeInDays() {
    const ageInput = document.getElementById('age-input');
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age < 0) {
        document.getElementById('result').textContent = 'Invalid input. Please enter a valid age.';
        return;
    }
    
    const ageInDays = age * 365;
    document.getElementById('result').textContent = 'الكتوت كبر وبقالو ' + ageInDays+" يوم عايش";
}


function sayHappyBirthday() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;

    if (name.trim() === '') {
        document.getElementById('greeting').textContent = 'Please enter your name.';
    } else {
        document.getElementById('greeting').textContent = 'كل سنة وانتي طيبة يا ' + name + '!';
    }
}



function sayHappyBirthday() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;

    if (name.trim() === '') {
        document.getElementById('greeting').textContent = 'Please enter your name.';
    } else {
        document.getElementById('greeting').textContent = 'Happy birthday, ' + name + '!';
    }
}

function playSong() {
    const audio = document.getElementById('audio-element');
    audio.play();
}
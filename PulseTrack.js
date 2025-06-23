const form_select = document.querySelectorAll('.form-select');
const form_clear = document.querySelector('.form-clear');
const form_confirm = document.querySelector('.form-confirm');

const age = Array.from({length: 81}, (_, i) => i + 10);
const gender = ['Choose', 'Male', 'Female'];
const region = ['Choose', 'Urban', 'Rural'];
const smoke = ['Choose', 'I Do', 'I Do Not'];

CreateOptions(age, 0)
CreateOptions(gender, 1)
CreateOptions(region, 2)
CreateOptions(smoke, 3)

form_confirm.onclick = function() {
    alert('PulseX device is not available!');
    // let valid = true;
    // form_select.forEach(select => {
    //     if (select.value == 'Choose') {
    //         alert('Something is missing...');
    //         valid = false;
    //         return;
    //     }
    // });

    // if (!valid) return;
    // const userData = {
    //     age: parseInt(form_select[0].value),
    //     gender: form_select[1].value === 'Male' ? 1 : 0,
    //     region: form_select[2].value === 'Urban' ? 1 : 0,
    //     smoke: form_select[3].value === 'I Do' ? 1 : 0
    // };

    // SendToModel(userData);
}

form_clear.onclick = function() {
    form_select.forEach(select => {
        select.value = 'Choose';
    });
}

function SendToModel(userData) {
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Prediction result:', data);
        alert('Prediction: ' + data.prediction);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while contacting the model.');
    });
}

function CreateOptions(array, index) {
    array.forEach(element => {
        const option = document.createElement('option');
        option.text = element;
        option.value = element;
        form_select[index].appendChild(option);
    });
}
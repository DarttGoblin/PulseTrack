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
    alert('Error contacting PulseX device.');
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
    //     gender: form_select[1].value === 'Male' ? 1.0 : 0.0,
    //     region: form_select[2].value === 'Urban' ? 1.0 : 0.0,
    //     smoker: form_select[3].value === 'I Do' ? 1.0 : 0.0
    // };

    // console.log('Sending data to device:', userData);

    // SendToDevice(userData);
}

form_clear.onclick = function() {
    form_select.forEach(select => {
        select.value = 'Choose';
    });
}

function SendToDevice(userData) {
    fetch('http://192.168.43.149:5000/submit_metadata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data);
        alert('Device is now enabled with your data!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error contacting PulseX device.');
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
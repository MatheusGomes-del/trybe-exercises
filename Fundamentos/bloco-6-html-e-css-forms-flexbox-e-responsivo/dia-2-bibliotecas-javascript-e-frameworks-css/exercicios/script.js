import JustValidate from 'just-validate';

const validation = new JustValidate('#form');

validation
  .addField('#input-nome', [
    {
      rule: 'required',
      errorMessage : 'preencha esta campo'
    },
    {
      rule: 'maxLength', 
      value: 30,
    },
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

document.getElementById('myInputId').DatePickerX.init();

let buttonSubmit = document.querySelector('button')
function stopBehaviorButton(event){event.preventDefault()} 
buttonSubmit.addEventListener('click', stopBehaviorButton)



const form = document.querySelector('#appointment-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const time = formData.get('time');
  const message = formData.get('message');

  // do something with the form data (e.g. send it to a server, save it to localStorage, etc.)
  console.log({ name, email, phone, date, time, message });

  // reset the form
  form.reset();
});

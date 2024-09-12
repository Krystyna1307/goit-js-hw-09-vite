const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

// Завантаження даних із локального сховища
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Збереження даних до локального сховища при введенні
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});
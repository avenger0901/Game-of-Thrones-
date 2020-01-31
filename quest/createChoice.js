export function createChoice(choice) {
    const label = document.createElement('labal');
    label.classList.add('choice');
    const radio = document.createElement('input');
    label.appendChild(radio);
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = 'true';
    radio.id = choice.id;
    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);
    return label;
}

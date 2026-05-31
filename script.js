// 1. Создаем тестовые данные (Массив одной большой задачи)
const tasks = [
    {
        id: "task-1",
        title: "Купить продукты для пирога",
        subtasks: [
            { id: "sub-1", title: "Купить фарш", isCompleted: true },
            { id: "sub-2", title: "Найти ворчестерский соус", isCompleted: false }
        ]
    }
];

// 2. Находим наш контейнер в HTML
const appContainer = document.getElementById('app');
const subtaskInput = document.getElementById('subtask-input');
const addSubtaskBtn = document.getElementById('add-subtask-btn');

// 3. Пишем простую функцию, которая превратит массив в текст на экране
function renderApp() {
    let htmlContent = '';

    tasks.forEach(task => {
        // Добавляем заголовок большой задачи
        htmlContent += `<h2>Категория: ${task.title}</h2><ul>`;

        // Перебираем её подзадачи
        task.subtasks.forEach(subtask => {
            htmlContent += `<li>${subtask.title} (Сделано: ${subtask.isCompleted})</li>`;
        });

        htmlContent += `</ul>`;
    });

    // Вставляем сгенерированный HTML внутрь нашего div
    appContainer.innerHTML = htmlContent;
}

// 4. Запускаем функцию
renderApp();

addSubtaskBtn.addEventListener('click', () => {
    // 1. Получаем текст из инпута
    const text = subtaskInput.value;
    // 2. Проверяем, что юзер не жмет "Save" с пустым инпутом
    if (text.trim() === '') {
        alert('Сначала введи название подзадачи!');
        return; // Выходим из функции, если там пусто
    }

    // 3. А вот теперь инженерная магия: добавляем объект в наш массив
    tasks[0].subtasks.push({
        id: `sub-${Date.now()}`, // Генерируем уникальный id через текущее время
        title:text,
        isCompleted: false
    });

    // 4. Очищаем инпут, чтобы он снова был пустым после добавления
    subtaskInput.value = '';

    // 5. Перерисовываем приложение
    renderApp();
})
# Форма Авторизации

## Описание

Данная форма авторизации предназначена для использования в веб-приложениях, созданных с помощью Vite и React. Она написана на TypeScript и использует библиотеки Formik для управления формами и MobX для управления состоянием приложения.

## Технологии

- **Vite** — современный инструмент сборки для разработки frontend-приложений с высокой производительностью.
- **React** — библиотека для построения пользовательских интерфейсов.
- **TypeScript** — надстройка над JavaScript, добавляющая статическую типизацию.
- **Formik** — библиотека для управления состоянием форм и валидацией.
- **MobX** — библиотека для управления состоянием с помощью реактивного программирования.

## Запуск

Для запуска проекта необходимо установить зависимости с помощью команды

npm install

И запустить проект:

npm run dev

## Использование

Форма авторизации содержит следующие поля:

Email: Введите e-mail.
Пароль: Введите пароль.

После успешного ввода данных можно нажать на кнопку "Войти", после чего будет выполнен переход на главную страницу с приветствием и кнопкой "Выйти".

## Валидация
Formik автоматически обрабатывает валидацию на основе заданных правил. Формат ввода и ограничение ошибок будут отображаться пользователю.

## Хранение состояния
Состояние формы управляется с помощью MobX. При успешной авторизации состояние пользователя обновляется и сохраняется.


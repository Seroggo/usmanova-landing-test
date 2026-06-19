# Usmanova Landing Test

Demo mini landing page для тестового задания на вакансию «Вайбкодер / Сборщик лендингов и воронок на AI».

Публичная ссылка: https://usmanova-landing-test.vercel.app/

GitHub-репозиторий: https://github.com/Seroggo/usmanova-landing-test

## Что сделано

Повторены три ключевых экрана исходного фитнес-лендинга и собраны в рабочий mini funnel:

1. Первый экран с оффером.
2. Блок доверия, экспертности и социального доказательства.
3. Блок программ с CTA и формой заявки.

## Что работает

* Кнопка на первом экране ведёт к выбору программы.
* Карточки программ кликабельны.
* Выбранная программа подсвечивается.
* Выбранная программа передаётся в форму заявки.
* Select в форме синхронизируется с выбранной программой.
* Отправка формы не перезагружает страницу.
* Demo-заявки сохраняются в Google Sheets через Google Apps Script.

Для demo Google Sheets используется как простой lead-capture слой, чтобы можно было проверить путь заявки от формы до таблицы. В production этот слой можно заменить на CRM, email-уведомления, webhook, Supabase или backend заказчика.

## Стек

* Vite
* React
* CSS
* Google Apps Script
* Google Sheets
* GitHub
* Vercel

Tailwind CSS не используется.

## Локальный запуск

Установка зависимостей:

```bash
npm install
```

Запуск dev-сервера:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Локальный preview production-сборки:

```bash
npm run preview
```

## Деплой

Проект опубликован на Vercel из GitHub-репозитория.

Настройки Vercel:

* Framework Preset: Vite
* Build Command: npm run build
* Output Directory: dist

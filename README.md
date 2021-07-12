Готовые собранные файлы лежат в папке `docs`
### Разметка
[main.html](docs/main.html)  - главная страница
### Стили
[main.css](docs/main.css) - общий файл стилей (стили главной + других страниц)
### Скрипты:

- [header.js](docs/js/header.js) - меню в шапке
- [main.js](docs/js/main.js) - скрипты только для главной страницы
- [swiper](docs/js/swiper-bundle.min.js) - библиотека для слайдеров (только на главной)
### Ассеты
- [шрифты](docs/assets/font)
- [картинки](docs/assets/img)
- [видео](docs/assets/video)
- [svg-иконки - спрайт](docs/icons.svg)
- [лого](docs/assets/logo.png)  
  
Другие (`docs/assets/bckg`, `docs/bckg.svg`) на главной не используются.

## Список страниц
- [x] [Диагностика](docs/diagnostics.html)
- [ ] Диагностика детальная
- [x] [Вопросы и ответы](docs/faq.html)
- [x] [Документы](docs/docs.html)
- [x] [Лицензии](docs/licences.html)
- [x] [Новости список](docs/news.html)
- [x] [Новость детальная](docs/news.detail.html)
- [x] [Контакты](docs/contacts.html)
- [x] [Вакансии](docs/vacancy.html)
- [ ] [Общая информация](docs/about.html)
- [ ] [Направления лечения](docs/treatment.html)
- [ ] [Направления лечения детальная](docs/treatment.detail.html)
- [ ] [Доктор детальная](docs/doctor.html)
- [ ] [Расписание врачей](docs/schedule.html)
- [ ] [Прайс-лист](docs/price-list.html)
- [ ] Акции
- [ ] Акция детально
- [ ] Услуги
## Ассеты
добавился [contact_icons.svg](docs/contact_icons.svg) - спрайт для иконок в контактах
## Стили
обновить main.css

## Примечание
На [главной странице](docs/main.html) и [странице диагностики](docs/diagnostics.html) необходимо изменить способ вставки `svg`:
- файл изображения будет загружаться через админку и должен встраиваться в блок `.branch__img` с помощью `include()` (результат - инлайновый `svg` в `html`-коде)
### На очереди
формы, страницы личного кабинета
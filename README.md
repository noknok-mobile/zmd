Готовые собранные файлы лежат в папке `docs`
## Стили
[main.css](docs/main.css) - общий файл стилей (стили главной + других страниц)
## JS
- [main.js](docs/js/main.js) - скрипты только для главной страницы
- [swiper.js](docs/js/swiper-bundle.min.js) - слайдер, только для главной
- [order.js](/docs/js/order.js) - скрипты, обеспечивающие функционал формы заказа - подстановка даты в форму из календаря. Только для страниц, где есть календарь (расписание и страница доктора)
- [fslightbox.js](docs/js/fslightbox.js) - лайтбокс в галерее. Только для страниц about.html, licences.html, services.html (где есть галерея или лицензии)
- остальные скрипты подключаются для всех страниц
## Ассеты
- [шрифты](docs/assets/font)
- [картинки](docs/assets/img)
- [видео](docs/assets/video)
- [svg-иконки - спрайт](docs/icons.svg)
- [лого](docs/assets/logo.png)  
- [спрайт для иконок в контактах](docs/contact_icons.svg)
- [фоны для шапки *страницы*](docs/assets/bckg/)
## Изменения 
Была незначительно обновлена верстка шапки и главной страницы.    Сравнить детально - по ссылке на [`github`](https://github.com/ulngollm/zmd/compare/f9a83da06ca17a83c3df3803502eee29e9e6ee4b..0c454ea5fe6ad9e79a4185b74d99be447f38fffb#diff-d5e52f6f7a55279e438386c7d9fbfa0893fb7155b665e5ccf8e83eead29ab33b) (тыкнуть load diff и развернуть сравнение `main.html`, по умолчанию свернуто) или `git diff 0c454ea5fe6ad9e79a4185b74d99be447f38fffb 8a507507a0525db6a092684ae07135ffb4e0eb00 docs/main.html`
### Изменения в шаблоне:
- добавлены атрибуты и классы в шапке для работы модальных окон
- заменен и перемещен класс для открытия мобильного меню
- удален скрипт `header.js` (теперь он входит в состав `app.js`)
- добавлены модальные окна  
 
### Изменения на главной странице:
- добавлен скрытый заголовок h1 и содержимое обернуто в `main`
- упрощена верстка карусели из направлений диагностики
- встраивание svg инлайном (см *примечание* далее )
- `xlink:href` в svg сокращен до `href`
## Примечание
1. На [главной странице](docs/main.html) и [странице диагностики](docs/diagnostics.html) необходимо изменить способ вставки `svg`:
- файл изображения будет загружаться через админку и код изображения должен встраиваться в блок `.branch__img` через `include()` 
```html
 <div class="branch tile branch_tile">
    <div class="branch__img">
        <?php include('image.svg');?>
    </div>
    <a class="branch__name" href="#">Хирургический стационар</a>
</div>
```
результат - инлайновый `svg` в `html`-коде
```html
 <div class="branch tile branch_tile">
    <div class="branch__img">
        <svg width="82" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.303 1H1v63.53h67.303V1z" stroke="#852D2E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.606 16.168l3.702 6.203L17.563 7.13l4.755 12.6 4.685-7.367 3.35 3.805h7.005l4.615 4.773 6.02-7.754 5.365 4.87 1.897-1.89h4.498M7.606 33.88l3.702 6.202 6.255-15.24 4.755 12.6 4.685-7.367 3.35 3.805h7.005l4.615 4.797 6.02-7.778 5.365 4.87 1.897-1.89h4.498M7.606 51.617l3.702 6.178 6.255-15.216 4.755 12.6 4.685-7.39 3.35 3.828h7.005l4.615 4.773 6.02-7.753 5.365 4.846 1.897-1.866h4.498" stroke="#852D2E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M73.48 44.613c-4.146 0-7.52 6.93-7.52 6.93-.257-.267-3.373-6.93-7.52-6.93-4.146 0-7.52 3.102-7.52 6.93 0 6.93 4.569 12.503 15.04 19.457C76.338 64.433 81 58.497 81 51.543c0-3.828-3.373-6.93-7.52-6.93z" fill="#F4F4F4" stroke="#852D2E" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>
    </div>
    <a class="branch__name" href="#">Хирургический стационар</a>
</div>
```
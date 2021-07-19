Готовые собранные файлы лежат в папке `docs`
### Стили
[main.css](docs/main.css) - общий файл стилей (стили главной + других страниц)
### Ассеты
- [шрифты](docs/assets/font)
- [картинки](docs/assets/img)
- [видео](docs/assets/video)
- [svg-иконки - спрайт](docs/icons.svg)
- [лого](docs/assets/logo.png)  
- [спрайт для иконок в контактах](docs/contact_icons.svg)
- [фоны для шапки *страницы*](docs/assets/bckg/)
## Примечание
На [главной странице](docs/main.html) и [странице диагностики](docs/diagnostics.html) необходимо изменить способ вставки `svg`:
- файл изображения будет загружаться через админку и должен встраиваться в блок `.branch__img` с помощью `include()` (результат - инлайновый `svg` в `html`-коде)
```html
 <div class="branch tile branch_tile">
    <div class="branch__img">
        <?php include('image.svg');?>
    </div>
    <a class="branch__name" href="#">Хирургический стационар</a>
</div>

```

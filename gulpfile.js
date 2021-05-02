const {
    dest,
    src,
    series,
    parallel,
    watch
} = require('gulp');
const pug = require('gulp-pug');
const browserSync = require("browser-sync").create();
const sass = require('gulp-dart-sass');
const bulkSass = require('gulp-sass-bulk-import');
const svgSprite = require('gulp-svg-sprite');

function compileHtml() {
    return src('src/pages/*.pug')
        .pipe(pug({
            pretty: true,
            basedir: '/home/ully/Документы/dev/zimamed/src/'
        }))
        .pipe(dest('build/'));
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
    watch("build/").on('change', browserSync.reload);
}

function styles() {
    return src('src/sass/main.scss')
        .pipe(bulkSass())
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(dest('build/'));
}

function watcher() {
    watch('src/**/*.pug', compileHtml);
    watch('src/**/*.scss', styles);
}

function svg() {
    return src('assets/bckg/*.svg')
        .pipe(svgSprite({
            svg: { // General options for created SVG files
                xmlDeclaration: false, // Add XML declaration to SVG sprite
                doctypeDeclaration: false, // Add DOCTYPE declaration to SVG sprite
                namespaceIDs: false, // Add namespace token to all IDs in SVG shapes
                namespaceIDPrefix: '', // Add a prefix to the automatically generated namespaceIDs
                namespaceClassnames: false, // Add namespace token to all CSS class names in SVG shapes
                dimensionAttributes: true // Width and height attributes on the sprite
            },
            mode: {
                stack: {
                    dest: './',
                    sprite: 'bckg.svg'
                }
            },
        }))
        .pipe(dest('build/'));
}
function fonts(){
    return src('assets/font/*.ttf')
    .pipe(dest('build/font/'))
}
exports.server = parallel(server, watcher);
exports.build = parallel(compileHtml, styles, fonts);
exports.styles = series(styles);
exports.svg = series(svg);
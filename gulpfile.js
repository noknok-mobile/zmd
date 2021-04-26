const {dest, src, series, parallel, watch} = require('gulp');
const pug = require('gulp-pug');
const browserSync = require("browser-sync").create();
const sass = require('gulp-dart-sass');
const concat = require('gulp-concat');
// sass.compiler = require('node-sass');
const bulkSass = require('gulp-sass-bulk-import');

function compileHtml(){
    return src('src/pages/*.pug')
    .pipe(pug({
        pretty: true,
        basedir: '/home/ully/Документы/dev/zimamed/src/'
      }))
    .pipe(dest('build/'));
}
function server(){
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
    watch("build/").on('change', browserSync.reload);
}
function styles(){
    return src('src/sass/main.scss')
    .pipe(bulkSass())
    .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
    // .pipe(concat('main.css'))
    .pipe(dest('build/'));
}

function watcher(){
    watch('src/**/*.pug', compileHtml);
    watch('src/**/*.scss',styles);
}
exports.server = parallel(server, watcher);
exports.build = parallel(compileHtml, styles);
exports.styles = series(styles);
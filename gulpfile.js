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
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const mergeQueries = require('postcss-merge-queries');

const svgSprite = require('gulp-svg-sprite');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const devip = require('dev-ip');

function compileHtml() {
    return src('src/pages/*.pug')
        .pipe(pug({
            pretty: true,
            basedir: './src/'

        }))
        .pipe(dest('docs/'));
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./docs/",
            ghostMode: false
        },
        // host: devip()
    });
    watch("docs/").on('change', browserSync.reload);
}

function assets() {
    return src('assets/*')
        .pipe(dest('docs/assets/'));
}

function fonts() {
    return src('assets/font/*')
        .pipe(dest('docs/fonts/'));
}

function styles() {
    const plugins = [
        mergeQueries(),
        autoprefixer()
    ];
    return src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(bulkSass())
        .pipe(sass({
            outputStyle: "expanded",
            // outputStyle: "compressed",
            allowEmpty: true
        }).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('docs/'));
}

function scripts(){
    return src('src/**/*.js')
    .pipe(concat('script.js'))
    // .pipe(sourcemaps.init())
    // .pipe(terser())
    // .pipe(sourcemaps.write('../'))
    .pipe(dest('docs/js'));
}

function watcher() {
    watch(['src/**/*.pug','src/**/*.js'], compileHtml);
    watch('src/**/*.scss', styles);
    watch('src/**/*.js', scripts);
    
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
        .pipe(dest('docs/'));
}
exports.server = parallel(server, watcher);

exports.build = parallel(compileHtml, styles, assets, fonts, scripts);
exports.styles = series(styles);
exports.svg = series(svg);
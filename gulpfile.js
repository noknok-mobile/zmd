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
    return src('src/pages/**/*.pug')
        .pipe(pug({
            pretty: true,
            basedir: './src/'

        }))
        .pipe(dest('build/'));
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./build/",
            ghostMode: false
        },
        // host: devip()
    });
    watch("build/").on('change', browserSync.reload);
}

function assets() {
    return src('assets/**/*')
        .pipe(dest('build/assets/'));
}

function fonts() {
    return src('assets/font/*')
        .pipe(dest('build/fonts/'));
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
        .pipe(dest('build/'));
}

function scripts(){
    return src('src/js/*.js')
    // .pipe(concat('script.js'))
    // .pipe(sourcemaps.init())
    // .pipe(terser())
    // .pipe(sourcemaps.write('../'))
    .pipe(dest('build/js'));
}

function watcher() {
    watch(['src/**/*.pug','src/**/*.js'], compileHtml);
    watch('src/**/*.scss', styles);
    watch('src/**/*.js', scripts);
    
}

//https://github.com/svg-sprite/svg-sprite/blob/master/docs/configuration.md
// https://github.com/svg/svgo#built-in-plugins
function bckg() {
    return src('assets/bckg/*.svg')
        .pipe(svgSprite({
            shape:{

            },
            svg: { 
                xmlDeclaration: false,
                doctypeDeclaration: false, 
                namespaceIDs: true, 
                namespaceIDPrefix: '', 
                namespaceClassnames: false,
                dimensionAttributes: false,
                rootAttributes: false
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

function icons() {
    return src('assets/icon/*.svg')
        .pipe(svgSprite({
            svg: { 
                xmlDeclaration: false,
                doctypeDeclaration: false,
                namespaceIDs: false, 
                namespaceIDPrefix: '', 
                namespaceClassnames: false, 
                dimensionAttributes: true
            },
            mode: {
                symbol: {
                    dest: './',
                    sprite: 'icons.svg'
                }
            },
        }))
        .pipe(dest('build/'));
}
function contactIcons() {
    return src('assets/icon/transport/*.svg')
        .pipe(svgSprite({
            svg: { 
                xmlDeclaration: false,
                doctypeDeclaration: false,
                namespaceIDs: false, 
                namespaceIDPrefix: '', 
                namespaceClassnames: false, 
                dimensionAttributes: true
            },
            mode: {
                symbol: {
                    dest: './',
                    sprite: 'contact_icons.svg'
                }
            },
        }))
        .pipe(dest('build/'));
}

exports.server = parallel(server, watcher);
exports.build = parallel(compileHtml, styles, assets, fonts, scripts, bckg, icons, contactIcons);
exports.styles = series(styles);
exports.svg = parallel(bckg, icons, contactIcons);
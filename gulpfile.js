import gulp from "gulp";
import browserSync from "browser-sync";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import uglif from "gulp-uglify-es";
const uglify = uglif.default;
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import imagemin from "gulp-imagemin";
import htmlmin from "gulp-htmlmin";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    // gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('minjs'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('minjs', function () {
    return gulp.src([ // Берем файлы из источников
    // 'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
    // 'src/js/jquery.maskedinput.min.js',
    // 'src/js/jquery.validate.min.js',
    // 'src/js/slick.min.js',
    "src/js/script.js", // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
    ])
	.pipe(concat('script.min.js')) // Конкатенируем в один файл
	.pipe(uglify()) // Сжимаем JavaScript
	.pipe(gulp.dest('dist/js/')) // Выгружаем готовый файл в папку назначения
	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'minjs', 'fonts', 'icons', 'html', 'images'));
// убрал 'scripts' вместо него minjs
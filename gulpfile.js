const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();  // Подключаем BrowserSync

// Компиляция SCSS в CSS
gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')  // Путь к файлам SCSS
        .pipe(sass().on('error', sass.logError))  // Компиляция SCSS
        .pipe(gulp.dest('assets/css'))  // Папка для скомпилированного CSS
        .pipe(browserSync.stream());  // Автоматическая перезагрузка CSS
});

// Запуск BrowserSync и отслеживание файлов
gulp.task('serve', function () {
    // Инициализация BrowserSync
    browserSync.init({
        server: {
            baseDir: './'  // Указываем корневую папку проекта
        }
    });

    // Следим за изменениями в файлах SCSS и HTML
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));  // Следим за SCSS
    gulp.watch('*.html').on('change', browserSync.reload);  // Следим за HTML файлами и перезагружаем браузер
});

// Команда по умолчанию
gulp.task('default', gulp.series('sass', 'serve'));  // Сначала компилируем SCSS, затем запускаем сервер

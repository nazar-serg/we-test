const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Компиляция SCSS в CSS
gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', function () {
    
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'serve'));

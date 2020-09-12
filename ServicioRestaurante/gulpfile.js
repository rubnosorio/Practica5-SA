var gulp = require('gulp');//import gulp
var zip = require('gulp-zip');//import gulp-zip
 

/**
 * Creacion de ZIP de proyecto
 */
gulp.task('EmpaquetarRestaurante', function() {
  return gulp.src('src/*')// carpeta de la cual se extraera el codigo
    .pipe(zip('Servicio_Restaurante.zip'))// nombre del zip
    .pipe(gulp.dest('dist'));//ubicacion del zip
});

gulp.task('default', ['EmpaquetarRestaurante'])
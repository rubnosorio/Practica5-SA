var gulp = require('gulp');//import gulp
var zip = require('gulp-zip');//import gulp-zip
var fs = require('fs');//Escritura en el sistema de archivos

/**
 * Creacion de ZIP de proyecto
 */
gulp.task('EmpaquetarESB', function () {
  return gulp.src('src/*')//carpeta de la cual se extraera el codigo
    .pipe(zip('ESB.zip'))// nombre del zip
    .pipe(gulp.dest('dist'));//ubicacion del zip
});

gulp.task('html', function (cb) {
  let texto = '<p>201403624 - Fernando Hernandez</p><br><a download="esb.zip" href="esb.zip">Enlace para descargar el build recien construido</a>';
  fs.writeFile('dist/index.html', texto, cb);//html utilizado para deploy
});

/**
 * Creacion de ZIP de todos los servicios
 */
gulp.task('EmpaquetarTodo', function () {//FUNCION UTILIZADA PARA EMPAQUETAR TODO LOS SERVICIOS EN UN ZIP 
  return gulp.src('../*/src/*')//carpeta de la cual se extraera el codigo
    .pipe(zip('Servicios.zip'))// nombre del zip
    .pipe(gulp.dest('dist'));//ubicacion del zip
});
gulp.task('htmlall', function (cb) {
  let texto = '<p>201403624 - Fernando Hernandez</p><br><a download="Servicios.zip" href="Servicios.zip">Enlace para descargar el build recien construido</a>';
  fs.writeFile('dist/index.html', texto, cb);//html utilizado para deploy de todos los servicios
});

gulp.task('default', gulp.series('EmpaquetarESB', 'html'))//sustituir la funcion default por una lista de funciones
gulp.task('defaultempaquetar', gulp.series('EmpaquetarTodo', 'htmlall'))//sustituir la funcion default por una lista de funciones

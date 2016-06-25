var gulp = require('gulp');
var babel = require('gulp-babel')

gulp.task('es2015', () => {

	gulp.src('./components/**/*.jsx').pipe(babel({presets : ['es2015', 'react']}))


}) 


gulp.task('default', () => {


	gulp.watch('./components/**/*.jsx',  ['es2015'])


});

var gulp = require("gulp");
var pug = require("gulp-pug");

// Compile pug files into HTML
function html() {
  return gulp.src("views/*.pug").pipe(pug()).pipe(gulp.dest("dist"));
}

// Copy assets
function assets() {
  return gulp.src("assets/**/*").pipe(gulp.dest("dist/"));
}

gulp.task("default", gulp.series(html, assets,));

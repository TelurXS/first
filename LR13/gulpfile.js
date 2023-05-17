import gulp from "gulp";
import concat from "gulp-concat";
import rename from "gulp-rename";
import { deleteAsync } from "del"
import uglify from "gulp-uglify";
import cleanCss from "gulp-clean-css";
import imagemin from "gulp-imagemin";

import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass);

gulp.task("compile-scss", () => {
    return gulp.src("./app/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"));
})

gulp.task("concat", () => {
    return gulp.src("./dist/css/**/*.css")
        .pipe(concat("style.css"))
        .pipe(gulp.dest("./dist/css/"))
})

gulp.task("clean", async () => {
    await deleteAsync(["./dist/css/*", "./dist/js/*"]);
})

gulp.task("rename", () => {
    return gulp.src("./app/js/main.js")
        .pipe(rename("script.js"))
        .pipe(gulp.dest("./dist/js/"))
})

gulp.task("uglify", () => {
    return gulp.src("./app/js/*")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"))
})

gulp.task("clean-css", () => {
    return gulp.src("./dist/css/*")
        .pipe(cleanCss({ level: 2 }))
        .pipe(gulp.dest("./dist/css/"))
})

gulp.task("imagemin", () => {
    return gulp.src("./app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img/"))
})

gulp.task("transfer-html", () => {
    return gulp.src("./app/*.html")
        .pipe(gulp.dest("./dist/"))
})

gulp.task("watch", () => {
    gulp.watch("./app/sass/*.scss", gulp.series("compile-scss", "clean-css"));
    gulp.watch("./app/*.html", gulp.series("transfer-html"));
})

gulp.task("compile", gulp.series("compile-scss", "clean-css", "uglify", "imagemin", "transfer-html"))
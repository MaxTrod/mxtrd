import gulpif from 'gulp-if';
import imagemin, { gifsicle, mozjpeg, optipng} from 'gulp-imagemin';
// import newer from "gulp-newer";
import changed from "gulp-changed";

export const images = () => {
  return app.gulp.src([`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`], { encoding: false })
    .pipe(changed(app.paths.buildImgFolder))
    // .pipe(newer(app.paths.buildImgFolder))
    .pipe(gulpif(app.isProd, imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 85, progressive: true }),
      optipng({ optimizationLevel: 5 }),
    ])))
    .pipe(app.gulp.dest(app.paths.buildImgFolder))
};

















// import gulpif from 'gulp-if';
// import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
// import newer from "gulp-newer";
// import changed from "gulp-changed";

// export const images = () => {
//   return app.gulp.src([`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`], { encoding: false })
//     .pipe(changed(app.paths.buildImgFolder))
//     // .pipe(newer(app.paths.buildImgFolder))
//     .pipe(gulpif(app.isProd, imagemin([
//       gifsicle({ interlaced: true }),
//       mozjpeg({ quality: 75, progressive: true }),
//       optipng({ optimizationLevel: 2 }),
//     ])))
//     .pipe(app.gulp.dest(app.paths.buildImgFolder))
// };

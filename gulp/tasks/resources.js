import changed from "gulp-changed";

export const resources = () => {
  return app.gulp.src(`${app.paths.resourcesFolder}/**`, { encoding: false })
    .pipe(changed(app.paths.base.build))
    .pipe(app.gulp.dest(app.paths.base.build))
}

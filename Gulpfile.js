var gulp = require("gulp"),
  styleguide = require("sc5-styleguide"),

  outputPath = 'src/public/styleguide';

gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
        title: "Varya.me Styleguide",
        rootPath: outputPath,
        appRoot: '/styleguide',
        overviewPath: "src/styleguide/overview.md"
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('desktop.bundles/index/index.min.css')
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task("styleguide-watch", ["styleguide"], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["desktop.blocks/**/*.css"], ["styleguide"]);
});

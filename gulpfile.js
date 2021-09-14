const gulp = require('gulp')
const run = require('gulp-run')

gulp.task('build', (cb) => {
	run('yarn build:client').exec('', () => {
		run('yarn build:server').exec('', () => {
			cb()
		})
	})
})

gulp.task('dist', (cb) => {
	gulp.src('packages/dashboard/build').pipe(gulp.dest('packages/ion/'))
	cb()
})

exports.default = ['dist']

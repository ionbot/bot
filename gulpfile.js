const gulp = require('gulp')
const run = require('gulp-run')

function buildClient(cb) {
	run('yarn build:client').exec('', () => {
		cb()
	})
}

function buildServer(cb) {
	run('yarn build:server').exec('', () => {
		cb()
	})
}

function build(cb) {
	gulp.parallel(buildClient, buildServer)
	cb()
}

function dist(cb) {
	gulp.src('packages/dashboard/build').pipe(gulp.dest('packages/ion/'))
	cb()
}

exports.default = gulp.series(build, dist)

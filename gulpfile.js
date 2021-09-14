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

function dist(cb) {
	gulp
		.src('packages/dashboard/build/**')
		.pipe(gulp.dest('packages/ion/dist/ion-client'))
	cb()
}

exports.default = gulp.series(buildClient, buildServer, dist)
exports.dist = dist

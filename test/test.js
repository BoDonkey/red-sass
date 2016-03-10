/*global describe, it*/
'use strict';

var fs = require('fs'),
	glob = require('glob'),
	path = require('path'),
	assert = require('assert'),
	sass = require('node-sass');

function error(done, message) {
	assert(false, message);
	done();
}

function lines(src) {
	return src.split('\n').map(function (line) {
		return line.trim();
	}).filter(function (line) {
		return !!line;
	}).join('\n');
}

function success(name, done, src) {
	fs.readFile(path.join(__dirname, 'expected', name), 'utf8', function (err, expected) {
		if (err) {
			error(done, err);
		} else {
			assert.equal(typeof src, 'string');
			assert.equal(typeof expected, 'string');
			assert.equal(lines(src), lines(expected));
			done();
		}
	});
}

function test(name, done) {
	sass.render({
		file: path.join(__dirname, 'fixtures', name),
		includePaths: [path.join(__dirname, '../..')],
		outputStyle: 'nested'
	}, function (err, result) {
		if (err) {
			return error(done, err);
		}
		var src = result.css.toString();
		success(name, done, src);
	});
}

describe('red-sass', function () {
	glob.sync('./test/fixtures/*.scss').forEach(function (file) {
		var name = path.basename(file);
		it(name + ' should match expected output', test.bind(null, name));
	});
});

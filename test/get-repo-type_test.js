/*global describe, afterEach, it */
'use strict';

var get_repo_type = require('../lib/get-repo-type.js')
  , expect = require('chai').expect
  , exec = require('child_process').exec
  , join = require('path').join;

/*
 * http://chaijs.com/api/bdd/
 */

describe('get-repo-type', function() {
  var origDir = process.cwd();

  afterEach(function() {
    process.chdir(origDir);
  });

  it('should recognize git repos', function(done) {
    var gitDir = join(__dirname, 'fixtures/git-dir');
    process.chdir(gitDir);
    get_repo_type(function(err, type) {
      expect(type).to.equal('git');
      done();
    });
  });

  it('should recognized svn repos', function(done) {
    var svnDir = join(__dirname, '/fixtures/svn-dir');
    process.chdir(svnDir);
    get_repo_type(function(err, type) {
      expect(type).to.equal('svn');
      done();
    });
  });

});



# Enclose.IO

Cloud-based service that compiles your application into a single executable with auto-update.

http://enclose.io

[![Build Status](https://travis-ci.org/pmq20/enclose-io.svg?branch=master)](https://travis-ci.org/pmq20/enclose-io)

## Intended Use

Enclose.IO is offered as a web service. The ultimate goal is that users can register their projects into Enclose.IO, and Enclose.IO will produce stand-alone executables automatically with auto-update enabled.

After an executable has been distributed, it communicates with the Enclose.IO server to keep itself up to date. When a new version is detected, it downloads the new version from Enclose.IO and replaces itself with it.

See http://enclose.io/coffee-script for a working example.

## See Also

- [Node.js Compiler](https://github.com/pmq20/node-compiler): Ahead-of-time (AOT) Compiler designed for Node.js.
- [Ruby Compiler](https://github.com/pmq20/ruby-compiler): Ahead-of-time (AOT) Compiler designed for Ruby.

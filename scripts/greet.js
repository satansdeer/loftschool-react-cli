#!/usr/bin/env node
"use strict";
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");
const meow = require("meow");
const shell = require("shelljs");
const svn = require('node-svn-ultimate');

const repoUrl = "https://github.com/satansdeer/loftschool-homeworks/branches/"

const ui = importJsx("./ui");

if (!shell.which("svn")) {
  shell.echo("Sorry, this script requires svn");
  shell.exit(1);
}

const cli = meow(
  `
	Usage
	  $ react-course <command>

	Options
	  --homework, -h Скачать домашнюю работу

`,
  {
    flags: {
      homework: {
        type: "string",
        alias: "h",
        default: undefined
      }
    }
  }
);

if (cli.flags.homework) {
  svn.commands.export(`${repoUrl}${cli.flags.homework}`, `./${cli.flags.homework}`, {quiet: true, force: true}, () => {
    shell.exec(`cd ${cli.flags.homework} && cat README.md`)
  })
} else {
  render(React.createElement(ui));
}

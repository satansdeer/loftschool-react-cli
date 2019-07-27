#!/usr/bin/env node
"use strict";
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");
const meow = require("meow");
const shell = require("shelljs");

const repoUrl = "github.com:satansdeer/loftschool-homeworks";

const ui = importJsx("./ui");

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
  shell.exec(`git clone ${repoUrl} ${cli.flags.homework} --branch ${
    cli.flags.homework
  } --quiet --depth 1 && cd ${
    cli.flags.homework
  } && rm -rf .git && git init --quiet && git add . &&
  git commit -m "🐣 Initial commit" --quiet && cat README.md`);
} else {
  render(React.createElement(ui));
}

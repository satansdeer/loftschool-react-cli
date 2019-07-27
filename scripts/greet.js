#!/usr/bin/env node
"use strict";
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");
const meow = require("meow");
const execSync = require('child_process').execSync;
const repoUrl = "git@github.com:satansdeer/loftschool-homeworks.git";

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

const command = `git clone ${repoUrl} ${cli.flags.homework} --branch ${
    cli.flags.homework
  } --quiet --depth 1 && cd ${
    cli.flags.homework
  } && rm -rf .git && git init --quiet && git add . && cat README.md`;

if (cli.flags.homework) {
    const out = execSync(command);
} else {
    render(React.createElement(ui));
}
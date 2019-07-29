#!/usr/bin/env node
"use strict";
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");
const meow = require("meow");
const execSync = require("child_process").execSync;
const repoUrl = "https://github.com/satansdeer/loftschool-homeworks.git";

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

const cloneCommand = `git clone ${repoUrl} ${cli.flags.homework} --branch ${
  cli.flags.homework
} --quiet --depth 1 && cd ${
  cli.flags.homework
} && rm -rf .git && git init --quiet && git add . && cat README.md`;

const commitCommand = `cd ${
  cli.flags.homework
} && git commit -m "Initial commit" --quiet`;

if (cli.flags.homework) {
  try {
    console.log(execSync(cloneCommand).toString());
  } catch (e) {
    console.log(
      `Что-то пошло не так.\n\nПопробуйте выполнить команду вручную: \n\n${command1} && git commit -m "Initial commit"\n\nПосле того как она выполнится - создайте новый репозиторий:\n\n hub create`
    );
    return;
  }
  try {
    execSync(commitCommand);
  } catch (e) {
    console.log(
      `\n\nПерейдите в папку ${cli.flags.homework} и сделайте первый коммит.\n\nПосле этого создайте новый репозиторий:\n\n hub create`
    );
    return;
  }
  console.log(
    `\n\n---\n\nПерейдите в папку ${
      cli.flags.homework
    } и создайте новый репозиторий:\n\nhub create`
  );
} else {
  render(React.createElement(ui));
}

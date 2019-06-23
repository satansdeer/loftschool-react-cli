"use strict";
const React = require("react");
const { Box, Text } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");
const BigText = require("ink-big-text");
const Gradient = require("ink-gradient");

module.exports = () => {
  return (
    <React.Fragment>
      <Box flexDirection="column" justifyContent="flex-start">
        <Gradient name="summer">
          <BigText text="Loftschool React" />
        </Gradient>
        <Box marginBottom={1}>
          <Text>## Добро пожаловать на курс по ReactJS!{"\n"}{"\n"}</Text>
          <Text>Чтобы получить репозиторий с домашней работой - введите команду: </Text>
          <Text>react-course -h homework-id</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

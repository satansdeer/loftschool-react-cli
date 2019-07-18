"use strict";
const React = require("react");
const { Box, Text } = require("ink");
const BigText = require("ink-big-text");
const Gradient = require("ink-gradient");

module.exports = () => {
  return (
    <React.Fragment>
      <Box flexDirection="column" justifyContent="flex-start">
        <Gradient name="summer">
          <BigText text="Loftschool React" />
        </Gradient>
        <Box marginBottom={15}>
          <Text>
            ## Добро пожаловать на курс по ReactJS!{"\n"}
            {"\n"}
          </Text>
          <Text>
            Чтобы получить репозиторий с домашней работой - введите команду:
            {"\n"}
            {"\n"}
            react-course -h {"<"}homework-id{">"}
            {"\n"}
            {"\n"}
            После загрузки перейдите в папку с домашней работой
            {"\n"}
            {"\n"}
            cd {"<"}homework-id{">"}
            {"\n"}
            {"\n"}
            Отправьте репозиторий на GitHub
            {"\n"}
            {"\n"}
            hub create
            {"\n"}
            {"\n"}
            О том как установить программу hub - читайте по ссылке: https://github.com/github/hub
          </Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

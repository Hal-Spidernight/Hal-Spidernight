#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const label = (text) => chalk.bold.white(text.padEnd(10));
const value = (text) => chalk.cyanBright(text);
const link = (text) => chalk.underline.cyan(text);

const name = chalk.bold.hex('#7DF9FF')('Hal') + chalk.gray('  /  ') + chalk.gray('@hal-spidernight');
const tagline = chalk.italic.gray('Software Engineer · building things on the web');

const lines = [
  name,
  tagline,
  '',
  `${label('Site:')}${link('https://hal-spidernight.void.app/')}`,
  `${label('GitHub:')}${link('https://github.com/hal-spidernight')}`,
  '',
  `${label('Card:')}${chalk.gray('npx hal-spidernight')}`,
];

const card = boxen(lines.join('\n'), {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
  title: chalk.bold.hex('#7DF9FF')('  Hal · Profile  '),
  titleAlignment: 'center',
});

console.log(card);

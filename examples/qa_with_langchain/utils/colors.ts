import chalk from 'chalk';

export const success = (message: string) => chalk.green(message);
export const info = (message: string) => chalk.blue(message);
export const error = (message: string) => chalk.red(message);

#!/usr/bin/env ts-node-script

import { Command } from 'commander';
import { load } from './commands/load';
import { query } from './commands/query';

const program = new Command();

program.name('dewy-qa').description('CLI tool for interacting with a knowledge base API').version('1.0.0');

const defaultOpenAIKey = process.env.OPENAI_API_KEY;

program
  .command('load')
  .description("Load documents into Dewy from a URL")
  .option('--collection <collection>', 'Specify the collection name', 'main')
  .option('--dewy-endpoint <endpoint>', 'Specify the collection name',  'http://localhost:8000')
  .argument('<url>', 'URL to load into the knowledge base')
  .action(load);

program
  .command('query')
  .description('Ask questions using an LLM and the loaded documents for answers')
  .option('--collection <collection>', 'Specify the collection name', 'main')
  .option('--dewy-endpoint <endpoint>', 'Specify the collection name',  'http://localhost:8000')
  .option('--openai-api-key <key>', 'Specify the collection name', defaultOpenAIKey)
  .argument('<question>', 'Question to ask the knowledge base')
  .action(query);

program.parse(process.argv);

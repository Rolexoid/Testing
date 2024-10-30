import data_JSON from './testExample.json'
import type { Data } from '../types';

const data = data_JSON as Data;
const { test, timer } = data;

export { test, timer };

import { createServerFn } from '@tanstack/react-start';
import { buildGameFilePath } from '../constants/game-file';
import * as fs from 'node:fs';

export const getGame = createServerFn({ method: 'GET' })
  .validator((data: { gameId: string }) => data)
  .handler(async ({ data }) => {
    const { gameId } = data;
    const { file } = buildGameFilePath(gameId);
    const game = await fs.promises.readFile(file, 'utf-8');
    return game;
  });

// src/serverActions/jokesActions.ts
import { createServerFn } from '@tanstack/react-start';
import * as fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid'; // Add this import
import type { Game } from '../types/game.type';
import { buildGameFilePath } from '../constants/game-file';

export const createGame = createServerFn({ method: 'POST' }).handler(
  async () => {
    const game: Game = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { dir, file } = buildGameFilePath(game.id);

    await fs.promises.mkdir(dir, { recursive: true });

    await fs.promises.writeFile(file, JSON.stringify(game, null, 2), 'utf-8');

    return game;
  }
);

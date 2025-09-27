export const GAME_DIR = 'src/data/games';

export function buildGameFilePath(gameId: string): {
  dir: string;
  file: string;
} {
  const dir = `${GAME_DIR}/${gameId}`;

  return {
    dir: dir,
    file: `${dir}/game.json`,
  };
}

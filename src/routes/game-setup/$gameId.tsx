import { createFileRoute } from '@tanstack/react-router';
import { getGame } from '@/modules/game/server-actions/get-game';

export const Route = createFileRoute('/game-setup/$gameId')({
  loader: async ({ params }) => {
    const gameId = params.gameId;
    const game = await getGame({ data: { gameId: gameId } });
    return { game };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { game } = Route.useLoaderData();
  console.log(game);
  return <div>Hello "/game-setup/"!</div>;
}

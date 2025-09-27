import { FunctionComponent } from 'react';
import Text from '@/ui/components/text';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';
import { createGame } from '@/modules/game/server-actions/create-game';
import { Button } from '@/ui/components/button';
import { useRouter } from '@tanstack/react-router';

const MainMenu: FunctionComponent = () => {
  const router = useRouter();
  const handleNewGame = async () => {
    const game = await createGame();
    router.navigate({ to: '/game-setup/$gameId', params: { gameId: game.id } });
  };

  return (
    <div className="grid grid-cols-12 h-screen mx-3">
      <div className="col-span-6 col-start-2 h-full flex items-center">
        <Text className="font-bold xl:text-8xl text-7xl">
          Arautos da Tormenta
        </Text>
      </div>
      <div className="col-span-4 h-full flex items-center">
        <div className="w-full py-4 border-t border-amber-600">
          <Button variant="menu" fill="stretch" onClick={handleNewGame}>
            <CaretRightIcon weight="duotone" className="text-amber-600" />
            Novo jogo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

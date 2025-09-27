import { createFileRoute } from '@tanstack/react-router';
import MainMenu from '@/modules/game/components/main-menu';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <MainMenu />;
}

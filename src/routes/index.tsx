import { createFileRoute } from '@tanstack/react-router';
import Text from '@/ui/components/text';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <Text>Arautos</Text>;
}

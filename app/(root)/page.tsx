import { ModeToggle } from '@/components/ModeToggle';
import Test from '@/components/test';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <h1 className="h1-bold">Hi we are live</h1>
      <h2 className="h2-bold">Hi we are live</h2>
      <Test />
      <Button variant={'ghost'}>Click me</Button>
      <ModeToggle />
    </main>
  );
}

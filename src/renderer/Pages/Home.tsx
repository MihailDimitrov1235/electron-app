import ThemeSelector from '../Components/ThemeSelector';
import Button from '../Components/Button';

export default function Home() {
  return (
    <div>
      <ThemeSelector />

      <Button variant="default">default</Button>
      <Button variant="gradient">default</Button>
      <Button variant="outline">default</Button>
    </div>
  );
}

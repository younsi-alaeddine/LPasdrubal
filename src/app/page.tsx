import { redirect } from 'next/navigation';

export default function RootPage() {
  // Rediriger vers la page d'accueil française par défaut
  redirect('/fr');
}

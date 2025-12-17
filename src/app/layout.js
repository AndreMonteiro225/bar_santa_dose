import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Configuração otimizada de fontes do Next.js
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

export const metadata = {
  title: 'Santa Dose | Boemia e Sabor',
  description: 'A tradição do boteco com a sofisticação da alta gastronomia. Venha viver a experiência Santa Dose na Lapa, RJ.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
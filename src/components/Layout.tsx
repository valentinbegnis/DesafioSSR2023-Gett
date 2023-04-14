import { Text } from '@tremor/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-orange-400">Todo List App</h1>
      <main>
        {children}
      </main>
      <footer className="p-4 text-center text-gray-400">
        <Text>
          <span className="font-medium text-orange-400">
            Gett
          </span>
          {' '}
          Challenge - Full Stack Developer
        </Text>
      </footer>
    </>
  );
}

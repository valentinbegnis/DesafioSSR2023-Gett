import {
  Button, Card, Subtitle, TextInput,
} from '@tremor/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import validUsers from '@/usersData/validUsers';

export default function LoginForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const userFound = validUsers.find((user) => user.username === username);

      if (!userFound) {
        setUserError(true);
        return;
      }

      if (userFound && password !== '123') {
        setPasswordError(true);
        return;
      }

      if (userFound && password === '123') {
        localStorage.setItem('loggedInUser', JSON.stringify(userFound));
        router.push('/todos');
      }
    }, 1500);
  };

  return (
    <section className="min-w-3/4 max-w-[400px] flex flex-col justify-center m-auto p-4">
      <Subtitle color="slate" className="text-center text-2xl">
        Login
      </Subtitle>
      <Card className="mt-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-400 font-medium">
            Username
            <TextInput
              type="text"
              name="username"
              placeholder="admin1"
              required
              error={userError}
              errorMessage={userError ? 'Wrong username' : ''}
            />
          </label>
          <label className="text-gray-400 font-medium">
            Password
            <TextInput
              type="password"
              name="password"
              placeholder="*********"
              required
              error={passwordError}
              errorMessage={passwordError ? 'Wrong password' : ''}
            />
          </label>
          <Button size="lg" color="amber" loading={isLoading}>
            Login
          </Button>
        </form>
      </Card>
    </section>
  );
}

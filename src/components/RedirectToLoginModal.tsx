import {
  Button, Card, Text, Title,
} from '@tremor/react';
import FocusTrap from 'focus-trap-react';
import { useRouter } from 'next/router';

export default function RedirectToLoginModal() {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push('/');
  };

  return (
    <div className="fixed z-10 inset-0 flex bg-black/50">
      <FocusTrap>
        <Card className="flex flex-col gap-4 w-80 m-auto p-4 shadow-md">
          <Title color="slate" className="text-center font-medium">
            You are not logged in
          </Title>
          <Text className="text-center">
            Please login to see your todos
          </Text>
          <Button
            type="button"
            color="amber"
            className="w-full"
            onClick={handleGoToLogin}
          >
            Go to Login page
          </Button>
        </Card>
      </FocusTrap>
    </div>
  );
}

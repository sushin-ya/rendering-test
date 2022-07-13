import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
};

const Home: NextPage<Props> = ({ text }) => {
  const [text2] = useState<string>('This is text2.');
  const [text3, setText3] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    setText3('This is text3.');
  }, []);

  return (
    <div>
      <h2>{text}</h2>
      <h2>{text2}</h2>
      <h2>{text3}</h2>
      <button
        onClick={() => router.push('/about')}
        style={{ display: 'block' }}
      >
        about
      </button>
      <button
        onClick={() => router.push('/other')}
        style={{ display: 'block' }}
      >
        other
      </button>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      text: 'This is text.',
    },
  };
};

export default Home;

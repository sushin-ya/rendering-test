import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
};

const About: NextPage<Props> = ({ text }) => {
  const [text2] = useState<string>('This is text2.');
  const [text3, setText3] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    setText3('This is text3.');
  }, []);

  return (
    <div>
      <ul>
        <li>{text}</li>
        <li>{text2}</li>
        <li>{text3}</li>
      </ul>
      <button onClick={() => router.push('/')}>home</button>
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

export default About;

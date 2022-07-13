import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const About: NextPage = () => {
  return (
    <div>
      <ul>
        <li>test</li>
      </ul>
      <Link href='/'>home</Link>
    </div>
  );
};

export default About;

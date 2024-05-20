'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    redirect('/category/Beer');
  }, []);

  return;
};

export default HomePage;

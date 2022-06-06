import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const token = sessionStorage.getItem("accessToken");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/main/Main');
    } else {
      router.push('/signin/SignIn');
    }
  }, []);
}

export default Home

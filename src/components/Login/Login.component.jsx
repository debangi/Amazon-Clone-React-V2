import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../../firebase-config';
import { AmazonLogo, Component, Content, LoginButton } from './Login.styles';

const Login = ({ setUser }) => {
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    let user = auth.currentUser;
    let newUser = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };
  return (
    <Component>
      <Content>
        <AmazonLogo
          src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
          alt='logo'
        />
        <h1>Sign into Amazon</h1>
        <LoginButton onClick={signInWithGoogle}>
          Sign in with Google
        </LoginButton>
      </Content>
    </Component>
  );
};

export default Login;

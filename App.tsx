import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Main } from './src';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '536686355227-lekjr9kosraulpbgu9p2eku8qvbc9f9q.apps.googleusercontent.com'
    })
  }, [])

  return (
    <Main />
  );
}

import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login () {
  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log(user)
    } catch (e) {}
  };

  return (
    <SafeAreaView style={{
      paddingHorizontal: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
      <GoogleSigninButton onPress={signin} />
    </SafeAreaView>
  )
}

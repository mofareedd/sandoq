import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { COLORS } from "@/lib/constants";
import { StatusBar } from "expo-status-bar";
import { QueryContext } from "@/components/context/query-context";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const LIGHT_THEME: Theme = {
  dark: false,
  colors: COLORS.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: COLORS.dark,
};

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "light" ? LIGHT_THEME : DARK_THEME}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <QueryContext>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </QueryContext>
    </ThemeProvider>
  );
}

import { useEffect, useState } from "react";
import { Animated, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

type GameBoostSplashProps = { onFinished: () => void };

export function GameBoostSplash({ onFinished }: GameBoostSplashProps) {
  const [logoScale] = useState(() => new Animated.Value(0.72));
  const [logoOpacity] = useState(() => new Animated.Value(0));
  const [leftX] = useState(() => new Animated.Value(-36));
  const [rightX] = useState(() => new Animated.Value(36));
  const [glowOpacity] = useState(() => new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, { toValue: 1, friction: 7, tension: 44, useNativeDriver: true }),
      Animated.timing(logoOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(leftX, { toValue: 0, duration: 750, useNativeDriver: true }),
      Animated.timing(rightX, { toValue: 0, duration: 750, useNativeDriver: true }),
      Animated.sequence([
        Animated.delay(260),
        Animated.timing(glowOpacity, { toValue: 1, duration: 520, useNativeDriver: true }),
      ]),
    ]).start();

    const timer = setTimeout(onFinished, 1900);
    return () => clearTimeout(timer);
  }, [glowOpacity, leftX, logoOpacity, logoScale, onFinished, rightX]);

  return (
    <ImageBackground
      source={require("../assets/images/backgrounds/home-background.png")}
      resizeMode="cover"
      style={styles.root}
    >
      <View style={styles.scrim} />
      <View style={styles.center}>
        <View style={styles.wordmarkRow}>
          <Animated.Text style={[styles.wordmark, styles.leftWord, { transform: [{ translateX: leftX }] }]}>
            GAME
          </Animated.Text>
          <Animated.View style={[styles.logoWrap, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}>
            <Animated.View style={[styles.logoGlow, { opacity: glowOpacity }]} />
            <Image source={require("../assets/images/icons/gamepad.png")} style={styles.logo} />
          </Animated.View>
          <Animated.Text style={[styles.wordmark, styles.rightWord, { transform: [{ translateX: rightX }] }]}>
            BOOST
          </Animated.Text>
        </View>
        <Text style={styles.subtitle}>ARENA</Text>
        <Text style={styles.loading}>جاري تجهيز ساحة اللعب</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#08060f" },
  scrim: { ...StyleSheet.absoluteFill, backgroundColor: "rgba(5, 3, 13, 0.62)" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 18 },
  wordmarkRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  wordmark: { color: "#f7f2ff", fontSize: 20, fontWeight: "900", letterSpacing: 1.2 },
  leftWord: { marginRight: 8 },
  rightWord: { marginLeft: 8 },
  logoWrap: { width: 86, height: 86, alignItems: "center", justifyContent: "center" },
  logoGlow: { position: "absolute", width: 80, height: 80, borderRadius: 40, backgroundColor: "#d800ff", shadowColor: "#00e5ff", shadowOpacity: 0.9, shadowRadius: 24, elevation: 12 },
  logo: { width: 72, height: 72, resizeMode: "contain" },
  subtitle: { color: "#ff476e", fontSize: 12, fontWeight: "800", letterSpacing: 6, marginTop: 2, marginLeft: 6 },
  loading: { color: "rgba(245, 240, 255, 0.62)", fontSize: 12, marginTop: 34, writingDirection: "rtl" },
});

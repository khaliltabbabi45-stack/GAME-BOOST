import { useAudioPlayer } from "expo-audio";
import { useEffect, useMemo, useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GAME_ICON = require("../../assets/images/icon-gamepad.png");
const BOOST_ICON = require("../../assets/images/icon-performance-boost.png");
const OVERLAY_ICON = require("../../assets/images/icon-floating-overlay.png");

const games = [
  { title: "Shadow Strike", genre: "أكشن • أونلاين", accent: "#ff466d", progress: "92%" },
  { title: "Neon Drift", genre: "سباق • أركيد", accent: "#00d9ff", progress: "78%" },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState("الألعاب");
  const [boostOn, setBoostOn] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const player = useAudioPlayer(require("../../assets/audio/gameboost-calm-background.mp3"));

  useEffect(() => {
    try {
      player.play();
    } catch {
      // Browsers may require the first user interaction before audio playback.
    }
  }, [player]);

  const statusLabel = useMemo(() => (boostOn ? "التعزيز مفعل" : "جاهز للتعزيز"), [boostOn]);

  return (
    <ImageBackground
      source={require("../../assets/images/gameboost-home-background.png")}
      resizeMode="cover"
      style={styles.root}
    >
      <View style={styles.backdrop} />
      <ScrollView
        contentContainerStyle={{ paddingTop: Math.max(insets.top, 18) + 8, paddingBottom: 116 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>GAMEBOOST ARENA</Text>
            <Text style={styles.greeting}>أهلاً بك في ساحة اللعب</Text>
          </View>
          <View style={styles.statusDot} />
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroCopy}>
            <Text style={styles.heroKicker}>وضع الأداء</Text>
            <Text style={styles.heroTitle}>{statusLabel}</Text>
            <Text style={styles.heroSubtitle}>استعد للعب بتركيز أعلى وبدون تشتيت</Text>
            <Pressable
              onPress={() => setBoostOn((value) => !value)}
              style={({ pressed }) => [styles.boostButton, pressed && styles.pressed]}
            >
              <Image source={BOOST_ICON} style={styles.buttonIcon} />
              <Text style={styles.boostButtonText}>{boostOn ? "إيقاف التحسين" : "تفعيل التحسين"}</Text>
            </Pressable>
          </View>
          <View style={styles.heroOrb}>
            <Image source={BOOST_ICON} style={styles.heroIcon} />
            <Text style={styles.heroPercent}>{boostOn ? "100" : "86"}</Text>
            <Text style={styles.heroPercentLabel}>أداء</Text>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>ألعابك</Text>
          <Text style={styles.sectionLink}>عرض الكل</Text>
        </View>

        <View style={styles.tabs}>
          {["الألعاب", "المفضلة", "الأخيرة"].map((tab) => (
            <Pressable key={tab} onPress={() => setSelectedTab(tab)} style={[styles.tab, selectedTab === tab && styles.activeTab]}>
              <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.gamesList}>
          {games.map((game) => (
            <View key={game.title} style={styles.gameCard}>
              <View style={[styles.gameArt, { borderColor: `${game.accent}88` }]}>
                <Image source={GAME_ICON} style={styles.gameIcon} />
                <View style={[styles.artGlow, { backgroundColor: game.accent }]} />
              </View>
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>{game.title}</Text>
                <Text style={styles.gameGenre}>{game.genre}</Text>
                <View style={styles.progressTrack}><View style={[styles.progressFill, { width: game.progress as `${number}%`, backgroundColor: game.accent }]} /></View>
              </View>
              <Pressable style={({ pressed }) => [styles.playButton, pressed && styles.pressed]}>
                <Text style={styles.playText}>تشغيل</Text>
              </Pressable>
            </View>
          ))}
        </View>

        <View style={styles.toolsRow}>
          <Pressable style={styles.toolCard} onPress={() => setOverlayOpen(true)}>
            <Image source={OVERLAY_ICON} style={styles.toolIcon} />
            <Text style={styles.toolTitle}>القائمة العائمة</Text>
            <Text style={styles.toolCaption}>تجربة فوق الألعاب</Text>
          </Pressable>
          <Pressable style={styles.toolCard}>
            <Image source={BOOST_ICON} style={styles.toolIcon} />
            <Text style={styles.toolTitle}>تحسين سريع</Text>
            <Text style={styles.toolCaption}>إعدادات آمنة للنظام</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.bottomNav, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <Text style={[styles.navItem, styles.navActive]}>الألعاب</Text>
        <Text style={styles.navItem}>التحسين</Text>
        <Text style={styles.navItem}>الإعدادات</Text>
      </View>

      <Pressable style={styles.floatingButton} onPress={() => setOverlayOpen(true)}>
        <Image source={OVERLAY_ICON} style={styles.floatingIcon} />
      </Pressable>

      <Modal visible={overlayOpen} transparent animationType="fade" onRequestClose={() => setOverlayOpen(false)}>
        <View style={styles.modalBackdrop}>
          <ImageBackground source={require("../../assets/images/gameboost-floating-panel-background.png")} style={styles.overlayPanel} imageStyle={styles.overlayImage}>
            <View style={styles.overlayHeader}>
              <Text style={styles.overlayTitle}>GameBoost Overlay</Text>
              <Pressable onPress={() => setOverlayOpen(false)}><Text style={styles.closeText}>إغلاق</Text></Pressable>
            </View>
            <Text style={styles.overlayHint}>هذه معاينة للقائمة العائمة. تفعيل الظهور فوق التطبيقات يتم من إعدادات أندرويد.</Text>
            <View style={styles.overlayActions}>
              <Pressable style={styles.overlayAction}><Image source={BOOST_ICON} style={styles.overlayActionIcon} /><Text style={styles.overlayActionText}>تعزيز</Text></Pressable>
              <Pressable style={styles.overlayAction}><Image source={GAME_ICON} style={styles.overlayActionIcon} /><Text style={styles.overlayActionText}>الألعاب</Text></Pressable>
              <Pressable style={styles.overlayAction}><Image source={OVERLAY_ICON} style={styles.overlayActionIcon} /><Text style={styles.overlayActionText}>الإعدادات</Text></Pressable>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#090611" },
  backdrop: { ...StyleSheet.absoluteFill, backgroundColor: "rgba(8, 5, 18, 0.82)" },
  header: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginBottom: 18 },
  eyebrow: { color: "#00e5ff", fontSize: 10, fontWeight: "900", letterSpacing: 2, textAlign: "right" },
  greeting: { color: "#fff", fontSize: 21, fontWeight: "900", marginTop: 5, textAlign: "right" },
  statusDot: { width: 11, height: 11, borderRadius: 6, backgroundColor: "#5cffba", shadowColor: "#5cffba", shadowOpacity: 0.9, shadowRadius: 10 },
  heroCard: { marginHorizontal: 16, padding: 18, borderRadius: 24, borderWidth: 1, borderColor: "#ff466d66", backgroundColor: "#161025dd", flexDirection: "row-reverse", justifyContent: "space-between", overflow: "hidden" },
  heroCopy: { flex: 1, alignItems: "flex-end" },
  heroKicker: { color: "#ff6b88", fontSize: 12, fontWeight: "800" },
  heroTitle: { color: "#fff", fontSize: 22, fontWeight: "900", marginTop: 4, textAlign: "right" },
  heroSubtitle: { color: "#aea6bc", fontSize: 12, marginTop: 5, textAlign: "right" },
  boostButton: { flexDirection: "row-reverse", alignItems: "center", gap: 7, backgroundColor: "#ff466d", paddingHorizontal: 13, paddingVertical: 9, borderRadius: 14, marginTop: 15 },
  buttonIcon: { width: 20, height: 20 },
  boostButtonText: { color: "#fff", fontSize: 12, fontWeight: "900" },
  heroOrb: { width: 112, height: 112, borderRadius: 56, backgroundColor: "#241738", borderWidth: 1, borderColor: "#00e5ff88", alignItems: "center", justifyContent: "center", marginLeft: 14 },
  heroIcon: { width: 35, height: 35, marginBottom: -3 },
  heroPercent: { color: "#fff", fontSize: 25, fontWeight: "900" },
  heroPercentLabel: { color: "#00e5ff", fontSize: 11, fontWeight: "800" },
  sectionHeading: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 28, marginBottom: 12 },
  sectionTitle: { color: "#fff", fontSize: 20, fontWeight: "900" },
  sectionLink: { color: "#ff6b88", fontSize: 12, fontWeight: "800" },
  tabs: { flexDirection: "row-reverse", gap: 8, paddingHorizontal: 20, marginBottom: 12 },
  tab: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 11, backgroundColor: "#171122" },
  activeTab: { backgroundColor: "#34204f", borderWidth: 1, borderColor: "#ad5cff" },
  tabText: { color: "#8e849c", fontSize: 12, fontWeight: "800" },
  activeTabText: { color: "#fff" },
  gamesList: { gap: 10, paddingHorizontal: 16 },
  gameCard: { flexDirection: "row-reverse", alignItems: "center", backgroundColor: "#161025ee", borderRadius: 18, padding: 10, borderWidth: 1, borderColor: "#2d2340" },
  gameArt: { width: 62, height: 62, borderRadius: 15, borderWidth: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: "#241738" },
  artGlow: { position: "absolute", width: 42, height: 42, borderRadius: 22, opacity: 0.18 },
  gameIcon: { width: 42, height: 42, zIndex: 1 },
  gameInfo: { flex: 1, paddingHorizontal: 12, alignItems: "flex-end" },
  gameTitle: { color: "#fff", fontSize: 15, fontWeight: "900" },
  gameGenre: { color: "#958ca5", fontSize: 11, marginTop: 2 },
  progressTrack: { width: "100%", height: 4, backgroundColor: "#2b2239", borderRadius: 3, marginTop: 9, overflow: "hidden" },
  progressFill: { height: 4, borderRadius: 3 },
  playButton: { backgroundColor: "#25193b", paddingHorizontal: 11, paddingVertical: 9, borderRadius: 11, borderWidth: 1, borderColor: "#7f4bc3" },
  playText: { color: "#e9d8ff", fontWeight: "900", fontSize: 11 },
  toolsRow: { flexDirection: "row-reverse", gap: 10, paddingHorizontal: 16, marginTop: 14 },
  toolCard: { flex: 1, minHeight: 112, backgroundColor: "#161025ee", borderRadius: 18, padding: 13, alignItems: "flex-end", borderWidth: 1, borderColor: "#2d2340" },
  toolIcon: { width: 31, height: 31, alignSelf: "flex-start" },
  toolTitle: { color: "#fff", fontSize: 13, fontWeight: "900", marginTop: 7 },
  toolCaption: { color: "#8e849c", fontSize: 10, marginTop: 3, textAlign: "right" },
  bottomNav: { position: "absolute", left: 0, right: 0, bottom: 0, backgroundColor: "#0d0918ee", borderTopWidth: 1, borderTopColor: "#241b35", flexDirection: "row-reverse", justifyContent: "space-around", paddingTop: 14 },
  navItem: { color: "#777083", fontSize: 12, fontWeight: "800" },
  navActive: { color: "#00e5ff" },
  floatingButton: { position: "absolute", right: 18, bottom: 88, width: 58, height: 58, borderRadius: 29, backgroundColor: "#ff466d", alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: "#ff9db2", shadowColor: "#ff466d", shadowOpacity: 0.55, shadowRadius: 14, elevation: 8 },
  floatingIcon: { width: 33, height: 33 },
  modalBackdrop: { flex: 1, backgroundColor: "rgba(2, 1, 7, 0.78)", alignItems: "center", justifyContent: "center", padding: 20 },
  overlayPanel: { width: "100%", maxWidth: 420, borderRadius: 24, overflow: "hidden", borderWidth: 1, borderColor: "#ff466d88", backgroundColor: "#130d20" },
  overlayImage: { opacity: 0.55 },
  overlayHeader: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", padding: 18 },
  overlayTitle: { color: "#fff", fontSize: 16, fontWeight: "900" },
  closeText: { color: "#ff6b88", fontSize: 12, fontWeight: "800" },
  overlayHint: { color: "#c1b5cc", fontSize: 12, lineHeight: 20, textAlign: "right", paddingHorizontal: 18 },
  overlayActions: { flexDirection: "row-reverse", justifyContent: "space-around", padding: 22 },
  overlayAction: { alignItems: "center", gap: 7 },
  overlayActionIcon: { width: 42, height: 42 },
  overlayActionText: { color: "#fff", fontSize: 11, fontWeight: "800" },
  pressed: { opacity: 0.72 },
});

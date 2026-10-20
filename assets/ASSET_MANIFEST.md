# GameBoost Arena — Visual & Audio Assets

هذه الحزمة تستخدم ملفات وسائط منفصلة، ولا تعتمد على رسم الأيقونات أو توليد الأصوات من داخل كود الواجهة.

## الصور

| الاستخدام | المسار داخل المشروع | الحالة |
|---|---|---|
| شعار التطبيق | `assets/images/gameboost-mark.png` | قيد التوليد في التخزين المُدار |
| أيقونة Android | `assets/images/gameboost-launcher-icon.png` | قيد التوليد في التخزين المُدار |
| أيقونة الألعاب | `assets/images/gamepad-icon.png` | قيد التوليد في التخزين المُدار |
| أيقونة التحسين | `assets/images/boost-icon.png` | قيد التوليد في التخزين المُدار |
| أيقونة القائمة العائمة | `assets/images/overlay-icon.png` | قيد التوليد في التخزين المُدار |
| خلفية شاشة البداية | `assets/images/splash-background.png` | قيد التوليد في التخزين المُدار |
| خلفية الصفحة الرئيسية | `assets/images/gameboost-home-background.png` | PNG محلي تم التحقق منه، 1440×2560 |
| خلفية القائمة العائمة | `assets/images/gameboost-floating-panel-background.png` | PNG محلي تم التحقق منه، 2560×1440 |
| أيقونة الألعاب الجديدة | `assets/images/icon-gamepad.png` | PNG محلي شفاف تم التحقق منه، 1920×1920 |
| أيقونة تحسين الأداء الجديدة | `assets/images/icon-performance-boost.png` | PNG محلي شفاف تم التحقق منه، 1920×1920 |
| أيقونة القائمة العائمة الجديدة | `assets/images/icon-floating-overlay.png` | PNG محلي شفاف تم التحقق منه، 1920×1920 |

الأصول الجديدة أصبحت ملفات PNG فعلية داخل المشروع، وليست أكواداً أو روابط WebP.

تفاصيل روابط الأصول الجديدة موجودة في `assets/IMAGE_ASSET_URLS.json`.

## الصوت

| الاستخدام | المسار داخل المشروع | المواصفات |
|---|---|---|
| موسيقى خلفية التطبيق | `assets/audio/gameboost-calm-background.mp3` | موسيقى Ambient هادئة، 76 BPM، بدون غناء، مصممة للخلفية والتكرار |
| نقرة واجهة | `assets/audio/ui-soft-click.mp3` | مؤثر قصير منخفض الحدة |
| تأكيد تفعيل التحسين | `assets/audio/boost-soft-confirm.mp3` | صوت تسارع سيارة سلس لمدة 7 ثوانٍ، منخفض الحدة وبدون صرير أو تشويش |

الصوت الخلفي مقصود أن يكون منخفضاً وناعماً، بلا إيقاعات قوية أو انتقالات مفاجئة، حتى لا يزعج المستخدم أثناء اللعب أو تصفح التطبيق.

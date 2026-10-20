# GameBoost Arena — Asset Manifest

جميع الأصول المستخدمة في التطبيق ملفات فعلية، وليست أيقونات مرسومة بالكود.

## تنظيم الصور

| المجموعة | الملف | الاستخدام |
|---|---|---|
| `images/backgrounds` | `home-background.png` | خلفية الواجهة الرئيسية وشاشة البداية |
| `images/backgrounds` | `floating-panel-background.png` | خلفية لوحة القائمة العائمة |
| `images/backgrounds` | `splash-background.png` | خلفية PNG احتياطية لشاشة البداية |
| `images/icons` | `gamepad.png` | أيقونة الألعاب والشعار المتحرك |
| `images/icons` | `performance-boost.png` | أيقونة تحسين الأداء |
| `images/icons` | `floating-overlay.png` | أيقونة القائمة العائمة |
| `images/system` | `app-icon.png` | أيقونة التطبيق الرئيسية |
| `images/system` | `splash-icon.png` | أيقونة Expo الأصلية لشاشة البداية |
| `images/system` | `android-foreground.png` | طبقة Android adaptive icon |
| `images/system` | `android-background.png` | خلفية Android adaptive icon |
| `images/system` | `android-monochrome.png` | نسخة Android أحادية اللون |
| `images/system` | `brand-mark.png` | نسخة شعار العلامة التجارية |
| `images/system` | `launcher-icon.png` | نسخة أيقونة المشغل |
| `images/system` | `favicon.png` | أيقونة نسخة الويب |

## تنظيم الصوت

| المجموعة | الملف | الاستخدام |
|---|---|---|
| `audio/music` | `calm-background.mp3` | موسيقى خلفية هادئة منخفضة الإزعاج |
| `audio/effects` | `ui-soft-click.mp3` | نقرة واجهة ناعمة |
| `audio/effects` | `boost-soft-confirm.mp3` | تسارع سيارة سلس لمدة 7 ثوانٍ عند تفعيل التحسين |

## ملاحظات البناء

- مسارات Expo والأكواد محدثة لتستخدم هذه المجلدات مباشرة.
- صور الأيقونات بصيغة PNG شفافة.
- الخلفيات بصيغة PNG غير شفافة.
- إعدادات Android موجودة في `app.config.ts`، وإعدادات EAS في `eas.json`.

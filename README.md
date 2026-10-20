# GameBoost Arena

تطبيق Android عربي لمساعدة اللاعبين على تنظيم وتشغيل ألعابهم، مع واجهة داكنة بطابع ألعاب، تحسين أداء تجريبي، ومعاينة لقائمة عائمة فوق الألعاب.

## المزايا

- شاشة بداية متحركة يظهر فيها اسم `GAME BOOST` حول شعار PNG.
- واجهة عربية RTL بطابع نيون داكن.
- بطاقات للألعاب مع نسبة تقدم وزر تشغيل.
- زر تفعيل وضع التحسين.
- معاينة للقائمة العائمة فوق الألعاب.
- موسيقى خلفية هادئة ومؤثرات صوتية محلية.
- أصول الصور منظمة في مجلدات PNG حقيقية.
- إعدادات Android وصلاحيات النظام موضحة في `app.config.ts`.
- Workflow جاهز لبناء APK عبر GitHub Actions وExpo EAS.

## هيكل المشروع

```text
app/                         شاشات Expo Router
components/                  مكونات الواجهة، ومنها شاشة البداية
assets/images/backgrounds/   خلفيات PNG
assets/images/icons/         أيقونات PNG شفافة
assets/images/system/        أيقونات Android وWeb وشاشة البداية
assets/audio/music/          الموسيقى الخلفية
assets/audio/effects/        المؤثرات الصوتية
eas.json                     إعدادات بناء APK/AAB
.github/workflows/            Workflow البناء التلقائي
```

## التشغيل المحلي

```bash
pnpm install
pnpm check
pnpm lint
pnpm dev:metro
```

## إنشاء APK

هذا المشروع يستخدم Expo EAS. من جهازك:

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

ملف `preview` ينتج APK قابلاً للتثبيت على Android. ملف `production` مخصص لإنتاج AAB للنشر في Google Play.

## البناء من GitHub Actions

1. أنشئ Expo Access Token من حساب Expo.
2. في مستودع GitHub افتح: **Settings → Secrets and variables → Actions**.
3. أضف Secret باسم `EXPO_TOKEN` وضع قيمة الرمز داخله.
4. افتح تبويب **Actions**.
5. شغّل Workflow باسم **Build GameBoost APK**.
6. بعد انتهاء البناء سيظهر رابط التحميل في سجل العملية.

## صلاحيات Android

يطلب التطبيق الصلاحيات ذات الصلة بالظهور فوق التطبيقات وإدارة التطبيقات في الخلفية داخل إعدادات Android. هذه صلاحيات خاصة ويجب أن يوافق عليها المستخدم من إعدادات النظام. تختلف إمكانية إغلاق التطبيقات الأخرى حسب إصدار Android والشركة المصنعة؛ لذلك تعرض الواجهة الحالية معاينة آمنة ولا تدّعي تجاوز قيود النظام.

## الملفات المهمة

- [دليل البناء التفصيلي](GITHUB_APK_GUIDE.md)
- [سجل الصور والصوت](assets/ASSET_MANIFEST.md)
- [فهرس ملفات الصور](assets/IMAGE_ASSET_URLS.json)

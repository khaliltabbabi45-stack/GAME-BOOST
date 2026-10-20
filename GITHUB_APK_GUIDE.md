# GameBoost Arena — رفع المشروع وبناء APK

تم تجهيز المشروع كتطبيق Expo/React Native عربي، مع صور PNG فعلية داخل `assets/images` وملفات صوت داخل `assets/audio`.

## ما تم تجهيزه

- شاشة بداية متحركة يظهر فيها `GAME` و`BOOST` حول شعار PNG.
- واجهة عربية RTL بطابع ألعاب داكن وألوان نيون.
- بطاقات ألعاب وأزرار تشغيل.
- معاينة للقائمة العائمة فوق الألعاب.
- موسيقى خلفية هادئة ومؤثرات صوتية محلية.
- إعدادات Android للأيقونة، شاشة البداية، وطلبات الصلاحيات ذات الصلة.
- ملف `eas.json` لبناء APK.
- سير عمل GitHub Actions في `.github/workflows/build-apk.yml`.

## تشغيل البناء من GitHub

1. أنشئ حساباً في Expo على `expo.dev`.
2. من جهازك شغّل: `npx eas-cli@latest login`.
3. أنشئ رمز وصول من Expo وضعه في GitHub باسم السر `EXPO_TOKEN`:
   - المستودع → Settings → Secrets and variables → Actions → New repository secret.
4. شغّل Workflow باسم **Build GameBoost APK** من تبويب Actions.
5. بعد انتهاء البناء سيظهر رابط تحميل APK في نتيجة تشغيل الـ Workflow وداخل حساب Expo.

## البناء من الجهاز

```bash
pnpm install
pnpm check
npx eas-cli@latest build --platform android --profile preview
```

ملف `preview` ينتج APK قابلاً للتثبيت المباشر على أندرويد. ملف `production` مضبوط لإنتاج AAB للنشر في Google Play.

## ملاحظات أندرويد مهمة

صلاحية الظهور فوق التطبيقات وإدارة التطبيقات في الخلفية صلاحيات خاصة في أندرويد. وجودها في إعدادات APK لا يعني أن النظام سيمنحها تلقائياً؛ يجب فتح صفحة إعدادات أندرويد وطلب موافقة المستخدم، كما أن إغلاق التطبيقات الأخرى ليس مضموناً على كل الأجهزة والإصدارات. الواجهة الحالية تعرض معاينة آمنة للقائمة العائمة ولا تدّعي تنفيذ ما يمنعه النظام.

لا تُضمّن أي مفاتيح سرية أو ملفات `.env` في GitHub. لا ترفع مجلدات `node_modules` أو `android` أو `ios` المولدة محلياً.

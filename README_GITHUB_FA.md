# ساخت خودکار APK — کتابخانه دیجیتال حسین اقبالیان

این مخزن برای ساخت خودکار APK با GitHub Actions آماده شده است.

## استفاده

1. در GitHub یک Repository جدید بسازید.
2. همه فایل‌های این پروژه را داخل Repository قرار دهید و Commit کنید.
3. وارد تب **Actions** شوید.
4. Workflow با نام **Build APK** را انتخاب کنید.
5. با **Run workflow** اجرا کنید.
6. پس از پایان موفق، در بخش **Artifacts** فایل `eghbalian-library-debug-apk` را دانلود کنید.
7. داخل فایل دانلودشده، `app-debug.apk` قرار دارد.

هر Push به شاخه `main` یا `master` نیز به‌طور خودکار Build را اجرا می‌کند.

> این Workflow نسخه debug APK می‌سازد. برای انتشار عمومی در Google Play، باید نسخه release امضاشده و کلید امضا نیز تنظیم شود.

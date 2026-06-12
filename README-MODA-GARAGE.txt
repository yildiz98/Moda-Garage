# Moda Garage Araç Takip Sistemi

Bu paket GitHub Pages için hazırlandı.

## İçerik
- Moda Garage adı aktif
- Gönderdiğin/logo seçtiğin neon logo sisteme eklendi
- PWA ikonları güncellendi
- Admin/personel yetki sistemi aynen korundu
- Personel fiyatları görmez, admin finansı yönetir

## GitHub'a Yükleme
1. GitHub'da yeni repository aç: `moda-garage`
2. Bu zip içindeki dosyaları repository içine yükle.
3. Settings > Pages bölümünden Branch: `main`, Folder: `/root` seç.
4. Kaydet. Birkaç dakika sonra uygulama açılır.

## Değiştirilecek Kullanıcılar
`firebase-config.js` dosyasında:
- `ADMIN_EMAILS` admin hesaplarıdır.
- `PERSONEL_EMAILS` personel hesaplarıdır.

Firebase Authentication kısmında aynı e-postaları kullanıcı olarak oluşturman gerekir.

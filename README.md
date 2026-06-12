# Garaj Araç Takip Sistemi - Uyarlanabilir Paket

Bu sürüm farklı garajlara kolay uyarlanacak şekilde düzenlendi.

Değiştirilecek ana dosya:

- `firebase-config.js`

Bu dosyada şu alanlar bulunur:

- Firebase bağlantı bilgileri
- Admin e-posta listesi
- Personel e-posta listesi
- Garaj adı
- Logo dosyası
- Kısa ad
- Firebase veri havuzu slug değeri

Detaylı kullanım için:

- `BASKA-GARAJA-UYARLAMA-REHBERI.txt`

## Yetki Mantığı

Admin:
- Tüm ekranları görür.
- Fiyatlandırma, tahsilat, borç ve rapor alanlarını kullanır.

Personel:
- Müşteri/firma kaydı yapar.
- Araç kaydı yapar.
- Servis kaydı açar.
- Fiyat, tahsilat, borç ve rapor bilgilerini görmez.

## Başka Garaja Uyarlama

1. `firebase-config.js` dosyasını aç.
2. `GARAGE_INFO` alanından garaj adını/logo/slug bilgisini değiştir.
3. `ADMIN_EMAILS` ve `PERSONEL_EMAILS` listelerini değiştir.
4. Firebase Authentication içinde bu kullanıcıları oluştur.
5. Yeni logo kullanacaksan `logo.png` dosyasını değiştir.

Her garaj için farklı `slug` kullanırsan veriler birbirine karışmaz.

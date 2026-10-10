# Bahar Kasap İzmir: demo web sitesi

Kendi çiftliğimizde yetişen hayvanlar vurgusuyla hazırlanmış, tek sayfalık statik demo site. Göcek'te açılacak yeni şubenin (Meltem Kasap) duyurusunu da içerir.

## Çalıştırma
Derleme gerekmez. `index.html` dosyasını tarayıcıda açın ya da klasörde şunu çalıştırın:

```
python3 -m http.server 8000
```

## Değiştirilecek yerler
- WhatsApp numarası: `index.html` içinde `wa.me/905000000000` (iki yerde)
- Adres, telefon ve çalışma saatleri: `index.html`, "Bize ulaşın" bölümü (örnek içeriktir)
- Ürün listesi: `index.html`, "Tezgâhta bulunanlar" bölümü
- Kesim açıklamaları: `main.js`
- Meltem Kasap bağlantısı: `../meltem-kasap-gocek/index.html` (iki site aynı yerde yayınlanırsa çalışır)

## Notlar
- Yazı tipleri (Zilla Slab, Public Sans) siteye gömülüdür; SIL Open Font License altındadır.
- Sayfadaki metinler ve iletişim bilgileri örnektir.

## Dosya düzeni
Tüm dosyalar tek klasörde (depo kökünde) durur: `index.html`, `style.css`, `main.js`, `fonts.css` ve `.woff2` yazı tipi dosyaları.

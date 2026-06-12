export const firebaseConfig = {
  apiKey: "AIzaSyCEVFu2-N4mtJeIu_d4m0ZtUTp7Y3_U25U",
  authDomain: "moda-garage.firebaseapp.com",
  projectId: "moda-garage",
  storageBucket: "moda-garage.firebasestorage.app",
  messagingSenderId: "292033497762",
  appId: "1:292033497762:web:0b70968c6f5997c9b8a5fb",
  measurementId: "G-4MSKJZH0QE"
};

// Firebase Authentication > Users kısmında oluşturduğun hesaplar.
// Admin tüm yetkilere sahiptir.
export const ADMIN_EMAILS = [
  "admin@modagarage.com"
];

// Personel sadece müşteri/firma, araç ve servis kaydı yapabilir.
export const PERSONEL_EMAILS = [
  "personel@modagarage.com"
];


// GARAJ BİLGİLERİ
// Başka garaja uyarlamak için en çok bu alanları değiştir.
export const GARAGE_INFO = {
  name: "Moda Garage",
  shortName: "Moda",
  subtitle: "Profesyonel Araç Servis Takip",
  logo: "logo.png",
  slug: "moda-garage"
};

export const getEnvVariable = (key, defaultValue = "") => {
  // Cek apakah variabel ada di window.env (konfigurasi runtime)
  if (window.env && window.env[key] !== undefined) {
    return window.env[key];
  }

  // Cek variabel Vite saat build time
  const viteKey = `VITE_${key}`;
  if (import.meta.env[viteKey] !== undefined) {
    return import.meta.env[viteKey];
  }

  // Kembalikan nilai default jika tidak ditemukan
  return defaultValue;
};

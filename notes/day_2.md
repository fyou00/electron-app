# Electron.js — Day 2

## Main Process vs Renderer Process

**Target:** Memahami perbedaan Main Process dan Renderer Process, DOM, event listener, serta interaksi UI dalam aplikasi Electron.

**Project:** Electron Learning — Click Counter

---

## 1. Review Day 1

### 1. Apa fungsi `BrowserWindow`?

Jawaban: BrowserWindow adalah modul untuk membuat dan mengelola/mengontrol window (jendela) aplikasi desktop pada electron.

---

### 2. Apa fungsi `win.loadFile("index.html")`?

Jawaban: kode diatas berfungsi untuk memuat sekaligus menampilkan index.html ke BrowserWindow. fungsi ini dipanggil di main process (main.js) 

---

### 3. Apa yang dilakukan `app.whenReady()`?

Jawaban: !!! pending !!!

---

### 4. Jelaskan alur ketika kita menjalankan `npm start` sampai window Electron muncul.

Jawaban: !!! pending !!!

---

## 2. Main Process

### 5. Apa yang dimaksud dengan Main Process?

Jawaban: main process adaalah kode utama environment node js yang berfungsi sebagai entry point dan juga file pertama yang dijalankan ketika aplikasi dibuka. dalam electron, minimalnya modul yang dibutuhkan ada 2 yaitu app dan browserwindow. app berfungsi untuk mengatur siklus aplikasi, kapan aplikasi dimulai, belajar, atau ditutup sepenuhnya. browserwindow berfungsi sebagai pengelola window aplikasi desktop seeprti menampilkan halaman html. 

---

### 6. Apa saja tanggung jawab Main Process?

Jawaban: berdasarkan jawaban no 5. tanggung jawab main process bertanggungjawab untuk mengatur siklus hidup aplikasi, mengelola jendela (renderer process) dan akses penuh ke node js bisa ke sistem operasi ataupun API. 

---

### 7. Mengapa `main.js` biasanya menjadi entry point aplikasi Electron?

Jawaban: karena properti "main" terdapat pada package.json dan nilainya adalah "main.js" maka file inilah yang akan dijadikan entry point main process.

---

### 8. Apakah Main Process sama dengan Renderer Process? Jelaskan perbedaannya.

Jawaban: tidak, main process adalah entry point aplikasi yang bertugas mengelola backend (node js), sedangkan renderer process bertugas untuk menangani interface pengguna dan interaksi menggunakan kode html/css/js.

---

### 9. Apakah Main Process bisa membuat lebih dari satu `BrowserWindow`?

Jawaban: jawabannya bisa, kita bisa langsung membuat instance baru browserwindow yang ingin kita tampilkan. contohnya ketika kita ingin aplikasi menampilkan beberapa jendela disitulah browserwindow lebih dari satu diimplementasikan. contohnya pada discord ketika kita ingin membuka setting maka akan muncul jendela baru agar tidak menggangu alur chat di main window.

---

## 3. Renderer Process

### 10. Apa yang dimaksud dengan Renderer Process?

Jawaban:

---

### 11. Apa hubungan Renderer Process dengan Chromium?

Jawaban:

---

### 12. Apa fungsi HTML, CSS, dan JavaScript dalam Renderer Process?

Jawaban:

---

### 13. Apa itu DOM dalam JavaScript?

Jawaban:

---

### 14. Apa fungsi kode berikut?

```js
document.querySelector("#title");
```

Jawaban:

---

### 15. Apa fungsi `addEventListener()`?

Jawaban:

---

## 4. Analisis Kode

Perhatikan kode berikut.

```js
const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
```

### 16. Bagian mana yang bertanggung jawab membuat window?

Jawaban:

---

### 17. Apakah kode tersebut secara langsung menangani klik tombol HTML?

Jawaban:

---

### 18. Jika ingin menambahkan tombol pada halaman, file mana yang perlu diubah?

Jawaban:

---

### 19. Jika ingin mengubah ukuran window, bagian mana yang perlu diubah?

Jawaban:

---

## 5. Mengenal `renderer.js`

Misalnya `index.html` memiliki kode berikut:

```html
<h1 id="title">Hello World!</h1>

<button id="button">Click Me</button>

<script src="renderer.js"></script>
```

Kemudian `renderer.js` berisi:

```js
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

### 20. Apa yang dilakukan `document.querySelector()`?

Jawaban:

---

### 21. Apa fungsi variabel `button`?

Jawaban:

---

### 22. Kapan teks `"Button clicked!"` muncul di console?

Jawaban:

---

### 23. Di mana kita bisa melihat output `console.log()` dari Renderer Process?

Jawaban:

---

### 24. Apa yang terjadi jika ID tombol pada HTML diubah menjadi `myButton`, tetapi JavaScript masih mencari `#button`?

Jawaban:

---

### 25. Mengapa kode interaksi tombol lebih cocok ditempatkan di `renderer.js` daripada di `main.js`?

Jawaban:

---

## 6. Praktik — Click Counter

Buat aplikasi dengan tampilan seperti ini:

```text
┌──────────────────────────────┐
│       Electron Counter       │
│                              │
│         Clicked: 0           │
│                              │
│         [ Click Me ]         │
│                              │
└──────────────────────────────┘
```

Setiap tombol diklik, angka bertambah satu.

Contoh:

```text
Clicked: 0
Clicked: 1
Clicked: 2
Clicked: 3
```

### 26. Buat elemen HTML untuk judul, counter, dan tombol.

**Kode:**

```html
```

---

### 27. Bagaimana cara mengambil elemen counter dari HTML menggunakan JavaScript?

**Kode:**

```js
```

---

### 28. Bagaimana cara menyimpan nilai counter dalam sebuah variabel?

**Kode:**

```js
```

---

### 29. Bagaimana cara menambahkan event listener untuk tombol?

**Kode:**

```js
```

---

### 30. Bagaimana cara memperbarui angka yang tampil di halaman setiap kali tombol diklik?

**Kode:**

```js
```

---

## 7. Eksperimen

### Eksperimen A — Ubah judul

Ubah judul halaman menjadi `"My Electron App"` melalui JavaScript, bukan dengan mengedit teks HTML.

**Kode:**

```js
```

### Eksperimen B — Reset counter

Tambahkan tombol `Reset` yang mengembalikan counter menjadi nol.

**Kode:**

```js
```

### Eksperimen C — Counter berkurang

Tambahkan tombol `-1` untuk mengurangi counter.

**Kode:**

```js
```

### Eksperimen D — Pisahkan file

Pastikan kode HTML berada di `index.html` dan kode interaksi berada di `renderer.js`.

Jelaskan mengapa pemisahan ini bermanfaat.

Jawaban:

---

## 8. Pertanyaan Pemahaman

### 31. Apakah Renderer Process bisa menggunakan DOM seperti browser biasa?

Jawaban:

---

### 32. Apakah `document.querySelector()` dapat langsung digunakan di Main Process?

Jawaban:

---

### 33. Apakah Main Process dan Renderer Process berjalan dalam konteks yang sama?

Jawaban:

---

### 34. Mengapa pemisahan Main Process dan Renderer Process penting dalam arsitektur Electron?

Jawaban:

---

### 35. Jika Renderer Process ingin meminta Main Process melakukan operasi sistem, bagaimana konsep komunikasi yang akan digunakan?

Jawaban:

---

## 9. Day 2 Challenge

Buat Click Counter tanpa menyalin implementasi lengkap dari tutorial.

**Persyaratan:**

* [ ] Window berukuran 1000 × 700.
* [ ] Judul halaman `"Electron Click Counter"`.
* [ ] Menampilkan angka awal `0`.
* [ ] Tombol `+1`.
* [ ] Tombol `-1`.
* [ ] Tombol `Reset`.
* [ ] Interaksi ditulis dalam `renderer.js`.
* [ ] `main.js` bertanggung jawab membuat window.
* [ ] Aplikasi bisa dijalankan dengan `npm start`.

### Catatan pengerjaan

**Bagian yang berhasil:**

---

**Bagian yang masih membingungkan:**

---

**Error yang ditemukan dan cara memperbaikinya:**

---

## 10. Self Check

* [x] Gw paham Main Process.
* [x] Gw paham Renderer Process.
* [ ] Gw bisa menjelaskan perbedaan keduanya.
* [ ] Gw paham DOM.
* [ ] Gw bisa memakai `document.querySelector()`.
* [ ] Gw bisa memakai `addEventListener()`.
* [ ] Gw bisa memisahkan kode UI ke `renderer.js`.
* [ ] Gw berhasil membuat Click Counter.
* [ ] Gw paham kenapa komunikasi Main ↔ Renderer diperlukan.

**Kesimpulan Day 2:**

setiap BrowserWindow berjalan di renderer process nya masing-masing, jika salah satu window mengalami crash maka window lainnya tetap aman.

karena tiap window berbeda prosesnya maka dibutuhkan IPC untuk berbagi data ke window lainnya.

---

**Persiapan Day 3:** Preload, `contextBridge`, `ipcRenderer`, `ipcMain`, `invoke()`, dan `handle()`.

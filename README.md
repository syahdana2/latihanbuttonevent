![image](https://github.com/syahdana2/latihanbuttonevent/assets/144450729/f3ef1597-6f61-453e-ad9b-a24aec9dd8c1)
1. Fungsi handleClick dalam kode adalah fungsi JavaScript yang digunakan untuk menangani peristiwa klik (click event) pada tombol. Fungsi ini akan dipanggil ketika tombol tersebut diklik oleh pengguna.
2. HandleClick juga disebut dengan event handler, umumnya untuk memberi nama event handler dengan format handle, diikuti oleh nama event. Contoh seperti onClick={handleClick}, onMouseEnter={handleMouseEnter}, dan lain sebagainya.
3. Event handler dapat dioper pada komponen karena menggunakan props. Dengan mendeklarasikan sebuah event handler dalam sebuah induk dan mengopernya sebagai prop ke suatu anak komponen
4. Event dapat berpropagasi, contohnya props pada anak induk setelah dijalankan akan otomatis manjalankan pada props induk. Gunakan e.stopPropagation() untuk mencegah terjadinya Event propagasi atas
5. e.preventDefault() digunakan untuk menghentikan perilaku bawaan (default) dari suatu peristiwa (event) tertentu. contohnya Ketika pengguna mengklik tautan (link) dalam halaman web, peristiwa klik (click event) akan terjadi secara default, dan halaman akan menavigasikan ke URL yang diarahkan oleh tautan tersebut. Jika Anda ingin mencegah navigasi tersebut dan melakukan sesuatu yang berbeda ketika tautan diklik (misalnya, menampilkan informasi dalam modul), Anda dapat menggunakan e.preventDefault() untuk menghentikan navigasi default.

   Challenge:
   1. ![image](https://github.com/syahdana2/latihanbuttonevent/assets/144450729/f47d04ed-f1e9-4978-a430-492b5576738d)
      Penulisan handleClick salah
   2. ![image](https://github.com/syahdana2/latihanbuttonevent/assets/144450729/079f6abb-28d6-4013-b2fa-83a71f1c1ab3)
      adanya propagation yaitu event menghitung, maka e.stopPropagtion() untuk mencegah event induk terjadi


/*
=======================
FLASH SALE RUBAH ORANGE
=======================

Buatlah sebuah algoritma atau pseudocode untuk kasus berikut:

Toko 'RUBAH ORANGE' sedang mengadakan flash sale dengan ketentuan sebagai berikut:
- Jumlah item yang dibeli lebih dari 9 maka akan mendapatkan 5 item lagi
- Jumlah item yang dibeli lebih dari 7 maka akan mendapatkan 3 item lagi
- Jumlah item yang dibeli lebih dari 5 maka akan mendapatkan 1 item lagi
Tampilkan jumlah item yang didapatkan oleh pembeli.

NOTED:
Jika jumlah baju kurang dari 0 atau menerima input selain angka maka tampilkan 'Input Invalid'
*/

// write pseudocode/ algoritma here

/*
CREATE "item"

IF "item" > 9
    ADD 5 to "item"
    DISPLAY Jumlah item yang didapatkan: "item"
ELSE IF "item" > 7
    ADD 3 to "item"
    DISPLAY Jumlah item yang didapatkan: "item"
ELSE IF "item" > 5
    ADD 1 to "item"
    DISPLAY Jumlah item yang didapatkan: "item"
ELSE IF "item" >= 0
    DISPLAY Jumlah item yang didapatkan: "item"
ELSE IF "item" < 0
    DISPLAY Input Invalid
ELSE
    DISPLAY Input Invalid
*/

var item = 'a';

if(item > 9) {
    item += 5;
    console.log('Jumlah item yang didapatkan: ' + item);
} else if(item > 7) {
    item += 3;
    console.log('Jumlah item yang didapatkan: ' + item);
} else if(item > 5) {
    item += 1;
    console.log('Jumlah item yang didapatkan: ' + item);
} else if(item >= 0) {
    console.log('Jumlah item yang didapatkan: ' + item);
} else if(item < 0) {
    console.log('Input Invalid');
} else {
    console.log('Input Invalid');
}

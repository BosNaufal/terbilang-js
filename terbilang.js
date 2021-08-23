/*! Copyright (c) 2016 Naufal Rabbani (https://github.com/BosNaufal/terbilang-js)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
*
* Inspired By: http://notes.rioastamal.net/2012/03/membuat-fungsi-terbilang-pada-php.html
*/

function terbilang(a) {
    let bilangan = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'];
    let utama = 0
    let depan = 0
    let kalimat = {}
    let belakang = {}
    // 1 - 11
    if (a < 12) {
        kalimat = bilangan[a];
    }
    // 12 - 19
    else if (a < 20) {
        kalimat = bilangan[a - 10] + ' Belas';
    }
    // 20 - 99
    else if (a < 100) {
        utama = a / 10;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 10;
        kalimat = bilangan[depan] + ' Puluh ' + bilangan[belakang];
    }
    // 100 - 199
    else if (a < 200) {
        kalimat = 'Seratus ' + terbilang(a - 100);
    }
    // 200 - 999
    else if (a < 1000) {
        utama = a / 100;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 100;
        kalimat = bilangan[depan] + ' Ratus ' + terbilang(belakang);
    }
    // 1,000 - 1,999
    else if (a < 2000) {
        kalimat = 'Seribu ' + terbilang(a - 1000);
    }
    // 2,000 - 9,999
    else if (a < 10000) {
        utama = a / 1000;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 1000;
        kalimat = bilangan[depan] + ' Ribu ' + terbilang(belakang);
    }
    // 10,000 - 99,999
    else if (a < 100000) {
        utama = a / 100;
        depan = parseInt(String(utama).substr(0, 2));
        belakang = a % 1000;
        kalimat = terbilang(depan) + ' Ribu ' + terbilang(belakang);
    }
    // 100,000 - 999,999
    else if (a < 1000000) {
        utama = a / 1000;
        depan = parseInt(String(utama).substr(0, 3));
        belakang = a % 1000;
        kalimat = terbilang(depan) + ' Ribu ' + terbilang(belakang);
    }
    // 1,000,000 - 	99,999,999
    else if (a < 100000000) {
        utama = a / 1000000;
        depan = parseInt(String(utama).substr(0, 4));
        belakang = a % 1000000;
        kalimat = terbilang(depan) + ' Juta ' + terbilang(belakang);
    } else if (a < 1000000000) {
        utama = a / 1000000;
        depan = parseInt(String(utama).substr(0, 4));
        belakang = a % 1000000;
        kalimat = terbilang(depan) + ' Juta ' + terbilang(belakang);
    } else if (a < 10000000000) {
        utama = a / 1000000000;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 1000000000;
        kalimat = terbilang(depan) + ' Milyar ' + terbilang(belakang);
    } else if (a < 100000000000) {
        utama = a / 1000000000;
        depan = parseInt(String(utama).substr(0, 2));
        belakang = a % 1000000000;
        kalimat = terbilang(depan) + ' Milyar ' + terbilang(belakang);
    } else if (a < 1000000000000) {
        utama = a / 1000000000;
        depan = parseInt(String(utama).substr(0, 3));
        belakang = a % 1000000000;
        kalimat = terbilang(depan) + ' Milyar ' + terbilang(belakang);
    } else if (a < 10000000000000) {
        utama = a / 10000000000;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 10000000000;
        kalimat = terbilang(depan) + ' Triliun ' + terbilang(belakang);
    } else if (a < 100000000000000) {
        utama = a / 1000000000000;
        depan = parseInt(String(utama).substr(0, 2));
        belakang = a % 1000000000000;
        kalimat = terbilang(depan) + ' Triliun ' + terbilang(belakang);
    } else if (a < 1000000000000000) {
        utama = a / 1000000000000;
        depan = parseInt(String(utama).substr(0, 3));
        belakang = a % 1000000000000;
        kalimat = terbilang(depan) + ' Triliun ' + terbilang(belakang);
    } else if (a < 10000000000000000) {
        utama = a / 1000000000000000;
        depan = parseInt(String(utama).substr(0, 1));
        belakang = a % 1000000000000000;
        kalimat = terbilang(depan) + ' Kuadriliun ' + terbilang(belakang);
    }

    let pisah = kalimat.split(' ');
    let full = [];
    for (let i = 0; i < pisah.length; i++) {
        if (pisah[i] != "") {
            full.push(pisah[i]);
        }
    }
    return full.join(' ');
}

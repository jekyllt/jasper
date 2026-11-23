---
layout: post
title: Google Nest Inter Tidak Bisa Terkoneksi ke Wifi ? Masalah Google Nest "Connect to same Wi-Fi"
description: "Solusi mengatasi masalah Google Nest Mini yang gagal terhubung ke Wi-Fi dengan pesan AP Isolation atau Connect to same Wi-Fi pada router IndiHome."
author: Aldi Saputra Wahyudi
categories: tutorial
banner:
  image: https://github.com/user-attachments/assets/846533c6-b510-4818-a1f5-cb67833be52d
tags: [tutorial, Smart Home, Google Nest, Networking]
top: 1
---

Berawal dari punya duit nganggur gue beli google nest biar hidup gue lebih praktis aja serasa punya asisten pribadi dan gue sebelumnya udah pake beberapa smart device spt STB Indihome (walaupun beli yang root), smart lampu dan juga smart stop kontak, selama ini gue pake manual tanpa nyuruh nyuruh pake suara, selain hp gue lemot ya lebih cepet manual juga dari pada harus nunggu respon hp gue yang lemot parah.



Akhirnya gue beli Google Nest via Tokopedia yang berwarna chalk dengan menggunakan fitur sorting harga dari harga yang termurah, dapet lah gue dengan harga 400k sudah full package dapet boxnya dan yang penting produknya baru! tapi sellernya ini belom pernah ada yang beli produk google nestnya tapi ga masalah lah kan ada fitur komplain kalau ada apa-apa.

Setelah gue nunggu sekitar 3 hari akhirnya barang sampe, gue coba set up lah dari siang setelah berjam-jam gue coba setup gue mulai panik tuh, gue yang bego apa emang ada yang salah, karna gue setup tanpa menggunakan manual booknya, tapi kalau gue bego smart device yang lain aman aman aja dah

Pada awalnya gue udah ngerasa ga beres saat google nest ini memberikan keterangan berikut "This Nest Mini was manufactured for a different country, and may not be compatible with your Wi-Fi network" 
Gue coba nonton review google nest di youtube ga ada tuh yang dapet keterangan kaya gini, gue makin panik lah masa engga.

![Nest Mini was manufactured for a different country](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsqo-gvw0DEraGfjxkFKSUyDNs5YsS9km3BqmKu6AOJc1v9r6nM9EE3CrMxzAFuowaAStHqmcTwJv7tSPHyaq04yjQEbXiJsrcHYDrqNVdNlrQb0Zu_NhdTCv4oinhG2CRyJrzGiv-BCX9/w242-h430/image.png)

Pada saat coba koneksi ke wifi ada dan dapat keterangan berikut ini "Connect to same WI-FI" "Your nest mini was setup successfully but can't be found" "Turn off AP Isolation" dan gue berfikir berarti benar nih nest mini ini belum support jaringan indo atau indihome doang ya, karna gue kan pelanggan setia indihome jadi gatau kalau dicoba pake provider lain.

![Turn OFF AP Isolation!](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5nJ0HheSPxlpfJyMbFQTsmbUTKxJHNabsuNCGvkZtVsKbNEreuNyc_rs7_NOyP6s89znLFXxsVRTbIU3wx23UXSg2C36DzaOCZspUsfitCQoOqSiMsu1fVq_TPEQZ9El_c0ml_CMOvfwV/w276-h490/image.png)

Setelah gue coba factory reset - setup - factory reset - set up ulang mungkin udah lebih dari 10x dan hasilnya pun nihil!

Akhirnya gue complain lah ke si sellernya tapi doi menjawab kaya begini

![jawaban seller](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD-NBCgJrWVhpq6ZYRM6kIV3CagXL_Jr71UjBpzEvOT1vnMONLfdQTrttSMfmzXhwQ6f6l5FBp9kh-VqEva2xmJJTNbeczCEbVByc4J0k6fmF5oVVnO_kO3yV336p6GHLlk8vvvRb7imDR/w417-h284/image.png)

Dari jawaban seller gue menyimpulkan bahwa seller ini sama-sama gatau dan hanya nyuruh mengusahakan dengan berbagai cara yang dimana sudah gue lakukan duluan

Sebagai anak IT gue tau masalah AP Isolation ini adalah masalah jaringan yang seharusnya ada di settingan router, AP Isolation ini biasanya digunakan untuk wifi umum kaya di hotel, bandara dll yang setiap user jalurnya berbeda, jadi setelah gue coba login admin 192.168.100.1 tapi router HG8245A ini tidak ada settingan AP Isolation. Oiya sebelumnya gue coba juga tuh pake hotspot hp dengan provider tri, dan ternyata bisa!! ya karna hotspot kan memang satu jaringan antara device satu dengan yang lainnya tapi masa gue ngehotspot terus !?.

Akhirnya gue hubungi pihak indihome via twitter, dan kalian pasti tau apa yang mereka suruh lakukan.... ya betul restart modem dan ya pastinya ga ngaruh karna gue minta cek ap isolation tapi solusinya restart modem, setelah gue kontak juga via email dan twitter cs indihome juga sepertinya bingung dengan masalahnya, jadi langsung disuruh isi form kendala.

Karna minim info tentang masalah Google Nest ini sambil gue twitteran nunggu balesan cs indihome gue cari lah "AP Isolation" di pencarian twitter dan nemu juga yang kendalanya sama... Akhirnya gue ga sendirian

Setelah reply replyan twit dengan mas aziz, gue tanya "ada solusi ga bro dari indihome ?" mas aziz ini memberikan balasan sekaligus solusi sebagai berikut 

![sensor karna ga izin yang punya akun guys](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjupYaycW-y2qv2pQYF3hg2vcQYIJwGy3eeTYjsH5iuFbKjTBVyylAbls65g5zLCZ9AKi_XeKEICMEtAB6oLGGxNSJhX2PVtmhR2lQ2tp6x5Q0vtiJfR_cPuR_nmRNAxQjxQnpA9w6Eg384/w519-h219/image.png)

sensor karna ga izin yang punya akun guys

Jadi untuk masalah ini solusinya menggunakan router lain yang disambung dari routernya indihome
Tapi sampe sekarang gue belum lakuin ini karna beberapa hal, salah satunya listrik yang dimana 2 router berjalan selama 24jam, yang kedua kaya aneh aja gitu punya 2 wifi dan alasan yang ketiga adalah masa udah beli google nest sort paling murah jadi harus beli router yang harganya bisa sama kaya beli google nest yang garansi indo.

Akhirnya gue punya ide daripada harus beli ye kan mending gue buat wifi sendiri aja ngandalin komputer gue, karna punya receiver wifi merk tp-link WN727n bekas laptop gue yang wifi adapternya rusak, receiver itu gue pasang di PC dan dijadiin "router portable" dan install aplikasi Connectify

![Connectify to Google Nest](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgImb_vnfGvPhL4zB5spamb17pcb880IdHTzinsYP0p7ZTh_za6mV86c205wIEb0iehHb4wGyz-DSD_ecxTRT7Ttfm7rNTxl2hf2WfqIwMgaVZM_fCw276CRLrldYhYuhWwkU-F4JPWugKd/w258-h466/image.png)

Akhirnya komplain gue ke tokopedia dibatalkan, indihome tak kunjung ada solusi. Dan sampe sekarang Google Nest gue bisa berjalan ketika komputer gue nyala saja.

## Kesimpulan dan Solusi

Setelah saya mencoba-coba akhirnya dapet solusi, yaitu dengan cara menggunakan koneksi dummy.
Misalnya kamu punya wifi yang ingin konek dengan google nest dengan SSID 'wifialdisaw'
Non aktifkan 'wifialdisaw' yang asli dan buat koneksi dengan hotspot hp atau dengan connectify dengan SSID yang sama yaitu 'wifialdisaw' lalu setup ulang google nestnya.
Setelah set up dan berhasil connect sekarang non aktifkan wifi dummy tadi, dan aktifkan wifi yang asli
Selamat berhasil terkoneksi dengan normal antara google nest dengan wifi yang diinginkan

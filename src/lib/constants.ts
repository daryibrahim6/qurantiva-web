export const CONTACTS = {
  instagram: "https://instagram.com/qurantiva.id",
  email: "qurantiva@gmail.com",
  waPrimary: "6288231134417",
  waAlt: "6285882893569",
  waPrimaryDisplay: "+62 882-3113-4417",
  waAltDisplay: "+62 858-8289-3569",
};

export const NAV_LINKS = [
  { label: "Beranda", href: "/#hero" },
  { label: "Keunggulan", href: "/#features" },
  { label: "Program", href: "/#programs" },
  { label: "Paket", href: "/#pricing" },
  { label: "Mentor", href: "/#mentors" },
  { label: "FAQ", href: "/#faq" },
];

export const FEATURES = [
  {
    icon: "UserCheck",
    title: "Belajar Private",
    desc: "Pembelajaran 1-on-1 yang intens dengan pengajar berpengalaman. Fokus 100% pada perkembanganmu.",
  },
  {
    icon: "RefreshCw",
    title: "Bisa Request Ganti Ustadz/ah",
    desc: "Tidak cocok dengan mentor? Kamu bisa request ganti tanpa biaya tambahan. Kenyamananmu adalah prioritas.",
  },
  {
    icon: "CalendarClock",
    title: "Jadwal Fleksibel",
    desc: "Waktu belajar yang sepenuhnya adaptif dan dapat disesuaikan dengan kesibukanmu.",
  },
  {
    icon: "BookOpen",
    title: "Bisa Request Materi",
    desc: "Kamu bisa request materi tertentu agar proses belajar lebih tepat sasaran dan efisien.",
  },
  {
    icon: "ChartLine",
    title: "Laporan Progress Berkala",
    desc: "Evaluasi capaian belajar di setiap pertemuan. Tersedia gratis untuk memantau perkembangan secara transparan.",
  },
  {
    icon: "Users",
    title: "Komunitas",
    desc: "Layanan komunitas bagi siapa saja yang pernah belajar di Qurantiva. Di sini kita berkembang bersama-sama.",
  },
];

export const PROGRAMS = [
  {
    title: "Kelas Halaqah",
    desc: "Kelas gratis yang dilaksanakan sewaktu-waktu untuk komunitas Qurantiva, yang khusus diperuntukkan untuk Alumni yang pernah belajar di sini.",
    badge: "Gratis",
  },
  {
    title: "Kelas Private",
    desc: "Kelas intensif dengan bimbingan 1-on-1, kurikulum terarah, dan fleksibel. Setiap siswa dipastikan mendapat pendampingan sesuai target dan ritme belajar.",
    badge: "Populer",
  },
  {
    title: "Kelas Starter",
    desc: "Kelas 1-on-1 bersama tutor selama 1 sesi untuk mengecek kemampuanmu secara akurat. Sekaligus sebagai gerbang awal menjadi bagian dari komunitas Qurantiva.",
    badge: "Trial",
  },
  {
    title: "Kelas Berkelompok",
    desc: "Model pembelajaran Al-Qur'an bersama dalam kelompok kecil dengan seorang pengajar. Peserta belajar membaca dan memperbaiki bacaan secara kolektif.",
    badge: "Sosial",
  },
];

export const METHODS = [
  {
    name: "Pendekatan Ramah & Menyentuh Hati",
    desc: "Menggunakan pendekatan \"keibuan\" yang sabar, ramah, dan penuh kasih sayang. Murid belajar tanpa rasa takut salah atau tertekan.",
  },
  {
    name: "Berorientasi Tartil Sejak Awal",
    desc: "Tidak hanya mengejar kelancaran atau kecepatan membaca, metode ini menekankan ketepatan tajwid dan makhraj secara benar sejak halaman pertama.",
  },
  {
    name: "Sistem Belajar Terstandar",
    desc: "Setiap tahapan dan jilid memiliki parameter kelulusan yang jelas dan baku, memastikan kualitas bacaanmu terjamin mutunya secara konsisten.",
  },
  {
    name: "Mudah Dipahami Segala Usia",
    desc: "Menggunakan nada atau irama khas yang konstan saat melafalkan ayat. Hal ini mempermudah ingatan visual dan auditori, baik untuk anak-anak maupun dewasa.",
  },
  {
    name: "Efektif & Efisien Waktu",
    desc: "Pola pembelajarannya dirancang terstruktur dan langsung pada inti materi. Murid bisa melihat perkembangan kualitas bacaannya secara nyata dalam waktu yang relatif lebih terukur.",
  },
];

export const PRICING = [
  {
    name: "Paket I",
    price: "Rp 300.000",
    period: "/paket",
    features: [
      "4x pertemuan",
      "Sesi privat eksklusif 1-on-1",
      "Jadwal fleksibel",
      "Free Materi",
      "Laporan perkembangan",
      "Qurantiva Circle",
      "Guru Ngaji Bersertifikat",
    ],
    highlight: false,
    ctaText: "Pilih Paket I",
  },
  {
    name: "Paket II",
    price: "Rp 600.000",
    period: "/paket",
    features: [
      "8x pertemuan",
      "Sesi privat eksklusif 1-on-1",
      "Jadwal fleksibel",
      "Free Materi",
      "Laporan perkembangan",
      "Qurantiva Circle",
      "Guru Ngaji Bersertifikat",
      "Diskon Pembelian Kedua",
    ],
    highlight: true,
    ctaText: "Pilih Paket II",
  },
  {
    name: "Paket III",
    price: "Rp 800.000",
    period: "/paket",
    features: [
      "12x pertemuan",
      "Sesi privat eksklusif 1-on-1",
      "Jadwal fleksibel",
      "Free Materi",
      "Laporan perkembangan",
      "Qurantiva Circle",
      "Guru Ngaji Bersertifikat",
      "Diskon Pembelian Kedua",
    ],
    highlight: false,
    ctaText: "Pilih Paket III",
  },
  {
    name: "Kelas Berkelompok",
    price: "Rp 300.000",
    period: "/program",
    features: [
      "Belajar dalam kelompok kecil",
      "Suasana interaktif bersama teman",
      "Jadwal tetap",
      "Free Materi",
      "Laporan perkembangan",
      "Qurantiva Circle",
      "Guru Ngaji Bersertifikat",
    ],
    highlight: false,
    ctaText: "Pilih Berkelompok",
  },
  {
    name: "Kelas Starter",
    price: "Rp 25.000",
    period: "/sesi",
    features: [
      "Placement Test Result",
      "Qurantiva Circle",
      "Tracker konsisten mengaji",
      "Konsultasi program belajar",
      "Laporan evaluasi awal",
    ],
    highlight: false,
    ctaText: "Coba Sekarang",
  },
  {
    name: "Kelas Halaqah",
    price: "Gratis",
    period: "",
    features: [
      "Khusus alumni Qurantiva",
      "Qurantiva Circle",
      "Teman baru sesama santri",
      "Gratis Materi",
      "Kelas bersama Ustadz/ah",
    ],
    highlight: false,
    ctaText: "Gabung Sekarang",
  },
];

export const COMPARISON = {
  features: [
    "Privat 1-on-1",
    "Jadwal Fleksibel",
    "Free Materi",
    "Laporan Progress",
    "Tracker Bulanan",
    "Qurantiva Circle",
    "Guru Bersertifikat",
    "Diskon Pembelian Kedua",
    "Placement Test",
    "Kelas Gratis",
  ],
  programs: [
    {
      name: "Private",
      values: [true, true, true, true, true, true, true, true, false, false],
    },
    {
      name: "Berkelompok",
      values: [false, false, true, true, false, true, true, false, false, false],
    },
    {
      name: "Starter",
      values: [true, true, false, false, false, true, false, false, true, false],
    },
    {
      name: "Halaqah",
      values: [false, false, true, false, false, true, false, false, false, true],
    },
  ],
};

export const COMMUNITY = [
  {
    icon: "Users",
    title: "Teman Seperjuangan",
    desc: "Temukan orang-orang yang ingin lancar baca Al-Qur'an, sama sepertimu.",
  },
  {
    icon: "Gift",
    title: "Tracker & Reward",
    desc: "Konsisten mengaji? Ada hadiah menanti! Pahala besar dari Allah SWT untuk setiap langkahmu.",
  },
  {
    icon: "BookOpen",
    title: "Kelas Gratis",
    desc: "Mendapat akses kelas gratis yang diadakan sewaktu-waktu untuk anggota komunitas.",
  },
  {
    icon: "Eye",
    title: "Perhatian Khusus",
    desc: "Proses belajarmu dicek secara berkala melalui tracker untuk memastikan perkembangan optimal.",
  },
  {
    icon: "Tag",
    title: "Diskon Eksklusif",
    desc: "Dapatkan diskon gila-gilaan untuk pembelian paket privat sebagai anggota circle.",
  },
  {
    icon: "Sparkles",
    title: "Lingkungan Positif",
    desc: "Dikelilingi orang-orang dengan frekuensi yang sama, ingin menjadi versi terbaik dirinya melalui petunjuk Al-Qur'an.",
  },
];

export const MENTOR_QUALITIES = [
  "Tersertifikasi Metode Ummi",
  "Berpengalaman dalam Pengajaran",
  "Bersanad (Sanad Al-Qur'an)",
  "Akademisi Ilmu Al-Qur'an & Tafsir",
  "Hafidz / Hafidzah Al-Qur'an",
  "Lulusan Pesantren Terkurasi",
];

export const CERTIFICATES = [
  {
    title: "Sertifikasi Metode Ummi",
    desc: "Seluruh pengajar telah lulus standardisasi dan memegang lisensi mengajar resmi langsung dari Ummi Foundation.",
  },
  {
    title: "Alumni Pesantren Terkurasi",
    desc: "Tutor merupakan lulusan pondok pesantren pilihan yang memiliki kedalaman ilmu tajwid, makhraj, dan pemahaman Al-Qur'an yang kuat.",
  },
  {
    title: "Akademisi Pendidikan Islam",
    desc: "Tutor memiliki latar belakang pendidikan di bidang studi Islam, memastikan penyampaian materi dilakukan secara terstruktur dan mudah dipahami.",
  },
  {
    title: "Mentor Privat Teruji (Bintang 5)",
    desc: "Pengajar dipilih bukan cuma karena ilmunya, tapi juga karakter yang ramah, komunikatif, dan sabar dalam membimbing murid dari nol secara privat.",
  },
];

export const FAQS = [
  {
    question: "Bagaimana sistem pembelajaran di Qurantiva?",
    answer:
      "Pembelajaran dilakukan secara online interaktif 1-on-1 (privat) atau kelas kelompok kecil via Zoom/Google Meet.",
  },
  {
    question: "Kenapa memilih Qurantiva dibanding belajar mandiri?",
    answer:
      "Belajar membaca Al-Qur'an membutuhkan guru (talaqqi) untuk memastikan ketepatan makhraj dan tajwid secara langsung agar tidak mengubah arti. Di Qurantiva, Anda dibimbing oleh tutor bersertifikasi resmi yang ramah, komunikatif, memiliki kontrol kualitas yang ketat, serta jadwal yang fleksibel.",
  },
  {
    question: "Usia berapa yang bisa ikut Qurantiva?",
    answer:
      "Qurantiva terbuka untuk segala usia, mulai dari anak-anak, remaja, hingga dewasa/pekerja sibuk. Metode yang kami gunakan sangat adaptif sehingga ramah untuk anak-anak dan tetap menyenangkan bagi dewasa yang ingin belajar dari nol lagi.",
  },
  {
    question: "Bagaimana jika berhalangan hadir?",
    answer:
      "Anda dapat mengajukan reschedule (jadwal ulang) kelas dengan melakukan konfirmasi kepada admin atau tutor maksimal 2 jam sebelum kelas dimulai agar hak kuota belajar Anda tidak hangus.",
  },
  {
    question: "Metode apa yang digunakan di Qurantiva?",
    answer:
      "Kami menggunakan Metode Ummi secara penuh. Metode terstandar ini berfokus pada pendekatan yang sabar, ramah, pembiasaan bacaan tartil sejak awal, serta memiliki parameter kelulusan jilid yang jelas dan terukur.",
  },
  {
    question: "Berapa durasi per pertemuan?",
    answer:
      "Durasi belajar maksimal 50 menit (privat). Durasi ini dirancang sangat efisien agar murid tetap fokus, tidak jenuh, dan mudah diselipkan di sela-sela kesibukan harian.",
  },
  {
    question: "Apakah murid bisa memilih gender tutor?",
    answer:
      "Bisa dan sangat disarankan. Demi menjaga kenyamanan dan batasan syar'i, murid laki-laki akan dibimbing oleh tutor laki-laki, dan murid perempuan/muslimah akan dibimbing oleh tutor wanita (muslimah).",
  },
  {
    question: "Apakah murid akan mendapatkan sertifikat setelah lulus?",
    answer:
      "Ya. Selain fokus utama pada peningkatan kualitas bacaan yang divalidasi langsung oleh guru, murid yang telah menyelesaikan tingkatan jilid atau level tertentu akan mendapatkan progress report resmi dan sertifikat kelulusan.",
  },
  {
    question: "Apakah ada laporan progres berkala setelah sesi mengaji selesai?",
    answer:
      "Ada. Kami menyediakan laporan progres berkala untuk setiap peserta. Setelah sesi selesai, tutor akan memperbarui catatan perkembangan belajar Anda ke dalam dashboard sheet khusus. Sheet ini bisa diakses secara transparan kapan saja, baik oleh peserta maupun tutor, sehingga Anda bisa melihat langsung grafik peningkatan kualitas bacaan Anda dari waktu ke waktu.",
  },
  {
    question: "Apakah ada tes kemampuan terlebih dahulu sebelum mulai mengaji?",
    answer:
      "Ada. Demi menjaga kualitas agar materi belajar pas dengan kemampuan Anda, Qurantiva menyediakan 3 opsi tes yang bisa dipilih sesuai kenyamanan Anda:\n\nOpsi 1: Lewat Kelas Starter (Bertemu Tutor Langsung) - Sesi privat 1-on-1 via Zoom selama 20 menit bersama tutor untuk dicek langsung kemampuannya dan mendapatkan laporan evaluasi resmi. (Infaq kelas starter: Rp25.000).\n\nOpsi 2: Mengisi Placement Test di Formulir Pendaftaran - Saat mengisi form daftar privat, pilih opsi \"Ya\" pada bagian tes. Anda cukup menjawab beberapa soal singkat dan mengunggah (upload) rekaman video/audio saat membaca Surat Al-Mu'minun ayat 1-10. Tim kami akan menganalisisnya dan Anda bisa langsung belajar sesuai level pada pertemuan pertama.\n\nOpsi 3: Tes Langsung di Pertemuan Pertama Mengaji - Jika Anda tidak ingin repot mengisi tes di form atau ikut kelas starter, Anda bisa langsung bayar dan ikut kelas. Namun, pertemuan pertama akan digunakan full oleh tutor untuk menguji kemampuan Anda, sehingga materi belajar yang sesuai baru akan dimulai pada pertemuan kedua.",
  },
  {
    question: "Apakah ada program lanjutan setelah saya menyelesaikan kelas di Qurantiva?",
    answer:
      "Ada. Khusus untuk seluruh alumni yang pernah belajar di Qurantiva, kami menyediakan Kelas Halaqah secara gratis. Program ini dirancang khusus sebagai wadah bagi para alumni untuk terus menjaga kelancaran bacaan, murajaah bersama, dan tetap terhubung dengan lingkungan belajar yang positif tanpa dipungut biaya tambahan.",
  },
  {
    question: "Apa saja yang perlu saya siapkan sebelum kelas dimulai?",
    answer:
      "Anda hanya perlu menyiapkan perangkat (HP/Laptop) dengan koneksi internet yang stabil, aplikasi Zoom atau Google Meet (buku jilid Metode Ummi akan kami sediakan jika Anda baru mulai dari dasar).",
  },
  {
    question: "Bagaimana jika saya benar-benar mulai dari nol dan belum tahu huruf hijaiyah sama sekali?",
    answer:
      "Tidak perlu khawatir. Justru Qurantiva adalah tempat yang paling aman untuk mulai dari nol. Tutor kami dilatih untuk membimbing dengan metode yang sangat sabar, ramah, dan tanpa menghakimi (no-judgmental). Anda akan diajarkan pelan-pelan dari pengenalan bentuk huruf paling dasar hingga lancar.",
  },
  {
    question: "Apakah paket belajar ini otomatis diperpanjang setelah sesi habis?",
    answer:
      "Tidak. Setelah paket pertemuan Anda habis (baik paket 4, 8, atau 12 sesi), admin kami akan mengirimkan konfirmasi terlebih dahulu apakah Anda ingin melanjutkan ke paket berikutnya atau tidak. Tidak ada sistem potong saldo otomatis.",
  },
  {
    question: "Apakah waktu belajar bisa berubah-ubah setiap minggu?",
    answer:
      "Tergantung jenis kelas yang Anda pilih. Untuk Kelas Privat dan Kelas Starter, jadwalnya bersifat fleksibel dan bisa disesuaikan dengan waktu luang Anda. Namun, untuk Kelas Berkelompok dan kelas Halaqah, jadwalnya sudah ditetapkan secara tetap sejak awal program demi kenyamanan bersama seluruh peserta dalam kelompok tersebut.",
  },
];

export const PEKERJAAN_OPTIONS = [
  "Pelajar/Mahasiswa",
  "Karyawan Swasta",
  "PNS/ASN",
  "Wiraswasta",
  "Ibu Rumah Tangga",
  "Guru/Dosen",
  "Profesional",
  "Lainnya",
];

export const PAKET_OPTIONS = [
  "Paket I: Rp 300.000",
  "Paket II: Rp 600.000",
  "Paket III: Rp 800.000",
  "Kelas Berkelompok: Rp 300.000",
  "Kelas Starter: Rp 25.000",
];

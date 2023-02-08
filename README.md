# Case tanıtımı;

# Case React ile geliştirdim.

Casede state managment için redux toolkit kullandım. Örnek resimlerden yola çıkarak case’in çoklu sayfa olacağını düşündüm bu yüzden react-router-dom paketini kullandım. Css için scss kullandım. Testler içinse React’in içerinde default gelen react test paketini kullandım. React’in içerisinde default olarak gelen eslint paketi ile kodlarımı analiz ederek çalıştım. Componentlerimin içerisinde feature component ve generic component kullandım. Api olarak case’de verilen omdbapi.com kullandım.

# Case’de dosyalama yapısı şu şekilde
Assets
Components
Core
Page
Services
Store

Assets/scss klasörünün içerisinde reset css dosyamı tutuyorum.

# Components dosyamın içerisinde;
detailMovie klasöründe index.js film düzenleme component’im bulunuyor.

layout içerinde tüm sayfalarda gözükecek Header.js dosyam bulunuyor.

movie içerisinde filmlerin listelendiği kartı oluşturan index.js filmleri listeleyen MovieList.js dosyam silme işleminde çıkan popup için ise Popup.js dosyam bulunuyor.

Search içerisinde search kartımı oluşturan bir adet index.js dosyası ve film ekleme işlemi için de bir adet Popup.js dosyam bulunuyor.
Button ve input componentim ise case de kullandığım input ve buttonlar için.

Icon componentim ise case de kullandığım icon’larım için.

Core/utils dosyamın içerisinde case’de kullandığım bazı fonksiyonlar bulunuyor bunların yanı sıra bazı fonksiyonların test kodları da burada bulunuyor.



# Page klasöründe ise react-router-dom ile erişim sağladığım sayflarım bulunuyor bunlar;

404 / sayfa bulunamama durumu için

Detailmovie / film düzenleme sayfam için

Layout / tüm sayfalarda gözükecek ve diğer sayfları içerisinde listeleyecek outline yapısı için bulunuyor.

Listmovie / filmlerin listelendiği sayfam için

İndex.js dosyam ise anasayfamı temsil ediyor aynı zamanda her sayfa yanında kendi scss dosyasını da barındırıyor.


# Services dosyam ise data işlemlerini barındırıyor. Yapı olarak çoklu data senaryoları için hazırladım.

Services.js dataların çekileceği fonksiyonları barındırıyor.

Movie.js dosyası film datalarını çekmek için bulunuyor

İndex.js dosyası ise tüm data işlem dosyalarını toplayıp tek bir yerden sunmak için var.

# Store dosyam ise state management için redux barındırıyor bu dosyalama yapısıda çoklu state management durumları için tasarladım.

Movie.js dosyam film statelerinin yönetildiği dosyam.

İndex.js ise tüm state managmentlerin toplanıp tek bir yerden sunumu için.


# Router.js dosyam ise react router dom ile sayfaların yönlendirmelerini ayarladığım yer.


# Yapılanlar;

# Film Adı : Yapılacak iş ile ilgili 255 karakteri geçmeyecek şekilde yalnızca alfanümerik karakterler içeren bir başlık metnidir.

Alphanumeric adıyla oluşturduğum fonksiyon ile form validasyonu sırasında Başlık kontrol edilir eğer alfanümerik(ve boşluk) karakter dışında bir şey var ise hata verir

# Film eklenirken tüm alanların doldurulması zorunlu tutulmalıdır.
 Bunu useState ve yazdığım bir form kontrol fonksiyonu(formValidation) ile sağlıyorum. Bu noktada formik gibi gelişmiş form kontrol paketleri kullanılabilirdi ancak bununla alakalı case de kesin bir şey yazmadığı için custom yazmayı tercih ettim

# Listelemede, en güncel tarih den geçmiş tarihe doğru ve IMDB puanı en yüksekten en düşüğe doğru sıralanması.
 Storeden verileri çekip oluşturduğum listelem fonksiyonu(listMovie) ile istenilen şekilde listeleme yapıyorum.

 Burada önce verinin tarihini kontrol ediyor ve tarihe göre azalan sırada listeliyor eğer tarihler aynı ise imbdb puanına göre azalan sırada sırada listeliyor

# Listelemede ad ve  film türü, film yılı ve IMDB puanına göre filtreleme özelliği.  

Burada ad göre listeleme için react-router-dom params özelliklerini kullandım url de oluşturduğum arama sözcüğünü filtreleme için kullandım bu noktada farklı kullanımlarda yapılabilirdi store üzerinden ya da useState üzerinden de yönetilebilirdi.
Film türü film yılı ve IMDB puanına göre listeleme için filterArray adında bir fonksiyon yazdım filtreleme işlemi yapılınca gelen diziyi birde listMovie fonksiyonundan geçirip gelen listeyide tarih ve imdb puanına göre listeliyor.

# Listedeki filmleri düzenleme özelliği (film adı, IMDB puanı) 
film listeleme sayfasında filmlerden birinin detayına gidip onun ismini ve imdb puanını düzenliyebilirsiniz bu noktada düzenlenen puanı filtrelemek ve olası UI bozukluklarını engellemek için lastDigitDotRemove fonksiyonu ile filterVoteChange fonksiyonlarını yazdım ve kullandım.

# Silme özelliği
herhangi bir filme gelip silme butonuna basınca onaylamak için popup çıkar onaylarsanız siler onaylamazsanız popup kapanır. Burada popup durumunu store üzerinden kontrol ediyorum bu noktada bir useState ile de kontrol edilebilirdi ancak daha düzenli olucağını düşündüğüm için store da kontrol ediyorum.

# Responsive desteği olmalı. 
Tüm sayfalarda responsive desteği mevcuttur.

# Oluşturulan film kayıtları Web storage üzerinde bir alanda yönetilerek, tarayıcıyı kapatıp açtığında bile veriler ilgili tarayıcıda durmaya devam etmeli.
verileri data çekilir çekilmez localStorageye movie adında bir alana taşıyorum ve movie alanı localStorage den silinene kadar tarayıcı kapansa bile verileri oradan çekmeye devam ediyor.

# Uygulama içerisinde minimum bir tane feature component / generic component kullanılması
Componentlerimde örnekleri bulunuyor.

# omdbapi.com filmler çekilecek. Uygulama ilk açıldığında bir defaya mahsus bu veriler uygulamaya yüklenerek kullanılması. 
Bu kısımda api servisini kontrol ettiğimde birden fazla film veriyordu (s parametresi ile) ancak istenilen bilgileri içermiyordu orada bir şey fark ettim verilen dizide filmlerin imbd id leri vardı bende bunu kullanarak servis kısmında bir döngü oluşturdum gelen dizi sayısı kadar daha api servisine istek atıyordum ancak bu sefer i parametresine imbdb id sini göndererek dizide bulunan filmlerin detaylı bilgilerini çektim içlerinde id’lerinin olmadığını farkettim çekerken aynı zamanda içlerine id ataması da yaptım. Gelen dizide film tarihi bana lazımdı ancak string bir değer olarak geliyordu ve benim ekleme yaparken elde ettiğim tarih değerinden farklıydı ve bazı dizilerin tarih bilgisi bulunmuyordu bu durumları gidermek için gelen dizi objelerinin tarih bilgisini kontrol edip eğer varsa date formatına çevirip daha sonra kendime uygun formata çevirip öyle diziye aktardım eğer yoksa da sabit bir tarih atması yaptım. ayrıca gelen datada başlıklar alfanümerik olmayan bazı değerler içeriyordu alfanümerik olmayan değerleri silip boşluk atıp tekrar objeye eklettim.

# Yukardaki özelliklerle ilgili unit veya intergation testlerin yazılması. 
Core/utils dosyamın altındaki fonksiyonlarım için bir kaç tane test senaryosu yazdım.

# ESLint veya benzeri bir static kod analiz teknolojisi kullanılarak geliştirme yapılması. 
Default olarak react dosyasının içerisinde eslint aracı geliyor onu kullanarak kodlama yaptım.

# UI olarak custom kodlama yaptım.


Toparlamam gerekirse bazı noktalarda buralar daha farklıda kodlanabilirdi dediğim noktalar oldu. Html, css ve regex yapısı bir tık daha iyi olabilirdi ancak sizi de daha fazla bekletmemek adına teslim etme kararı aldım.

Saygılarımla
Ebubekir yigen

<template>
  <div class="title">
    <h2 class="title-first">O NAMA</h2>
    <p class="title-desc">
    
    </p>
  </div>
  <div class="about-container">
    <h3 class="naslovi"><b>O NAMA</b></h3>
    <p class="abt-txt">Mi smo obiteljska tvrtka s dugogodišnjim iskustvom u pružanju usluga prijevoza putnika. <b>PELIKAN TRANSPORT&#8482;</b> je osnovan s vizijom da osigura siguran, pouzdan i udoban prijevoz za naše klijente. Naša strast prema kvaliteti usluge i zadovoljstvu klijenata čini nas jednim od vodećih pružatelja usluga iznajmljivanja autobusa u regiji. Naša predanost visokim standardima usluge ogleda se u svakom aspektu našeg poslovanja, od prvog kontakta s klijentom do završetka putovanja.</p>
    
    <h4><b>Naša misija</b></h4>
    <p>Naša misija je pružiti vrhunsku uslugu prijevoza koja zadovoljava sve potrebe naših klijenata, bilo da se radi o školskim izletima, poslovnim putovanjima, turističkim turama ili posebnim događanjima. Posvećeni smo sigurnosti, udobnosti i točnosti, uz stalno nastojanje da premašimo očekivanja naših korisnika. Vjerujemo da putovanje nije samo prijevoz od točke A do točke B, već iskustvo koje treba biti ugodno i bez stresa.</p>
    
    <h4><b>Naša vozila</b></h4>
    <p>Naša flota se sastoji od modernih autobusa opremljenih najnovijom tehnologijom za sigurnost i udobnost. Svi naši autobusi redovito prolaze tehničke preglede i održavanje kako bismo osigurali maksimalnu pouzdanost i sigurnost na cesti. Ponosni smo na čistoću i urednost naših vozila, jer vjerujemo da svaki putnik zaslužuje najbolje. Naši autobusi su također opremljeni Wi-Fi vezom, klima uređajem i udobnim sjedalima kako bi vaše putovanje bilo što ugodnije.</p>
    
    <h4><b>Naš tim</b></h4>
    <p>Naš tim čine iskusni i profesionalni vozači koji su uvijek spremni pružiti ljubaznu i pouzdanu uslugu. Vozači PELIKAN TRANSPORTA redovito prolaze obuku i certificiranje kako bi bili u skladu s najvišim standardima industrije. S ponosom možemo reći da naš tim svojom stručnošću i predanošću doprinosi uspjehu naše tvrtke. Svaki član našeg tima posvećen je pružanju izvanredne usluge i brizi za sigurnost svih putnika.</p>
    
    <h4><b>Zašto odabrati nas?</b></h4>
    <ul>
      <li><b>Iskustvo i profesionalnost:</b> S dugogodišnjim iskustvom u industriji, znamo kako ispuniti i nadmašiti očekivanja naših klijenata. Naša posvećenost detaljima i profesionalni pristup osiguravaju vrhunsku uslugu svakog puta.</li>
      <li><b>Sigurnost na prvom mjestu:</b> Naša vozila su redovito održavana i opremljena najnovijom tehnologijom za sigurnost putnika. Uvijek smo fokusirani na sigurnost naših putnika, što je naš glavni prioritet.</li>
      <li><b>Fleksibilnost i prilagodljivost:</b> Nudimo prilagođene usluge prijevoza kako bismo zadovoljili specifične potrebe svakog klijenta. Bilo da trebate prijevoz za malu grupu ili veliki događaj, prilagođavamo se vašim zahtjevima.</li>
      <li><b>Konkurentne cijene:</b> Vjerujemo da kvalitetna usluga ne mora biti skupa. Nudimo povoljne cijene uz visoku razinu usluge. Naš cilj je pružiti vrijednost za novac, bez kompromisa na kvaliteti.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Onama'
};

</script>

<style scoped>

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title-first{
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 20px;
}

.title-desc {
  font-size: 25px;
  color: #666;
  margin-bottom: 60px;
  margin-left: 300px;
  margin-right: 300px;
  flex-grow: 1;
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-size: 18px;
}

.naslovi {
  text-align: center;
}

.abt-txt {
  text-align: justify;
}

h4 {
  text-align: center;
}

p {
  text-align: justify;
}

ul {
  list-style-type: circle;
  text-align: center;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
  display: list-item;
  text-align: justify;
  max-width: 700px;
  margin: 0 auto 10px auto;
}


@media (max-width: 1200px) {
  .title-desc{
    margin-right: 200px;
    margin-left: 200px;
  }

}

@media (max-width: 992px) {
  .title-desc{
    margin-right: 100px;
    margin-left: 100px;
  }
 
}

@media (max-width: 768px) {
  .title-first{
    font-size: 70px;
  }
  .title-desc{
    margin-right: 50px;
    margin-left: 50px;
  }
 
}


</style>

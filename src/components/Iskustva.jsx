 import React from "react";
 import "./iskustva.scss";
 import beretini from "./beretini.jpeg";
 import milovan from "./milovan.jpg"

 import zena from "./slika-zene.jpg"
 import ema from "./ema.jpg";

 function Iskustva(){
   return(
    <div id="id-iskustva" className="iskustva">
      <h1 className="naslov">Recenzije</h1>
      <div className="ljudi">
      <div className="beretini">
        <h3>Matteo Berrettini</h3>
        <img className="slika-ber" src={beretini} alt="" />
        <p>"Kao sportista na visokom nivou suočavao sam se sa raznim preprekama u ishrani i traninzima. 
          Dugo godina sam tragao za idealnim konsultantima u toj oblasti. 2020. sam angažovao tim Konstruktora
           koji su uspeli da pronađu pravi program ishrane i treninga za moje telo. Njihova usluga je bila na vrhunskom nivou i mnogo je doprinela napretku moje karijere."
        </p>
      </div>
      <div className="milovan">
        <h3>Milovan Mišić</h3>
        <img className="slika-mil" src={milovan} alt="" />
        <p>"Kao čovek koji vodi firmu, bio sam previše opterećen poslom što je uticalo na moje zdravlje. 
          Dugo godina sam imao problem sa prekomernom telesnom težinom. Pomoć sam tražio od raznih fitnes trenera do 
          nutricionista ali bez uspeha. Slučajno sam čuo od prijatelja za Konstruktore, i od tada se sve promenilo. Uspeo sam da uz njihovu podršku postignem neverovatne rezultate. Njihove podrška, strušnost i posvećenost su za svaku pohvalu. Defitnitivno najbolji tim stručnjaka u ovoj oblasti."
        </p>
      </div>
      <div className="zena">
        <h3>Nina Petrić</h3>
        <img className="slika-zena" src={zena} alt="" />
        <p>"Grupu Konstruktora sam angažovala 2017. godine, u početku sam bila veoma skeptična povodom toga i nisam verovala da 
          mogu da postignem ovakve rezultate. Poslovno zauzeta žena na poziciji nemadžera malo pažnje sam posvećivala
           treningu i zdravoj ishrani što je sve dovelo do teškog zdravstvenog stanja. Uz pomoć stručne podrške Konstruktora uspela sam da se rešim tih problema i postignem neverovatne rezulatate."
        </p>
      </div>
      <div className="ema">
        <h3>Emma Raducanu</h3>
        <img className="slika-ema" src={ema} alt="" />
        <p>"Kao svaka mlada nadolazeća zvezda, vrlo je teško ispuniti očekivanja sportske i teniske javnosti. 
          Pored naravno svakodnevnog napornog rada i striktne dijete ja sam postizala odlične rezultate. 
          Međutim, uz pomoć Konstruktora sam uspela da podignem fitnes agilnost na mnogo veći nivo. Uz pomoć stručnih ljudi iz tima Konstruktora uspela sam da pronađem savršen balans koji se odrazio na rezultate u kratkom vremenskom periodu."</p>
      </div>
      </div>
    </div>
   )
 }

 export default Iskustva;

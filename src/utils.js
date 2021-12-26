const clients = [
  { "id": 1, "firstname": "Terrance", "lastname": "Souza", "email": "tsouza0@posterous.com", "phone": "9326433029", "birthyear": 1993 },
  { "id": 2, "firstname": "Marjy", "lastname": "Pattenden", "email": "mpattenden1@wordpress.com", "phone": "8936800393", "birthyear": 2004 },
  { "id": 3, "firstname": "Hagen", "lastname": "Paradis", "email": "hparadis2@exblog.jp", "phone": "2753492217", "birthyear": 1989 },
  { "id": 4, "firstname": "Jordan", "lastname": "Joice", "email": "jjoice3@soup.io", "phone": "3008952016", "birthyear": 2008 },
  { "id": 5, "firstname": "Baudoin", "lastname": "McMillan", "email": "bmcmillan4@cargocollective.com", "phone": "3132533129", "birthyear": 1996 },
  { "id": 6, "firstname": "Marcille", "lastname": "Brierly", "email": "mbrierly5@dropbox.com", "phone": "8337211347", "birthyear": 1997 },
  { "id": 7, "firstname": "Lorry", "lastname": "Fiddymont", "email": "lfiddymont6@ow.ly", "phone": "8844930161", "birthyear": 2010 },
  { "id": 8, "firstname": "Salim", "lastname": "McVeigh", "email": "smcveigh7@unc.edu", "phone": "4634452951", "birthyear": 2006 },
  { "id": 9, "firstname": "Flossi", "lastname": "Sill", "email": "fsill8@google.co.jp", "phone": "4092938237", "birthyear": 2002 },
  { "id": 10, "firstname": "Felicdad", "lastname": "Lovell", "email": "flovell9@whitehouse.gov", "phone": "9643727262", "birthyear": 2012 },
  { "id": 11, "firstname": "Peri", "lastname": "Trood", "email": "ptrooda@icq.com", "phone": "2792371051", "birthyear": 2004 },
  { "id": 12, "firstname": "Bo", "lastname": "Simoncelli", "email": "bsimoncellib@51.la", "phone": "4255775572", "birthyear": 2009 },
  { "id": 13, "firstname": "Kynthia", "lastname": "Terran", "email": "kterranc@twitter.com", "phone": "1283601683", "birthyear": 2003 },
  { "id": 14, "firstname": "Garrot", "lastname": "Rowcastle", "email": "growcastled@fema.gov", "phone": "8523127810", "birthyear": 2010 },
  { "id": 15, "firstname": "Teresina", "lastname": "Ellgood", "email": "tellgoode@mail.ru", "phone": "7546741899", "birthyear": 2012 },
  { "id": 16, "firstname": "Rosco", "lastname": "Grahl", "email": "rgrahlf@auda.org.au", "phone": "5866859893", "birthyear": 1985 },
  { "id": 17, "firstname": "Bo", "lastname": "Prewer", "email": "bprewerg@paypal.com", "phone": "6014853667", "birthyear": 2005 },
  { "id": 18, "firstname": "Latia", "lastname": "Simonard", "email": "lsimonardh@hubpages.com", "phone": "7786619268", "birthyear": 1998 },
  { "id": 19, "firstname": "Laird", "lastname": "Sessions", "email": "lsessionsi@google.es", "phone": "8901288648", "birthyear": 2012 },
  { "id": 20, "firstname": "Bethanne", "lastname": "Lawfull", "email": "blawfullj@cpanel.net", "phone": "5583512515", "birthyear": 1999 },
  { "id": 21, "firstname": "Dawn", "lastname": "Clemencet", "email": "dclemencetk@networksolutions.com", "phone": "2427090238", "birthyear": 2007 },
  { "id": 22, "firstname": "Jolie", "lastname": "Alliston", "email": "jallistonl@disqus.com", "phone": "3893941181", "birthyear": 1961 },
  { "id": 23, "firstname": "Carla", "lastname": "Peeke", "email": "cpeekem@netlog.com", "phone": "6357753554", "birthyear": 2009 },
  { "id": 24, "firstname": "May", "lastname": "Dawnay", "email": "mdawnayn@walmart.com", "phone": "1104491270", "birthyear": 1990 },
  { "id": 25, "firstname": "Cyrillus", "lastname": "Tanser", "email": "ctansero@java.com", "phone": "7488179431", "birthyear": 2011 },
  { "id": 26, "firstname": "Angelico", "lastname": "Cornehl", "email": "acornehlp@cyberchimps.com", "phone": "3273333407", "birthyear": 1986 },
  { "id": 27, "firstname": "Care", "lastname": "Broschek", "email": "cbroschekq@domainmarket.com", "phone": "1581183109", "birthyear": 2007 },
  { "id": 28, "firstname": "Lisha", "lastname": "Beedham", "email": "lbeedhamr@github.com", "phone": "6211432009", "birthyear": 2011 },
  { "id": 29, "firstname": "Victor", "lastname": "Wybern", "email": "vwyberns@comsenz.com", "phone": "2389594958", "birthyear": 2011 },
  { "id": 30, "firstname": "Randy", "lastname": "Beuscher", "email": "rbeuschert@pinterest.com", "phone": "9009191706", "birthyear": 2007 },
  { "id": 31, "firstname": "Dorey", "lastname": "Harragin", "email": "dharraginu@wordpress.com", "phone": "2274074845", "birthyear": 2001 },
  { "id": 32, "firstname": "Appolonia", "lastname": "Eytel", "email": "aeytelv@reuters.com", "phone": "6398901244", "birthyear": 1988 },
  { "id": 33, "firstname": "Bettye", "lastname": "Perelli", "email": "bperelliw@people.com.cn", "phone": "2996965184", "birthyear": 1992 },
  { "id": 34, "firstname": "Ewell", "lastname": "Miroy", "email": "emiroyx@hostgator.com", "phone": "2647066577", "birthyear": 2006 },
  { "id": 35, "firstname": "Antin", "lastname": "Chetter", "email": "achettery@who.int", "phone": "9352048837", "birthyear": 1990 },
  { "id": 36, "firstname": "Arly", "lastname": "Copeland", "email": "acopelandz@1688.com", "phone": "5236857502", "birthyear": 2005 },
  { "id": 37, "firstname": "Karyn", "lastname": "Shambrook", "email": "kshambrook10@free.fr", "phone": "6103123844", "birthyear": 2009 },
  { "id": 38, "firstname": "Harriett", "lastname": "Kintzel", "email": "hkintzel11@feedburner.com", "phone": "6182900327", "birthyear": 2008 },
  { "id": 39, "firstname": "Raynor", "lastname": "Jore", "email": "rjore12@taobao.com", "phone": "9396226852", "birthyear": 1995 },
  { "id": 40, "firstname": "Nelson", "lastname": "Trousdell", "email": "ntrousdell13@plala.or.jp", "phone": "6401129842", "birthyear": 1970 },
  { "id": 41, "firstname": "Sallie", "lastname": "Salazar", "email": "ssalazar14@statcounter.com", "phone": "4284615087", "birthyear": 2008 },
  { "id": 42, "firstname": "Arnaldo", "lastname": "Jerred", "email": "ajerred15@mapy.cz", "phone": "2569595484", "birthyear": 2011 },
  { "id": 43, "firstname": "Ripley", "lastname": "Lavin", "email": "rlavin16@howstuffworks.com", "phone": "7227721815", "birthyear": 2013 },
  { "id": 44, "firstname": "Livvy", "lastname": "Bonifacio", "email": "lbonifacio17@ed.gov", "phone": "6048425088", "birthyear": 1998 },
  { "id": 45, "firstname": "Baryram", "lastname": "Tuppeny", "email": "btuppeny18@springer.com", "phone": "9981684779", "birthyear": 1992 },
  { "id": 46, "firstname": "Almeria", "lastname": "Turbefield", "email": "aturbefield19@un.org", "phone": "8734938133", "birthyear": 1998 },
  { "id": 47, "firstname": "Ody", "lastname": "Zecchetti", "email": "ozecchetti1a@vk.com", "phone": "2553384287", "birthyear": 2007 },
  { "id": 48, "firstname": "Carilyn", "lastname": "Lowdwell", "email": "clowdwell1b@cnn.com", "phone": "9893790063", "birthyear": 1993 },
  { "id": 49, "firstname": "Lenore", "lastname": "Truckett", "email": "ltruckett1c@reuters.com", "phone": "1859679998", "birthyear": 1974 },
  { "id": 50, "firstname": "Noak", "lastname": "Cordingley", "email": "ncordingley1d@prlog.org", "phone": "9956666362", "birthyear": 2003 }
]

const dentists = [
  {
    id: 1,
    firstname: "Klaas",
    lastname: "Hoving",
    phone: "0678534219",
    email: "hoving@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  },
  {
    id: 2,
    firstname: "Marijke",
    lastname: "De Boer",
    phone: "0674523195",
    email: "deboer@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  },
  {
    id: 3,
    firstname: "Rutger",
    lastname: "Visser",
    phone: "0623004452",
    email: "visser@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  },
  {
    id: 4,
    firstname: "Willem",
    lastname: "Zwaan",
    phone: "0605663287",
    email: "zwaan@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  }
]

const assistants = [
  {
    id: 1,
    firstname: "Laura",
    lastname: "Bakker",
    phone: "0675623343",
    email: "bakker@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  },
  {
    id: 2,
    firstname: "Marlies",
    lastname: "Keizer",
    phone: "0676659988",
    email: "keizer@dentistcompanybvt.com",
    sick: "0",
    birthyear: ''
  }
]

const getRandomPatientName = () => {
  const person = clients[Math.floor(Math.random() * clients.length)];
  return `${person.firstname} ${person.lastname}`;
};

const getRandomDentistName = () => {
  const person = dentists[Math.floor(Math.random() * dentists.length)];
  return `${person.firstname} ${person.lastname}`;
};
const getRandomAssitantName = () => {
  const person = assistants[Math.floor(Math.random() * assistants.length)];
  return `${person.firstname} ${person.lastname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatientName(),
  dentist: getRandomDentistName(),
  assistant: getRandomAssitantName(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export {
  generateRandomAppointments,
  dentists,
  assistants,
  clients
}
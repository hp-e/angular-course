import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      {
        id: 1,
        firstName: 'Aretha',
        lastName: 'Hill',
        email: 'aliquet.lobortis@habitant.co.uk',
        phone: '967 39 151',
        company: 'Ac Ltd',
        remark: 'lacus, varius et,'
      },
      {
        id: 2,
        firstName: 'Jocelyn',
        lastName: 'Vasquez',
        email: 'nibh.vulputate@dignissimmagnaa.co.uk',
        phone: '926 82 421',
        company: 'Interdum Libero Associates',
        remark: 'quam a felis ullamcorper viverra.'
      },
      {
        id: 3,
        firstName: 'Latifah',
        lastName: 'Sanders',
        email: 'elit.fermentum.risus@lacinia.com',
        phone: '969 45 983',
        company: 'Placerat Orci Foundation',
        remark: 'tempus eu, ligula. Aenean euismod mauris eu elit. Nulla'
      },
      {
        id: 4,
        firstName: 'Porter',
        lastName: 'Guy',
        email: 'fringilla@VivamusnisiMauris.co.uk',
        phone: '947 85 978',
        company: 'Vivamus Inc.',
        remark: 'dis parturient montes, nascetur'
      },
      {
        id: 5,
        firstName: 'Castor',
        lastName: 'Atkins',
        email: 'neque@sagittisNullam.org',
        phone: '961 45 743',
        company: 'Vel Consulting',
        remark: 'taciti sociosqu ad litora torquent per conubia nostra, per'
      },
      {
        id: 6,
        firstName: 'Lucy',
        lastName: 'Hurley',
        email: 'pharetra.Nam.ac@sagittissemperNam.ca',
        phone: '953 79 036',
        company: 'Adipiscing Fringilla Porttitor Consulting',
        remark: 'elementum, lorem ut aliquam iaculis, lacus'
      },
      {
        id: 7,
        firstName: 'Ria',
        lastName: 'Bridges',
        email: 'congue.turpis@enim.net',
        phone: '962 76 963',
        company: 'Lectus Pede Industries',
        remark: 'Aliquam'
      },
      {
        id: 8,
        firstName: 'Fletcher',
        lastName: 'Gilmore',
        email: 'Morbi@sed.co.uk',
        phone: '983 92 950',
        company: 'Elit Foundation',
        remark:
          'tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec'
      },
      {
        id: 9,
        firstName: 'Janna',
        lastName: 'Ramos',
        email: 'Integer.aliquam.adipiscing@arcu.org',
        phone: '917 15 138',
        company: 'Morbi Consulting',
        remark: 'tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu'
      },
      {
        id: 10,
        firstName: 'Emery',
        lastName: 'Oliver',
        email: 'Donec.non@ut.ca',
        phone: '964 29 180',
        company: 'Elementum Lorem Industries',
        remark: 'sociis natoque penatibus et magnis dis parturient montes,'
      },
      {
        id: 11,
        firstName: 'Keely',
        lastName: 'Walters',
        email: 'urna@aenim.org',
        phone: '951 75 749',
        company: 'Pellentesque A Corp.',
        remark: 'lacinia. Sed congue, elit sed consequat auctor, nunc'
      },
      {
        id: 12,
        firstName: 'Glenna',
        lastName: 'Burns',
        email: 'euismod@dignissimtemporarcu.edu',
        phone: '984 52 323',
        company: 'Cum Sociis Natoque Institute',
        remark: 'nulla. Cras'
      },
      {
        id: 13,
        firstName: 'Brady',
        lastName: 'Tucker',
        email: 'sociosqu.ad.litora@lobortis.com',
        phone: '996 53 429',
        company: 'Non Institute',
        remark: 'ut ipsum'
      },
      {
        id: 14,
        firstName: 'Kennan',
        lastName: 'Chavez',
        email: 'urna.justo.faucibus@Etiamlaoreetlibero.co.uk',
        phone: '992 13 223',
        company: 'Proin Mi Aliquam Institute',
        remark: 'iaculis enim, sit amet ornare lectus justo eu'
      },
      {
        id: 15,
        firstName: 'Ryan',
        lastName: 'Massey',
        email: 'lacinia.at@lobortisultricesVivamus.com',
        phone: '998 44 636',
        company: 'Placerat Orci Lacus LLP',
        remark: 'justo faucibus lectus, a sollicitudin orci sem'
      },
      {
        id: 16,
        firstName: 'Kyra',
        lastName: 'Perkins',
        email: 'Proin@urnajustofaucibus.ca',
        phone: '956 57 289',
        company: 'Non Massa LLP',
        remark: 'enim mi tempor lorem, eget mollis lectus pede'
      },
      {
        id: 17,
        firstName: 'Miriam',
        lastName: 'Farley',
        email: 'orci@porttitorvulputateposuere.edu',
        phone: '915 39 424',
        company: 'Nullam Nisl Industries',
        remark: 'consectetuer adipiscing elit.'
      },
      {
        id: 18,
        firstName: 'Miriam',
        lastName: 'Charles',
        email: 'habitant.morbi.tristique@turpisegestas.ca',
        phone: '940 53 403',
        company: 'Ipsum Suspendisse Non Corp.',
        remark: 'pede et'
      },
      {
        id: 19,
        firstName: 'Steven',
        lastName: 'Ortega',
        email: 'eu.turpis.Nulla@euligula.com',
        phone: '916 39 359',
        company: 'Integer Urna Institute',
        remark: 'purus. Nullam scelerisque neque sed sem egestas'
      },
      {
        id: 20,
        firstName: 'Catherine',
        lastName: 'Guzman',
        email: 'sollicitudin@Phasellusornare.org',
        phone: '994 77 602',
        company: 'Morbi Limited',
        remark: 'non'
      },
      {
        id: 21,
        firstName: 'Garrett',
        lastName: 'Walker',
        email: 'nisi.Aenean@Nullamnisl.ca',
        phone: '969 03 735',
        company: 'Amet Foundation',
        remark: 'mauris blandit mattis. Cras eget nisi dictum augue malesuada'
      },
      {
        id: 22,
        firstName: 'Charles',
        lastName: 'Blair',
        email: 'mi.felis@idnuncinterdum.edu',
        phone: '972 99 421',
        company: 'Ut Pharetra Sed Institute',
        remark: 'non, bibendum sed, est. Nunc laoreet lectus quis'
      },
      {
        id: 23,
        firstName: 'Kimberly',
        lastName: 'Gibbs',
        email: 'Fusce@arcuvel.ca',
        phone: '926 31 260',
        company: 'Vel Pede LLP',
        remark: 'Aliquam adipiscing lobortis risus.'
      },
      {
        id: 24,
        firstName: 'Zeph',
        lastName: 'Alvarado',
        email: 'Nam@morbitristique.com',
        phone: '932 18 322',
        company: 'Arcu Foundation',
        remark: 'faucibus leo,'
      },
      {
        id: 25,
        firstName: 'Cairo',
        lastName: 'Benton',
        email: 'pede.Cras@facilisis.co.uk',
        phone: '937 54 450',
        company: 'Sed Associates',
        remark: 'porttitor eros nec'
      },
      {
        id: 26,
        firstName: 'Ferris',
        lastName: 'Mason',
        email: 'at.nisi.Cum@ac.ca',
        phone: '937 82 506',
        company: 'Mollis LLC',
        remark: 'sem ut cursus'
      },
      {
        id: 27,
        firstName: 'Buffy',
        lastName: 'Oneill',
        email: 'leo.in@eratsemper.org',
        phone: '976 55 421',
        company: 'Turpis LLP',
        remark:
          'lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet'
      },
      {
        id: 28,
        firstName: 'Xavier',
        lastName: 'Maldonado',
        email: 'Proin.vel@facilisismagnatellus.com',
        phone: '992 78 156',
        company: 'Proin Vel Nisl Foundation',
        remark: 'posuere vulputate, lacus. Cras interdum. Nunc sollicitudin'
      },
      {
        id: 29,
        firstName: 'Lewis',
        lastName: 'Cortez',
        email: 'eu@sollicitudin.com',
        phone: '908 44 236',
        company: 'Montes PC',
        remark:
          'interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus'
      },
      {
        id: 30,
        firstName: 'Gil',
        lastName: 'Bennett',
        email: 'dui.nec@nequeIn.co.uk',
        phone: '920 96 250',
        company: 'Proin Dolor Inc.',
        remark: 'egestas,'
      },
      {
        id: 31,
        firstName: 'Cameron',
        lastName: 'Hoover',
        email: 'posuere.vulputate.lacus@enimgravidasit.net',
        phone: '929 02 767',
        company: 'Mollis Phasellus Libero LLC',
        remark: 'id, libero.'
      },
      {
        id: 32,
        firstName: 'Ryder',
        lastName: 'Lang',
        email: 'elementum.lorem.ut@vitae.edu',
        phone: '960 54 352',
        company: 'Eget Company',
        remark: 'Donec tincidunt. Donec vitae erat vel pede blandit congue.'
      },
      {
        id: 33,
        firstName: 'Winifred',
        lastName: 'Mercer',
        email: 'sociis.natoque@sitamet.net',
        phone: '950 81 749',
        company: 'Lorem Vehicula Et Ltd',
        remark: 'iaculis enim, sit amet ornare lectus justo eu arcu. Morbi'
      },
      {
        id: 34,
        firstName: 'Carson',
        lastName: 'Terrell',
        email: 'vel@suscipitest.ca',
        phone: '984 49 214',
        company: 'Sed Molestie Sed Foundation',
        remark: 'est. Nunc laoreet lectus quis massa. Mauris'
      },
      {
        id: 35,
        firstName: 'Kimberly',
        lastName: 'Durham',
        email: 'Etiam.vestibulum.massa@semegetmassa.org',
        phone: '974 52 241',
        company: 'In Molestie Corporation',
        remark: 'elit elit fermentum risus, at fringilla purus mauris'
      },
      {
        id: 36,
        firstName: 'Susan',
        lastName: 'Ryan',
        email: 'lectus@egetipsum.net',
        phone: '948 73 225',
        company: 'Ridiculus LLP',
        remark: 'pharetra nibh. Aliquam ornare,'
      },
      {
        id: 37,
        firstName: 'Hunter',
        lastName: 'Bruce',
        email: 'commodo.hendrerit@erat.net',
        phone: '992 49 705',
        company: 'Nulla Integer Vulputate Company',
        remark: 'nisi a odio semper cursus. Integer mollis. Integer tincidunt'
      },
      {
        id: 38,
        firstName: 'Paloma',
        lastName: 'Zimmerman',
        email: 'scelerisque.sed@tristiquepellentesque.ca',
        phone: '978 25 533',
        company: 'Dui Incorporated',
        remark:
          'dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu'
      },
      {
        id: 39,
        firstName: 'Naida',
        lastName: 'Mcclure',
        email: 'eget@aliquamarcuAliquam.net',
        phone: '913 35 813',
        company: 'Elementum Institute',
        remark: 'tellus, imperdiet non, vestibulum nec,'
      },
      {
        id: 40,
        firstName: 'Ramona',
        lastName: 'Frank',
        email: 'non.luctus@vitaealiquet.org',
        phone: '941 81 334',
        company: 'Tortor Incorporated',
        remark: 'feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam'
      },
      {
        id: 41,
        firstName: 'Matthew',
        lastName: 'Franks',
        email: 'magnis@habitantmorbitristique.co.uk',
        phone: '948 93 721',
        company: 'Cubilia Inc.',
        remark: 'purus,'
      },
      {
        id: 42,
        firstName: 'Lucius',
        lastName: 'Velasquez',
        email: 'eu.ultrices@actellusSuspendisse.edu',
        phone: '911 45 338',
        company: 'Non Egestas A LLC',
        remark: 'odio. Aliquam vulputate ullamcorper magna.'
      },
      {
        id: 43,
        firstName: 'Theodore',
        lastName: 'Roach',
        email: 'sapien.molestie.orci@NuncmaurisMorbi.org',
        phone: '919 88 481',
        company: 'Quis Turpis Company',
        remark: 'Sed neque. Sed eget lacus. Mauris non'
      },
      {
        id: 44,
        firstName: 'Devin',
        lastName: 'Head',
        email: 'non.ante.bibendum@Nunc.ca',
        phone: '939 67 788',
        company: 'Aenean Eget Metus Associates',
        remark: 'magna. Duis dignissim'
      },
      {
        id: 45,
        firstName: 'Alfonso',
        lastName: 'Myers',
        email: 'in.faucibus.orci@dignissimMaecenasornare.com',
        phone: '919 21 390',
        company: 'Justo PC',
        remark: 'vestibulum massa rutrum magna. Cras convallis convallis dolor.'
      },
      {
        id: 46,
        firstName: 'Moana',
        lastName: 'Rush',
        email: 'metus@nascetur.org',
        phone: '962 20 742',
        company: 'Fermentum Convallis LLP',
        remark:
          'facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo'
      },
      {
        id: 47,
        firstName: 'Alisa',
        lastName: 'Dunn',
        email: 'leo@anteipsum.net',
        phone: '902 21 446',
        company: 'Lorem Ipsum Corp.',
        remark: 'diam dictum'
      },
      {
        id: 48,
        firstName: 'Yasir',
        lastName: 'Melton',
        email: 'sed@Suspendisseacmetus.org',
        phone: '934 33 504',
        company: 'Aliquam Iaculis Lacus Corp.',
        remark:
          'aptent taciti sociosqu ad litora torquent per conubia nostra, per'
      },
      {
        id: 49,
        firstName: 'Shea',
        lastName: 'Reynolds',
        email: 'fames.ac@natoquepenatibus.co.uk',
        phone: '937 65 069',
        company: 'Ultrices Consulting',
        remark: 'In mi pede, nonummy ut, molestie'
      },
      {
        id: 50,
        firstName: 'Amaya',
        lastName: 'Melton',
        email: 'id.ante@Sednecmetus.edu',
        phone: '983 74 097',
        company: 'Proin LLC',
        remark: 'et magnis'
      },
      {
        id: 51,
        firstName: 'Deirdre',
        lastName: 'Wade',
        email: 'eget.mollis@estNunc.co.uk',
        phone: '966 68 117',
        company: 'Nisi Corporation',
        remark: 'arcu. Nunc mauris. Morbi'
      },
      {
        id: 52,
        firstName: 'Libby',
        lastName: 'Huffman',
        email: 'gravida.molestie@Vivamusrhoncus.co.uk',
        phone: '931 05 785',
        company: 'Curabitur Industries',
        remark: 'feugiat'
      },
      {
        id: 53,
        firstName: 'Myles',
        lastName: 'Dean',
        email: 'odio@semvitae.com',
        phone: '969 88 200',
        company: 'Magnis Dis LLC',
        remark: 'Nunc ullamcorper, velit in aliquet'
      },
      {
        id: 54,
        firstName: 'Darrel',
        lastName: 'Graham',
        email: 'Pellentesque.ultricies@antelectus.edu',
        phone: '996 15 454',
        company: 'Nonummy Fusce Institute',
        remark:
          'ornare placerat, orci lacus vestibulum lorem, sit amet ultricies'
      },
      {
        id: 55,
        firstName: 'Shoshana',
        lastName: 'Shaffer',
        email: 'senectus.et@magnamalesuada.edu',
        phone: '936 75 594',
        company: 'Etiam Laoreet Libero Institute',
        remark: 'vitae, orci. Phasellus dapibus quam quis'
      },
      {
        id: 56,
        firstName: 'Otto',
        lastName: 'Turner',
        email: 'vel.nisl@enimsit.co.uk',
        phone: '906 45 925',
        company: 'Fusce Mollis Limited',
        remark: 'venenatis a,'
      },
      {
        id: 57,
        firstName: 'Abraham',
        lastName: 'Jordan',
        email: 'mauris@egestas.net',
        phone: '947 87 586',
        company: 'Urna Ltd',
        remark: 'nonummy ut, molestie in, tempus eu,'
      },
      {
        id: 58,
        firstName: 'Noel',
        lastName: 'Cochran',
        email: 'sed.orci.lobortis@adipiscingMaurismolestie.com',
        phone: '986 10 750',
        company: 'Neque Non Quam Industries',
        remark:
          'faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.'
      },
      {
        id: 59,
        firstName: 'Cheyenne',
        lastName: 'Wolf',
        email: 'vel@in.org',
        phone: '962 47 369',
        company: 'Iaculis Quis Corporation',
        remark: 'ornare'
      },
      {
        id: 60,
        firstName: 'Griffith',
        lastName: 'Robles',
        email: 'rhoncus@auctornuncnulla.org',
        phone: '931 54 019',
        company: 'Et Consulting',
        remark: 'per conubia nostra, per inceptos hymenaeos.'
      },
      {
        id: 61,
        firstName: 'Adena',
        lastName: 'Preston',
        email: 'Nam@risusMorbimetus.net',
        phone: '927 13 901',
        company: 'Non Corporation',
        remark: 'Nulla eu neque pellentesque massa lobortis ultrices. Vivamus'
      },
      {
        id: 62,
        firstName: 'Adria',
        lastName: 'Cash',
        email: 'nulla.Integer@lectusasollicitudin.co.uk',
        phone: '953 50 039',
        company: 'Urna LLP',
        remark:
          'molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est,'
      },
      {
        id: 63,
        firstName: 'Stella',
        lastName: 'Barton',
        email: 'ut.mi.Duis@inmolestie.ca',
        phone: '995 56 103',
        company: 'Integer Vitae Incorporated',
        remark: 'a mi fringilla mi lacinia mattis. Integer eu lacus.'
      },
      {
        id: 64,
        firstName: 'Constance',
        lastName: 'Casey',
        email: 'et@enimCurabitur.org',
        phone: '904 64 158',
        company: 'Nulla Facilisi Sed LLC',
        remark: 'luctus, ipsum leo elementum'
      },
      {
        id: 65,
        firstName: 'Bruno',
        lastName: 'Harmon',
        email: 'Suspendisse.aliquet@felispurus.co.uk',
        phone: '943 92 370',
        company: 'Vitae Velit Egestas Associates',
        remark: 'magna nec quam. Curabitur vel'
      },
      {
        id: 66,
        firstName: 'Hayes',
        lastName: 'Duke',
        email: 'imperdiet.dictum.magna@urna.edu',
        phone: '955 75 840',
        company: 'Luctus Limited',
        remark: 'faucibus id, libero. Donec consectetuer mauris id'
      },
      {
        id: 67,
        firstName: 'Abel',
        lastName: 'Holloway',
        email: 'dolor.sit.amet@accumsan.ca',
        phone: '943 00 233',
        company: 'Vitae Diam Proin Consulting',
        remark: 'neque. Morbi quis urna. Nunc'
      },
      {
        id: 68,
        firstName: 'Amaya',
        lastName: 'Emerson',
        email: 'posuere@nascetur.net',
        phone: '987 87 104',
        company: 'Diam Pellentesque Industries',
        remark: 'Mauris ut quam vel'
      },
      {
        id: 69,
        firstName: 'Sade',
        lastName: 'Greer',
        email: 'mus@molestieSedid.org',
        phone: '974 90 939',
        company: 'Etiam Corporation',
        remark: 'Nunc pulvinar arcu et'
      },
      {
        id: 70,
        firstName: 'Kyra',
        lastName: 'Estrada',
        email: 'metus@Crasdolor.co.uk',
        phone: '945 58 542',
        company: 'Facilisis Suspendisse Commodo Incorporated',
        remark: 'pharetra, felis eget'
      },
      {
        id: 71,
        firstName: 'Bernard',
        lastName: 'House',
        email: 'Cras.lorem.lorem@dapibus.com',
        phone: '909 23 640',
        company: 'Felis Donec LLP',
        remark: 'sem egestas blandit. Nam nulla magna, malesuada vel,'
      },
      {
        id: 72,
        firstName: 'Orlando',
        lastName: 'Hancock',
        email: 'tempor@vitae.edu',
        phone: '950 03 110',
        company: 'Tempor Erat Neque LLC',
        remark: 'et pede. Nunc sed orci lobortis augue scelerisque mollis.'
      },
      {
        id: 73,
        firstName: 'Rudyard',
        lastName: 'Moon',
        email: 'vitae@pellentesqueSeddictum.edu',
        phone: '932 17 721',
        company: 'Purus Accumsan Interdum Corp.',
        remark: 'nulla at'
      },
      {
        id: 74,
        firstName: 'Blaine',
        lastName: 'Tran',
        email: 'lorem.sit.amet@Proinvelit.org',
        phone: '912 22 593',
        company: 'Netus Et Malesuada Corporation',
        remark: 'tortor at risus.'
      },
      {
        id: 75,
        firstName: 'Aidan',
        lastName: 'Oneal',
        email: 'rutrum.magna@pretiumaliquetmetus.org',
        phone: '945 50 692',
        company: 'Adipiscing Corp.',
        remark: 'lectus pede,'
      },
      {
        id: 76,
        firstName: 'Vivian',
        lastName: 'Miles',
        email: 'Cum.sociis.natoque@estNunc.co.uk',
        phone: '943 56 553',
        company: 'Dictum Magna Corp.',
        remark: 'ipsum cursus vestibulum. Mauris'
      },
      {
        id: 77,
        firstName: 'Raya',
        lastName: 'Le',
        email: 'Morbi@accumsannequeet.ca',
        phone: '982 07 574',
        company: 'Felis Consulting',
        remark:
          'cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum'
      },
      {
        id: 78,
        firstName: 'Deirdre',
        lastName: 'Hutchinson',
        email: 'augue.ut@necorciDonec.ca',
        phone: '925 40 886',
        company: 'Pede Praesent Eu Institute',
        remark: 'Donec sollicitudin adipiscing ligula. Aenean gravida'
      },
      {
        id: 79,
        firstName: 'Colton',
        lastName: 'Dickson',
        email: 'quam.vel@malesuadaut.com',
        phone: '931 75 778',
        company: 'Nec Orci Donec Corporation',
        remark: 'venenatis a, magna. Lorem ipsum dolor sit'
      },
      {
        id: 80,
        firstName: 'Laurel',
        lastName: 'Beck',
        email: 'nulla.magna@ultriciesdignissim.co.uk',
        phone: '997 60 114',
        company: 'Nec Ligula Consectetuer PC',
        remark: 'Vivamus molestie dapibus ligula. Aliquam erat volutpat.'
      },
      {
        id: 81,
        firstName: 'Lester',
        lastName: 'Dawson',
        email: 'turpis.In@Nam.org',
        phone: '991 73 255',
        company: 'Tempor Diam Dictum LLP',
        remark: 'imperdiet'
      },
      {
        id: 82,
        firstName: 'Charles',
        lastName: 'Bailey',
        email: 'arcu.Sed.et@lobortis.org',
        phone: '954 81 165',
        company: 'Est LLP',
        remark: 'felis eget varius ultrices, mauris ipsum'
      },
      {
        id: 83,
        firstName: 'Raphael',
        lastName: 'Cobb',
        email: 'adipiscing.elit.Aliquam@enim.net',
        phone: '955 32 181',
        company: 'Elit Pharetra Ut Limited',
        remark: 'velit. Quisque varius. Nam porttitor scelerisque neque.'
      },
      {
        id: 84,
        firstName: 'Palmer',
        lastName: 'Pugh',
        email: 'dolor.nonummy@turpisnec.ca',
        phone: '940 91 507',
        company: 'Nulla Vulputate Dui Corp.',
        remark: 'ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.'
      },
      {
        id: 85,
        firstName: 'Vernon',
        lastName: 'Ramsey',
        email: 'amet.consectetuer.adipiscing@maurisSuspendissealiquet.net',
        phone: '924 51 549',
        company: 'Elit Consulting',
        remark: 'Sed id risus'
      },
      {
        id: 86,
        firstName: 'Brandon',
        lastName: 'Andrews',
        email: 'lacinia.vitae@egetodioAliquam.net',
        phone: '934 44 507',
        company: 'Elementum Limited',
        remark: 'convallis est, vitae sodales nisi magna'
      },
      {
        id: 87,
        firstName: 'Raven',
        lastName: 'Mcintosh',
        email: 'diam.Pellentesque.habitant@Suspendisse.ca',
        phone: '924 70 593',
        company: 'At Nisi Cum Incorporated',
        remark: 'nec, malesuada ut, sem.'
      },
      {
        id: 88,
        firstName: 'Zeph',
        lastName: 'Garner',
        email: 'enim@gravidasit.net',
        phone: '938 13 228',
        company: 'Turpis In Associates',
        remark: 'gravida sagittis.'
      },
      {
        id: 89,
        firstName: 'Lamar',
        lastName: 'Lancaster',
        email: 'Suspendisse.tristique@ornareliberoat.co.uk',
        phone: '929 14 009',
        company: 'Orci Luctus PC',
        remark: 'ut'
      },
      {
        id: 90,
        firstName: 'Vernon',
        lastName: 'Ferguson',
        email: 'neque@Aeneanmassa.com',
        phone: '972 81 811',
        company: 'Phasellus Nulla Associates',
        remark: 'nec, cursus a, enim. Suspendisse aliquet,'
      },
      {
        id: 91,
        firstName: 'Austin',
        lastName: 'Vinson',
        email: 'ac.urna.Ut@magnamalesuadavel.edu',
        phone: '979 18 063',
        company: 'Amet Industries',
        remark: 'penatibus'
      },
      {
        id: 92,
        firstName: 'Kendall',
        lastName: 'Finley',
        email: 'ut@sollicitudinamalesuada.edu',
        phone: '940 89 422',
        company: 'Pretium Neque Morbi PC',
        remark: 'netus et malesuada fames ac turpis egestas. Aliquam'
      },
      {
        id: 93,
        firstName: 'Raven',
        lastName: 'Santos',
        email: 'et.magnis@ametconsectetueradipiscing.ca',
        phone: '996 53 040',
        company: 'Ut LLP',
        remark: 'Donec tincidunt. Donec vitae erat vel pede blandit congue.'
      },
      {
        id: 94,
        firstName: 'Denise',
        lastName: 'Knowles',
        email: 'Aenean.eget@vitae.co.uk',
        phone: '903 82 625',
        company: 'Pede Ultrices Inc.',
        remark: 'vulputate dui, nec tempus mauris erat'
      },
      {
        id: 95,
        firstName: 'Andrew',
        lastName: 'Tran',
        email: 'ridiculus@ametdiameu.ca',
        phone: '973 44 423',
        company: 'Nascetur Ridiculus Mus Consulting',
        remark: 'et magnis dis parturient montes, nascetur'
      },
      {
        id: 96,
        firstName: 'Damian',
        lastName: 'Mcmahon',
        email: 'ultrices.a.auctor@arcuMorbisit.org',
        phone: '946 10 361',
        company: 'Integer Vulputate Risus Ltd',
        remark: 'In tincidunt congue turpis. In condimentum. Donec'
      },
      {
        id: 97,
        firstName: 'Yardley',
        lastName: 'Warren',
        email: 'id.risus@amet.edu',
        phone: '973 16 276',
        company: 'Donec Incorporated',
        remark: 'arcu. Vestibulum ante ipsum primis in faucibus'
      },
      {
        id: 98,
        firstName: 'Raymond',
        lastName: 'Morin',
        email: 'urna.Nullam.lobortis@nec.com',
        phone: '995 70 939',
        company: 'In Cursus Et Company',
        remark: 'et, magna. Praesent interdum'
      },
      {
        id: 99,
        firstName: 'Leigh',
        lastName: 'Oneil',
        email: 'fringilla@convallis.com',
        phone: '950 80 135',
        company: 'Et Associates',
        remark:
          'metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus'
      },
      {
        id: 100,
        firstName: 'Hollee',
        lastName: 'Mooney',
        email: 'rhoncus@Nuncsedorci.co.uk',
        phone: '919 91 068',
        company: 'Scelerisque Dui Incorporated',
        remark: 'neque tellus, imperdiet non, vestibulum nec,'
      }
    ];
    return { contacts };
  }
}

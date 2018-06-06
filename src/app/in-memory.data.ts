import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 0, name: 'Ellen Helene Heiskel' },
      { id: 1, name: 'Mats Christoper Roald', phone: '', email: 'mats.roald@avento.no', remark: 'Works for Avento' },
      { id: 2, name: 'Hans-Petter Eivet', phone: '93428779', email: 'hpe@avento.no', remark: 'Works for Avento' },
      { id: 3, name: 'Rune Kvåle' },
      { id: 4, name: 'Dag Harald Sponnich' },
      { id: 5, name: 'Per Brauterfallet' },
      { id: 6, name: 'Jarle Dagestad Thu' },
      { id: 11, name: 'Kjell Rune Andreassen' },
      { id: 12, name: 'Kjell Løgith Pedersen' },
      { id: 13, name: 'Bjørn Lyse' },
      { id: 14, name: 'Jermund Johaug' },
      { id: 15, name: 'Kirsti Anna Karlsen' },
      { id: 16, name: 'Pål Fredrik Oscarsson' },
      { id: 17, name: 'Espen Mikkelsen Bukholm' },
      { id: 18, name: 'Ståle Hesjvik' },
      { id: 19, name: 'Jørn Martin Tysnes' },
      { id: 20, name: 'Tarjei Færøyvik Damman' },
      { id: 21, name: 'Jan Børge Dejgaard' },
      { id: 22, name: 'Gørill Fransplass' }
    ];
      return { contacts };

  }
}

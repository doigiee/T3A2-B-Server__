import { BookingModel, dbClose} from './db.js';

await BookingModel.deleteMany()
console.log('All Bookings deleted')

const bookings = [
    {
      user: "63db0fae65e1e07d39f1adf3",
    //   user: users[2]._id,
      pkg: [{
        name: 'Package 1',
        price: '50',
        }],
      date: [{
          year: 2022,
          month: 'Jan',
          date: 25,
          time: '0900',
      }],
      dog: [{
          name: 'Henry',
          gender: 'Male',
          breed: 'Beagle',
          age: 9,
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf4",
      pkg: [{
        name: 'Package 3',
        price: '100',
        }],
      date: [{
            year: 2023,
            month: 'Feb',
            day: 25,
            date: '0900',
        }],
      dog: [{
          name: 'Alex',
          gender: 'Female',
          breed: 'English Cockerspaniel',
          age: 6,
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf5",
      pkg: [{
        name: 'Package 3',
        price: '130',
    }],
    date: [{
        year: 2023,
        month: 'Aug',
        day: 15,
        date: '1000',
    }],
      dog: [{
          name: 'Rex',
          gender: 'Male',
          breed: 'Portacolie',
          age: 9,
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf6",
      pkg: [{
        name: 'Package 1',
        price: '50',
    }],
    date: [{
        year: 2023,
        month: 'Mar',
        day: 1,
        date: '0930',
    }],
      dog: [{
          name: 'Walter',
          gender: 'Female',
          breed: 'Dalmatian',
          age: 7,
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf7",
      pkg: [{
        name: 'Package 2',
        price: '100',
    }],
    date: [{
        year: 2023,
        month: 'Apr',
        day: 10,
        date: '1000',
    }],
      dog: [{
          name: 'Henry',
          gender: 'Female',
          breed: 'Poodle',
          age: 5,
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf5",
      pkg: [{
        name: 'Package 1',
        price: '50',
    }],
    date: [{
        year: 2023,
        month: 'Dec',
        day: 5,
        date: '0800',
    }],
      dog: [{
          name: 'Samson',
          gender: 'Male',
          breed: 'Irish Setter',
          age: '7',
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf5",    
      pkg: [{
        name: 'Package 3',
        price: '130',
    }],
    date: [{
        year: 2022,
        month: 'May',
        day: 25,
        date: '0700',
    }],
      dog: [{
          name: 'Baxter',
          gender: 'Female',
          breed: 'Portacolie',
          age: '8',
      }]
  },
  {
      user: "63db0fae65e1e07d39f1adf4",    
      pkg: [{
        name: 'Package 4',
        price: '150',
    }],
    date: [{
        year: 2022,
        month: 'Jan',
        day: 17,
        time: '1300',
    }],
      dog: [{
          name: 'Missy',
          gender: 'Male',
          breed: 'Springer Spaniel',
          age: 5,
      }]
  }
  ];

await BookingModel.insertMany(bookings);
console.log('Inserted bookings')

dbClose()

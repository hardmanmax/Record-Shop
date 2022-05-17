const SHOP_DATA  = [
  {
    title: 'Hip-Hop',
    items: [
      {
        id: 1,
        name: 'Illmatic',
        artist: 'Nas',
        imgsrc: 'https://i.discogs.com/ZIL05hcZo0Rkz8qMahZSNscLc_uRi5m1Hyiys_SDTtg/rs:fit/g:sm/q:90/h:490/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MjYw/NC0xMTc3MDE5MjI4/LmpwZWc.jpeg',
        price: 10  
      },
      {
        id: 2,
        name: 'To Pimp A Butterfly',
        artist: 'Kendrick Lamar',
        imgsrc: 'https://media.pitchfork.com/photos/5929ad4cea9e61561daa60ba/1:1/w_600/d47a5880.jpg',
        price: 10,  
      },
      {
        id: 3,
        name: 'The Chronic',
        artist: 'Dr. Dre',
        imgsrc: 'https://media.pitchfork.com/photos/5dee9d8bc573b80009766dc2/1:1/w_600/thechronic.jpg',
        price: 10,
      },
      {
        id: 4,
        name: 'My Beautiful Dark Twisted Fantasy',
        artist: 'Kanye West',
        imgsrc: 'https://static.stereogum.com/uploads/2020/11/MBDTF-1605635018.jpg',
        price: 10,
      },
      {
        id: 5,
        name: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        imgsrc: 'https://m.media-amazon.com/images/I/614UiJzoxPL._AC_SL1000_.jpg',
        price: 10,
      },
      {
        id: 6,
        name: 'It Takes a Nation of Millions to Hold Us Back',
        artist: 'Public Enemy',
        imgsrc: 'https://media.pitchfork.com/photos/5929ab25b1335d7bf16997c2/1:1/w_600/78c3bd47.jpg',
        price: 10,
      }
    ]
  },
  {
    title: 'Jazz',
    items: [
      {
        id: 7,
        name: 'Kind of Blue',
        artist: 'Miles Davis',
        imgsrc: 'https://m.media-amazon.com/images/I/71UUU3OLX2L._AC_SL1500_.jpg',
        price: 10  
      },
      {
        id: 8,
        name: 'A Love Supreme',
        artist: 'John Coltrane',
        imgsrc: 'https://media.pitchfork.com/photos/5929b17613d197565213a60b/1:1/w_600/8b1f0d01.jpg',
        price: 10  
      },
      {
        id: 9,
        name: 'Mingus Ah Um',
        artist: 'Charles Mingus',
        imgsrc: 'https://i.discogs.com/BWE5TP5oFcD5V2U3chPjjhtKWFpd5IU-FRoym_hoUyg/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3MDgz/MjItMTQ2NzA1NDcz/NS01MTAwLmpwZWc.jpeg',
        price: 10  
      },
      {
        id: 10,
        name: 'Bitches Brew',
        artist: 'Miles Davis',
        imgsrc: 'https://m.media-amazon.com/images/I/91bA8lgsSbS._AC_SL1500_.jpg',
        price: 10  
      },
      {
        id: 11,
        name: 'Time Out',
        artist: 'The Dave Brubeck Quartet',
        imgsrc: 'https://i.scdn.co/image/ab67616d0000b27304c24409dbbac431be8000fb',
        price: 10  
      },
      {
        id: 12,
        name: 'Head Hunters',
        artist: 'Herbie Hancock',
        imgsrc: 'https://www.herbiehancock.com/wp-content/uploads/2017/02/Head-Hunters.jpg',
        price: 10  
      },
    ]
  },
  {
    title: 'Soul',
    items: [
      {
        id: 13,
        name: 'Whats Going On',
        artist: 'Marvin Gaye',
        imgsrc: 'https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg',
        price: 10  
      },
      {
        id: 14,
        name: 'Innervisions',
        artist: 'Stevie Wonder',
        imgsrc: 'https://www.slantmagazine.com/wp-content/uploads/2003/10/innervisions.jpg',
        price: 10  
      },
      {
        id: 15,
        name: 'I Never Loved a Man the Way I Love You',
        artist: 'Aretha Franklin',
        imgsrc: 'https://img.discogs.com/PdOwej5QoBJGwcnxxZpXEYsGI78=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-6980631-1430962297-8122.jpeg.jpg',
        price: 10  
      },
      {
        id: 16,
        name: 'Still Bill',
        artist: 'Bill Withers',
        imgsrc: 'https://m.media-amazon.com/images/I/71JPHOyvPOL._SS500_.jpg',
        price: 10  
      },
      {
        id: 17,
        name: 'Hot Buttered Soul',
        artist: 'Isaac Hayes',
        imgsrc: 'https://i.discogs.com/jlbUVbq5g1vkN5dPO4uSQAb0GJACI05wiUr69827UEE/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MDg4/NTctMTYwMjU4NjI4/OS00NzU5LmpwZWc.jpeg',
        price: 10  
      },
      {
        id: 18,
        name: "I'm Still in Love with You",
        artist: 'Al Green',
        imgsrc: 'https://m.media-amazon.com/images/I/91mi6eK6pZL._AC_SL1500_.jpg',
        price: 10  
      },
    ]
  },
  {
    title: 'Rock',
    items: [
      {
        id: 19,
        name: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        imgsrc: 'https://express-images.franklymedia.com/5829/sites/14/2021/04/01154832/519GtlMPY2L._SL1500_.jpg',
        price: 10  
      },
      {
        id: 20,
        name: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        artist: 'David Bowie',
        imgsrc: 'https://m.media-amazon.com/images/I/A1rxQMeiz9L._AC_SL1500_.jpg',
        price: 10  
      },
      {
        id: 21,
        name: 'Exile on Main St.',
        artist: 'The Rolling Stones',
        imgsrc: 'https://m.media-amazon.com/images/I/81iYdOXSwwL._AC_SL1400_.jpg',
        price: 10  
      },
      {
        id: 22,
        name: 'Rumours',
        artist: 'Fleetwood Mac',
        imgsrc: 'https://m.media-amazon.com/images/I/71BekDJBb3L._AC_SL1425_.jpg',
        price: 10  
      },
      {
        id: 23,
        name: 'OK Computer',
        artist: 'Radiohead',
        imgsrc: 'https://cdn.hmv.com/r/w-640/hmv/files/e6/e6600d0c-2d7a-4053-96d0-d60af2129849.jpg',
        price: 10  
      },
      {
        id: 24,
        name: 'Abbey Road',
        artist: 'The Beatles',
        imgsrc: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
        price: 10  
      },
    ]
  },
  {
    title: 'Electronic',
    items: [
      {
        id: 25,
        name: 'Dig Your Own Hole',
        artist: 'The Chemical Brothers',
        imgsrc: 'https://www.udiscovermusic.com/wp-content/uploads/2017/04/Chemical-Brothers-Dig-Your-Own-Hole-Album-Cover-Web-Optimised-820.jpg',
        price: 10  
      },
      {
        id: 26,
        name: 'Selected Ambient Works 85-92',
        artist: 'Aphex Twin',
        imgsrc: 'https://media.pitchfork.com/photos/5929a0c2ea9e61561daa4636/1:1/w_600/9f2f45b8.jpg',
        price: 10  
      },
      {
        id: 27,
        name: 'Homogenic',
        artist: 'Björk',
        imgsrc: 'https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png',
        price: 10  
      },
      {
        id: 28,
        name: 'Dummy',
        artist: 'Portishead',
        imgsrc: 'https://media.pitchfork.com/photos/5929c375eb335119a49ed6f6/1:1/w_600/d17fe61e.jpg',
        price: 10  
      },
      {
        id: 29,
        name: 'Discovery',
        artist: 'Daft Punk',
        imgsrc: 'https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png',
        price: 10  
      },
      {
        id: 30,
        name: 'Play',
        artist: 'Moby',
        imgsrc: 'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2019/05/mobyplay2-5.13.19.jpg',
        price: 10  
      },
    ]
  },
  {
    title: 'Folk',
    items: [
      {
        id: 31,
        name: 'American Recordings',
        artist: 'Johnny Cash',
        imgsrc: 'https://i1.wp.com/www.comarecords.com/wp-content/uploads/2021/04/cash-american.jpg?fit=561%2C561&ssl=1',
        price: 10  
      },
      {
        id: 32,
        name: 'The Freewheelin Bob Dylan',
        artist: 'Bob Dylan',
        imgsrc: 'https://m.media-amazon.com/images/I/810+gKHBoXL._AC_SX466_.jpg',
        price: 10  
      },
      {
        id: 33,
        name: 'Pink Moon',
        artist: 'Nick Drake',
        imgsrc: 'https://m.media-amazon.com/images/I/71aUI6YNXnL._AC_SL1200_.jpg',
        price: 10  
      },
      {
        id: 34,
        name: 'Fleet Foxes',
        artist: 'Fleet Foxes',
        imgsrc: 'https://upload.wikimedia.org/wikipedia/en/0/01/Fleet_foxes.jpg',
        price: 10  
      },
      {
        id: 35,
        name: 'Harvest',
        artist: 'Neil Young',
        imgsrc: 'https://i.scdn.co/image/ab67616d0000b2732dc612125844731ef6e9a71c',
        price: 10  
      },
      {
        id: 36,
        name: 'Blue',
        artist: 'Joni Mitchell',
        imgsrc: 'https://m.media-amazon.com/images/I/81baUpgSr9L._AC_SL1500_.jpg',
        price: 10  
      },
    ]
  }
]

export default SHOP_DATA;

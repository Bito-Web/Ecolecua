const Header = new Vue({
   el: '#header',
   data: {
      title: 'Ecolecuá!',
      subtitle: '',
      menu: {
         item: [
            {title: 'Menú de Salados', href: '#section-1'},
            {title: 'Galería de Salados', href: '#section-2'},
            {title: 'Menú de Dulces', href: '#section-3'},
            {title: 'Galería de Dulces', href: '#section-4'},
            {title: 'Contacto', href: '#footer'}
         ]
      },
      description: {
         title: '¿Quiénes somos?',
         text1: 'Somos una empresa que surge ante la motivación familiar de crear, desarrollar y mantener en el tiempo un emprendimiento propio, que sea el sustento laboral y económico de las distintas personas que forman parte.',
         text2: 'Nos dedicamos a brindar momentos, experiencias, sensaciones y emociones al consumidor, mediante productos gastronómicos frescos, artesanales, que engloben sabores caseros con decoraciones y presentaciones basadas en el detalle y la creatividad.',
         signature: 'Ecolecuá!'
      }
   }
});

const Section1 = new Vue({
   el: '#section-1',
   data: {
      title: 'Menú de Salados',
      menu: {
         item: [
            {href: '#header',   title: 'Home ▲'},
            {href: '#menu-S-1', title: 'Menú S 1'},
            {href: '#menu-S-2', title: 'Menú S 2'},
            {href: '#menu-S-3', title: 'Menú S 3'},
            {href: '#menu-S-4', title: 'Menú S 4'},
            {href: '#section-2', title: 'Galería de Salados'},
            {href: '#section-3', title: 'Menú de Dulces'},
            {href: '#section-4', title: 'Galería de Dulces'},
            {title: 'Contacto', href: '#footer'}
         ]
      },
      content: [
         {
            id: 'menu-S-1',
            title: 'Menú S 1',
            text: '2 Hamburguesas de Carne Vacuna con lechuga crespa, tomate, cebolla + papas fritas(1 Ración) + 2 salsas adicionales (Ajo, Morrón, Cheddar, Mostaza-Miel o Cebolla Caramelizada) + 2 refrescos de lata (Coca-cola, 7-Up o Fanta).'
         },
         {
            id: 'menu-S-2',
            title: 'Menú S 2',
            text: '1 Pizza de tamaño familiar (38cm) con salsa base, queso muzzarella + 1 topping (Salame Criollo Otonello, Queso Cheddar, Morrón, Cebolla, Huevo Frito o Duro, Hongos o Queso Parmesano) + 1 refresco de 1,5 litros (Coca-cola, 7-Up o Fanta).'
         },
         {
            id: 'menu-S-3',
            title: 'Menú S 3',
            text: '2 raciones de Arroz con vegetales + 2 raciones de Pollo al Curry (Empanizado con Polenta o en su Jugo sin empanizar) + 2 panes dulces + 2 salsas (Agridulce, Picante o Soya) + 2 refrescos de lata (Coca-cola, 7-Up o Fanta).'
         },
         {
            id: 'menu-S-4',
            title: 'Menú S 4',
            text: '4 arepas abiertas para rellenar a gusto, 2 opciones de relleno (Palta y Pollo, Carne Esmechada, Queso Riccotta Casero, Queso Llanero, Queso Gouda o Atún con Mayonesa, Morrón y Choclo) + 2 refrescos de lata (Coca-cola, 7-Up o Fanta).'
         }
      ]
   }
});

const Section2 = new Vue({
   el: '#section-2',
   data: {
      title: '',
      image: {
         img: [
            {
               src: 'https://www.wallpaperup.com/uploads/wallpapers/2020/06/11/1377292/20062979dee1775eee00a76a3f56aa5c-700.jpg',
               title: 'img 1',
               alt: 'img 1'
            },
            {
               src: 'https://a-static.besthdwallpaper.com/primera-comida-papel-pintado-1920x1080-30075_48.jpg',
               title: 'img-2',
               alt: 'img-2'
            },
            {
               src: 'https://c.wallhere.com/photos/7a/19/pizza_vegetables_food-1029653.jpg!d',
               title: 'img-3',
               alt: 'img-3'
            },
            { 
               src: 'https://images5.alphacoders.com/338/thumb-350-338603.jpg',
               title: 'img-4',
               alt: 'img-4'
            },
            { 
               src: 'https://images7.alphacoders.com/368/368875.jpg',
               title: 'img-5',
               alt: 'img-5'
            },
            { 
               src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FDvh0drSYDa1Bglrxc0Bu-edmcylrGMXiQ&usqp=CAU',
               title: 'img-6',
               alt: 'img-6'
            },
            { 
               src: 'https://s1.dmcdn.net/v/PbwUS1VeoJqIWXcsZ/x1080',
               title: 'img-7',
               alt: 'img-7'
            },
            { 
               src: 'https://a-static.besthdwallpaper.com/comida-rica-papel-pintado-1920x1080-2861_48.jpg',
               title: 'img-8',
               alt: 'img-8'
            },
            { 
               src: 'https://fondosmil.com/fondo/35746.jpg',
               title: 'img-9',
               alt: 'img-9'
            },
            { 
               src: 'https://images3.alphacoders.com/807/thumb-1920-807704.jpg',
               title: 'img-10',
               alt: 'img-10'
            },
            { 
               src: 'https://images8.alphacoders.com/807/807705.jpg',
               title: 'img-11',
               alt: 'img-11'
            },
            { 
               src: 'https://s1.1zoom.me/b4763/272/Fast_food_Pizza_Tomatoes_Wood_planks_Foliage_513340_1920x1080.jpg',
               title: 'img-12',
               alt: 'img-12'
            },
         ]
      }
   }
});

const Section3 = new Vue({
   el: '#section-3',
   data: {
      title: 'Menú de Dulces',
      menu: {
         item: [
            {href: '#header',   title: 'Home ▲'},
            {href: '#menu-D-1', title: 'Menú D 1'},
            {href: '#menu-D-2', title: 'Menú D 2'},
            {href: '#menu-D-3', title: 'Menú D 3'},
            {href: '#menu-D-4', title: 'Menú D 4'},
            {href: '#menu-D-5', title: 'Menú D 5'},
            {href: '#section-4', title: 'Galería de Dulces'},
            {href: '#section-1', title: 'Menú de Salados'},
            {href: '#section-2', title: 'Galería de Salados'},
            {title: 'Contacto', href: '#footer'}
         ]
      },
      content: [
         {
            id: 'menu-D-1',
            title: 'Menú D 1',
            text: '6 Roles de Canela de tamaño medianos con 2 topping a gusto (Glaseado, Chocolate Oscuro o Blanco, Dulce de Leche o Queso Crema)'
         },
         {
            id: 'menu-D-2',
            title: 'Menú D 2',
            text: '6 Cupcakes de vainilla o chocolate, con relleno o sin relleno (Chocolate Oscuro o Blanco, Dulce de Leche, Queso Crema) con topping de crema de manteca y grageas (Sprinkles, Colores o de Chocolate)'
         },
         {
            id: 'menu-D-3',
            title: 'Menú D 3',
            text: '1 Burín de especias (Canela, Jenjibre, Nuez Moscada, Avellana y Nuez) de 20cm con topping de glaseado, frutas confitadas y maní'
         },
         {
            id: 'menu-D-4',
            title: 'Menú D 4',
            text: '6 Pastafrolas con dos tipos de relleno a elegir (Dulce de Leche, Membrillo, Chocolate Oscuro o Guayaba)'
         },
         {
            id: 'menu-D-5',
            title: 'Menú D 5',
            text: '1 Pie de limón de 30cm con rayadura de lima y crema de manteca'
         }
      ]
   }
});

const Section4 = new Vue({
   el: '#section-4',
   data: {
      title: '',
      image: {
         img: [
            {
               src: 'https://st.depositphotos.com/1003814/3366/i/600/depositphotos_33660851-stock-photo-sweet-cinnamon-rolls.jpg',
               title: 'img 1',
               alt: 'img 1'
            },
            {
               src: 'https://fondosmil.com/fondo/21214.jpg',
               title: 'img-2',
               alt: 'img-2'
            },
            {
               src: 'https://wallpaperaccess.com/full/213223.jpg',
               title: 'img-3',
               alt: 'img-3'
            },
            { 
               src: 'https://chipabythedozen.com/wp-content/uploads/2018/06/IMG_6428-640x427.jpg',
               title: 'img-4',
               alt: 'img-4'
            },
            { 
               src: 'https://elgourmet.s3.amazonaws.com/recetas/cover/budin_yNWSiKvFJc6xIqAV5m9Tb8nsZoCBRP.png',
               title: 'img-5',
               alt: 'img-5'
            },
            { 
               src: 'https://s1.1zoom.me/b5251/331/Spices_Many_Black_pepper_543445_1920x1080.jpg',
               title: 'img-6',
               alt: 'img-6'
            },
            { 
               src: 'https://i.pinimg.com/originals/c1/51/d3/c151d3661123cb45455494d3f2ac8245.jpg',
               title: 'img-7',
               alt: 'img-7'
            },
            { 
               src: 'https://astelus.com/wp-content/viajes/Pastafrola.jpg',
               title: 'img-8',
               alt: 'img-8'
            },
            { 
               src: 'https://cdn.cienradios.com/wp-content/uploads/sites/13/2019/11/Pasta-frola-2-750x469.jpg',
               title: 'img-9',
               alt: 'img-9'
            },
            { 
               src: 'https://fondosmil.com/fondo/48040.jpg',
               title: 'img-10',
               alt: 'img-10'
            },
            {
               src: 'https://2rifnf2p0u413x1xhk3a7evn-wpengine.netdna-ssl.com/wp-content/uploads/2011/01/la-reposteria.jpg',
               title: 'img-11',
               alt: 'img-11'
            },
            {
               src: 'https://besthqwallpapers.com/Uploads/24-6-2020/136919/thumb2-lemon-pie-cream-lemon-pastries-lemon-cake.jpg',
               title: 'img-12',
               alt: 'img-12'
            }
         ]
      }
   }
});

const Footer = new Vue({
   el: '#footer',
   data: {
      img: {
         title: 'Footer IMG',
         alt: 'Footer IMG',
         src: 'https://fondosmil.com/fondo/35789.jpg'
      },
      contact: {
         title: 'Contacto:',
         email: 'atencion.ecolecua@gmail.com',
         href: 'mailto:atencion.ecolecua@gmail.com',
         phone: '+598 95 042 867 / +598 95 022 224'
      },
      logo: {
         title: 'Ecolecuá Logo',
         alt: 'Ecolecuá Logo',
         src: './img/ecolecua-logo.png'
      },
      title: 'Ecolecuá!'
   }
});

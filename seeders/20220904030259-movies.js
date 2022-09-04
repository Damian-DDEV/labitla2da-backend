"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          name: "El señor de los anillos",
          synopsis:
            "En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/2e7f07ff2299b2bf1911f07f4c57cd70.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Encanto",
          synopsis:
            "Una joven colombiana puede ser la última esperanza para su familia, cuando descubre que la magia que rodea a Encanto, un lugar encantado que bendice a los niños con dones únicos, se encuentra en serio peligro.",
          duration: "02:00:00",
          id_genre: 1,
          path_img: "images/dab79a89f7b35b14b28999dea590c0c1.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Avengers End Game",
          synopsis:
            "Después de los eventos devastadores de Avengers: Infinity War, el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.",
          duration: "01:58:00",
          id_genre: 1,
          path_img: "images/9668b6289b489191aab077f9653b45a8.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "El Padrino",
          synopsis:
            "Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.",
          duration: "02:20:00",
          id_genre: 1,
          path_img: "images/29056100dcb457c51990c4f7246ec168.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Top Gun",
          synopsis:
            "El joven piloto Maverick Mitchell acude a una prestigiosa escuela aérea, famosa por formar a los mejores pilotos de combate del país. Maverick se siente atraído por su hermosa instructora, mientras desarrolla una intensa rivalidad con otro piloto.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/2a52a14490e2a072fd8027de7a32f98a.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Elvis",
          synopsis:
            "Elvis Presley salta a la fama en la década de 1950, mientras mantiene una relación compleja con su manager, el coronel Tom Parker.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/f4525ab8da75bb82e0bfc4d8c2ee1a18.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "El Hobbit",
          synopsis:
            "Bilbo Bolsón lleva una vida sencilla con sus compañeros hobbits en la comarca, hasta que el mago Gandalf llega y lo convence de unirse a un grupo de enanos para recuperar el reino de Erebor. El viaje lleva a Bilbo en un camino a través de tierras peligrosas llenas de orcos, goblins y otras amenazas, además de su encuentro con Gollum y un sencillo anillo de oro que está unido al destino de la Tierra Media de una forma que Bilbo no puede imaginarse.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/a2950a7a047cc0d9137d80aa10ff3099.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Uncharted",
          synopsis:
            "El cazador de tesoros Victor Sullivan recluta a Nathan Drake para que lo ayude a recuperar una fortuna de 500 años de antigüedad. Lo que comienza como un atraco se convierte en una competencia contra el despiadado Santiago Moncada.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/9152ca373b279688497bd8bc1cc212e0.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Black Widow",
          synopsis:
            "Una peligrosa conspiración, relacionada con su pasado, persigue a Natasha Romanoff, también conocida como Viuda Negra. La agente tendrá que lidiar con las consecuencias de haber sido espía, así como con las relaciones rotas, para sobrevivir.",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/eebc2bf5748b255a0c1e0a777312d12a.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
        {
          name: "Doctor strange, Multiverso de la locura",
          synopsis:
            "El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora, su equipo debe enfrentarse a una amenaza que podría destruirlo todo..",
          duration: "03:00:00",
          id_genre: 1,
          path_img: "images/fdde08626f2441810c68294151cf7c67.jpeg",
          format_movie: "2D",
          id_usr: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

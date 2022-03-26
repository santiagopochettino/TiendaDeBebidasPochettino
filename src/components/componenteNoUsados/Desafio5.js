//Componente de practica clase 5
const mockProductos = [
    {
      id: '1',
      name: 'asdaaaaaaaaa',
      description: 'asdadasssssssssssdads',
      stock: 2,
    },
    {
      id: '2',
      name: 'asd',
      description: 'asdadadads',
      stock: 4,
    },
  ];
  const mostrarProductos = new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(mockProductos);
    }, 3000);
  });
  
  console.log(
    mostrarProductos.then((productos) => {
      console.log(productos);
    })
  );

//   const products = [
//     {
//       id: 'producto1',
//       name: 'Nombre',
//       descripción: 'Descripcion',
//       stock: 1,
//     },
//     {
//       id: 'producto2',
//       name: 'Nombre2',
//       descripción: 'Descripcion2',
//       stock: 5,
//     },
//   ];
  
//   const promesaDeProductos = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 3000);
//   });
  
//   const getProduct = async () => {
//     try {
//       response = await promesaDeProductos;
//       console.log(response);
//     } catch (err) {
//       console.log('Error' + err);
//     }
//   };
  
//   getProduct();
  
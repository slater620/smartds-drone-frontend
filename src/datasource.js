export const droneRows = [
{id: 1,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 41,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 10,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 71,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 101,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 51,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 1775,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 187,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
{id: 1477,vitesse:1, durée:4 , poids:10 , charge:20,etat:"en cours"},
]

export const droneColumns =[
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'vitesse', headerName: 'VITESSE', width: 80 },
  { field: 'durée', headerName: 'DUREE', width: 80 },
  { field: 'poids', headerName: 'POIDS', width: 80 },
  { field: 'charge', headerName: 'CHARGE', width: 80 },
  { field: 'etat', headerName: 'ETAT', width: 80 },

]


export const missionRows=[
  {id:1 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:2 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:3 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:4 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:5 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:6 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:7 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
  {id:8 , type:'livraison', date:11 , charge:20 , destination:'yde' , etat:'en cours'},
]


export const missionColum=[
  {field :'id' ,headerName:'ID' , width:80},
  {field :'type' ,headerName:'TYPE' , width:80},
  {field :'date' ,headerName:'DATE' , width:80},
  {field :'charge' ,headerName:'CHARGE' , width:80},
  {field :'destination' ,headerName:'DESTINATION' , width:80},
  {field :'etat' ,headerName:'ETAT' , width:80},
]


export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Rie', firstName: 'vey', age: 5 },
  ];


export  const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export const TopSelling: Product[] = [
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Mokhtar Hadded',
        gmail: 'med.mokh3@gmail.com',
        productName: '01/12/1999',
        status: 'warning',
        weeks: 11423712,
        budget: '46521051'
    },


    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Assistant',
        gmail: 'assistant@gmail.com',
        productName: '12/06/1999',
        status: 'success',
        weeks: 10236412,
        budget: '45587254',
    },
    
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Formateur',
        gmail: 'formateur@gmail.com',
        productName: '07/09/2000	',
        status: 'danger',
        weeks: 11712354,
        budget: '95872265'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Formateur 2',
        gmail: 'formateur2@gmail.com',
        productName: '01/01/2000',
        status: 'info',
        weeks: 11253648,
        budget: '326548751'
    },
  
]
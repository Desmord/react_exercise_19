const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article 1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article 1',
            publishedDate: new Date(),
            author: 'John Not Doe'
        },
        {
            id: '2',
            title: 'Article 2',
            shortDescription: 'Sit amet consectetur ',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            publishedDate: new Date(),
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Article 3',
            shortDescription: 'Quisquam alias obcaecati expedita.',
            content: 'Main content of the article 3',
            publishedDate: new Date(),
            author: 'Doe John'
        },
        {
            id: '4',
            title: 'Article 4',
            shortDescription: 'Repudiandae esse blanditiis.',
            content: 'Main content of the article 4',
            publishedDate: new Date(),
            author: 'John'
        }
    ]
}

export default initialState;
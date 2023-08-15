const biography = {
    name: 'biography',
    title: 'Biography',
    type: 'document',
    fields: [ 
        {
            name: 'square1',
            title: 'Square Image 1',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "biographyHalf1",
            title: "First half of biography",
            type: "array",
            of: [{ type: "block" }]
        },
         {
            name: "biographyHalf2",
            title: "Second half of biography",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
}

export default biography
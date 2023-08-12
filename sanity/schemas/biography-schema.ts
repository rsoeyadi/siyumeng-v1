const biography = {
    name: 'biography',
    title: 'Biography',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image that is displayed on biography page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'blockImage1',
            title: 'Square Image 1',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
         {
            name: 'blockImage2',
            title: 'Square Image 2',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
}

export default biography
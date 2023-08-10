const job = {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image (can be a logo or photo of you)',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description of the program or what you do there',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default job
const galleryImage = {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description of image',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
}

export default galleryImage
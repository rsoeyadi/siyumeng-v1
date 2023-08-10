const galleryImage = {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of image',
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
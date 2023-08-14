const coverPhotos = {
    name: 'coverPhotos',
    title: "Photos that appear on the top of each page",
    type: 'document',
    fields: [
        {
            name: 'entryImage',
            title: 'Image that is displayed when user first enters website',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'biographyImage',
            title: 'Biography Page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'eventsImage',
            title: 'Events Page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'teachingImage',
            title: 'Teaching Page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'videosImage',
            title: 'Videos Page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'contactImage',
            title: 'Contact Page',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
}

export default coverPhotos
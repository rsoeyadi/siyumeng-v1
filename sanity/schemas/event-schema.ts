const event = {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title of event',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link to event page (leave empty if N/A)',
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
        {
            name: 'dates',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'location',
            title: 'Location/address',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Short description of this event',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default event
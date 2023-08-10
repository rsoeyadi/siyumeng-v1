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
            name: 'time',
            title: 'Time (ex. 3:00 PM - 4:00 PM EST)',
            type: 'string',
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
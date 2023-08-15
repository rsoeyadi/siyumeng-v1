const video = {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'link',
            title: 'YouTube Link (MUST BE EMBEDDED LINK; look up how to get it if needed)',
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

export default video
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
            title: 'YouTube Link',
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
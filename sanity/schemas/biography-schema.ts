const biography = {
    name: 'biography',
    title: 'Biography',
    type: 'document',
    fields: [
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
}

export default biography
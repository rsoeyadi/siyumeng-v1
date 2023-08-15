const teachingPhilosophy = {
    name: 'teachingPhilosophy',
    title: 'Teaching Philosophy',
    type: 'document',
    fields: [
         {
            name: 'description',
            title: 'What is your teaching philosophy?',
            type: 'array',
            of: [{ type: "block" }]
        },
    ]
}

export default teachingPhilosophy
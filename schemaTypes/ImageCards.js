export default {
    name: 'imageCards',
    title: 'Image Cards',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'array',
        of: [{ type: "block" }],
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'card',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
              },
              {
                name: 'heading',
                title: 'Card Heading',
                type: 'string',
              },
              {
                name: 'text',
                title: 'Card Text',
                type: 'text',
              },
              {
                name: 'backgroundColor',
                title: 'Background Color',
                type: 'string',
                description: 'Hex code or CSS color (e.g. #fefefe or lightblue)',
              },
            ],
          },
        ],
      },
    ],
  }
  
export default {
    name: 'cardsSection',
    title: 'Cards Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'cardTitle',
                title: 'Card Title',
                type: 'string',
              },
              {
                name: 'cardImage',
                title: 'Card Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
    ],
  };
  
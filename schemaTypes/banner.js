// schemas/banner.js

export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'url',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(0).max(5)
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid'
        }
      }
    ]
  };
  
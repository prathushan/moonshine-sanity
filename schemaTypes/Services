// /schemas/services.ts

export default {
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'secondaryTitle',
      title: 'Secondary Title',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'cards',
      title: 'Service Cards',
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
              options: {
                hotspot: true
              }
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ]
        }
      ]
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url'
        }
      ]
    }
  ]
}

export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Blog Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 3,
      },
      {
        name: 'content',
        title: 'Full Content',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      }
    ]
  };
  
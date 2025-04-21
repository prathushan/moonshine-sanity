export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'twitterHandle',
        title: 'Twitter Username',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
        rows: 4,
        validation: Rule => Rule.required()
      }
    ]
  }
  
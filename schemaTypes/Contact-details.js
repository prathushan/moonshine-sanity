// schemas/contactPage.js

export default {
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().min(10).max(100)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(20).max(500)
      },
      {
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: Rule => Rule.required()
          },
          {
            name: 'addressDetails',
            title: 'Address Details',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(200)
          }
        ]
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: Rule => Rule.required()
          },
          {
            name: 'phoneDetails',
            title: 'Phone Details',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(15)
          }
        ]
      },
      {
        name: 'email',
        title: 'Email',
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: Rule => Rule.required()
          },
          {
            name: 'emailDetails',
            title: 'Email Details',
            type: 'string',
            validation: Rule => Rule.required().email()
          }
        ]
      }
    ]
  }
  
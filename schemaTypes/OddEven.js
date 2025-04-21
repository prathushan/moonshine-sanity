export default {
    name: 'oddEven',
    title: 'Odd Even',
    type: 'document',
    fields: [
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Main heading for this section of the page (rich text)',
      },
      {
        name: 'sections',
        title: 'Content Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'section',
            fields: [
              {
                name: 'highlight',
                title: 'Highlight Word',
                type: 'array',
                of: [{ type: 'block' }],
                description: 'Optional word to style in the heading',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
              {
                name: 'testimonial',
                title: 'Testimonial',
                type: 'object',
                fields: [
                  { name: 'quote', title: 'Quote', type: 'text' },
                  { name: 'name', title: 'Name', type: 'string' },
                  {
                    name: 'companyLogo',
                    title: 'Company Logo',
                    type: 'image',
                    options: { hotspot: true },
                  },
                ],
              },
            ],
          },
        ],
      },{
        name: "buttonText",
        type: "string",
        title: "Button Text",
      },
      {
        name: "buttonLink",
        type: "slug",
        title: "Button Link",
        
      },
    ],
  };
  
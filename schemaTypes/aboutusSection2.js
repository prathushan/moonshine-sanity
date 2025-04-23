// schemas/faqSection.js
export default {
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // or 'array' with 'block' for rich text
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'questionItem',
          title: 'Question Item',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text', // or 'block' for rich text
            },
            {
              name: 'extraFields',
              title: 'Extra Fields',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Field',
                  fields: [
                    {
                      name: 'fieldLabel',
                      title: 'Field Label',
                      type: 'string',
                    },
                    {
                      name: 'fieldType',
                      title: 'Field Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Text', value: 'text' },
                          { title: 'Number', value: 'number' },
                          { title: 'Boolean', value: 'boolean' },
                          { title: 'Image', value: 'image' },
                          // Add more as needed
                        ],
                        layout: 'dropdown',
                      },
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string', // can be changed based on `fieldType` if needed
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

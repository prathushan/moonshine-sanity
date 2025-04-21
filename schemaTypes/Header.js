// src/schemaType/Header.js
export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'menuItems',
        title: 'Menu Items',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'menuItem',
            title: 'Menu Item',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              {
                name: 'linkedPage',
                title: 'Linked Page',
                type: 'reference',
                to: [{ type: 'page' }]
              },
              {
                name: 'children',
                title: 'Child Menus',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'submenuItem',
                    title: 'Submenu Item',
                    fields: [
                      { name: 'label', title: 'Label', type: 'string' },
                      {
                        name: 'linkedPage',
                        title: 'Linked Page',
                        type: 'reference',
                        to: [{ type: 'page' }]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  
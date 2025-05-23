// schemas/footer.js

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'ecoBadge',
      title: 'Eco Badge Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ecoText',
      title: 'Eco Message',
      type: 'text',
    },
    {
      name: 'companyLinks',
      title: 'Company Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    },

    // ✅ Social Links (added right after companyLinks)
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'TikTok', value: 'tiktok' },
                ],
                layout: 'radio',
              },
            },
            {
              name: 'url',
              type: 'url',
              title: 'Profile URL',
            },
          ],
        },
      ],
    },

    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'contactNote',
      title: 'Contact Note (e.g., Printed with ❤️...)',
      type: 'string',
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    },
    {
      name: 'footerButtons',
      title: 'Footer Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Button Label' },
            { name: 'url', type: 'url', title: 'Button Link' },
            {
              name: 'style',
              type: 'string',
              title: 'Button Style',
              options: {
                list: [
                  { title: 'Primary (Orange)', value: 'primary' },
                  { title: 'Secondary (Outlined)', value: 'secondary' },
                ],
                layout: 'radio',
              },
            },
          ],
        },
      ],
    },
  ],
}

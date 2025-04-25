export default {
    name: 'aboutusBanner',
    title: 'About Us Banner',
    type: 'document',
    fields: [
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
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
    ],
  };
  
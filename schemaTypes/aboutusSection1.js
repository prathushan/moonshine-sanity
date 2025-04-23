export default {
  name: 'aboutusSection1',
  title: 'About Us Section 1',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image1',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'image2',
      title: 'Overlay Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

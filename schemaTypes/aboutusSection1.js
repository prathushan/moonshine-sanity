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
        name: 'videoType',
        title: 'Video Type',
        type: 'string',
        options: {
          list: [
            { title: 'YouTube URL', value: 'youtube' },
            { title: 'Upload File', value: 'upload' },
          ],
          layout: 'radio',
        },
      },
      {
        name: 'youtubeUrl',
        title: 'YouTube Video URL',
        type: 'url',
        hidden: ({ parent }) => parent?.videoType !== 'youtube',
      },
      {
        name: 'uploadedVideo',
        title: 'Uploaded Video',
        type: 'file',
        options: {
          accept: 'video/*',
        },
        hidden: ({ parent }) => parent?.videoType !== 'upload',
      },
    ],
  };
  
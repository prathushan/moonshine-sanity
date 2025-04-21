// schemas/contactSubmission.js
export default {
    name: 'contactSubmission',
    title: 'Contact Submission',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
      {
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
        readOnly: true,
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  
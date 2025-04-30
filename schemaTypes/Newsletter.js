export default {
    name: 'subscriber',
    type: 'document',
    title: 'Newsletter Subscriber',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Submitted At',
        initialValue: () => new Date().toISOString(),
      }
    ]
  }
  
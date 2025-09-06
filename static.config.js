import path from 'path'

export default {
  getRoutes: async () => {
    const { data: books } = {
        data: [
            {
                order_read: 1,
                id: 'the_shining',
                title: 'The Shining',
                blurb: "Cabin fever and alcoholism don't mix",
                thoughts: 'Very good',
                rating: '9/10',
            },
            {
                order_read: 2,
                id: 'the_anomaly',
                title: 'The Anomaly',
                blurb: "Indiana Jones and X-Files had a baby",
                thoughts: 'Very good',
                rating: '9/10',
            },
            {
                order_read: 3,
                id: 'project_hail_mary',
                title: 'Project Hail Mary',
                blurb: "Good guy army man shoots bad guy monster bug",
                thoughts: 'Very good',
                rating: '9/10',
            },
        ]
      }

    return [
      {
        path: '/books',
        getData: () => ({
          books,
        }),
        children: books.map(book => ({
          path: `/${book.id}`,
          template: 'src/containers/Book',
          getData: () => ({
            book
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}

export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f900f96050d161f05412530',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mf63m4go',
                  apiId: 'a54c0fae-ae83-4ecc-96ac-e40eaa3f15a6'
                },
                {
                  buildHookId: '5f900f9615dadc1f05cf253c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1v4mrszy',
                  apiId: 'be744dda-3dd7-4bae-a89e-855459e540a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidsantossilva/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1v4mrszy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

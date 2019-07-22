export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d353fa4663f542888c99eb4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qtyiqseo',
                  apiId: 'c564ab7a-18dd-46ba-be1c-2cb7c84b5b27'
                },
                {
                  buildHookId: '5d353fa513205204d2790892',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9m6q2i3m',
                  apiId: '875114ed-462c-4b9d-970b-ba634fedb3fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bizorrao/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9m6q2i3m.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

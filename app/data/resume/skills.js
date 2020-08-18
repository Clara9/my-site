// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Python',
  competency: 4,
  category: ['Web Development', 'Languages', ],
},
// {
//   title: 'Node.JS',
//   competency: 3,
//   category: ['Web Development', ],
// },
{
  title: 'React',
  competency: 2,
  category: ['Web Development', ],
},
// {
//   title: 'Bash',
//   competency: 2,
//   category: ['Tools', 'Languages'],
// },
// {
//   title: 'Amazon Web Services',
//   competency: 4,
//   category: ['Web Development', 'Tools'],
// },
{
  title: 'MySQL',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'SQL',
  competency: 3,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'MongoDB',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Neo4j',
  competency: 2,
  category: ['Databases'],
},

{
  title: 'Data Mining',
  competency: 3,
  category: ['Data Science'],
},

// {
//   title: 'Express.JS',
//   competency: 2,
//   category: ['Web Development', ],
// },
// {
//   title: 'D3',
//   competency: 2,
//   category: ['Web Development', ],
// },
// {
//   title: 'Flask',
//   competency: 2,
//   category: ['Web Development', 'Python'],
// },
{
  title: 'Git',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Vim',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Python Pyramid Framework',
  competency: 2,
  category: ['Python', 'Web Development'],
},
{
  title: 'Visual Studio',
  competency: 3,
  category: ['Tools'],
},
{
  title: 'Numpy',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'C++',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Java',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Linux',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'R',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Data Visualization',
  competency: 3,
  category: ['Data Science', ],
},
{
  title: 'Pandas',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Matplotlib',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'Seaborn',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'Drupal',
  competency: 3,
  category: ['Web Development']
},
{
  title: 'Moodle',
  competency: 3,
  category: ['Web Development']
},
{
  title: 'WordPress',
  competency: 3,
  category: ['Web Development']
},
{
  title: 'PHP',
  competency: 2,
  category: ['Web Development'],
},
{
  title: 'Django',
  competency: 2,
  category: ['Web Development'],
},
{
  title: 'User Interface Design',
  competency: 2,
  category: ['Web Development'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };

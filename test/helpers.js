const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ziyuan(Clara) Wei',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'Ziyuan(Clara) Wei',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ziyuan(Clara) Wei',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Ziyuan(Clara) Wei',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Ziyuan(Clara) Wei',
    heading: 'CONTACT',
  },
];

export { pages, randomString };

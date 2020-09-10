const positions = [{
  company: 'Oracle Corp.',
  position: 'Software Engineer Intern',
  link: '',
  daterange: 'May 2020 - Aug 2020',
  points: [
    'Worked on the Oracle Cloud PSR (Performance, Scalability and Reliability) Engineering Team',
    'Explored accuracy of using Helidon Timer for reporting latency-related metrics and alerting',
    'Created an automated test service instrumented with timer, simulated user requests sent with parameters to control service\
    response time, and visualized actual versus reported statistics using Python libraries including requests, Numpy, Matplotlib',
    'Investigated and made modifications for refinements/improvements to existing algorithm implementations using Java',
    'Logged a Helidon Enhancement request to the Helidon team (https://github.com/oracle/helidon/issues/2191), proposing sup\
    port of Sliding Window Reservoir Algorithm in addition to Exponential Decaying Reservoir(EDR) Algorithm in timer histogram',
    'Imported data into InfluxDB for time-series visualization in Grafana, and parsed user requests using JMeter'  ],
}, {
  company: 'HCI Group',
  position: 'Undergraduate Research Assistant',
  link: '',
  daterange: 'Sep 2020 - Present',
  points: [
    'Research on papers in IUI conference about affective agents, NLP techniques and user-based recommendations/interface',
  ],
}, {
  company: 'CS196',
  position: 'Teaching Assistant/Project Manager Director',
  link: '',
  daterange: 'Jan 2020 - Present',
  points: [
    'Planned scrum-based agile management for upcoming semester, and created plans for more than 20 teams with ClickUp',
    'Oversaw 7 semester-long projects with GitHub project management tools including scrum boards, and held biweekly meetings\
    and relevant technical workshops on git version control and software development life-cycles',
    'Graded and provided feedback for both projects and project managers' ],
}, {
  company: 'EPIC Lab, Department of Psychology',
  position: 'Undergraduate Research Assistant',
  link: 'https://itwinstudy.web.illinois.edu/',
  daterange: 'August 2019 - May 2020',
  points: [
    'Worked on the web development team for the iTwin studies, a platform for collecting data responses to analyze both genetic and environmental factors on twins in the department of Psychology',
    'Fixed layout issues with website layout, and displayed responses in categories using PHP and MySQL',
    'Connected and deployed cPanel with Github to ensure asynchronous code update',
  ],
}, {
  company: 'RMDS Lab Inc.',
  position: 'Software Development Intern',
  link: 'https://www.rmdslab.com/',
  daterange: 'May 2019 - Aug 2019',
  points: [
    'Brought CEO’s vision of a collaborative workspace to life by launching version 0.1x of https://grmds.org',
    'Used Drupal 8 to create and deploy a platform for data scientists to share data, workflow, insights and projects',
    'Led backend and frontend development of the Moodle learning site, and implemented changes in course page with CSS',
    'Migrated and upgraded Drupal core settings',
  ],
}, {
  company: 'CS196',
  position: 'Technical Project Manager',
  link: '',
  daterange: 'January 2019 - December 2019',
  points: [
    'Provided mentorship and guidance for a semester-long project using GameMaker studio, with complex mechanics levels and animate menus ',
    'Managed a semester-long security app, which scanned, parsed and encrypted private data such as passports, driver licenses and student ids, storing data into Firebase database, and laying out in profile page. Tech Stacks: React, Firebase, Microsoft Azure',
    'Provided workshops of software development life-cycles, give version control and other technical concepts',
  ],
},
];

export default positions;

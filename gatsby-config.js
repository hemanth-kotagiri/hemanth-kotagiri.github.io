module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://hemanth-kotagiri.github.io/`,
    // Your Name
    name: 'Hemanth Kotagiri',
    // Main Site Title
    title: `Hemanth Kotagiri | Data Scientist`,
    // Description that goes under your name in main bio
    // description: `Stoic 🌈 | Passionate Programmer 🧑‍💻 | Mathematics 🎲
    // | Philosophy 🦉| Physics ⚛ | AI 🤖 | Pythoneer 🐍 | Bibliophile 📚 |
    // Polymath 👁 | Forever Learer  🧑🏻‍🎓| Excited Teacher 🧑‍🏫`,
    // description: ``, // Optional: Twitter account handle
    // description: ``,
    description: `Travelling | Curious Explorer | Lifelong Learner | Tech Enthusiast`,
    //author: `@Hemanth043`,
    // Optional: Github account URL
    github: `https://github.com/hemanth-kotagiri`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hemanth-kotagiri/`,
    // Content of the About Me section
    about: `Working as a Lead Technical Architect for a full stack web
    developement team, guiding and delivering end-to-end, highly performant,
    scalable web solutions. Alongside this, I also freelance delivering
    high-quality data-driven solutions for challenging problems such as image
    classification, regression analysis in the field of Machine Learning and
    Deep Learning. I love working on mobile-application development projects as
    well. In my fair time, I tend to ponder upon the universe, existence,
    consciousness, science, psychology, philosophy, physics, mathematics, and
    learn literally anything that crosses my mind. I love learning!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'JNTUH Results Statistics',
        description: [
          '● This project aims to solve a single core issue - the ability to filter desired results from a gigantic list of links from our University.',
          '● Student has the ability to fetch their specific result also fetch multiple results with performance statistics.',
          '● Students have the ability to fetch results of all of their classmates with performance statistics.',
          '● Build using NextJS - React - TypeScript - TailwindCSS',
        ],
        link: 'https://jntuh-results-stats.netlify.app/',
      },
      {
        name: 'Results RESTFul API',
        description: [
          '● A RestAPI built from scratch using Python and Flask to fetch the results of my University’s students of all years with different endpoints.',
          '● The RestAPI has been deployed over at Heroku PaaS.',
        ],
        link: 'https://github.com/hemanth-kotagiri/sgpa-rest-api',
      },
      {
        name: 'SGPA Calculator Application',
        description: [
          '● Using Flutter and Dart, engineered an Open-source cross-platform application to calculate stream-specific GPA.',
          '● This application serves as the front-end client for the Results RESTFul API.',
        ],
        link: 'https://github.com/hemanth-kotagiri/sgpa-calculator',
      },
      {
        name: 'Brain Tumor Detection',
        description: [
          '● Using Brain MRI images, a predictive model using Tensorflow and Keras was built using a CNN and provided high accuracy on testing data.',
        ],
        link: 'https://github.com/hemanth-kotagiri/brain-tumor-detection',
      },
      {
        name: 'Amazon Reviews Sentiment Analysis',
        description: [
          '● Using amazon fine-food product reviews, analyzed and performed EDA upon over 500,000 data-points.',
          `● Analyzed the Sentiment of each review and generated multiple
          predictive models such as Logistic Regression, Naive Bayes
          Classifier, Random Forest Classifier to classify as positive/negative
          with And overall average accuracy of >80%.`,
        ],
        link: 'https://github.com/hemanth-kotagiri/xdi-amazon-eda-ml',
      },
      {
        name: 'COVID - 19 Dashboard',
        description: [
          `● Using a public API, developed a web application using
        Python & Streamlit to seamlessly integrate the data into an analytical
        dashboard and provide daily live insights of the spread of the Novel
        Coronavirus.`,
          '● Application is deployed over at Heroku.',
        ],
        link: 'https://covid-india-dash-board.herokuapp.com/',
      },
      {
        name: 'COVID - 19 Symptom Assessment',
        description: [
          `● Generated a classification model using Random Forests
        upon symptoms data of COVID-19 to potentially predict if a given test
        sample is positive or negative.`,
        ],
        link: 'https://github.com/hemanth-kotagiri/COVID-19',
      },
      {
        name: 'Breast Cancer Detection',
        description: [
          `● Generated multiple Machine Learning models such as
        Logistic Regression, Random Forests, SVC on breast cancer data with an
        accuracy of over 92% on testing set.`,
        ],
        link: 'https://github.com/hemanth-kotagiri/breast_cancer_detection',
      },
      {
        name: 'Daily Report Generator',
        description: [
          `● Developed an Open-source cross-platform Mobile
        Application to automate daily excel reports using Python and Kivy.`,
        ],
        link: 'https://github.com/hemanth-kotagiri/report-generator',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Louvir',
        description: [
          'Lead Technical Architect',
          'November 2024 - Present',

          ` ● Lead and mentor the development team, fostering adherence to industry coding and system design standards while driving technical excellence.`,
          ` ● Serve as the bridge between technical teams and business stakeholders, ensuring seamless integration of technical components into overall projects and define technical requirements and architecture specifications`,
          ` ● Design and oversee the architecture of systems, applications, and infrastructure to ensure scalability, reliability, and alignment with the company's technical roadmap.`,
          ` ● Conduct comprehensive code reviews, ensuring adherence to best practices, coding standards, and design principles to maintain a clean and efficient codebase.`,
          ` ● Stay current with industry trends and emerging technologies, proposing innovative solutions to enhance business efficiency and solve complex technical challenges.`,
          ` ● Ensure all technical solutions are tested thoroughly for performance, security, and reliability, adhering to best practices and functional requirements.`,
          ` ● Establish and enforce coding standards, performance benchmarks, and secure development practices to maintain system quality and compliance.`,
          ` ● Ensure security best practices and compliance with HIPAA and other regulatory requirements, integrating secure development principles into the product lifecycle.`,
          ` ● Serve as Scrum Master, facilitating Agile ceremonies, removing blockers, and enabling the team to achieve sprint goals and deliverables.`,

          'Full Stack Engineer',
          'March 2023 - October 2024',
        ],
        link: 'https://louvir.com/',
      },
      {
        name: 'plumina.ai',
        description: [
          'Applied Machine Learning Engineer, June 2020 - September 2020',
          '(Independent Contributor, Part Time)',
          `● Worked single-handedly as the core developer for creating multiple Machine Learning models under the
            category of Regression and Classification using Scikit-Learn and Python.`,
          ` ● Generated Deep Neural Network models for binary classification using Tensorflow, Keras.`,
          ` ● Performed periodic Structured Data Analysis.`,
        ],
        link: '',
      },
      {
        name: 'ANZ',
        description: [
          'Data Analyst Virtual Intern, May 2020 – Aug 2020',
          `● Exploratory Data Analysis - Using Python, Matplotlib, Pandas, Numpy, and Seaborn performed EDA on one
      hundred hypothetical customer transaction data.`,
          ` ● Predictive Analytics - Using Scikit-Learn generated multiple Machine Learning models such as Random Forest
      regressor, Linear Regressor, and predicted the Annual Income of a potential customer based on different
      customer attributes.`,
        ],
        link:
          'https://drive.google.com/file/d/1m2hkkV9nrpAfZDPAcz198vvoMMRVzEZK/view',
      },
      {
        name: 'JP Morgan Chase',
        description: [
          'Software Engineer Virtual Intern, May 2020 – Jun 2020',
          ` ● Established Financial Data Feeds - Added a chart to a trader's dashboard allowing them to identify trading opportunities.`,
          ` ● Frontend Web Development - Used JPMorgan Chase frameworks such as The Perspective, pipped the stock data into the tool and gave insight in the form of charts running live.`,
        ],
        link:
          'https://drive.google.com/file/d/1uyeHMYoaHS2Fcn_D8_fxOrflrDdoL5EW/view?usp=sharing',
      },
      {
        name: 'Open Source Contributor',
        description: [
          ` ● Actively contributing to TheNewBoston and improved their website by raising PRs and issues.`,
          ` ● Reviewed over 30+ Pull Requests in various projects targetting
          algorithmic implementations of different languages such as C, C++,
          Python, Java, Go, and JavaScript.`,
        ],
        link: 'https://www.github.com/hemanth-kotagiri',
      },
      {
        name: 'Hacktoberfest 2020 & 2021',
        description: [
          `● Participated in a month-long event organized by Ditial Ocean,
          appwrite, deepsource, Intel, ThePracticalDev and Hacktoberfest team to
          celebrate Open Source.`,
          `● Raised multiple Pull Requests contributing to more than 4 Open
          Source repositories targeting Data Structures and Algorithms.`,
        ],
        link: '',
      },
    ],
    education: [
      {
        name: 'Computer Science & Engineering Undergraduate',
        description: [
          'Jawaharlal Nehru Technological University, Hyderabad',
          'Senior Year',
        ],
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: [
          'Python, C, C++, Java, HTML, CSS, TailwindCSS (basics), ReactJS, JavaScript(ES6+), Golang, Dart, Flutter, Flask, Selenium, Scikit-Learn, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn.',
        ],
      },
      {
        name: 'Databases',
        description: ['MongoDB, MySQL'],
      },
      {
        name: 'Other',
        description: [
          'Vim, Tmux, Linux, Git, GitHub, Docker(basics), Heroku, CI / CD, REST-API design, Machine Learning, Natural Language Processing, Deep Learning, Computer Vision.',
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Hemanth Kotagiri',
    // Main Site Title
    title: `Hemanth Kotagiri | Data Scientist`,
    // Description that goes under your name in main bio
    description: `Stoic 🌈 | Passionate Programmer 🧑‍💻 | Mathematics 🎲
    | Philosophy 🦉| Physics ⚛ | AI 🤖 | Pythoneer 🐍 | Bibliophile 📚 |
    Polymath 👁 | Forever Learer  🧑🏻‍🎓| Excited Teacher 🧑‍🏫`,
    // Optional: Twitter account handle
    //author: `@Hemanth043`,
    // Optional: Github account URL
    github: `https://github.com/hemanth-kotagiri`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hemanth-kotagiri/`,
    // Content of the About Me section
    about: `A freelancer delivering high-quality data-driven
    solutions for challenging problems such as image classification, regression
    analysis in the field of Machine Learning and Deep Learning. I love working on
    web-development and mobile-application development projects as well. In my
    fair time, I tend to ponder upon the universe, existence, consciousness,
    science, psychology, philosophy, physics, mathematics, and learn literally
    anything that crosses my mind.  Yes, an aspiring polymath.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Results RESTFul API',
        description:
          '● A RestAPI built from scratch using Python and Flask to fetch the results of my University’s students of all years with different endpoints. The RestAPI has been deployed over at Heroku PaaS',
        link: 'https://github.com/hemanth-kotagiri/sgpa-rest-api',
      },
      {
        name: 'SGPA Calculator Application',
        description:
          '● Using Flutter and Dart, engineered an Open-source cross-platform application to calculate stream-specific',
        link: 'https://github.com/hemanth-kotagiri/sgpa-calculator',
      },
      {
        name: 'Brain Tumor Detection',
        description:
          '● Using Brain MRI images, a predictive model using Tensorflow and Keras was built using a CNN and provided high accuracy on testing data',
        link: 'https://github.com/hemanth-kotagiri/brain-tumor-detection',
      },
      {
        name: 'Amazon Reviews Sentiment Analysis',
        description: `● Using amazon fine-food product reviews, analyzed and
        performed EDA upon over 500,000 data-points. Analyzed the Sentiment
        of each review and generated multiple predictive models such as
        Logistic Regression, Naive Bayes Classifier, Random Forest Classifier
        to classify as positive/negative with And overall average accuracy of
        >80%`,
        link: 'https://github.com/hemanth-kotagiri/xdi-amazon-eda-ml',
      },
      {
        name: 'COVID - 19 Dashboard',
        description: `● Using a public API, developed a web application using
        Python & Streamlit to seamlessly integrate the data into an analytical
        dashboard and provide daily live insights of the spread of the Novel
        Coronavirus. Application is deployed over at Heroku`,
        link: 'https://covid-india-dash-board.herokuapp.com/',
      },
      {
        name: 'COVID - 19 Symptom Assessment',
        description: `● Generated a classification model using Random Forests
        upon symptoms data of COVID-19 to potentially predict if a given test
        sample is positive or negative.`,
        link: 'https://github.com/hemanth-kotagiri/COVID-19',
      },
      {
        name: 'Breast Cancer Detection',
        description: `● Generated multiple Machine Learning models such as
        Logistic Regression, Random Forests, SVC on breast cancer data with an
        accuracy of over 92% on testing set.`,
        link: 'https://github.com/hemanth-kotagiri/breast_cancer_detection',
      },
      {
        name: 'Daily Report Generator',
        description: `● Developed an Open-source cross-platform Mobile
        Application to automate daily excel reports using`,
        link: 'https://github.com/hemanth-kotagiri/report-generator',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'plumina.ai',
        description:
          'Applied Machine Learning Engineer, February 2020 - February 2021',
        link: '',
      },
      {
        name: 'ANZ',
        description: 'Data Analyst Virtual Intern, May 2020 – Aug 2020',
        link:
          'https://drive.google.com/file/d/1m2hkkV9nrpAfZDPAcz198vvoMMRVzEZK/view',
      },
      {
        name: 'JP Morgan Chase',
        description: 'Software Engineer Virtual Intern, May 2020 – Jun 2020',
        link:
          'https://drive.google.com/file/d/1uyeHMYoaHS2Fcn_D8_fxOrflrDdoL5EW/view?usp=sharing',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C, C++, Java, JavaScript, Golang, Dart, Flutter, Scikit-Learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Vim, Linux, Docker(basics), Heroku, CI / CD, REST-API design',
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

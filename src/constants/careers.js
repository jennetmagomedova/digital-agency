import {
  backend,
  bugTracking,
  cms,
  designHead,
  frontend,
  fuTesting,
  hr,
  implementation,
  informationArc,
  interfaceDesign,
  psTesting,
  updates,
} from "@/assets/icons";

export const careerReasons = {
  title: "Welcome to SquareUp, where talent meets opportunity!",
  description:
    "At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.",
  tag: "Why Work at SquareUp?",
  reasons: [
    {
      title: "Innovative and Impactful Projects",
      description:
        "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: "Supportive Environment",
      description:
        "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
      title: "Continuous Learning and Growth",
      description:
        "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
    },
    {
      title: "Challenging and Rewarding Work",
      description:
        "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
    },
  ],
};

export const careerOpenings = {
  title: "Current Openings",
  description:
    "We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.",
  openings: [
    {
      title: "Design Job Openings",
      cards: [
        {
          icon: interfaceDesign,
          title: "UI Designer",
          hasDescription: true,
          description:
            "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: informationArc,
          title: "UX Designer",
          description:
            "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: designHead,
          title: "Design Head",
          description:
            "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
      ],
    },
    {
      title: "Development Job Openings",
      cards: [
        {
          icon: frontend,
          title: "Front - End Developer",
          description:
            "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: backend,
          title: "Back - End  Developer",
          description:
            "Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: cms,
          title: "Full Stack Developer",
          description:
            "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
      ],
    },
    {
      title: "Management Job Openings",
      cards: [
        {
          icon: updates,
          title: "BA Manager",
          description:
            "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: implementation,
          title: "Project Manager",
          description:
            "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: hr,
          title: "HR Manager",
          description:
            "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
      ],
    },
    {
      title: "QA Job Openings",
      cards: [
        {
          icon: bugTracking,
          title: "QA Tester",
          description:
            "Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: psTesting,
          title: "SQL Tester",
          description:
            "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
        {
          icon: fuTesting,
          title: "SQL Tester",
          description:
            "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.",
          hasButton: true,
          buttonLabel: "Apply Now",
        },
      ],
    },
  ],
};

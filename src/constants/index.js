import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,xneuronz,holopin,nyu,bits,logo,
  } from "../assets";

  import udemy from "../assets/udemy.jpg"
  import DSI from "../assets/DSI.jpeg"
  import UN from "../assets/UN.jpeg"
  import NGI from "../assets/NGI.jpeg"
    
  const profiles = [
    {
      link: "https://drive.google.com/file/d/1P672kj6AFx5DL31GDpr3qi3Gsgt3ZhNW/view?usp=sharing",
      icon: udemy,
    }
  ];

  const achievements = [
    {
      title: "DePauw Academic Merit Scholarship, 2018 - 2023. ",
    },
    {
      title: "DePauw Dean's List The Dean's List with GPA of 3.5 or higher on a 4.0 scale, 2018 - 2023. ",
    }
  ]

  const research = [
    {
      title: 'Published Research Paper : "COVID-19 is Not All Bad News: Negative and Surprisingly Positive Reports from College STEM Students and Implications for STEM Instruction" (2023). Student Research. 55, Scholarly and Creative Work from DePauw University."',
      link: "https://scholarship.depauw.edu/studentresearchother/55/"
    },
    {
      title: 'Research Paper under Review : "Evaluating Trust and Inclusivity: A Machine-Driven Benchmark for Large Language Model Chatbots in LGBTQ+ Suicide Prevention, AI & Society, Springer 2025. "',
    },
    {
      title: 'On going Research work : "Don’t Treat AI Chatbots like a Google Search: An Introduction to Prompt Engineering for Social Workers"....  "',
    },
    {
      title: 'On going Research work : "Health Equity and Technology: Integrating Critical Consciousness Theory with Artificial Intelligence (AI) Development and Implementation"...  "',
    },
    {
      title: 'On going Research work : "Benchmarking AI Text Generation for Equity in Social Work: A Framework for Ethical and Inclusive Evaluation" ....  "',
    },
    {
      title: 'On going Research work : "A Scoping Review on the Application of Artificial Intelligence (AI) and Large Language Models (LLMs) in LGBTQ+ Health: Implications for Social Work Practice and Research" ....  "',
    },
    {
      title: 'On going Research work : "Evaluating Large Language Models for Project Communication and Report Generation in Engineering Management" ....  "',
    }
  ]
  
  const technologies = [
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
    },
    {
      name: "PyTorch",
      icon: "https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png&color=000000",
    },
    {
      name: "Tensorflow",
      icon: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000",
    },
    {
      name:"R",
      icon: "https://img.icons8.com/?size=100&id=CLvQeiwFpit4&format=png&color=000000",
    },
    {
      name:"AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "OpenCV",
      icon: "https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000",
    },
    {
      name: "Hugging Face",
      icon: "https://img.icons8.com/?size=100&id=sop9ROXku5bb&format=png&color=000000",
    },
    {
      name: "LlamaIndex",
      icon: "https://asset.brandfetch.io/id6a4s3gXI/idncpUsO_z.jpeg",
    },
    {
      name: "Langchain",
      icon: "https://lancedb.github.io/lancedb/assets/langchain.png",
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

// ====== Category list  ======
  const list = [
    { 
      id: "assistants", 
      title: "Assistants & Chatbots" 
    },
    { 
      id: "un",         
      title: "UN, SDG & Analytics" 
    },
    { 
      id: "vision",     
      title: "Vision, Gesture & CV" 
    },
    { 
      id: "webapps",    
      title: "Web Apps & Tools" 
    },
    { 
      id: "learning",   
      title: "Learning Repos & Notes" 
    },
    { 
      id: "coursework", 
      title: "Academic Projects" 
    },
    { 
      id: "misc",       
      title: "Misc / Personal" 
    },
  ];

// ====== Assistants & Chatbots ======
  export const assistantsProject = [
    {
      name: "LLM-Axe_Chainlit_Chatbot",
      description: 
        "Chainlit copilot that retrieves with LLM-Axe and synthesizes with Llama3; persistent chat context.",
      tags: [
        { 
          name: "Chainlit", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "RAG", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Llama3", 
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=960,format=auto/https://files.realpython.com/media/Python-3.14-Preview-Better-Syntax-Error-Messages_Watarmarked.ac1b2c644591.jpg",
      source_link: "https://github.com/ZhaoJackson/LLM-Axe_Chainlit_Chatbot",
      source_code_link: "https://github.com/ZhaoJackson/LLM-Axe_Chainlit_Chatbot",
    },
    {
      name: "Text-Reference-AIChatbot",
      description: 
        "Reference-grounded chatbot focused on safe, ethical replies; hooks for ROUGE/METEOR evaluation.",
      tags: [
        { 
          name: "Safety", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Evaluation", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "NLP", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Showcase-Ruff-Linter_Watermarked.71e600eb11de.jpg",
      source_link: "https://github.com/ZhaoJackson/Text-Reference-AIChatbot",
      source_code_link: "https://github.com/ZhaoJackson/Text-Reference-AIChatbot",
    },
    {
      name: "united_nations_web_chatbot",
      description: 
        "Web chatbot scaffold for UN information access and Q&A.",
      tags: [
        { 
          name: "Web", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Chatbot", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "UN",
          color: "pink-text-gradient" 
        },
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-3.14-Preview-REPL-Autocompletion-and-Highlighting_Watermarked.72f0b769acf1.jpg",
      source_link: "https://github.com/ZhaoJackson/united_nations_web_chatbot",
      source_code_link: "https://github.com/ZhaoJackson/united_nations_web_chatbot",
    },
    {
      name: "J.A.R.V.I.S",
      description: 
        "Modular FastAPI assistant: Ollama LLM, Spotify mood player, Telegram hooks, I-Ching guidance.",
      tags: [
        { name: 
          "FastAPI", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Ollama", 
          color: "green-text-gradient"
        }, 
        { 
          name: "Spotify API", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Using-Pythons-.__dict__-to-Inspect-Object-Attributes_Watermarked.e648f20c0563.jpg",
      source_link: "https://github.com/ZhaoJackson/J.A.R.V.I.S",
      source_code_link: "https://github.com/ZhaoJackson/J.A.R.V.I.S",
    },
    {
      name: "chatbot_automation",
      description: 
        "Automation to turn model outputs into PPT/CSV dashboards; reproducible reporting pipeline.",
      tags: [
        { 
          name: "Automation", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "pptx", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "CLI", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Single-and-a-Double-Leading-Underscore-in-Python-Names_Watermarked.e3bfbf1b525c.jpg",
      source_link: "https://github.com/ZhaoJackson/chatbot_automation",
      source_code_link: "https://github.com/ZhaoJackson/chatbot_automation",
    },
    {
      name: "Turing_APP",
      description: 
        "Turing Test swipe game: ‘Human vs AI’ guessing with progress and retry UX.",
      tags: [
        { 
          name: "React", 
          color: "blue-text-gradient" 
        }, 
        { name: "Game", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "UX", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Multiple-Inheritance-and-Mixins_Watermarked.1cfef28a6113.jpg",
      source_link: "https://github.com/ZhaoJackson/Turing_APP",
      source_code_link: "https://github.com/ZhaoJackson/Turing_APP",
    },
  ];

// ====== UN, SDG & Analytics ======
  export const unProject = [
    {
      name: "United_Nations_Legacy",
      description: 
        "Legacy UN code: CF/CCA QA scripts, Peru/Panama reviews, and auto slide generation.",
      tags: [
        { 
          name: "UN QA", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Python", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "pptx", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=1920,format=auto/https://files.realpython.com/media/Build-a-LLM-Application-with-LangChain_Watermarked.b9d023202ad2.jpg",
      source_link: "https://github.com/ZhaoJackson/United_Nations_Legacy",
      source_code_link: "https://github.com/ZhaoJackson/United_Nations_Legacy",
    },
  ];

// ====== Vision, Gesture & CV ======
  export const visionProject = [
    {
      name: "computer_vision",
      description: 
        "Computer vision experiments and utilities.",
      tags: [
        { 
          name: "CV", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "PyTorch", 
          color: "green-text-gradient"
        }, 
        { 
          name: "OpenCV", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=1920,format=auto/https://files.realpython.com/media/Bitwise-Operators-in-Python_Watermarked.85ff8fc6a931.jpg",
      source_link: "https://github.com/ZhaoJackson/computer_vision",
      source_code_link: "https://github.com/ZhaoJackson/computer_vision",
    },
    {
      name: "air_gesture",
      description: 
        "Air-gesture interaction experiments (vision-based controls).",
      tags: [
        { 
          name: "Gesture", 
          color: "blue-text-gradient" 
        },
        { 
          name: "OpenCV", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "UX", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-Requests-Library-Tutorial_Watermarked.3c9dfdc7b014.jpg",
      source_link: "https://github.com/ZhaoJackson/air_gesture",
      source_code_link: "https://github.com/ZhaoJackson/air_gesture",
    },
  ];

// ====== Web Apps & Tools ======
  export const webProject = [
    {
      name: "text-extract-app",
      description: 
        "Lightweight text extraction tool (web).",
      tags: [
        { 
          name: "Web", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "JavaScript", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Utilities", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=1920,format=auto/https://files.realpython.com/media/Build-a-LLM-Application-with-LangChain_Watermarked.b9d023202ad2.jpg",
      source_link: "https://github.com/ZhaoJackson/text-extract-app",
      source_code_link: "https://github.com/ZhaoJackson/text-extract-app",
    },
    {
      name: "ds_case_study",
      description: 
        "Data-science case study website/pages.",
      tags: [
        { 
          name: "HTML", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Web", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Case Study", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/How-Does-isinstance-Work-in-Python_Watermarked.98828170897b.jpg",
      source_link: "https://github.com/ZhaoJackson/ds_case_study",
      source_code_link: "https://github.com/ZhaoJackson/ds_case_study",
    },
    {
      name: "weather-report-app",
      description: 
        "14-20 day forecast + outfit recommender; CSV logging and Plotly/Streamlit visuals.",
      tags: [
        { 
          name: "Plotly", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Streamlit", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Pandas", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Showcase-Marimo-Notebook_Watermarked.91bd98028a40.jpg",
      source_link: "https://github.com/ZhaoJackson/weather-report-app",
      source_code_link: "https://github.com/ZhaoJackson/weather-report-app",
    },
  ];

// ====== Learning Repos & Notes ======
  export const learningProject = [
    {
      name: "MBTI_NLP_ML_Proj",
      description: 
        "NLP classification experiments and tooling on MBTI-style data.",
      tags: [
        { 
          name: "NLP", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Scikit-learn", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "EDA", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/UPDATE-Python-Scope--the-LEGB-Rule-Resolving-Names-in-Your-Code_Watermarked.e72424ea8a24.jpg",
      source_link: "https://github.com/ZhaoJackson/MBTI_NLP_ML_Proj",
      source_code_link: "https://github.com/ZhaoJackson/MBTI_NLP_ML_Proj",
    },
  ];

// ====== Academic Projects (ADS & others) ======
  export const courseworkProject = [
    {
      name: "ADS-Spring2024-DS-Project5",
      description: 
        "ADS Spring ’24 Project 5 deliverables.",
      tags: [
        { 
          name: "ADS", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Project", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "ML", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Monthly-Python-News_Blue_Watermarked.f56ede474cc7.jpg",
      source_link: "https://github.com/ZhaoJackson/ADS-Spring2024-DS-Project5",
      source_code_link: "https://github.com/ZhaoJackson/ADS-Spring2024-DS-Project5",
    },
    {
      name: "ADS-Spring2024-Project4-MachineLearningFairness-Group12",
      description: 
        "Fairness in ML — group project assets.",
      tags: [
        { name: "Fairness", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "ML", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "ADS", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Factory-Method-Pattern-in-Python_Watermarked.6516a91d4d41.jpg",
      source_link: "https://github.com/ZhaoJackson/ADS-Spring2024-Project4-MachineLearningFairness-Group12",
      source_code_link: "https://github.com/ZhaoJackson/ADS-Spring2024-Project4-MachineLearningFairness-Group12",
    },
    {
      name: "ADS-Spring2024-Project3-ClimSim-Group-5",
      description: 
        "Climate simulation project — Group 5 artifacts.",
      tags: [
        { 
          name: "Climate", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "Simulation", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "ADS", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Python-3.14-1-Preview-Template-Strings_Watermarked.1071657a0531.jpg",
      source_link: "https://github.com/ZhaoJackson/ADS-Spring2024-Project3-ClimSim-Group-5",
      source_code_link: "https://github.com/ZhaoJackson/ADS-Spring2024-Project3-ClimSim-Group-5",
    },
    {
      name: "Sentiment-Analysis-on-HappyDB",
      description: 
        "Sentiment analysis over HappyDB — experimentation and results.",
      tags: [
        { 
          name: "Sentiment", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "NLP", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Python", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/The-Python-enumerate-Function-Guide_Watermarked.c803ed002afa.jpg",
      source_link: "https://github.com/ZhaoJackson/Sentiment-Analysis-on-HappyDB",
      source_code_link: "https://github.com/ZhaoJackson/Sentiment-Analysis-on-HappyDB",
    },
  ];

// ====== Misc / Personal ======
  export const miscProject = [
    {
      name: "Intelligent_Teaching_Product",
      description: 
        "LLM-assisted TA dashboard: analytics, auto-feedback, and group engagement metrics.",
      tags: [
        { 
          name: "Analytics", 
          color: "blue-text-gradient" 
        }, 
        { 
          name: "LLM", 
          color: "green-text-gradient" 
        }, 
        { 
          name: "Education", 
          color: "pink-text-gradient" 
        }
      ],
      image: "https://realpython.com/cdn-cgi/image/width=480,format=auto/https://files.realpython.com/media/Coding-Challenge-Wordcount.18aa6928cf0b.jpg",
      source_link: "https://github.com/ZhaoJackson/Intelligent_Teaching_Product",
      source_code_link: "https://github.com/ZhaoJackson/Intelligent_Teaching_Product",
    },
  ];

  const experiences = [
    {
      title: "Machine Learning Engineer",
      company_name: "NYU Langone Health",
      icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEhE3VF_HYUoQ/company-logo_200_200/company-logo_200_200/0/1688567473350/nyulangonehealth_logo?e=1762387200&v=beta&t=uouIZXwEfUrtgDhlvktMKIXgRnfO2YauHkJx59oShyE",
      iconBg: "#57068C",
      date: "August 2025 - Current",
      link: "https://med.nyu.edu/departments-institutes/child-adolescent-psychiatry/",
      points: [
        "Designed mental health AI pipeline by training 50,000+ therapeutic conversations in Hugging Face Hub on dual evaluation framework (traditional + AI-judge metrics).",
        "Fine-tuned pipeline including SFT, DPO, and ORPO with 85% coherence scores and 75% helpfulness ratings, enabling advance patient care through AI."
      ],
      link: "https://med.nyu.edu/departments-institutes/child-adolescent-psychiatry/",
    },
    {
      title: "Algorithm Engineer",
      company_name: "The Data Science Institute at Columbia University",
      icon: DSI,
      iconBg: "#00336c",
      date: "Jun 2024 - Current",
      link: "https://www.dotlas.com",
      points: [
        "Utilized and fine-tuned BERT model in TensorFlow for sentiment analysis, alongside custom algorithms (synonym replacement, N-grams permutations, etc.), achieving 89.2% accuracy in identifying nuanced sentiment differences.",
        "Engineered data workflows on GCP, incorporating Google Cloud Databases to optimize data retrieval and management; developed data pipeline on 10K+ social work reference texts, comparing textual data via machine-driven evaluation algorithms (BLEU, ROUGE, METEOR, etc.), assessing precision and accuracy among LGBTQ+ communities.",
        "Enhanced NLP algorithms (VADER, TextBlob, BERT, LSTM, Naive Bayes Classifier, GPT-3.5, etc.) with real-time processing via REST API integrations, utilizing Google Cloud Natural Language API for outcome cross-checking.",
        "Delivered AI insights by transforming complex reference texts into structured data, driving informed decision-making processes in prompt modifications and ensuring AI output (GPT-4, Claude) provide accurate, ethical, and inclusive social work guidance.",
      ],
      link: "https://datascience.columbia.edu/",
    },
    {
      title: "Data Scientist, AI",
      company_name: "United Nations Development Coordination Office",
      icon: UN,
      iconBg: "#009EDB",
      date: "Feb 2025 - Aug 2025",
      link: "",
      points: [
        "Developed a production-ready financial intelligence chatbot using Retrieval-Augmented Generation and GPT-4o/O1, handling funding questions from 162 countries and improving relevance and accuracy scores by 20% via fine-tuning the retrieval pipeline on 500+ auto-generated prompts and human-labeled data.",
        "Engineered 80+ hybrid features for funding and agency prediction across 150 thematic areas, reduced dimensionality to 40 via PCA, and performed model selection (SVM, GBM, LR, RF, KNN, etc.) with Random Search CV and Bayesian tuning, achieving an average of 89% classification accuracy.",
      ],
      
      link: "https://un-dco.org/",
    },
    {
      title: "Data Scientist, Computer Vision",
      company_name: "NextGen Invent Corp",
      icon: NGI,
      iconBg: "#ffffff",
      date: "Jun 2024 - Dec 2024",
      link: "https://www.sentientlabs.tech",
      points: [
        "Deployed 8 object detection models from Roboﬂow Universe based on deep learning and computer vision techniques (CNN, VGG16, YOLOv5, YOLOv8, etc.), reducing inference time by 25% through optimal model training and selection.",
        "Engineered video processing pipeline via OpenCV for 3K+ video frames and store 10K+ frames in database, improving model performance from 35% to 74.5%, achieving a ﬁnal 95% object detection accuracy.",
        "Leveraged Llama3 model to build interactive weather forecast dashboard using Streamlit and Plotly, automating data collection from Google Weather API to visualize weather trends with outﬁt recommendations",
        "Designed AI-driven Copilot ChatWindow through Chainlit; integrated and tuned prompts for training LLM-Axe to retrieve real-time information API calls based on user queries and Llama3 for contextual responses blog summaries, enhancing model’s performance up to a 30% reduction in average response time",
      ],
      link: "https://nextgeninvent.com/",
    },
    {
      title: "Data Scientist",
      company_name: "Techlent",
      icon: hf,
      iconBg: "#53bfb0",
      date: "Jun 2023 - Jun 2024",
      link: "",
      points: [
        "Developed and maintained data pipelines using SQL to extract and load supermarket sales data into a PostgreSQL database on AWS.",
        "Defined metrics to measure sales performance and created dashboards and reports in Tableau to visualize daily and monthly sales trends and product ratings by category across different retail stores.",
        "Identified key factors affecting daily and monthly sales, delivering actionable insights to retail managers to optimize stock inventory.",
      ],      
      link: "https://www.techlent.com/cn",
    },
  ];
  
  const educations = [
    {
      degree: "Master of Science",
      branch:
        "Quantitative Methods",
      marks:
      "GPA : 4.08 / 4.0",
      name: "Columbia University",
      year: "2023 - 2024",
      image: nyu,
    },
    {
      degree:
        "Bachelor of Art",
      branch : "Psychology & Mathematics",
      marks:
      "GPA : 3.72 / 4.0",
      name: "DePauw University",
      year: "2018 - 2023",
      image: bits,
    },
  ];

  const about = {
    name: "Jackson Zhao",
    title: "Data Scientist | AI & Mental Health Researcher",
    description1:
      "Hi there! 👋 I’m Jackson Zhao, a data scientist and AI researcher passionate about building innovative technologies that create meaningful social impact. I hold a Master’s in Quantitative Methods, Data Science from Columbia University 🎓 and have worked with the United Nations on global AI-driven projects 🌍.",
    description2:
      "My passion is deeply rooted in mental health care 💙. I’ve developed machine-driven benchmarks to evaluate suicide prevention chatbots, fine-tuned language models for ethical alignment, and built pipelines that translate complex social data into actionable insights for decision-making.",
    description3:
      "I speak fluent Python 🐍 (plus R, SQL, and cloud platforms like GCP, AWS, and Azure), and enjoy experimenting with frameworks such as TensorFlow, PyTorch, and Hugging Face 🤖. I’m especially drawn to large language models, generative AI, and responsible AI design.",
    description4:
      "My goal is to be a solid bridge between mental health and AI, ensuring that technology not only scales but also heals. If you’re excited about reimagining mental health with AI—whether through inclusive chatbots, predictive analytics, or responsible data science—let’s connect and build something impactful together! 🚀",
  };
  
  
  export { list, profiles, technologies, experiences, educations, achievements, research, about };

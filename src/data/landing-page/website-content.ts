interface HeroSection {
    heading: string;
    hero_message: string;
    short_description: string;
}

interface CompanyHistoryEntry {
    title: string;
    description: string[];
}

interface GraphDataPoint {
    [year: string]: number;
}

interface Graph {
    x_axis: string;
    y_axis: string;
    data_points: GraphDataPoint;
}

interface ServiceCard {
    title: string;
    description: string;
    benefits: string[];
}

interface Impact {
    direct_benefits_to_farmers: string[];
    community_and_social_impact: string[];
}

interface ShareholderData {
    [category: string]: { [subCategory: string]: number };
}

interface GraphsAndCharts {
    revenue_growth: Graph;
    shareholder_composition: {
        categories: string[];
        subcategories: string[];
        data_points: ShareholderData;
    };
    input_sales_growth: Graph;
    farmer_income_increase: Graph;
    farmer_beneficiary_distribution: { services: string[]; data_points: { [service: string]: number }; };
}

interface JkpclData {
    hero_section: HeroSection;
    company_history: CompanyHistoryEntry[];
    graphs_and_charts: GraphsAndCharts;
    service_cards: ServiceCard[];
    impact_on_farmers_and_society: Impact;
}

export const jkpclData = {
    "hero_section": {
        "heading": "Empowering Farmers, Enriching Lives",
        "hero_message": "Join us in transforming agriculture and uplifting the lives of farmers in Jhargram. At JKPCL, we are committed to sustainable growth, innovative farming solutions, and building a prosperous future for our farming communities.",
        "short_description": "Jhargram Krishak Producer Company Limited (JKPCL) is a Farmers Producer Company established with the support of NABARD. Our mission is to enhance farm productivity and market access for small and marginal farmers, ensuring sustainable income growth. Through technology, market linkages, and value chain interventions, we aim to revolutionize the livelihood patterns of primary producers."
    },
    "company_history": [
        {
            "title": "Formation and Early Development (2016-2019)",
            "contents": [
                {
                    "title": "2016",
                    "desc": " Formation of KARWFC Producer Organization under the Indian Trust Act with NABARD's support."
                },
                {
                    "title": "2019",
                    "desc": " Official registration of Jhargram Krishak Producer Company Limited (JKPCL) under the Companies Act, 2013."
                },
                {
                    "title": "Early Focus",
                    "desc": "Addressing the livelihood and income issues of primary producers in Jhargram, understanding the local agricultural landscape, and starting initial business activities."
                }
            ]
        },
        {
            "title": "Establishing Foundations (2019-2021)",
            "contents": [
                {
                    "title": "Business Activities",
                    "desc": "Began trading in agricultural inputs like seeds, fertilizers, and pesticides. Set up the Custom Hiring Centre (CHC) for agricultural machinery."
                },
                {
                    "title": "Government Collaboration",
                    "desc": "Built strong relationships with government departments and started participating in schemes like PMKSY/BKSY."
                },
                {
                    "title": "Revenue Growth",
                    "desc": "Achieved moderate success despite challenges, increasing revenue by 27% in 2021."
                },
            ]
        },
        {
            "title": "Diversification and Expansion (2021-2023)",
            "contents": [
                {
                    "title": "New Ventures",
                    "desc": "Entered into warehousing, primary processing, value addition, and fish production."
                },
                {
                    "title": "Major Activities",
                    "desc": "Started paddy procurement under KMS and intensified existing business activities."
                },
                {
                    "title": "Financial Milestone",
                    "desc": "Registered a revenue growth of 59% in 2022-23, crossing the rupee one crore mark."
                },
            ]
        },
        {
            "title": "Community Impact and Recognition (2022-2023)",
            "contents": [
                {
                    "title": "Beneficiary Outreach",
                    "desc": "Served nearly 2,000 farmers with various initiatives."
                },
                {
                    "title": "Awards and Recognition",
                    "desc": "Received the \u201cKRISHI RABI-2023\u201d award from the State Agricultural Technologists\u2019 Service Association (SATSA)."
                },
                {
                    "title": "Future Plans",
                    "desc": "Plans to further diversify activities, increase shareholder strength, and expand market linkages."
                },
            ]
        }
    ],
    "graphs_and_charts": {
        "revenue_growth": {
            "x_axis": "Financial Years (2019-2023)",
            "y_axis": "Revenue in Lakhs (\u20b9)",
            "data_points": {
                "2019-20": 27,
                "2020-21": 34,
                "2021-22": 59,
                "2022-23": 100
            }
        },
        "shareholder_composition": {
            "categories": [
                "SC",
                "ST",
                "OBC",
                "General"
            ],
            "subcategories": [
                "Male",
                "Female"
            ],
            "data_points": {
                "SC": {
                    "Male": 54,
                    "Female": 58
                },
                "ST": {
                    "Male": 29,
                    "Female": 81
                },
                "OBC": {
                    "Male": 3,
                    "Female": 5
                },
                "General": {
                    "Male": 178,
                    "Female": 186
                }
            }
        },
        "input_sales_growth": {
            "x_axis": "Financial Years (2019-2023)",
            "y_axis": "Sales in Lakhs (\u20b9)",
            "data_points": {
                "2019-20": 10,
                "2020-21": 20,
                "2021-22": 30,
                "2022-23": 40
            }
        },
        "farmer_income_increase": {
            "x_axis": "Financial Years (2019-2023)",
            "y_axis": "Average Income per Farmer (\u20b9)",
            "data_points": {
                "2019-20": 50000,
                "2020-21": 60000,
                "2021-22": 75000,
                "2022-23": 90000
            }
        },
        "farmer_beneficiary_distribution": {
            "services": [
                "Input Supply",
                "CHC",
                "Aggregation & Marketing",
                "Training Programs"
            ],
            "data_points": {
                "Input Supply": 800,
                "CHC": 700,
                "Aggregation & Marketing": 500,
                "Training Programs": 1000
            }
        }
    },
    "service_cards": [
        {
            "title": "Custom Hiring Centre",
            "description": "JKPCL provides small and marginal farmers with access to modern agricultural machinery like combine harvesters, tractors, and rice transplanters through our Custom Hiring Centre (CHC).",
            "benefits": [
                "Affordable rental rates.",
                "Improved farming efficiency.",
                "Reduced labor costs."
            ]
        },
        {
            "title": "Agricultural Input Supply",
            "description": "We offer high-quality seeds, fertilizers, and pesticides at competitive prices. Our doorstep delivery service ensures timely access to essential agricultural inputs.",
            "benefits": [
                "Enhanced crop productivity.",
                "Cost-effective procurement.",
                "Convenience of delivery."
            ]
        },
        {
            "title": "Produce Aggregation and Marketing",
            "description": "JKPCL aggregates produce like paddy, vegetables, and fruits, facilitating sales to large buyers and corporate entities. We ensure farmers receive fair prices for their produce.",
            "benefits": [
                "Better market prices.",
                "Increased income.",
                "Access to larger markets."
            ]
        }
    ],
    "impact_on_farmers_and_society": {
        "direct_benefits_to_farmers": [
            "Increased Income: Through efficient marketing and aggregation, farmers receive better prices for their produce, significantly boosting their income.",
            "Access to Quality Inputs: Affordable and timely access to high-quality agricultural inputs improves crop yields and overall farm productivity.",
            "Modern Farming Techniques: Access to advanced machinery through the CHC enhances farming efficiency, reduces labor dependency, and lowers production costs."
        ],
        "community_and_social_impact": [
            "Economic Growth: The increased income and productivity of farmers contribute to the overall economic development of the Jhargram district.",
            "Employment Generation: The various initiatives and business activities of JKPCL create employment opportunities in the region.",
            "Sustainable Practices: By promoting sustainable farming practices and value chain interventions, JKPCL helps in conserving local resources and ensuring long-term agricultural viability.",
            "Educational and Training Programs: Training programs on new farming techniques and resource management empower farmers with knowledge and skills, fostering a culture of continuous improvement."
        ]
    }
}

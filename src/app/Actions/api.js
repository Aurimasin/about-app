
const api = {
    getNavigation: () => ({
        Home: {
            path: "/home"
        },
        Education: {
            path: "/education"
        },
        Work: {
            path: "/work"
        },
        Contacts: {
            path: "/contacts"
        }
    }),
    getEducation: () => ({
        id1: {
            institution: "Lithuanian University of Educational Sciences",
            description: "Bachelor's degree, information technology",
            year: 2011
        },
        id2: {
            institution: "CodeAcademy Vilnius",
            description: "Front-end courses (160h)",
            year: 2017
        }
    }),
    getWork: () => ({
        id1: {
            user: "IT Administrator",
            company: "Water supply networks",
            description:"Provide technical support for both hardware and software issues.",
            year: '2012 - Now'
        },
        id2: {
            user: "IT Administrator",
            company: "Kesko Agro Lietuva",
            description:"Designing, organizing, modifying, and supporting a company's computer systems.",
            year: '2007 - 2008'
        },
        id3: {
            user: "IT Administrator",
            company: "Lithuanian Labour Exchange",
            description:"SQL data base management.",
            year: '2006 - 2007'
        },
    }),
}

export default api;
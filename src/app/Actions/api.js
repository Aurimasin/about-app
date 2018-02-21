
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
            institution: "CodeAcademy Vilnius",
            description: "Front-end courses (160h)",
            year: 2017
        },
        id2: {
            institution: "Lithuanian University of Educational Sciences",
            description: "Bachelor's degree, information technology",
            year: 2011
        }
    }),
    getWork: () => ({
        id1: {
            user: "IT Administrator",
            company: "Water supply networks",
            description:"Provide technical support for both hardware and software issues.\n" +
            "Manage the configuration and operation of client-based computer operating systems.\n" +
            "Monitor the system and respond immediately to security or usability concerns.\n" +
            "Create and verify backups of data.\n" +
            "Respond to and resolve help desk requests.\n" +
            "Upgrade systems and processes as required for enhanced functionality and security issue resolution.\n" +
            "Administrate infrastructure, including firewalls, databases, malware protection software and other processes.\n" +
            "Install and test computer-related equipment.",
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
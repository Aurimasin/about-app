
const api = {
    getNavigation: () => ({
        Home: {
            path: '/home'
        },
        Education: {
            path: '/education'
        },
        Work: {
            path: '/work'
        },
        Contacts: {
            path: '/contacts'
        }
    }),
    getEducation: () => ({
        id1: {
            institution: 'Udemy',
            description: 'React Web Developer Course (with Redux)',
            skills: 'React v16, Redux, Webpack, React-Router v4',
            year: 2018
        },
        id2: {
            institution: 'CodeAcademy Vilnius',
            description: 'Front-end courses (160h)',
            skills: 'HTML5 / CSS3, SCSS, JavaScript, Bootstrap, Responsive Layout, Version Control (GIT) ',
            year: 2017
        },
        id3: {
            institution: 'Lithuanian University of Educational Sciences',
            description: 'Bachelor degree, information technology',
            year: 2011
        }
    }),
    getWork: () => ({
        id1: {
            user: "IT Administrator",
            company: 'Water supply networks',
            description:'Technical support for both hardware and software issues. Manage the configuration ' +
            'and operation of client-based computer operating systems. Monitor the system and respond immediately ' +
            'to security or usability concerns. Create and verify backups of data. Respond to and resolve help desk' +
            ' requests. Upgrade systems and processes as required for enhanced functionality and security issue ' +
            'resolution. Administrate infrastructure, including firewalls, databases, malware protection software and' +
            ' other processes. Install and test computer-related equipment.',
            year: '2012 - Now'
        },
        id2: {
            user: "IT Administrator",
            company: 'Kesko Agro Lietuva',
            description:'Conduct network troubleshooting to segregate and identify general network problems.' +
            ' Manage all UPS workstations along with existing and operational printers. Maintain server,' +
            ' upgrade, secure, system backups and disaster recovery preparation. Install software, maintain and ' +
            'introduce training as needed. Manage entire purchase of inventory related to hardware, software and other' +
            ' IT supplies. Inform senior staff about industry innovations and recommend relevant upgrades.',
            year: '2007 - 2008'
        },
        id3: {
            user: 'IT Administrator',
            company: 'Lithuanian Labour Exchange',
            description:'SQL data base management, Queries by users request. Prevent problems and improve' +
            ' systems performance. Install, upgrade and monitor software and hardware. Data backup and recovery.',
            year: '2006 - 2007'
        },
    }),
}

export default api;
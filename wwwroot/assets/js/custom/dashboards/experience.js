"use strict";

// Class definition
var KTExperience = function () {
    var chart = {
        self: null,
        rendered: false
    };
    // Private methods
    var initData = function(chart) {
        const data = [
            {
                id: 1,
                companyName: 'Inspire Innovations LLC',
                jobTitle: 'Senior Software Engineer',
                status: 'Full-Time',
                period: 'Jan 2022 - Present',
                description: [
                    'Develop high quality technology solution component',
                    'Participate in & execute unit testing according to best practice to ensure code for modules are fit to use',
                    'Ensure adherence to software development best practices (i.e. design, coding, source code maintenance & control, quality, security, and performance)',
                    'Work as part of an international team following the scrum methodology',
                    'Continually share experience, recommendations, and improvements during the project lifecycle to promote a culture of continual improvement for service delivery',
                    'Collaborate effectively with the team on creating responsive styles based on design concepts, test automation, and improving system architecture',
                    'Involve in sharing regular progress updates and development status to the project team.'
                ],
                project: [
                    'Insurance Process Automation System (IPAS) for Zurich Dubai',
                    'Bot Assisted Email Management (BAEM) for Income Singapore'
                ]
            },
            {
                id: 2,
                companyName: 'BCA Life',
                jobTitle: 'Programmer Analyst Specialist',
                status: 'Full-Time',
                period: 'Jun 2021 - Dec 2021',
                description: ['Working cross-functionally with Project Manager, Business Analyst, Quality Assurance and other development teams in order to streamline product development and ensure product quality.',
                    'Write, test, and maintain software applications that are resilient, robust, and perform at scale for millions of end users',
                    'Research new technologies and incorporate them into new and existing systems and products'
                ],
                project: [
                    'Grouph Health Insurance System'
                ]
            },
            {
                id: 3,
                companyName: 'Dana Pensiun Bank Indonesia',
                jobTitle: 'Lead Software Engineer',
                status: 'Full-Time',
                period: 'Jul 2019 - May 2021',
                description: ['As lead software engineer in developing integrated system from scratch',
                    'Build standard framework which will used on each project',
                    'Provide technical leadership in software development', 
                    'Engage in the full development lifecycle designing, developing, testing, deploying, maintaining, monitoring and improving the software',
                    'Build and Deploy each project with automation using Jenkins'
                ],
                project: [
                    'Investment Information System',
                    'Secretarial Information System',
                    'Financial Transaction Settlement System',
                    'Face Verification on DAPENBI Mobile Apps',
                    'Online Pension Registration System',
                    'Accounting System'
                ]
            },
            {
                id: 4,
                companyName: 'EMC Hospital',
                jobTitle: 'IT Development Section Head',
                status: 'Full-Time',
                period: 'May 2018 - Jun 2019',
                description: [ 
                    'Manage the development of new system or system enhancement, ensure development meet stakeholders expectation and within agreed scope',
                    'Manage the expectation and confidence of business users through the delivery of good IT systems'
                ],
                project: [
                    'EMC Portal Reporting Apps',
                    'Hospital Information System'
                ]
            },
            {
                id: 5,
                companyName: 'FIFGROUP',
                jobTitle: 'IT System & Business Analyst',
                status: 'Full-Time',
                period: 'May 2016 - Apr 2018',
                description: [
                    'Gathering business requirements, translate them into functional and technical specification',
                    'Research and analyze options for technical solution/technology platform and suggest the optimum one within time-resource constraint',
                    'Investigate, evaluate and report alternative solutions to business needs and recommend the preferred solution',
                    'Design and develop a system in according to functional design',
                    'Solving bugs occurred during application testing and Implementation period',
                    'Monitor and ensure team execution of software development tasks (solution design, code development) for delivery of new application (mobile, web, backend, web services)',
                    'Ensure software designs are in compliance with specifications',
                    'Transfer knowledge to team members'
                ],
                project: [
                    'Fraud Management System',
                    'Human Capital Total Reward Statement System',
                    'System Stock Opname Asset',
                    'Human Capital Performance Management System',
                    'Oracle E-Business Suites R12 Implementation',
                    'Human Capital Automation Monthly Performance Reward System',
                    'Rental System'
                ]
            },
            {
                id: 6,
                companyName: 'Applus Velosi',
                jobTitle: 'Senior Software Engineer',
                status: 'Full-Time',
                period: 'Feb 2015 - Apr 2016',
                description: [
                    'Participate in designing, developing, and testing applications in multiple system environments',
                    'Conduct software integration and external interface development',
                    'Develops software solutions by studying information, conferring with users, studying systems flow, data usage, and work processes, investigating problem areas, following the software development lifecycle.',
                    'Create scalable backend and solve technical problems'
                ],
                project: [
                    'Pipeline Risk Assessment System for Mubadala Petroleum',
                    'Surface Facility Risk Based Inspection System for Mubadala Petroleum',
                    'Oil and Gas Asset Integrity Management System for Mubadala Petroleum',
                    'Oil and Gas Asset Integrity Management System for Pertamina Hulu Energi WMO'
                ]
            }
        ];

        const value = localStorage.getItem('experience');

        if(!value){
            localStorage.setItem('experience', JSON.stringify(data));
        }
    }

    var loadTable = function() {
        const experienceData = JSON.parse(localStorage.getItem('experience'));

        $('#experienceTable').DataTable({
            data: experienceData,
            columns: [
                {
                    data: 'id',
                },
                { 
                    data: 'companyName',
                    render: function(data) {
                        return '<div class="position-relative ps-6 pe-3 py-2"><div class="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success"></div><a href="#" class="mb-1 text-gray-900 text-hover-primary fw-bold">' + data + '</a></div>';
                    },

                },
                { data: 'jobTitle' },
                {
                    data: 'status',
                    render: function(data) {
                        return '<span class="badge badge-light-success">' + data + '</span>';
                    }
                },
                { data: 'period' },
                {
                    data: 'id',
                    render: function(data) {
                        return '<button type="button" onclick="openModal(' + data + ')" class="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"><i class="fa fa-search"></i></button>';
                    },
                    orderable: false,
                    searchable: false
                }
            ]
        });
    };

    // Public methods
    return {
        init: function () {
            initData();
            loadTable();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initData();
                loadTable();
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTExperience;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTExperience.init();
});


function openModal(id){
    var dialog = $('#experienceModal');

    var companyName = dialog.find('#companyName');
    var jobTitle = dialog.find('#jobTitle');
    var period = dialog.find('#period');
    var description = dialog.find('#description');
    var project = dialog.find('#project');

    description.html('');
    project.html('');

    var data = JSON.parse(localStorage.getItem('experience'));
    var selectedData = data.find(d => d.id == id);    

    companyName.html(selectedData.companyName);
    jobTitle.html(selectedData.jobTitle);
    period.html(selectedData.period);
    
    selectedData.description.forEach(row => {
        description.append('<li>' + row + '</li>');
    });

    selectedData.project.forEach(row => {
        project.append('<li>' + row + '</li>');
    });

    dialog.modal('show');
}
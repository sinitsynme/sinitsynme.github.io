import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  personal = {
    name: 'Maksim Sinitsyn',
    email: 'mesinitsyn@yandex.ru',
    linkedIn: 'sinitsynme',
    location: 'Samara, Russia'
  };

  experience = [
    {
      from: '06/2023',
      to: 'present',
      logo: '/assets/t-bank.jpg',
      name: 'T-Bank (ex. Tinkoff)',
      role: 'Software Development Engineer (Backend, `T-Bank for Business`)',
      achievements: [
        'Worked on 3 projects (with Java/Kotlin, Spring Boot, Kafka, PostgreSQL, Cassandra)',
        'Developed features communicating with product managers and other teams',
        'Led development of a finance service from requirements to MVP, used technologies are REST API, Spring Kafka, Spring Data JDBC with Postgres, outboxing. Service processes 50k ops/minute',
        'Reduced PostgreSQL CPU utilization during vacuums on massive update operations from 100% to 40-50%',
        'Optimized DB IO utilization due to batch job inefficient query from 100% to 50-60%',
        'Implemented black-box testing infrastructure and scenarios for 2 projects with Docker and Cucumber',
        'Integrated company reliability processes in our team to support products` SLA and inform stakeholders during crash',
        'Developed dashboards in Grafana for team products` observability',
        'Mentored an intern and a new teammate engineer',
        'Participated in 5 students` educational program as assistant (assignment code reviews and mentoring)'
      ]
    },
    {
      from: '02/2022',
      to: '06/2022',
      logo: '/assets/simbirsoft.png',
      name: 'SimbirSoft',
      role: 'Backend Intern Engineer',
      achievements: [
        'With teammates developed MVP of kanban board (Java, Spring Boot, PostgreSQL)',
        'Helped teammates to solve local problems',
      ]
    }
  ];

  education = [
    {
      from: '09/2020',
      to: '06/2024',
      logo: '/assets/samara-uni.png',
      name: 'Samara University',
      role: 'BSc Computer Science (Fundamental Informatics and Information Technologies)',
      achievements: [
        'Graduated with honors',
        'Led fullstack student team project',
        'Mentored fellows in backend development and maths',
      ]
    },
    {
      from: '09/2022',
      to: '06/2023',
      logo: '/assets/samara-uni.png',
      name: 'Samara University',
      role: 'IT Project Manager course',
      achievements: [
        'Developed manager`s sight of view',
        'TBC'
      ]
    }
  ];

  skills = [
    {
      title: 'Languages',
      items: [
        {
          name: 'Java',
          badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
          featured: true
        },
        {
          name: 'Kotlin',
          badge: 'https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white',
          featured: true
        },
        {
          name: 'Python',
          badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
        }
      ]
    },
  
    {
      title: 'Java / Kotlin Essentials',
      items: [
        {
          name: 'Maven',
          badge: 'https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white'
        },
        {
          name: 'Gradle',
          badge: 'https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white'
        },
        {
          name: 'Spring',
          badge: 'https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white',
          featured: true
        },
        {
          name: 'Spring Cloud',
          badge: 'https://img.shields.io/badge/Spring_Cloud-6DB33F?style=for-the-badge&logo=spring&logoColor=white'
        },
        {
          name: 'Hibernate',
          badge: 'https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white'
        }
      ]
    },
  
    {
      title: 'Testing Essentials',
      items: [
        {
          name: 'JUnit 5',
          badge: 'https://img.shields.io/badge/JUnit_5-25A162?style=for-the-badge&logo=junit5&logoColor=white'
        },
        {
          name: 'Testcontainers',
          badge: 'https://img.shields.io/badge/Testcontainers-0A0A0A?style=for-the-badge&logo=docker&logoColor=white'
        },
        {
          name: 'Cucumber',
          badge: 'https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white'
        }
      ]
    },
  
    {
      title: 'Tools',
      items: [
        {
          name: 'Docker',
          badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
          featured: true
        },
        {
          name: 'GitLab CI',
          badge: 'https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white'
        }
      ]
    },
  
    {
      title: 'Databases',
      items: [
        {
          name: 'PostgreSQL',
          badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
          featured: true
        },
        {
          name: 'MongoDB',
          badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white'
        },

        {
          name: 'Apache Cassandra',
          badge: 'https://img.shields.io/badge/Apache_Cassandra-1287B1?style=for-the-badge&logo=apache-cassandra&logoColor=white'
        },
        {
          name: 'Redis',
          badge: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white'
        }
        
      ]
    },
  
    {
      title: 'Streaming & Processing',
      items: [
        {
          name: 'Apache Kafka',
          badge: 'https://img.shields.io/badge/Apache_Kafka-000000?style=for-the-badge&logo=apache-kafka&logoColor=white',
          featured: true
        },
        {
          name: 'Apache Flink',
          badge: 'https://img.shields.io/badge/Apache_Flink-E6526F?style=for-the-badge&logo=apacheflink&logoColor=white'
        }
      ]
    },
  
    {
      title: 'BPMN',
      items: [
        {
          name: 'Camunda',
          badge: 'https://img.shields.io/badge/Camunda-FC5D0D?logo=camunda&logoColor=fff&style=for-the-badge'
        }
      ]
    }
  ];

  languages = [
    {
      name: 'English',
      level: 'B2+',
      badge: 'https://img.shields.io/badge/English-B2+-0A66C2?style=for-the-badge&logoColor=white',
      certificate: '/assets/pdf/fce.pdf'
    },
    {
      name: 'Russian',
      level: 'C2',
      badge: 'https://img.shields.io/badge/Russian-C2-0A66C2?style=for-the-badge&logoColor=white',
    }
  ];
  
  
}

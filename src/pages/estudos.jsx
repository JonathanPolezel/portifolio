import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cloud, Code, School } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StudiesPage = () => {
  const education = {
    academic: [
      {
        type: 'Graduação',
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'UNIBR - Faculdade de São Vicente',
        status: 'Em andamento - 5º Semestre',
        description:
          'Curso focado no desenvolvimento de sistemas e aplicações, abrangendo disciplinas como programação, banco de dados, engenharia de software e gerenciamento de projetos.',
        icon: <School className="h-6 w-6" />,
      },
    ],
    cloud: [
      {
        title: 'AWS Amazon Cloud Computing',
        institution: 'Amazon Web Services',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Google Cloud Associate Engineer (GCP)',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Microsoft Azure Data Fundamentals (DP-900)',
        institution: 'Microsoft',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: 'Google Cloud Fundamentals: Core Infrastructure',
        institution: 'Google Cloud',
        status: 'Concluído',
        icon: <Cloud className="h-5 w-5" />,
      },
    ],
    development: [
      {
        title: 'Programação em C e JavaScript',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Oracle SQL',
        institution: 'Oracle',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'HTML5 e CSS3',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Sistemas Operacionais e Redes',
        institution: 'Curso Técnico',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Supabase',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
    ],
    ai: [
      {
        title: 'Ciência de Dados 3.0',
        institution: 'Data Science Academy',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'Engenharia de Prompts na AWS com Claude',
        institution: 'AWS',
        status: 'Concluído',
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: 'CC50 - Introdução à Ciência da Computação',
        institution: 'Harvard/Fundação Estudar',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
    management: [
      {
        title: 'IT Service Management (ITSM/GSTI)',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: 'Gestão de Projetos em TI',
        institution: 'Curso Especializado',
        status: 'Concluído',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  };

  const categories = [
    { id: 'academic', title: 'Formação Acadêmica' },
    { id: 'cloud', title: 'Cloud Computing' },
    { id: 'development', title: 'Desenvolvimento' },
    { id: 'ai', title: 'IA & Data Science' },
    { id: 'management', title: 'Gestão de TI' },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-100 md:text-5xl lg:text-6xl">
            Formação
            <span className="mt-2 block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Acadêmica
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Desenvolvimento contínuo e aprendizado em tecnologia
          </p>
        </motion.div>

        {/* Education Sections */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-100">
                {category.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {education[category.id].map((item, index) => (
                  <Card
                    key={index}
                    className="border-neutral-700 bg-neutral-800 transition-all duration-300 hover:border-blue-500"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-100">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.institution}</p>
                          </div>
                        </div>
                        <Badge
                          variant={item.status.includes('andamento') ? 'outline' : 'secondary'}
                          className={
                            item.status.includes('andamento') ? 'border-blue-500 text-blue-400' : ''
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      {item.description && <p className="mt-4 text-gray-400">{item.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;

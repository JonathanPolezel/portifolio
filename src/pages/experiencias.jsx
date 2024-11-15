import React from 'react';
import { Code, Shield, Award, Clock, Users, Coffee, ChevronRight, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperiencePage = () => {
  const stats = [
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '3+',
      label: 'Anos como Bombeiro',
      colorClass: 'text-blue-500',
    },
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '3+',
      label: 'Anos em TI',
      colorClass: 'text-blue-500',
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '500+',
      label: 'Pessoas Impactadas',
      colorClass: 'text-blue-500',
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      value: '15+',
      label: 'Cursos e Certificados',
      colorClass: 'text-blue-500',
    },
  ];

  const experience = {
    bombeiro: [
      {
        title: 'Bombeiro Civil',
        company: 'Bracell',
        period: '2022 - 2022',
        type: 'Bombeiro',
        description: 'Atuação em emergências industriais e gestão de riscos em ambiente fabril.',
        achievements: [
          'Resposta a emergências químicas e industriais',
          'Treinamento de brigadas industriais',
          'Inspeções de segurança e prevenção',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '100+', label: 'Inspeções' },
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Funcionários Treinados' },
          { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Cobertura' },
        ],
      },
      {
        title: 'Bombeiro Civil',
        company: 'Grupo Boticário',
        period: '2018 - 2019',
        type: 'Bombeiro',
        description: 'Supervisão de segurança e prevenção de incêndios em ambiente industrial.',
        achievements: [
          'Gestão de equipamentos de combate a incêndio',
          'Treinamento de funcionários',
          'Elaboração de procedimentos de emergência',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '50+', label: 'Procedimentos' },
          { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Pessoas Treinadas' },
          { icon: <Clock className="h-5 w-5" />, value: '99%', label: 'Uptime' },
        ],
      },
      {
        title: 'Bombeiro Civil',
        company: 'Shopping Brisamar',
        period: '2019 - 2022',
        type: 'Bombeiro',
        description: 'Atendimento a emergências e prevenção em ambiente de shopping center.',
        achievements: [
          'Atendimento pré-hospitalar ao público',
          'Prevenção e combate a incêndios',
          'Treinamento de lojistas',
        ],
        metrics: [
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Atendimentos' },
          { icon: <Shield className="h-5 w-5" />, value: '150+', label: 'Inspeções' },
          { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Disponibilidade' },
        ],
      },
    ],
    ti: [
      {
        title: 'Analista de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Janeiro 2024 - Presente',
        type: 'TI',
        description: 'Analista da equipe de TI, Suporte N2 e infraestrutura.',
        achievements: [
          'Suporte N2 na equipe de TI',
          'Apoio na Implementação de sistemas de rede e segurança',
          'Gerenciamento e direcionamento dos Chamados para os Auxiliares e Assistentes de T.I',
        ],
        metrics: [
          { icon: <Clock className="h-5 w-5" />, value: '30%', label: 'Redução de Tempo' },
          { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Usuários' },
          { icon: <Coffee className="h-5 w-5" />, value: '24/7', label: 'Suporte' },
        ],
      },
      {
        title: 'Assistente de TI',
        company: 'Colégio Jean Piaget - Santos',
        period: 'Outubro 2023 - Janeiro 2024',
        type: 'TI',
        description:
          'Apoio na Modernização e implementação de sistemas de segurança e infraestrutura.',
        achievements: [
          'Apoio na Modernização do sistema CFTV (+40% cobertura)',
          'Implementação de controle de inventário',
          'Redução de 30% no tempo de resposta',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '40%', label: 'Aumento CFTV' },
          { icon: <Clock className="h-5 w-5" />, value: '30%', label: 'Redução Tempo' },
          { icon: <Users className="h-5 w-5" />, value: '500+', label: 'Usuários' },
        ],
      },
      {
        title: 'Analista de Suporte Júnior',
        company: 'Cruz Azul',
        period: 'Outubro 2022 - Outubro 2023',
        type: 'TI',
        description: 'Suporte técnico ao ERP TOTVS e administração de sistemas.',
        achievements: [
          'Suporte técnico ao ERP TOTVS',
          'Administração de Active Directory',
          'Manutenção preventiva de infraestrutura',
        ],
        metrics: [
          { icon: <Users className="h-5 w-5" />, value: '100+', label: 'Usuários' },
          { icon: <Clock className="h-5 w-5" />, value: '95%', label: 'SLA' },
          { icon: <Coffee className="h-5 w-5" />, value: '8/5', label: 'Suporte' },
        ],
      },
      {
        title: 'Especialista em Reparo',
        company: 'Device Now - Soluções e Tecnologia',
        period: '2013 - 2023',
        type: 'TI',
        description: 'Especialista autônomo em reparos eletrônicos e soluções de software.',
        achievements: [
          'Reparo de placas eletrônicas',
          'Implementação de sistemas operacionais',
          'Desenvolvimento de soluções personalizadas',
        ],
        metrics: [
          { icon: <Shield className="h-5 w-5" />, value: '100+', label: 'Reparos' },
          { icon: <Users className="h-5 w-5" />, value: '50+', label: 'Clientes' },
          { icon: <Clock className="h-5 w-5" />, value: 'Flex', label: 'Horário' },
        ],
      },
    ],
  };

  const ExperienceCard = ({ exp }) => (
    <Card className="border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-neutral-700">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-500/80 hover:bg-blue-500">{exp.type}</Badge>
              <Badge variant="outline" className="border-neutral-700 text-neutral-400">
                {exp.period}
              </Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 sm:text-xl">{exp.title}</h3>
              <p className="text-blue-500">{exp.company}</p>
            </div>
          </div>
          <Briefcase className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
        </div>

        <p className="mb-6 text-sm text-neutral-300 sm:text-base">{exp.description}</p>

        <div className="mb-6 grid grid-cols-3 gap-3 border-y border-neutral-800 py-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-1 text-center">
              <div className="text-blue-500">{metric.icon}</div>
              <div className="text-sm font-semibold text-neutral-200 sm:text-base">
                {metric.value}
              </div>
              <div className="text-xs text-neutral-400 sm:text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
              <span className="text-sm text-neutral-300 sm:text-base">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] pb-16 md:pl-64">
      <div className="absolute inset-0 bg-[url('/matrix.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-[#0A0F1E]" />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-6xl text-center">
          {/* Header Section */}
          <div className="mb-12 space-y-8">
            <div className="space-y-3">
              <h1 className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                Experiência Profissional
              </h1>
              <p className="text-lg text-neutral-400 sm:text-xl">
                Bombeiro Civil Profissional & Analista de TI
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-neutral-700"
                >
                  <CardContent className="flex flex-col items-center gap-2 p-3 text-center sm:p-4">
                    <div className={stat.colorClass}>{stat.icon}</div>
                    <div className="text-xl font-bold text-neutral-200 sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-400 sm:text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <div className="relative w-full overflow-x-auto">
              <TabsList className="mb-6 inline-flex w-full min-w-max space-x-2 bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-blue-500 sm:text-base"
                >
                  Todas Experiências
                </TabsTrigger>
                <TabsTrigger
                  value="bombeiro"
                  className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-blue-500 sm:text-base"
                >
                  Bombeiro Civil
                </TabsTrigger>
                <TabsTrigger
                  value="ti"
                  className="whitespace-nowrap bg-neutral-800 px-4 py-2 text-sm data-[state=active]:bg-blue-500 sm:text-base"
                >
                  Tecnologia
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="space-y-4">
                {[...experience.bombeiro, ...experience.ti]
                  .sort(
                    (a, b) =>
                      new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0])
                  )
                  .map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="bombeiro">
              <div className="space-y-4">
                {experience.bombeiro.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ti">
              <div className="space-y-4">
                {experience.ti.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;

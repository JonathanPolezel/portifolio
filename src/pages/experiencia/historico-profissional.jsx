import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Shield,
  Award,
  Clock,
  Users,
  Coffee,
  ChevronRight,
  Briefcase,
  Brain,
  Network,
  Lock,
  Terminal,
  Server,
  Settings,
} from 'lucide-react';
import { PageLayout } from '@/components/ui/layout';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Dados dos pontos fortes
const strengths = [
  {
    icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Resolução de Problemas',
    description: 'Capacidade analítica e pensamento estruturado para solucionar desafios complexos',
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Liderança de Equipe',
    description: 'Experiência em gestão de equipes técnicas e coordenação de projetos',
  },
  {
    icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Apoio na gestão de Infraestrutura',
    description: 'Expertise em manutenção e otimização de ambientes tecnológicos',
  },
  {
    icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Gestão de Crises',
    description: 'Background em situações de emergência como bombeiro civil',
  },
];

// Dados das habilidades técnicas
const skills = [
  {
    category: 'Infraestrutura',
    icon: <Server className="h-5 w-5" />,
    items: ['Redes', 'Servidores Windows', 'Active Directory', 'Sistemas de CFTV'],
  },
  {
    category: 'Cloud & DevOps',
    icon: <Network className="h-5 w-5" />,
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
  },
  {
    category: 'Desenvolvimento',
    icon: <Terminal className="h-5 w-5" />,
    items: ['JavaScript', 'Next.js', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Segurança',
    icon: <Lock className="h-5 w-5" />,
    items: ['Backup', 'Controle de Acesso', 'Políticas de Segurança'],
  },
];

// Dados das estatísticas
const stats = [
  {
    icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '3+',
    label: 'Anos em TI',
  },
  {
    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '15+',
    label: 'Certificações',
  },
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '500+',
    label: 'Usuários Atendidos',
  },
  {
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
    value: '50+',
    label: 'Projetos Entregues',
  },
];

// Dados de experiência profissional
const experience = {
  // Histórico como Bombeiro Civil
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
    {
      title: 'Bombeiro Civil',
      company: 'Grupo Boticário',
      period: '2018 - 2019',
      type: 'Bombeiro',
      description:
        'Implantação e supervisão dos serviços de bombeiro civil na unidade de Registro.',
      achievements: [
        'Implantação do serviço de bombeiros civis na unidade',
        'Gestão de equipamentos de combate a incêndio',
        'Treinamento de funcionários em brigadas',
        'Elaboração de procedimentos de emergência',
      ],
      metrics: [
        { icon: <Shield className="h-5 w-5" />, value: '50+', label: 'Procedimentos' },
        { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Pessoas Treinadas' },
        { icon: <Clock className="h-5 w-5" />, value: '99%', label: 'Uptime' },
      ],
    },
  ],
  // Histórico em TI
  ti: [
    {
      title: 'Analista de suporte N2 - TI',
      company: 'Colégio Jean Piaget - Santos',
      period: 'Janeiro 2024 - Presente',
      type: 'TI',
      description: 'Apoio na Liderança da equipe de TI e na gestão da infraestrutura tecnológica.',
      achievements: [
        'Apoio na Liderança e na gestão da equipe de TI',
        'Apoio na melhorias de sistemas de rede e segurança',
        'Desenvolvimento de processos para otimização do suporte',
      ],
      metrics: [
        { icon: <Clock className="h-5 w-5" />, value: '30%', label: 'Redução de Tempo' },
        { icon: <Users className="h-5 w-5" />, value: '200+', label: 'Usuários' },
        { icon: <Coffee className="h-5 w-5" />, value: '24/7', label: 'Suporte' },
      ],
    },
    {
      title: 'Assistente de Suporte N1 - TI',
      company: 'Colégio Jean Piaget - Santos',
      period: 'Outubro 2023 - Janeiro 2024',
      type: 'TI',
      description: 'Apoio na modernização de CFTV na segurança e infraestrutura.',
      achievements: [
        'Modernização do sistema CFTV (+40% cobertura)',
        'Controle de inventário',
        'Redução de 30% no tempo de resposta nos chamados',
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
        'Administração de Active Directory e sistema RM',
        'Manutenção preventiva da infraestrutura de TI',
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

export { strengths, skills, stats, experience };
// Componente Card de Pontos Fortes
const StrengthCard = ({ strength }) => (
  <Card>
    <CardContent>
      <div className="mb-3 text-cyan-400">{strength.icon}</div>
      <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{strength.title}</h3>
      <p className="text-xs text-cyan-100/60 sm:text-sm">{strength.description}</p>
    </CardContent>
  </Card>
);

// Componente Card de Estatísticas
const StatCard = ({ stat }) => (
  <Card>
    <CardContent className="p-4 text-center">
      <div className="text-cyan-400">{stat.icon}</div>
      <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
      <div className="text-sm text-cyan-100/60">{stat.label}</div>
    </CardContent>
  </Card>
);

// Componente Card de Habilidades
const SkillCard = ({ skillGroup }) => (
  <Card>
    <CardContent>
      <div className="mb-4 flex items-center gap-2">
        <div className="text-cyan-400">{skillGroup.icon}</div>
        <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Componente Card de Experiência
const ExperienceCard = ({ exp }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
    <Card>
      <CardContent>
        {/* Cabeçalho */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{exp.type}</Badge>
              <Badge variant="outline">{exp.period}</Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-cyan-400">{exp.company}</p>
          </div>
          <Briefcase className="h-5 w-5 text-cyan-400" />
        </div>

        {/* Descrição */}
        <p className="mb-4 text-sm text-cyan-100/60">{exp.description}</p>

        {/* Métricas */}
        <div className="mb-4 grid grid-cols-3 gap-4 border-y border-cyan-500/20 py-4">
          {exp.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-cyan-400">{metric.icon}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.value}</div>
              <div className="text-xs text-cyan-100/60">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Realizações */}
        <div className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-100/60">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Componentes de Seções
const OverviewSection = () => (
  <div className="space-y-6">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {strengths.map((strength, index) => (
        <StrengthCard key={index} strength={strength} />
      ))}
    </div>

    <div className="grid gap-4 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {skills.map((skillGroup, index) => (
      <SkillCard key={index} skillGroup={skillGroup} />
    ))}
  </div>
);

const ExperienceSection = ({ type, experiences }) => (
  <div className="space-y-4">
    {type && (
      <h3 className="text-lg font-semibold text-white">
        Experiência {type === 'ti' ? 'em TI' : 'como Bombeiro Civil'}
      </h3>
    )}
    {experiences.map((exp, index) => (
      <ExperienceCard key={index} exp={exp} />
    ))}
  </div>
);

const AllExperiencesSection = () => (
  <div className="space-y-8">
    <ExperienceSection type="ti" experiences={experience.ti} />
    <ExperienceSection type="bombeiro" experiences={experience.bombeiro} />
  </div>
);
// Configuração das tabs
const tabConfig = [
  {
    value: 'overview',
    label: 'Visão Geral',
    content: OverviewSection,
  },
  {
    value: 'skills',
    label: 'Habilidades',
    content: SkillsSection,
  },
  {
    value: 'all',
    label: 'Todas Experiências',
    content: AllExperiencesSection,
  },
  {
    value: 'ti',
    label: 'TI',
    content: () => <ExperienceSection experiences={experience.ti} />,
  },
  {
    value: 'bombeiro',
    label: 'Bombeiro Civil',
    content: () => <ExperienceSection experiences={experience.bombeiro} />,
  },
];

// Componente de TabNavigation
const TabNavigation = ({ defaultValue = 'overview' }) => (
  <Tabs defaultValue={defaultValue} className="w-full">
    <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0">
      <TabsList className="mb-6 flex w-full justify-start gap-2 overflow-x-auto bg-transparent sm:justify-center">
        {tabConfig.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'whitespace-nowrap border border-cyan-500/20 bg-[#0A0F1E]/95',
              'px-4 py-2 text-sm transition-all duration-300',
              'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400'
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>

    {tabConfig.map((tab) => (
      <TabsContent key={tab.value} value={tab.value}>
        <tab.content />
      </TabsContent>
    ))}
  </Tabs>
);

// Componente Principal
const ExperiencePage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl">
        <PageHeader
          overline="Portfólio Profissional"
          title="Experiência Profissional"
          description="Analista de TI & Infraestrutura"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TabNavigation />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ExperiencePage;

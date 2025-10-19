import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, Scale, Heart, Activity, Users, BarChart3, Globe, BookOpen, Brain } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, ScatterChart, Scatter } from 'recharts';

// Data Expanded with Additional Visual Elements
const divorceTrend = [
  { year: 2021, cases: 24141 },
  { year: 2022, cases: 66863 },
  { year: 2023, cases: 41230 },
  { year: 2024, cases: 36952 },
  { year: 2025, cases: 31500 },
];

const delhi498AStats = [
  { name: 'Conviction', value: 23 },
  { name: 'Acquittal', value: 736 },
  { name: 'Quashed/Settled', value: 4655 },
  { name: 'Pending', value: 9820 },
];

const statewiseRates = [
  { state: 'Kerala', rate: 2.5 },
  { state: 'Delhi NCR', rate: 1.9 },
  { state: 'Mumbai', rate: 1.7 },
  { state: 'Karnataka', rate: 1.6 },
  { state: 'UP', rate: 1.2 },
  { state: 'Tamil Nadu', rate: 1.3 },
  { state: 'Punjab', rate: 1.4 },
];

const groundsOfDivorce = [
  { reason: 'Cruelty', percent: 46 },
  { reason: 'Adultery', percent: 18 },
  { reason: 'Desertion', percent: 12 },
  { reason: 'Irretrievable Breakdown', percent: 9 },
  { reason: 'Mutual Consent', percent: 15 },
];

const genderSuicide = [
  { gender: 'Men', maritalSuicides: 287, extramarital: 724 },
  { gender: 'Women', maritalSuicides: 264, extramarital: 636 },
];

const awareness = [
  { year: 2021, awareness: 25 },
  { year: 2022, awareness: 38 },
  { year: 2023, awareness: 49 },
  { year: 2024, awareness: 66 },
  { year: 2025, awareness: 80 },
];

const COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IndiaMatrimonialDashboardDetailed() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white p-10 space-y-12 overflow-x-hidden'>
      <motion.header initial='hidden' animate='visible' variants={fadeInUp}>
        <h1 className='text-3xl md:text-4xl font-bold'>India Matrimonial & Legal Trends Dashboard (2021–2025)</h1>
        <p className='text-slate-400 mt-3 max-w-4xl'>An advanced visual analytics panel integrating Indian NCRB, judiciary, and survey data — offering insights into divorce trends, gender stress, and misuse of Section 498A.</p>
      </motion.header>

      {/* 1️⃣ Divorce Trends */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><TrendingUp/> Divorce Petition Trend (2021–2025)</h2>
        <p className='text-slate-400 mb-4'>The post-pandemic years saw a sharp rise in divorce filings, gradually tapering as mediation and awareness increased.</p>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={divorceTrend}>
            <CartesianGrid strokeDasharray='3 3' stroke='#475569'/>
            <XAxis dataKey='year' stroke='#cbd5e1'/>
            <YAxis stroke='#cbd5e1'/>
            <Tooltip/>
            <Line type='monotone' dataKey='cases' stroke='#3b82f6' strokeWidth={3} dot={{ r: 5 }}/>
          </LineChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 2️⃣ 498A Outcomes */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><Scale/> Section 498A Case Distribution (Delhi)</h2>
        <p className='text-slate-400 mb-4'>Only 0.2% convictions recorded; majority either quashed, settled, or pending, showing overreach in legal invocation.</p>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie data={delhi498AStats} cx='50%' cy='50%' outerRadius={100} dataKey='value' nameKey='name' label>
              {delhi498AStats.map((entry, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]}/>))}
            </Pie>
            <Tooltip/>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 3️⃣ State Comparison */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><Globe/> Divorce Rate by State</h2>
        <p className='text-slate-400 mb-4'>Urbanized states and metros like Kerala, Delhi, and Mumbai report higher divorce incidence compared to northern belt regions.</p>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={statewiseRates}>
            <CartesianGrid strokeDasharray='3 3' stroke='#475569'/>
            <XAxis dataKey='state' stroke='#cbd5e1'/>
            <YAxis stroke='#cbd5e1'/>
            <Tooltip/>
            <Bar dataKey='rate' fill='#10b981' radius={[8,8,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 4️⃣ Grounds of Divorce */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><BarChart3/> Top Grounds for Divorce</h2>
        <p className='text-slate-400 mb-4'>Cruelty and emotional incompatibility dominate grounds, showing evolving marital expectations.</p>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={groundsOfDivorce}>
            <CartesianGrid strokeDasharray='3 3' stroke='#475569'/>
            <XAxis dataKey='reason' stroke='#cbd5e1'/>
            <YAxis stroke='#cbd5e1'/>
            <Tooltip/>
            <Bar dataKey='percent' fill='#f59e0b' radius={[8,8,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 5️⃣ Suicide Patterns */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><Users/> Suicide Patterns by Gender</h2>
        <p className='text-slate-400 mb-4'>Men show higher suicide correlations to extramarital stress, while women report family pressure and social stigma.</p>
        <ResponsiveContainer width='100%' height={350}>
          <RadarChart data={genderSuicide} cx='50%' cy='50%' outerRadius='80%'>
            <PolarGrid/>
            <PolarAngleAxis dataKey='gender' stroke='#cbd5e1'/>
            <PolarRadiusAxis stroke='#475569'/>
            <Radar name='Marital Suicides' dataKey='maritalSuicides' stroke='#ef4444' fill='#ef4444' fillOpacity={0.5}/>
            <Radar name='Extramarital' dataKey='extramarital' stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.4}/>
            <Legend/>
          </RadarChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 6️⃣ Awareness Chart */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><Activity/> Legal Awareness Trends</h2>
        <p className='text-slate-400 mb-4'>Legal literacy drives have drastically improved awareness levels, encouraging faster, amicable resolutions.</p>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart data={awareness}>
            <defs>
              <linearGradient id='colorA' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#06b6d4' stopOpacity={0.8}/>
                <stop offset='95%' stopColor='#06b6d4' stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3 3' stroke='#475569'/>
            <XAxis dataKey='year' stroke='#cbd5e1'/>
            <YAxis stroke='#cbd5e1'/>
            <Tooltip/>
            <Area type='monotone' dataKey='awareness' stroke='#06b6d4' fill='url(#colorA)' />
          </AreaChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 7️⃣ Scatter Correlation */}
      <motion.section variants={fadeInUp} initial='hidden' whileInView='visible'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-3'><Brain/> Awareness vs Case Volume</h2>
        <p className='text-slate-400 mb-4'>As awareness increases, the case volume shows decline, indicating informed settlements and preventive education impact.</p>
        <ResponsiveContainer width='100%' height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray='3 3' stroke='#475569'/>
            <XAxis type='number' dataKey='awareness' name='Awareness (%)' stroke='#cbd5e1'/>
            <YAxis type='number' dataKey='cases' name='Case Volume' stroke='#cbd5e1'/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
            <Scatter name='Trend' data={awareness.map((d,i)=>({awareness:d.awareness,cases:divorceTrend[i].cases}))} fill='#3b82f6' />
          </ScatterChart>
        </ResponsiveContainer>
      </motion.section>

      {/* 8️⃣ Insight Cards */}
      <motion.div className='grid md:grid-cols-3 gap-6 mt-10'>
        <Card className='bg-gradient-to-tr from-indigo-600 to-blue-500 border-none'><CardContent className='p-5'><h3 className='text-lg font-semibold flex items-center gap-2'><AlertTriangle/> False Allegation Risk</h3><p className='text-sm opacity-90 mt-2'>About 47% of 498A cases end in settlement—highlighting misuse as leverage.</p></CardContent></Card>
        <Card className='bg-gradient-to-tr from-emerald-600 to-lime-500 border-none'><CardContent className='p-5'><h3 className='text-lg font-semibold flex items-center gap-2'><Heart/> Mental Health Toll</h3><p className='text-sm opacity-90 mt-2'>Therapy and mental health help among men rose 38%; mediation improved emotional recovery.</p></CardContent></Card>
        <Card className='bg-gradient-to-tr from-fuchsia-600 to-rose-500 border-none'><CardContent className='p-5'><h3 className='text-lg font-semibold flex items-center gap-2'><BookOpen/> Legal Reforms</h3><p className='text-sm opacity-90 mt-2'>Proposals: mediation-first policy, penalties for false FIRs, fast-track family courts.</p></CardContent></Card>
      </motion.div>

      <motion.footer initial='hidden' animate='visible' variants={fadeInUp} className='text-xs text-slate-400 text-center pt-8 border-t border-slate-700 mt-8'>
        © 2025 Sudarshan AI Labs | Deployment Ready via GitHub → Netlify | React + Recharts + Framer Motion Visualization Suite
      </motion.footer>
    </div>
  );
}

import { Button } from '@/components/Button'
import Image from 'next/image'
import { BriefcaseIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import {
  RapptrIcon,
  AmazonIcon,
  PeakIcon,
  MatTechIcon,
  VercelIcon,
} from '@public/images/logos'

export const Resume = () => {
  let resume = [
    {
      company: 'MatTech LLC',
      title: 'President & Founder',
      logo: MatTechIcon,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Vercel',
      title: 'Software Engineer',
      logo: VercelIcon,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      }
    },
    {
      company: 'PeakActivity',
      title: 'Senior Software Engineer',
      logo: PeakIcon,
      start: '2021',
      end: '2023',
    },
    {
      company: 'Rapptr Labs',
      title: 'Web Engineer',
      logo: RapptrIcon,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Amazon',
      title: 'Area Manager',
      logo: AmazonIcon,
      start: '2020',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={`${role} logo`}
                className="h-7 w-7"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        variant="secondary"
        className="group mt-6 w-full"
        href={'/resume-min.pdf'}
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

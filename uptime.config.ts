// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "UptimeFlare",
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'www',
      name: 'Home',
      method: 'GET',
      target: 'https://szxzip.net',
    },
    {
      id: 'books',
      name: 'Books',
      method: 'GET',
      target: 'https://books.szxzip.net',
    },
    {
      id: 'files',
      name: 'Files',
      method: 'GET',
      target: 'https://files.szxzip.net',
    },
    {
      id: 'git',
      name: 'Git',
      method: 'GET',
      target: 'https://git.szxzip.net',
    },
    {
      id: 'media',
      name: 'Media',
      method: 'GET',
      target: 'https://media.szxzip.net',
    },
    {
      id: 'notes',
      name: 'Notes',
      method: 'GET',
      target: 'https://notes.szxzip.net',
    },
    {
      id: 'pi',
      name: 'Pi',
      method: 'GET',
      target: 'https://pi.szxzip.net',
    },
  ],
}

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['books', 'files', 'git', 'media', 'notes', 'pi'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '例行停机',
    // Description of the maintenance, will be shown at status page
    body: '由于校方停电政策，故于每晚 23:00 - 次日 6:00 停止服务。',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2026-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2027-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

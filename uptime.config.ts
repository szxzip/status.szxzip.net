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
      id: 'matrix',
      name: 'Matrix',
      method: 'GET',
      target: 'https://matrix.szxzip.net',
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
    {
      id: 'status',
      name: 'Status',
      method: 'GET',
      target: 'https://status.szxzip.net',
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "UptimeFlare",
  links: [
    { link: 'https://github.com/szxzip/szxzip.net', label: 'GitHub', highlight: true },
  ],
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
      id: 'files',
      name: 'Files',
      method: 'GET',
      target: 'https://files.szxzip.net',
    },
    {
      id: 'matrix',
      name: 'Matrix',
      method: 'GET',
      target: 'https://matrix.szxzip.net',
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

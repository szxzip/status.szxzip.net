// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "UptimeFlare",
  links: [
    { link: 'https://szxzip.net', label: 'Home', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [

  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

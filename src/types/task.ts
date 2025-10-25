export interface Task {
  id: string
  title: string
  description: string | null
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  createdAt: Date
  updatedAt: Date
}

export interface CreateTaskData {
  title: string
  description?: string
  status?: Task['status']
  priority?: Task['priority']
}

export interface UpdateTaskData {
  title?: string
  description?: string
  status?: Task['status']
  priority?: Task['priority']
}
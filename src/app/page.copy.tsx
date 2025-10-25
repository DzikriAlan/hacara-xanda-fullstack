"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { TaskForm } from '@/components/TaskForm'
import { TaskList } from '@/components/TaskList'
import { Task, CreateTaskData, UpdateTaskData } from '@/types/task'
import { Plus, RefreshCw } from 'lucide-react'

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch('/api/tasks')
      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateTask = async (data: CreateTaskData) => {
    try {
      setIsSubmitting(true)
      setError(null)
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create task')
      }

      const newTask = await response.json()
      setTasks([newTask, ...tasks])
      setIsFormOpen(false)
    } catch (error) {
      console.error('Error creating task:', error)
      setError('Failed to create task. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleUpdateTask = async (data: UpdateTaskData) => {
    if (!editingTask) return

    try {
      setIsSubmitting(true)
      setError(null)
      const response = await fetch(`/api/tasks/${editingTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to update task')
      }

      const updatedTask = await response.json()
      setTasks(tasks.map(task => task.id === editingTask.id ? updatedTask : task))
      setEditingTask(null)
      setIsFormOpen(false)
    } catch (error) {
      console.error('Error updating task:', error)
      setError('Failed to update task. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteTask = async (id: string) => {
    try {
      setError(null)
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete task')
      }

      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
      setError('Failed to delete task. Please try again.')
    }
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingTask(null)
  }

  const handleFormSubmit = (data: CreateTaskData | UpdateTaskData) => {
    if (editingTask) {
      handleUpdateTask(data as UpdateTaskData)
    } else {
      handleCreateTask(data as CreateTaskData)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
            <p className="text-muted-foreground">
              Manage your tasks efficiently with Xanda LSP Fullstack
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchTasks} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          isLoading={isLoading}
        />

        <TaskForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
          task={editingTask || undefined}
          isLoading={isSubmitting}
        />
      </div>
    </div>
  )
}

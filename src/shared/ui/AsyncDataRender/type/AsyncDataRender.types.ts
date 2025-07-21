

export type AsyncStatus = "pending" | "fulfilled" | "rejected"

export interface AsyncDataRenderProps {
  data?: any
  status?: AsyncStatus
  error?: Error | null
  isEmpty?: boolean
  loadingComponent?: React.ReactNode
  errorComponent?: (error?: Error | null) => React.ReactNode
  emptyComponent?: React.ReactNode
  children: React.ReactNode
}

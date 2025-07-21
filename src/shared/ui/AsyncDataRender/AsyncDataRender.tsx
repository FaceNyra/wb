import React from "react"
import { type AsyncDataRenderProps } from "./type/AsyncDataRender.types"

import styles from "./AsyncDataRender.module.scss"
import { toJS } from "mobx"

export const AsyncDataRender: React.FC<AsyncDataRenderProps> = ({
  data,
  status,
  error,
  isEmpty,
  loadingComponent = <div className={styles.stateText}>Загрузка...</div>,
  errorComponent = (err) => (
    <div className={styles.stateText}>Ошибка: {err?.message || "Неизвестно"}</div>
  ),
  emptyComponent = <div className={styles.stateText}>Нет данных</div>,
  children,
}) => {
  console.log(toJS(data))
  if (!data) return <></>
  if (status === "pending") return <div className={styles.wrapper}>{loadingComponent}</div>
  if (status === "rejected") return <div className={styles.wrapper}>{errorComponent(error)}</div>
  if (isEmpty) return <div className={styles.wrapper}>{emptyComponent}</div>
  return <>{children}</>
}

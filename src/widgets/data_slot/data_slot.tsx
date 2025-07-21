import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { AsyncDataRender } from "@/shared/ui/AsyncDataRender"
import styles from "./data_slot.module.scss"
import { CalendarDays } from "lucide-react"
import { DataSlotsStore } from "@/entities/data_slot/data_slot"
import { formatDateWithDay } from "@/shared/lib/formatDateWithDay"

export const DataSlotWidget = observer(() => {
  const { status, error, data } = DataSlotsStore.getDataDelivery

  useEffect(() => {
    DataSlotsStore.getDataSlot()
  }, [])

  return (
    <AsyncDataRender status={status} error={error} isEmpty={!data?.length}>
      <main>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>
            Выберите дату поставки <br /> на склад маркетплейса
          </h2>

          {data?.map((slot) => (
            <div key={slot.id} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.dateLine}>
                  <CalendarDays size={16} />
                  {formatDateWithDay(slot.delivery_date)}
                </div>

                <div className={styles.note}>
                  🚘 Пропуск: {slot.car_brand} — {slot.car_number}
                </div>

                <div className={styles.note}>
                  ⏱ Ожидаем вас: {formatDateWithDay(slot.expected_arrival)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AsyncDataRender>
  )
})

import { LayoutGroup, motion } from "framer-motion"
import { useId, useState } from "react"

const items = ["Lorem", "Ipsum", "Dolor sit amet"]

function Tab({ children, selected, onClick }) {
  return (
    <div className="bg-slate-50">
      <button className="px-8 py-4" onClick={onClick}>
        {children}
      </button>
      {selected && (
        <motion.div layoutId="indicator" className="h-0.5 bg-blue-500" />
      )}
    </div>
  )
}

export default function Tabs() {
  const [selected, setSelected] = useState(items[0])
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <div className="flex divide-x divide-slate-100 overflow-hidden">
        {items.map((item) => (
          <Tab
            key={item}
            selected={selected === item}
            onClick={() => setSelected(item)}
          >
            {item}
          </Tab>
        ))}
      </div>
    </LayoutGroup>
  )
}

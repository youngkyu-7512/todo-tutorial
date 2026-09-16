import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      😊 <AuroraText>갓생 투두</AuroraText> ✨
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div>
          {title}
          <p className="font-mono text-xs text-muted-foreground">
            (<kbd>d</kbd> 누르면 다크모드 ON 🌙)
          </p>
        </div>
        <TodoList />
      </div>
    </div>
  )
}

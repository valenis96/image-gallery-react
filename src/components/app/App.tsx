import './App.css'
import Header from '../header/Header'
import Gallery from '../gallery/Gallery'
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        variant="outline"
        size="icon"
        aria-label="ArrowUpIcon"
        className="rounded-full absolute bottom-[10px]">
        <ArrowUpIcon />
      </Button>
    </>
  )
}

export default App

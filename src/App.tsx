import './App.css'
import { ChocolateCard } from './components/ChocolateCard'
import { Footer, Header } from './components/header-footer'

function App() {
  return (
    <>
    <Header/>
    <ChocolateCard
    name='Étcsoki 70%'
    brand='Lindt'
    isDark={true}
    cocoaPercentage={70}
    ingredients={['kakaómassza','cukor', 'kakóvaj']}
    />
    <Footer/>
    </>
  )
}

export default App

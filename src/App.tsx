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
    ingredients={['kakaómassza','cukor', 'kakaóvaj']}
    />
    <ChocolateCard
    name='Tejcsoki mogyoróval'
    brand='Milka'
    isDark={false}
    cocoaPercentage={30}
    ingredients={['cukor', 'tejpor', 'kakaóvaj', 'mogyoró']}
    />
    <ChocolateCard
    name='Fehércsoki epres'
    brand='Nestlé'
    isDark={true}
    cocoaPercentage={25}
    ingredients={['cukor', 'tejpor', 'kakaóvaj', 'eperdarabok']}
    />
    <Footer/>
    </>
  )
}

export default App
